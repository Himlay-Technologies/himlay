import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Calendar,
  Clock,
  Video,
  Phone,
  MessageSquare,
  CheckCircle2,
} from "lucide-react";

export function BookConsultationPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [communicationMode, setCommunicationMode] = useState("teams");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    const payload = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      requirements: formData.get("requirements") as string,
      mode: communicationMode,
      date: formData.get("date") as string,
      time: formData.get("time") as string,
    };

    try {
      const response = await fetch("http://localhost:8000/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Failed to book consultation.");
      }

      setIsSubmitted(true);
    } catch (err: any) {
      setError(err.message || "An error occurred while booking.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="flex flex-col min-h-screen pt-32 pb-20 items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="glass-card rounded-2xl p-10 max-w-lg w-full text-center border-2 border-primary"
        >
          <CheckCircle2 className="w-20 h-20 text-primary mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">Consultation Booked!</h2>
          <p className="text-muted-foreground mb-8">
            Your meeting has been scheduled successfully. We have sent an email
            with the calendar invitation and details. We look forward to
            discussing your business requirements.
          </p>
          <Link
            to="/"
            className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 py-2 font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Return Home
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen pt-24 pb-20">
      <div className="container max-w-screen-md mx-auto px-4">
        <div className="mb-10 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Book a Free Consultation
          </h1>
          <p className="text-muted-foreground text-lg">
            Let's discuss how Himlay Technologies can transform your business.
          </p>
        </div>

        <div className="glass-card p-6 md:p-10 rounded-2xl">
          <form onSubmit={handleSubmit} className="space-y-8">
            {error && (
              <div className="p-4 bg-red-100 text-red-700 rounded-md">
                {error}
              </div>
            )}
            <div className="space-y-4">
              <h2 className="text-xl font-bold border-b border-border pb-2">
                1. Your Details
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Full Name
                  </label>
                  <input
                    required
                    type="text"
                    id="name"
                    name="name"
                    className="w-full p-3 rounded-md border border-border bg-background focus:ring-2 focus:ring-primary outline-none"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Work Email
                  </label>
                  <input
                    required
                    type="email"
                    id="email"
                    name="email"
                    className="w-full p-3 rounded-md border border-border bg-background focus:ring-2 focus:ring-primary outline-none"
                    placeholder="john@company.com"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-bold border-b border-border pb-2">
                2. Business Requirements
              </h2>
              <div className="space-y-2">
                <label htmlFor="requirements" className="text-sm font-medium">
                  Describe your business and what you're looking for
                </label>
                <textarea
                  required
                  id="requirements"
                  name="requirements"
                  rows={4}
                  className="w-full p-3 rounded-md border border-border bg-background focus:ring-2 focus:ring-primary outline-none resize-none"
                  placeholder="We are a growing D2C brand looking for an e-commerce solution with AI recommendations..."
                />
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-bold border-b border-border pb-2">
                3. Meeting Preferences
              </h2>

              <div className="space-y-3">
                <label className="text-sm font-medium">
                  Mode of Communication
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div
                    onClick={() => setCommunicationMode("teams")}
                    className={`p-3 border rounded-lg cursor-pointer flex items-center justify-center gap-2 transition-all ${communicationMode === "teams" ? "border-primary bg-primary/10 text-primary font-medium" : "border-border hover:border-primary/50"}`}
                  >
                    <Video className="w-4 h-4" /> Teams Meeting
                  </div>
                  <div
                    onClick={() => setCommunicationMode("phone")}
                    className={`p-3 border rounded-lg cursor-pointer flex items-center justify-center gap-2 transition-all ${communicationMode === "phone" ? "border-primary bg-primary/10 text-primary font-medium" : "border-border hover:border-primary/50"}`}
                  >
                    <Phone className="w-4 h-4" /> Phone Call
                  </div>
                  <div
                    onClick={() => setCommunicationMode("sms")}
                    className={`p-3 border rounded-lg cursor-pointer flex items-center justify-center gap-2 transition-all ${communicationMode === "sms" ? "border-primary bg-primary/10 text-primary font-medium" : "border-border hover:border-primary/50"}`}
                  >
                    <MessageSquare className="w-4 h-4" /> SMS Chat
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="space-y-2">
                  <label
                    htmlFor="date"
                    className="text-sm font-medium flex items-center gap-2"
                  >
                    <Calendar className="w-4 h-4 text-primary" /> Select Date
                  </label>
                  <input
                    required
                    type="date"
                    id="date"
                    name="date"
                    className="w-full p-3 rounded-md border border-border bg-background focus:ring-2 focus:ring-primary outline-none"
                    min={new Date().toISOString().split("T")[0]}
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="time"
                    className="text-sm font-medium flex items-center gap-2"
                  >
                    <Clock className="w-4 h-4 text-primary" /> Select Time
                  </label>
                  <select
                    required
                    id="time"
                    name="time"
                    className="w-full p-3 rounded-md border border-border bg-background focus:ring-2 focus:ring-primary outline-none"
                  >
                    <option value="">Choose a time slot...</option>
                    <option value="09:00">09:00 AM</option>
                    <option value="10:00">10:00 AM</option>
                    <option value="11:30">11:30 AM</option>
                    <option value="14:00">02:00 PM</option>
                    <option value="15:30">03:30 PM</option>
                    <option value="17:00">05:00 PM</option>
                  </select>
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full h-12 rounded-md bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors mt-4 text-lg shadow-md disabled:opacity-50"
            >
              {isSubmitting ? "Booking..." : "Confirm Booking"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
