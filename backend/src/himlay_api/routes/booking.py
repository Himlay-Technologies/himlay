from fastapi import APIRouter, HTTPException, BackgroundTasks
from datetime import datetime
from src.himlay_api.models import BookingRequest
from src.himlay_api.database import bookings_collection
from src.himlay_api.email_service import send_booking_confirmation

router = APIRouter()


@router.post("/book")
async def create_booking(booking: BookingRequest, background_tasks: BackgroundTasks):
    try:
        doc = booking.model_dump()
        doc["created_at"] = datetime.utcnow()
        doc["status"] = "pending"

        result = await bookings_collection.insert_one(doc)
        
        # Send email in background so it doesn't block the API response
        background_tasks.add_task(send_booking_confirmation, doc)

        return {"success": True, "booking_id": str(result.inserted_id)}

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@router.get("/bookings")
async def get_bookings():
    bookings = []
    async for b in bookings_collection.find({}, {"_id": 0}):
        # Convert datetime to string for JSON serialization
        if "created_at" in b:
            b["created_at"] = b["created_at"].isoformat()
        bookings.append(b)
    return bookings