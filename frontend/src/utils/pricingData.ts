import {
  Box,
  Brain,
  Briefcase,
  Building2,
  Cloud,
  Code,
  Database,
  LineChart,
  Server,
  ShoppingCart,
  Sparkles,
  Zap,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { CloudProvider, Package } from "@/types/pricing";

export type Service = {
  title: string;
  icon: LucideIcon;
  href: string;
  desc: string;
};

export const SERVICES: Service[] = [
  {
    title: "Business Operations",
    icon: Briefcase,
    href: "/operations",
    desc: "ERP, HRMS, Inventory & Procurement",
  },
  {
    title: "Business Marketing",
    icon: LineChart,
    href: "/marketing",
    desc: "CRM, Loyalty & Marketing Automation",
  },
  {
    title: "Business Branding",
    icon: Box,
    href: "/branding",
    desc: "Corporate Websites & Brand Apps",
  },
  {
    title: "Selling & E-Commerce",
    icon: ShoppingCart,
    href: "/ecommerce",
    desc: "Online Stores & Marketplaces",
  },
  {
    title: "AI Solutions",
    icon: Brain,
    href: "/ai",
    desc: "Chatbots, Assistants & Automation",
  },
  {
    title: "SaaS & Learning",
    icon: Code,
    href: "/saas",
    desc: "LMS & Scalable SaaS Platforms",
  },
];

export const POPULAR_PRODUCTS: Package[] = [
  { name: "Clinic Management System", price: "₹1.5L" },
  { name: "Custom CRM", price: "₹80k" },
  { name: "E-commerce Store", price: "₹50k" },
  { name: "AI Chatbot", price: "₹35k" },
];

export const CLOUD_PROVIDERS: CloudProvider[] = [
  {
    id: "hostinger",
    name: "Hostinger",
    icon: Database,
    description: "Best for startups & small businesses. Shared/VPS hosting.",
    cost: "₹800/month",
    priceValue: 800,
  },
  {
    id: "digitalocean",
    name: "Digital Ocean",
    icon: Server,
    description: "Great for growing apps. Dedicated droplets and managed databases.",
    cost: "₹4,000/month",
    priceValue: 4000,
  },
  {
    id: "aws",
    name: "AWS",
    icon: Cloud,
    description:
      "Enterprise-grade infrastructure with high availability and auto-scaling.",
    cost: "₹15,000/month",
    priceValue: 15000,
  },
];

export const HOME_PRICING_TIERS = [
  {
    title: "Starter",
    description: "For small businesses establishing digital presence.",
    price: "₹25k+",
    features: [
      "Basic UI/UX Design",
      "Essential Workflows",
      "Standard Security",
      "Email Support",
    ],
    ctaLabel: "Get Started",
    ctaHref: "/checkout?plan=starter",
  },
  {
    title: "Growth",
    description: "For automation & systems to scale your operations.",
    price: "₹80k+",
    features: [
      "Advanced Automations",
      "AI Implementations included",
      "Custom Integrations",
      "Priority Support",
      "Analytics Dashboard",
    ],
    ctaLabel: "Scale Now",
    ctaHref: "/checkout?plan=growth",
    highlighted: true,
  },
  {
    title: "Enterprise",
    description: "End-to-end product development for large organizations.",
    price: "Custom",
    features: [
      "Dedicated Engineering Team",
      "Advanced AI Architectures",
      "High-Availability Infra",
      "24/7 SLA Support",
      "On-premise Options",
    ],
    ctaLabel: "Contact Sales",
    ctaHref: "/book-consultation",
  },
];

export const WHY_HIMLAY_FEATURES = [
  { title: "Enterprise-grade architecture", icon: Building2 },
  { title: "Built by top engineers", icon: Server },
  { title: "AI-first solutions", icon: Sparkles },
  { title: "End-to-end development", icon: Code },
  { title: "Fast MVP to scale", icon: Zap },
];

export const HOW_WE_WORK_STEPS = [
  "Discovery",
  "Planning",
  "Design",
  "Development",
  "Testing",
  "Deployment",
  "Support",
];
