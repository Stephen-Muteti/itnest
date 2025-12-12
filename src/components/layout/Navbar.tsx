import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <nav
      className={`sticky top-0 z-50 bg-navbar border-b transition-shadow duration-300 ${
        isScrolled ? "shadow-md" : "border-border"
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2" aria-label="itnest - Home">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-heading font-bold text-xl">iT</span>
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-lg text-navbar-foreground leading-tight">
                itnest
              </span>
              <span className="text-xs text-muted-foreground leading-tight hidden sm:block">
                IT Consultancy
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-6" role="menubar">
              {navLinks.map((link) => (
                <li key={link.path} role="none">
                  <Link
                    to={link.path}
                    className={`text-sm font-medium transition-colors hover:text-accent ${
                      location.pathname === link.path
                        ? "text-accent"
                        : "text-navbar-foreground"
                    }`}
                    role="menuitem"
                    aria-current={location.pathname === link.path ? "page" : undefined}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <Button variant="cta" size="sm" asChild>
              <Link to="/contact">Get a Quote</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-navbar-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div
            id="mobile-menu"
            className="md:hidden border-t border-border animate-slide-down"
            role="menu"
          >
            <div className="py-4 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                    location.pathname === link.path
                      ? "bg-accent/10 text-accent"
                      : "text-navbar-foreground hover:bg-muted"
                  }`}
                  role="menuitem"
                  aria-current={location.pathname === link.path ? "page" : undefined}
                >
                  {link.name}
                </Link>
              ))}
              <div className="px-4 pt-2">
                <Button variant="cta" size="sm" className="w-full" asChild>
                  <Link to="/contact">Get a Quote</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
