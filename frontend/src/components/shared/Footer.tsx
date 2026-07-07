import { useState } from "react";
import { Link } from "react-router-dom";
import { Modal } from "./Modal";

export function Footer() {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isTermsOpen, setIsTermsOpen] = useState(false);

  return (
    <footer className="w-full border-t border-border/40 bg-background">
      <div className="container max-w-screen-2xl mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <img
                src="/logo.svg"
                alt="Himlay Technologies"
                width={32}
                height={32}
                className="w-8 h-8 object-contain"
              />
              <span className="font-bold sm:inline-block text-2xl tracking-tight">
                Himlay<span className="text-primary">.</span>Technologies
              </span>
            </Link>
            <p className="text-sm text-muted-foreground mt-4 max-w-xs">
              Transforming businesses through software, automation, AI, and
              scalable digital products built for growth.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link
                  to="/operations"
                  className="hover:text-foreground transition-colors"
                >
                  Business Operations
                </Link>
              </li>
              <li>
                <Link
                  to="/marketing"
                  className="hover:text-foreground transition-colors"
                >
                  Business Marketing
                </Link>
              </li>
              <li>
                <Link
                  to="/branding"
                  className="hover:text-foreground transition-colors"
                >
                  Business Branding
                </Link>
              </li>
              <li>
                <Link
                  to="/ecommerce"
                  className="hover:text-foreground transition-colors"
                >
                  Selling & E-Commerce
                </Link>
              </li>
              <li>
                <Link to="/ai" className="hover:text-foreground transition-colors">
                  AI Solutions
                </Link>
              </li>
              <li>
                <Link
                  to="/saas"
                  className="hover:text-foreground transition-colors"
                >
                  SaaS & Learning
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link
                  to="/#how-we-work"
                  className="hover:text-foreground transition-colors"
                >
                  How We Work
                </Link>
              </li>
              <li>
                <Link
                  to="/#why-himlay"
                  className="hover:text-foreground transition-colors"
                >
                  Why Himlay
                </Link>
              </li>
              <li>
                <Link
                  to="/#pricing"
                  className="hover:text-foreground transition-colors"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  to="/book-consultation"
                  className="hover:text-foreground transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Legal & Resources</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <button 
                  onClick={() => setIsPrivacyOpen(true)}
                  className="hover:text-foreground transition-colors text-left"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setIsTermsOpen(true)}
                  className="hover:text-foreground transition-colors text-left"
                >
                  Terms of Service
                </button>
              </li>
              <li>
                <a 
                  href="/Himlay_Technologies_Brochure.pdf" 
                  download="Himlay_Technologies_Brochure.pdf"
                  className="hover:text-foreground transition-colors font-medium text-primary"
                >
                  Download Brochure
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/40 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Himlay Technologies. All rights reserved.</p>
        </div>
      </div>

      <Modal 
        isOpen={isPrivacyOpen} 
        onClose={() => setIsPrivacyOpen(false)} 
        title="Privacy Policy"
      >
        <div className="prose prose-sm dark:prose-invert max-w-none">
          <p>Effective Date: January 1, 2026</p>
          <h3>1. Information We Collect</h3>
          <p>We collect information you provide directly to us when booking a consultation or requesting a service quote, such as name, email, and business requirements.</p>
          
          <h3>2. How We Use Your Information</h3>
          <p>We use the information to:</p>
          <ul>
            <li>Provide, maintain, and improve our services (Business Operations, Marketing, Branding, E-Commerce, AI Solutions).</li>
            <li>Communicate with you regarding your consultation or project.</li>
            <li>Send you technical notices, updates, security alerts, and support messages.</li>
          </ul>

          <h3>3. Information Sharing</h3>
          <p>We do not share your personal information with third parties except as necessary to provide our services (e.g., Cloud Providers like AWS, Hostinger, Digital Ocean) or as required by law.</p>

          <h3>4. Data Security</h3>
          <p>We take reasonable measures to help protect your personal information from loss, theft, misuse, unauthorized access, disclosure, alteration, and destruction.</p>
          
          <h3>5. Contact Us</h3>
          <p>If you have any questions about this Privacy Policy, please contact us at contact@himlay.com.</p>
        </div>
      </Modal>

      <Modal 
        isOpen={isTermsOpen} 
        onClose={() => setIsTermsOpen(false)} 
        title="Terms of Service"
      >
        <div className="prose prose-sm dark:prose-invert max-w-none">
          <p>Effective Date: January 1, 2026</p>
          <h3>1. Acceptance of Terms</h3>
          <p>By accessing or using Himlay Technologies services, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access the service.</p>

          <h3>2. Description of Services</h3>
          <p>Himlay Technologies provides custom software solutions, ERPs, CRM systems, AI solutions, branding, and cloud deployments. The specifics of your service will be detailed in your individual Service Agreement or Quotation.</p>

          <h3>3. Cloud Deployments and Subscriptions</h3>
          <p>Estimated costs for cloud platforms (AWS, Digital Ocean, Hostinger) are approximations and subject to change based on actual usage and provider pricing. You are responsible for ongoing infrastructure costs post-deployment.</p>

          <h3>4. Intellectual Property</h3>
          <p>Unless otherwise agreed in a specific contract, Himlay Technologies retains the rights to pre-existing templates and frameworks used. Custom code written specifically for the client becomes the property of the client upon full payment.</p>

          <h3>5. Limitation of Liability</h3>
          <p>Himlay Technologies shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or use, incurred by you or any third party.</p>

          <h3>6. Contact Us</h3>
          <p>If you have any questions about these Terms, please contact us at contact@himlay.com.</p>
        </div>
      </Modal>

    </footer>
  );
}
