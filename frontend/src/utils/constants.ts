export const API_BASE_URL =
  import.meta.env.VITE_API_URL ?? "http://localhost:8000";

export const APP_TITLE = "Himlay Technologies | Enterprise-Grade Business Solutions";

export const NAV_LINKS = [
  { label: "Services", to: "/#services" },
  { label: "Industries", to: "/#industries" },
  { label: "Products", to: "/#products" },
  { label: "Pricing", to: "/#pricing" },
] as const;
