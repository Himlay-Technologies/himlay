from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Dict
import os
from dotenv import load_dotenv

try:
    from src.himlay_api import chatbot
except ImportError:
    chatbot = None

from src.himlay_api.routes.booking import router as booking_router
from src.himlay_api.routes.chat import router as chat_router
from src.himlay_api.routes.checkout import router as checkout_router

load_dotenv()
url = os.getenv("url")
url1= os.getenv("url1")
url3 = os.getenv("url3")
app = FastAPI(
    title="Himlay Technologies API",
    description="Backend API for Himlay Technologies dynamic pricing cart and AI Chatbot",
    version="1.0.0",
)

allowed_origins_env = os.getenv("ALLOWED_ORIGINS", "")
origins = [origin.strip() for origin in allowed_origins_env.split(",") if origin.strip()]
if not origins:
    origins = [url, url1,url3]  # fallback for local dev if not set

# Allow CORS for frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routers
app.include_router(booking_router, prefix="/api")
app.include_router(chat_router, prefix="/api")
app.include_router(checkout_router, prefix="/api")


class ChatRequest(BaseModel):
    message: str
    history: List[Dict[str, str]] = []
    session_id: str = ""  # optional: pass from frontend to auto-save session


@app.get("/")
async def root():
    return {"message": "Welcome to Himlay Technologies API"}


@app.get("/health")
async def health():
    return {"status": "ok"}


@app.get("/api/pricing/estimate")
async def get_estimate(modules: str = ""):
    return {"status": "success", "estimated_cost": "Contact Sales for a custom quote based on selected modules."}


@app.post("/api/chat")
async def chat_endpoint(request: ChatRequest):
    if not chatbot:
        return {"response": "Chatbot module is not available. Please ensure dependencies are installed."}

    reply = chatbot.get_chatbot_response(request.message, request.history)

    # Auto-save chat session to MongoDB if session_id is provided
    if request.session_id:
        from src.himlay_api.database import chat_sessions_collection
        from datetime import datetime

        new_messages = request.history + [
            {"role": "user", "content": request.message},
            {"role": "assistant", "content": reply},
        ]
        await chat_sessions_collection.update_one(
            {"session_id": request.session_id},
            {"$set": {
                "session_id": request.session_id,
                "messages": new_messages,
                "last_active": datetime.utcnow(),
            }, "$setOnInsert": {"created_at": datetime.utcnow()}},
            upsert=True,
        )

    return {"response": reply}