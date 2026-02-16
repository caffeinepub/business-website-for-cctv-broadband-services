import { Phone, Mail, MapPin } from 'lucide-react';
import { SiFacebook, SiX, SiInstagram } from 'react-icons/si';

export function SiteFooter() {
  const currentYear = new Date().getFullYear();
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const appIdentifier = typeof window !== 'undefined' 
    ? encodeURIComponent(window.location.hostname)
    : 'unknown-app';

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/assets/generated/logo-cctv-broadband.dim_512x512.png"
                alt="Skynet Services"
                className="h-10 w-10 object-contain"
              />
              <span className="font-display font-bold text-lg">
                Skynet Services
              </span>
            </div>
            <p className="text-secondary-foreground/80 text-sm mb-4">
              Professional CCTV installation and high-speed broadband services for homes and businesses.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="p-2 rounded-md bg-secondary-foreground/10 hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Facebook"
              >
                <SiFacebook className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="p-2 rounded-md bg-secondary-foreground/10 hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="X (Twitter)"
              >
                <SiX className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="p-2 rounded-md bg-secondary-foreground/10 hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Instagram"
              >
                <SiInstagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-secondary-foreground/80 hover:text-primary transition-colors text-sm"
                >
                  Our Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-secondary-foreground/80 hover:text-primary transition-colors text-sm"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-secondary-foreground/80 hover:text-primary transition-colors text-sm"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-secondary-foreground/80">
              <li>CCTV Installation</li>
              <li>Security Cameras</li>
              <li>Broadband Setup</li>
              <li>Network Solutions</li>
              <li>Maintenance & Support</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-secondary-foreground/80">
                <Phone className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-secondary-foreground/80">
                <Mail className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>info@secureconnect.com</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-secondary-foreground/80">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Your City, Your State</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-secondary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-secondary-foreground/60">
            <p>© {currentYear} Skynet Services. All rights reserved.</p>
            <p>
              Built with ❤️ using{' '}
              <a
                href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
