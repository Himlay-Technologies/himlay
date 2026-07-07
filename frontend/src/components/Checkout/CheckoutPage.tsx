import { useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { CLOUD_PROVIDERS } from "@/utils/pricingData";

export function CheckoutPage() {
  const [searchParams] = useSearchParams();
  const plan = searchParams.get("plan") || "starter";

  const [selectedCloud, setSelectedCloud] = useState(CLOUD_PROVIDERS[0]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    const payload = {
      first_name: formData.get("firstName") as string,
      last_name: formData.get("lastName") as string,
      email: formData.get("email") as string,
      company: formData.get("company") as string,
      phone: formData.get("phone") as string,
      selected_cloud: selectedCloud.name,
      plan: plan,
    };

    try {
      const response = await fetch("http://localhost:8000/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Failed to submit checkout.");
      }

      setIsSubmitted(true);
    } catch (err: any) {
      setError(err.message || "An error occurred during checkout.");
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
          <h2 className="text-3xl font-bold mb-4">Request Received!</h2>
          <p className="text-muted-foreground mb-8">
            Thank you for choosing Himlay Technologies. Our team will contact
            you shortly to finalize your{" "}
            <strong>{plan.replace("_", " ").toUpperCase()}</strong> plan and set
            up your <strong>{selectedCloud.name}</strong> infrastructure.
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
      <div className="container max-w-screen-xl mx-auto px-4">
        <div className="mb-10 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Complete Your Order
          </h1>
          <p className="text-muted-foreground text-lg">
            Selected Plan:{" "}
            <span className="font-semibold text-primary uppercase">
              {plan.replace("_", " ")}
            </span>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="glass-card p-6 md:p-8 rounded-2xl">
              <h2 className="text-2xl font-bold mb-6">
                1. Select Cloud Deployment Model
              </h2>
              <div className="space-y-4">
                {CLOUD_PROVIDERS.map((provider) => (
                  <div
                    key={provider.id}
                    onClick={() => setSelectedCloud(provider)}
                    className={`p-4 border rounded-xl cursor-pointer transition-all flex items-start gap-4 ${selectedCloud.id === provider.id ? "border-primary bg-primary/5 ring-1 ring-primary" : "border-border hover:border-primary/50 bg-background"}`}
                  >
                    <div
                      className={`p-3 rounded-lg ${selectedCloud.id === provider.id ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}
                    >
                      <provider.icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-1">
                        <h3 className="font-bold text-lg">{provider.name}</h3>
                        <span className="font-semibold text-primary">
                          {provider.cost}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {provider.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-card p-6 md:p-8 rounded-2xl">
              <h2 className="text-2xl font-bold mb-6">2. Contact Details</h2>
              {error && (
                <div className="p-4 bg-red-100 text-red-700 rounded-md mb-4">
                  {error}
                </div>
              )}
              <form id="checkout-form" onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm font-medium">
                      First Name
                    </label>
                    <input
                      required
                      type="text"
                      id="firstName"
                      name="firstName"
                      className="w-full p-3 rounded-md border border-border bg-background focus:ring-2 focus:ring-primary outline-none"
                      placeholder="John"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm font-medium">
                      Last Name
                    </label>
                    <input
                      required
                      type="text"
                      id="lastName"
                      name="lastName"
                      className="w-full p-3 rounded-md border border-border bg-background focus:ring-2 focus:ring-primary outline-none"
                      placeholder="Doe"
                    />
                  </div>
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
                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-medium">
                    Company Name
                  </label>
                  <input
                    required
                    type="text"
                    id="company"
                    name="company"
                    className="w-full p-3 rounded-md border border-border bg-background focus:ring-2 focus:ring-primary outline-none"
                    placeholder="Acme Corp"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium">
                    Phone Number
                  </label>
                  <input
                    required
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full p-3 rounded-md border border-border bg-background focus:ring-2 focus:ring-primary outline-none"
                    placeholder="+91 98765 43210"
                  />
                </div>
              </form>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="glass-card p-6 rounded-2xl sticky top-24">
              <h2 className="text-xl font-bold mb-6 border-b border-border pb-4">
                Order Summary
              </h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-medium">Software Package</p>
                    <p className="text-sm text-muted-foreground uppercase">
                      {plan.replace("_", " ")}
                    </p>
                  </div>
                  <p className="font-medium text-right">Variable</p>
                </div>

                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-medium">Cloud Infrastructure</p>
                    <p className="text-sm text-muted-foreground">
                      {selectedCloud.name}
                    </p>
                  </div>
                  <p className="font-medium text-right">{selectedCloud.cost}</p>
                </div>

                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-medium">Setup & Migration</p>
                    <p className="text-sm text-muted-foreground">One-time fee</p>
                  </div>
                  <p className="font-medium text-right">Included</p>
                </div>
              </div>

              <div className="border-t border-border pt-4 mb-8">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-bold">Estimated Infra Cost</span>
                  <span className="font-bold text-xl text-primary">
                    {selectedCloud.cost}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground text-right">
                  *Software development cost billed separately based on final
                  requirements.
                </p>
              </div>

              <button
                type="submit"
                form="checkout-form"
                disabled={isSubmitting}
                className="w-full h-12 rounded-md bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isSubmitting ? "Processing..." : (
                  <>Proceed to Checkout <CheckCircle2 className="w-4 h-4" /></>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
