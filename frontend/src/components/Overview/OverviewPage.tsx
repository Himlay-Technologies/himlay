import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { INDUSTRIES } from "@/utils/industryData";
import {
  HOME_PRICING_TIERS,
  HOW_WE_WORK_STEPS,
  POPULAR_PRODUCTS,
  SERVICES,
  WHY_HIMLAY_FEATURES,
} from "@/utils/pricingData";

export function OverviewPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-background/0" />

        <div className="container relative max-w-screen-xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-8"
          >
            <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
            Enterprise-grade digital transformation
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-8"
          >
            Transforming Businesses Through <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
              Software, Automation & AI
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10"
          >
            Custom software, business systems, AI solutions, and scalable digital
            products built for growth.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              to="/book-consultation"
              className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 py-2 text-md font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 w-full sm:w-auto"
            >
              Book Free Consultation
            </Link>
            <a
              href="#services"
              className="inline-flex h-12 items-center justify-center rounded-md border border-input bg-background px-8 py-2 text-md font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground w-full sm:w-auto"
            >
              Explore Solutions
            </a>
          </motion.div>
        </div>
      </section>

      <section id="services" className="py-24 bg-muted/30">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Choose Your Business Need
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              We build specialized solutions tailored to every vertical of your
              business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <Link to={service.href} className="group block h-full">
                  <div className="glass-card p-8 h-full rounded-2xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-primary/50 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1 h-full bg-primary/0 group-hover:bg-primary transition-colors" />
                    <service.icon className="h-10 w-10 text-primary mb-6" />
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground">{service.desc}</p>
                    <div className="mt-6 flex items-center text-sm font-medium text-primary">
                      Explore Solutions{" "}
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="industries" className="py-24">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Solutions by Industry
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Tailored software architectures designed for the specific
              challenges of your sector.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {INDUSTRIES.map((industry, i) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                viewport={{ once: true }}
                className="flex items-center gap-2 px-6 py-4 rounded-xl border border-border bg-card hover:bg-accent hover:border-primary/50 transition-all cursor-pointer shadow-sm hover:shadow-md"
              >
                <industry.icon className="h-5 w-5 text-primary" />
                <span className="font-medium">{industry.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="products" className="py-24 bg-muted/30">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Popular Products
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Ready-to-deploy architectures that can be heavily customized to
              your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {POPULAR_PRODUCTS.map((product, i) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="glass-card p-6 rounded-xl flex flex-col justify-between h-full"
              >
                <div>
                  <h3 className="font-bold text-lg mb-2">{product.name}</h3>
                  <p className="text-sm text-muted-foreground mb-6">
                    Fully custom frontend and backend implementation.
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    Starting from
                  </p>
                  <p className="text-2xl font-bold text-primary">
                    {product.price}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="how-we-work" className="py-24">
        <div className="container max-w-screen-xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-16">How We Work</h2>

          <div className="flex flex-col md:flex-row justify-between items-center relative max-w-5xl mx-auto">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-border -translate-y-1/2 z-0" />

            {HOW_WE_WORK_STEPS.map((step, i) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="relative z-10 flex flex-col items-center mb-8 md:mb-0"
              >
                <div className="w-12 h-12 rounded-full bg-card border-2 border-primary flex items-center justify-center text-primary font-bold shadow-sm mb-3">
                  {i + 1}
                </div>
                <span className="font-medium text-sm md:text-base">{step}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="why-himlay"
        className="py-24 bg-primary text-primary-foreground relative overflow-hidden"
      >
        <div className="container relative max-w-screen-xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Himlay</h2>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto text-lg">
              We don't just write code. We build scalable systems that save time
              and increase revenue.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {WHY_HIMLAY_FEATURES.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-primary-foreground/10 rounded-xl p-6 backdrop-blur-sm border border-primary-foreground/20 flex items-start space-x-4"
              >
                <feature.icon className="h-6 w-6 text-primary-foreground mt-1" />
                <div>
                  <h3 className="font-bold text-lg">{feature.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-24 bg-muted/30">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Transparent Pricing
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Clear, upfront pricing packages designed for businesses of all
              sizes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {HOME_PRICING_TIERS.map((tier, i) => (
              <motion.div
                key={tier.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
                className={`glass-card rounded-2xl p-8 border ${tier.highlighted ? "border-2 border-primary relative shadow-lg scale-100 md:scale-105 z-10 bg-card" : "border-border"}`}
              >
                {tier.highlighted && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                    Most Popular
                  </div>
                )}
                <h3 className="text-xl font-bold mb-2">{tier.title}</h3>
                <p className="text-muted-foreground text-sm mb-6">
                  {tier.description}
                </p>
                <div className="mb-6">
                  <span className="text-4xl font-extrabold">{tier.price}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm">
                      <CheckCircle2 className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
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
                <Link
                  to={tier.ctaHref}
                  className={`block w-full py-2 px-4 rounded-md font-medium text-center transition-colors ${
                    tier.highlighted
                      ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm"
                      : tier.ctaHref === "/book-consultation"
                        ? "border border-border text-foreground hover:bg-accent"
                        : "border border-primary text-primary hover:bg-primary/5"
                  }`}
                >
                  {tier.ctaLabel}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
