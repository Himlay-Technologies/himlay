from fastapi import APIRouter, HTTPException
from src.himlay_api.database import chat_sessions_collection

router = APIRouter()


@router.get("/chat/session/{session_id}")
async def get_chat_session(session_id: str):
    session = await chat_sessions_collection.find_one(
        {"session_id": session_id}, {"_id": 0}
    )
    if not session:
        raise HTTPException(status_code=404, detail="Session not found")

    # Convert datetimes to strings
    for key in ("created_at", "last_active"):
        if key in session and hasattr(session[key], "isoformat"):
            session[key] = session[key].isoformat()

    return session


@router.get("/chat/sessions")
async def list_chat_sessions():
    sessions = []
    async for s in chat_sessions_collection.find({}, {"_id": 0, "messages": 0}):
        for key in ("created_at", "last_active"):
            if key in s and hasattr(s[key], "isoformat"):
                s[key] = s[key].isoformat()
        sessions.append(s)
    return sessions