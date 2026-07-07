import type { LucideIcon } from "lucide-react";

export type CloudProvider = {
  id: string;
  name: string;
  icon: LucideIcon;
  description: string;
  cost: string;
  priceValue: number;
};

export type Package = {
  name: string;
  price: string;
};

export type PricingTier = {
  title: string;
  description: string;
  price: string;
  features: string[];
  ctaLabel: string;
  ctaHref: string;
  highlighted?: boolean;
};
