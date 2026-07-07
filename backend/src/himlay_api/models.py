from pydantic import BaseModel, EmailStr
from typing import Optional


class BookingRequest(BaseModel):
    name: str
    email: EmailStr
    requirements: str
    mode: str
    date: str
    time: str


class CheckoutRequest(BaseModel):
    first_name: str
    last_name: str
    email: EmailStr
    company: str
    phone: str
    selected_cloud: str
    plan: str