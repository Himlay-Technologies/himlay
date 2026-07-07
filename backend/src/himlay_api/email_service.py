import resend
import os
from dotenv import load_dotenv
from src.himlay_api.utils.logger import get_logger

load_dotenv()
logger = get_logger(__name__)

resend.api_key = os.getenv("RESEND_API_KEY")
FROM_EMAIL = os.getenv("EMAIL_FROM") or "noreply@himlay.com"
ADMIN_EMAIL = os.getenv("ADMIN_EMAIL") or "contact@himlay.com"

def send_booking_confirmation(booking: dict):
    """Send confirmation email to user + notification to admin."""
    try:
        # Email to the user
        resend.Emails.send({
            "from": FROM_EMAIL,
            "to": [booking["email"]],
            "subject": "Your Consultation is Confirmed – Himlay Technologies",
            "html": f"""
            <div style="font-family:Arial,sans-serif;max-width:600px;margin:auto;padding:24px;border:1px solid #e5e7eb;border-radius:8px;">
                <h2 style="color:#1d4ed8;">Hi {booking['name']}, your consultation is booked! 🎉</h2>
                <p>Thank you for reaching out to <strong>Himlay Technologies</strong>. Here are your booking details:</p>
                <table style="width:100%;border-collapse:collapse;margin:16px 0;">
                    <tr><td style="padding:8px;background:#f3f4f6;font-weight:bold;">Date</td><td style="padding:8px;">{booking.get('date', '')}</td></tr>
                    <tr><td style="padding:8px;background:#f3f4f6;font-weight:bold;">Time</td><td style="padding:8px;">{booking.get('time', '')}</td></tr>
                    <tr><td style="padding:8px;background:#f3f4f6;font-weight:bold;">Mode</td><td style="padding:8px;">{booking.get('mode', '')}</td></tr>
                    <tr><td style="padding:8px;background:#f3f4f6;font-weight:bold;">Requirements</td><td style="padding:8px;">{booking.get('requirements', '')}</td></tr>
                </table>
                <p>Our team will reach out to confirm the meeting shortly. In the meantime, feel free to email us at <a href="mailto:contact@himlay.com">contact@himlay.com</a>.</p>
                <p style="color:#6b7280;font-size:13px;">— The Himlay Technologies Team</p>
            </div>
            """,
        })

        # Email to admin
        resend.Emails.send({
            "from": FROM_EMAIL,
            "to": [ADMIN_EMAIL],
            "subject": f"🔔 New Consultation Booking from {booking['name']}",
            "html": f"""
            <div style="font-family:Arial,sans-serif;max-width:600px;margin:auto;padding:24px;border:1px solid #e5e7eb;border-radius:8px;">
                <h2 style="color:#1d4ed8;">New Consultation Booking</h2>
                <table style="width:100%;border-collapse:collapse;margin:16px 0;">
                    <tr><td style="padding:8px;background:#f3f4f6;font-weight:bold;">Name</td><td style="padding:8px;">{booking['name']}</td></tr>
                    <tr><td style="padding:8px;background:#f3f4f6;font-weight:bold;">Email</td><td style="padding:8px;">{booking['email']}</td></tr>
                    <tr><td style="padding:8px;background:#f3f4f6;font-weight:bold;">Date</td><td style="padding:8px;">{booking.get('date', '')}</td></tr>
                    <tr><td style="padding:8px;background:#f3f4f6;font-weight:bold;">Time</td><td style="padding:8px;">{booking.get('time', '')}</td></tr>
                    <tr><td style="padding:8px;background:#f3f4f6;font-weight:bold;">Mode</td><td style="padding:8px;">{booking.get('mode', '')}</td></tr>
                    <tr><td style="padding:8px;background:#f3f4f6;font-weight:bold;">Requirements</td><td style="padding:8px;">{booking.get('requirements', '')}</td></tr>
                </table>
            </div>
            """,
        })
        logger.info(f"Booking confirmation emails sent for {booking['email']}")
    except Exception as e:
        logger.exception("Failed to send booking confirmation emails")

def send_checkout_confirmation(checkout: dict):
    """Send checkout confirmation to user + notification to admin."""
    try:
        resend.Emails.send({
            "from": FROM_EMAIL,
            "to": [checkout["email"]],
            "subject": "Order Received – Himlay Technologies",
            "html": f"""
            <div style="font-family:Arial,sans-serif;max-width:600px;margin:auto;padding:24px;border:1px solid #e5e7eb;border-radius:8px;">
                <h2 style="color:#1d4ed8;">Hi {checkout['first_name']}, we received your order! 🚀</h2>
                <p>Thank you for choosing <strong>Himlay Technologies</strong>. Here is your order summary:</p>
                <table style="width:100%;border-collapse:collapse;margin:16px 0;">
                    <tr><td style="padding:8px;background:#f3f4f6;font-weight:bold;">Plan</td><td style="padding:8px;text-transform:uppercase;">{checkout.get('plan', '')}</td></tr>
                    <tr><td style="padding:8px;background:#f3f4f6;font-weight:bold;">Cloud Provider</td><td style="padding:8px;">{checkout.get('selected_cloud', '')}</td></tr>
                </table>
                <p>Our sales team will contact you shortly to finalize the setup.</p>
                <p style="color:#6b7280;font-size:13px;">— The Himlay Technologies Team</p>
            </div>
            """,
        })

        resend.Emails.send({
            "from": FROM_EMAIL,
            "to": [ADMIN_EMAIL],
            "subject": f"🔔 New Order from {checkout['first_name']} {checkout['last_name']}",
            "html": f"""
            <div style="font-family:Arial,sans-serif;max-width:600px;margin:auto;padding:24px;border:1px solid #e5e7eb;border-radius:8px;">
                <h2 style="color:#1d4ed8;">New Checkout Request</h2>
                <table style="width:100%;border-collapse:collapse;margin:16px 0;">
                    <tr><td style="padding:8px;background:#f3f4f6;font-weight:bold;">Name</td><td style="padding:8px;">{checkout['first_name']} {checkout['last_name']}</td></tr>
                    <tr><td style="padding:8px;background:#f3f4f6;font-weight:bold;">Email</td><td style="padding:8px;">{checkout['email']}</td></tr>
                    <tr><td style="padding:8px;background:#f3f4f6;font-weight:bold;">Phone</td><td style="padding:8px;">{checkout['phone']}</td></tr>
                    <tr><td style="padding:8px;background:#f3f4f6;font-weight:bold;">Company</td><td style="padding:8px;">{checkout['company']}</td></tr>
                    <tr><td style="padding:8px;background:#f3f4f6;font-weight:bold;">Plan</td><td style="padding:8px;">{checkout.get('plan', '')}</td></tr>
                    <tr><td style="padding:8px;background:#f3f4f6;font-weight:bold;">Cloud</td><td style="padding:8px;">{checkout.get('selected_cloud', '')}</td></tr>
                </table>
            </div>
            """,
        })
        logger.info(f"Checkout confirmation emails sent for {checkout['email']}")
    except Exception as e:
        logger.exception("Failed to send checkout confirmation emails")