import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Work", href: "/work" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold">
            Om.
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = item.href.startsWith('#') 
                ? location.pathname === '/' && location.hash === item.href
                : location.pathname === item.href;
              
              return item.href.startsWith('#') ? (
                <a
                  key={item.name}
                  href={item.href}
                  className={`no-custom-cursor text-base font-medium transition-colors hover:text-primary relative ${
                    isActive
                      ? "text-primary after:absolute after:bottom-[-8px] after:left-0 after:w-full after:h-0.5 after:bg-primary"
                      : "text-foreground"
                  }`}
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`no-custom-cursor text-base font-medium transition-colors hover:text-primary relative ${
                    isActive
                      ? "text-primary after:absolute after:bottom-[-8px] after:left-0 after:w-full after:h-0.5 after:bg-primary"
                      : "text-foreground"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          {/* Resume Button - Desktop */}
          <Button
            variant="secondary"
            className="hidden md:flex items-center gap-2 rounded-full px-6 no-custom-cursor"
            asChild
          >
            <a href="/Resume_OmTiwari.pdf" download="Resume_OmTiwari.pdf" className="no-custom-cursor">
              Resume
              <Download className="h-4 w-4" />
            </a>
          </Button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-2">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => {
                const isActive = item.href.startsWith('#') 
                  ? location.pathname === '/' && location.hash === item.href
                  : location.pathname === item.href;
                
                return item.href.startsWith('#') ? (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`no-custom-cursor text-base font-medium transition-colors ${
                      isActive ? "text-primary" : "text-foreground"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`no-custom-cursor text-base font-medium transition-colors ${
                      isActive ? "text-primary" : "text-foreground"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                );
              })}
              <Button
                variant="secondary"
                className="flex items-center justify-center gap-2 rounded-full w-full no-custom-cursor"
                asChild
              >
                <a href="/Resume_OmTiwari.pdf" download="Resume_OmTiwari.pdf" className="no-custom-cursor">
                  Resume
                  <Download className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
