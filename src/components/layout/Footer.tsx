import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  const legalLinks = [
    { name: "Privacy Policy", path: "/privacy" },
    { name: "Terms & Conditions", path: "/terms" },
  ];

  return (
    <footer className="bg-footer text-footer-foreground" role="contentinfo">
      <div className="container-custom section-padding-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4" aria-label="itnest - Home">
              <div className="w-10 h-10 rounded-lg bg-cyan-500 flex items-center justify-center">
                <span className="text-primary font-heading font-bold text-xl">iT</span>
              </div>
              <span className="font-heading font-bold text-lg">itnest</span>
            </Link>
            <p className="text-sm text-footer-foreground/70 leading-relaxed">
              Professional IT consultancy services delivering innovative solutions worldwide from Nairobi, Kenya.
            </p>
          </div>

          {/* Quick Links */}
          <nav aria-label="Quick links">
            <h4 className="font-heading font-semibold text-base mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-footer-foreground/70 hover:text-cyan-300 transition-colors flex items-center gap-1 group"
                  >
                    <ArrowRight className="h-3 w-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" aria-hidden="true" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Legal */}
          <nav aria-label="Legal links">
            <h4 className="font-heading font-semibold text-base mb-4">Legal</h4>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-footer-foreground/70 hover:text-cyan-300 transition-colors flex items-center gap-1 group"
                  >
                    <ArrowRight className="h-3 w-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" aria-hidden="true" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <address className="not-italic">
            <h4 className="font-heading font-semibold text-base mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+254757090042"
                  className="text-sm text-footer-foreground/70 hover:text-cyan-300 transition-colors flex items-center gap-2"
                  aria-label="Call us at +254 757 090 042"
                >
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  +254 757 090 042
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@itnest.org"
                  className="text-sm text-footer-foreground/70 hover:text-cyan-300 transition-colors flex items-center gap-2"
                  aria-label="Email us at info@itnest.org"
                >
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  info@itnest.org
                </a>
              </li>
              <li className="text-sm text-footer-foreground/70 flex items-center gap-2">
                <MapPin className="h-4 w-4" aria-hidden="true" />
                Nairobi, Kenya
              </li>
            </ul>
          </address>
        </div>

        {/* Bottom */}
        <div className="border-t border-footer-foreground/10 mt-10 pt-6">
          <p className="text-sm text-footer-foreground/50 text-center">
            © {currentYear} itnest. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
