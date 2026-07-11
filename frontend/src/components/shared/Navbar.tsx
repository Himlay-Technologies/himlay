import { Link } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";
import { NAV_LINKS } from "@/utils/constants";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center px-4 md:px-8 mx-auto">
        <div className="mr-4 flex">
          <Link to="/" className="mr-6 flex items-center space-x-2">
            <img
              src="/logo.svg"
              alt="Himlay Technologies"
              width={32}
              height={32}
              className="w-8 h-8 object-contain"
            />
            <span className="font-bold sm:inline-block text-xl tracking-tight">
              Himlay<span className="text-primary">.</span>Technologies
            </span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="transition-colors hover:text-foreground/80 text-foreground/60"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-4">
            <a 
              href="/Himlay_Technologies_Brochure.pdf" 
              download="Himlay_Technologies_Brochure.pdf"
              className="hover:text-primary/80 transition-colors font-medium text-primary text-sm"
            >
              Download Brochure
            </a>
            <ThemeToggle />
            <Link
              to="/book-consultation"
              className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
            >
              Book Consultation
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
