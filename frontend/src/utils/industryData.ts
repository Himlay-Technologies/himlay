import {
  Box,
  Building2,
  Factory,
  GraduationCap,
  HeartPulse,
  Store,
  Wrench,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type Industry = {
  name: string;
  icon: LucideIcon;
};

export const INDUSTRIES: Industry[] = [
  { name: "Healthcare", icon: HeartPulse },
  { name: "Retail", icon: Store },
  { name: "Education", icon: GraduationCap },
  { name: "Manufacturing", icon: Factory },
  { name: "D2C Brands", icon: Box },
  { name: "Service Businesses", icon: Wrench },
  { name: "Real Estate", icon: Building2 },
];
