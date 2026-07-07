from motor.motor_asyncio import AsyncIOMotorClient
from dotenv import load_dotenv
import os

load_dotenv()

MONGO_URI = os.getenv("MONGO_URI")

if not MONGO_URI:
    raise ValueError("MONGO_URI is not set in .env file")

client = AsyncIOMotorClient(MONGO_URI)
db = client["himlay_db"]

bookings_collection = db["bookings"]
chat_sessions_collection = db["chat_sessions"]