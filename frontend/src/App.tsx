import { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@/components/shared/ThemeProvider";
import { Layout } from "@/components/shared/Layout";
import { OverviewPage } from "@/components/Overview/OverviewPage";
import { OperationsPage } from "@/components/Verticals/OperationsPage";
import { MarketingPage } from "@/components/Verticals/MarketingPage";
import { BrandingPage } from "@/components/Verticals/BrandingPage";
import { EcommercePage } from "@/components/Verticals/EcommercePage";
import { AIPage } from "@/components/Verticals/AIPage";
import { SaaSPage } from "@/components/Verticals/SaaSPage";
import { CheckoutPage } from "@/components/Checkout/CheckoutPage";
import { BookConsultationPage } from "@/components/BookConsultation/BookConsultationPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <OverviewPage /> },
      { path: "operations", element: <OperationsPage /> },
      { path: "marketing", element: <MarketingPage /> },
      { path: "branding", element: <BrandingPage /> },
      { path: "ecommerce", element: <EcommercePage /> },
      { path: "ai", element: <AIPage /> },
      { path: "saas", element: <SaaSPage /> },
      { path: "checkout", element: <CheckoutPage /> },
      { path: "book-consultation", element: <BookConsultationPage /> },
    ],
  },
]);

export function App() {
  // Keep Render backend alive by pinging the health endpoint
  useEffect(() => {
    const PING_INTERVAL = 10 * 60 * 1000; // 10 minutes
    const pingBackend = async () => {
      try {
        await fetch("http://localhost:8000/health");
      } catch (e) {
        console.error("Keep-alive ping failed", e);
      }
    };
    
    // Initial ping
    pingBackend();
    
    // Interval ping
    const interval = setInterval(pingBackend, PING_INTERVAL);
    return () => clearInterval(interval);
  }, []);

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}
