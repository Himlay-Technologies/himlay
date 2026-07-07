import { motion } from "framer-motion";
import { CheckCircle2, Briefcase, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export function OperationsPage() {
  return (
    <div className="flex flex-col min-h-screen pt-20">
      <section className="py-20 md:py-32 bg-muted/30 relative overflow-hidden">
        <div className="container max-w-screen-xl mx-auto px-4 text-center">
          <Briefcase className="h-16 w-16 text-primary mx-auto mb-6" />
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Business Operations
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-10">
            A complete business management ecosystem. Streamline your employees,
            inventory, procurement, and workflows from one centralized platform.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Choose Your Operations Package
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Fixed component bundles designed to scale with your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-8 border border-border flex flex-col"
            >
              <h3 className="text-2xl font-bold mb-2">Starter</h3>
              <p className="text-muted-foreground text-sm mb-6 h-10">
                Essential operations for small growing teams.
              </p>
              <div className="mb-8">
                <span className="text-4xl font-extrabold">₹1L+</span>
              </div>
              <div className="flex-grow">
                <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-muted-foreground">
                  Included Modules:
                </h4>
                <ul className="space-y-3 mb-8">
                  {[
                    "User & Role Management (RBAC)",
                    "Basic Employee Directory",
                    "Core Inventory Tracking",
                    "Simple Purchase Orders",
                    "Basic Reporting",
                  ].map((feature) => (
                    <li key={feature} className="flex items-start text-sm">
                      <CheckCircle2 className="h-4 w-4 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                to="/checkout?plan=starter_operations"
                className="block w-full py-3 px-4 rounded-md border border-primary text-primary font-medium text-center hover:bg-primary/5 transition-colors"
              >
                Select Starter
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-8 border-2 border-primary relative shadow-lg scale-100 lg:scale-105 z-10 bg-card flex flex-col"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                Recommended
              </div>
              <h3 className="text-2xl font-bold mb-2">Growth</h3>
              <p className="text-muted-foreground text-sm mb-6 h-10">
                Advanced tracking & AI automation for scaling mid-market
                businesses.
              </p>
              <div className="mb-8">
                <span className="text-4xl font-extrabold">₹3L+</span>
              </div>
              <div className="flex-grow">
                <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-muted-foreground">
                  Everything in Starter, plus:
                </h4>
                <ul className="space-y-3 mb-8">
                  {[
                    "Full HRMS (Leave, Attendance, Payroll)",
                    "Multi-Warehouse Inventory",
                    "Sales & Order Management (Quotes, Invoices)",
                    "Workflow Approval Engine",
                    "AI Demand Forecasting",
                    "AI Workflow Assistant",
                  ].map((feature) => (
                    <li key={feature} className="flex items-start text-sm">
                      {feature.includes("AI") ? (
                        <Sparkles className="h-4 w-4 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      ) : (
                        <CheckCircle2 className="h-4 w-4 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      )}
                      <span
                        className={
                          feature.includes("AI")
                            ? "font-semibold text-foreground"
                            : ""
                        }
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                to="/checkout?plan=growth_operations"
                className="block w-full py-3 px-4 rounded-md bg-primary text-primary-foreground font-medium text-center hover:bg-primary/90 transition-colors shadow-sm"
              >
                Scale with Growth
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-8 border border-border flex flex-col"
            >
              <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
              <p className="text-muted-foreground text-sm mb-6 h-10">
                Full Custom ERP deployment with advanced AI and external
                integrations.
              </p>
              <div className="mb-8">
                <span className="text-4xl font-extrabold">₹8L+</span>
              </div>
              <div className="flex-grow">
                <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-muted-foreground">
                  Everything in Growth, plus:
                </h4>
                <ul className="space-y-3 mb-8">
                  {[
                    "Finance & Accounting Integration",
                    "Vendor & Supplier Portals",
                    "BI & Data Warehouse Analytics",
                    "Multi-Company & Multi-Currency",
                    "AI Procurement Assistant & OCR Invoicing",
                    "Custom API Integrations",
                  ].map((feature) => (
                    <li key={feature} className="flex items-start text-sm">
                      {feature.includes("AI") ? (
                        <Sparkles className="h-4 w-4 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      ) : (
                        <CheckCircle2 className="h-4 w-4 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      )}
                      <span
                        className={
                          feature.includes("AI")
                            ? "font-semibold text-foreground"
                            : ""
                        }
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                to="/book-consultation"
                className="block w-full py-3 px-4 rounded-md border border-border text-foreground font-medium text-center hover:bg-accent transition-colors"
              >
                Contact Sales
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
