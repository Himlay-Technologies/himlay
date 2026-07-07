from fastapi import APIRouter, HTTPException, BackgroundTasks
from datetime import datetime
from src.himlay_api.models import CheckoutRequest
from src.himlay_api.database import db
from src.himlay_api.email_service import send_checkout_confirmation

router = APIRouter()
checkouts_collection = db["checkouts"]

@router.post("/checkout")
async def create_checkout(checkout: CheckoutRequest, background_tasks: BackgroundTasks):
    try:
        doc = checkout.model_dump()
        doc["created_at"] = datetime.utcnow()
        doc["status"] = "pending"

        result = await checkouts_collection.insert_one(doc)
        
        # Send email in background so it doesn't block the API response
        background_tasks.add_task(send_checkout_confirmation, doc)

        return {"success": True, "checkout_id": str(result.inserted_id)}

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
