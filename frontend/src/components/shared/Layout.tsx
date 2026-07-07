import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { Chatbot } from "@/components/Chatbot/Chatbot";
import { useScrollToHash } from "@/hooks/useScrollToHash";

export function Layout() {
  useScrollToHash();

  return (
    <div className="min-h-full flex flex-col transition-colors duration-300">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
}
