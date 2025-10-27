import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";
import { Linkedin, Instagram } from "lucide-react";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Scroll Up Button */}
      <div className="flex justify-center py-12 bg-background">
        <Button
          variant="outline"
          size="lg"
          onClick={scrollToTop}
          className="rounded-full px-8 py-6 text-base font-medium hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
        >
          <ArrowUp className="h-5 w-5 mr-2" />
          Scroll Up
        </Button>
      </div>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            {/* Left Section */}
            <div className="space-y-8">
              {/* Mobile: Om. and social icons in same row */}
              <div className="flex items-center justify-between lg:block">
                <h2 className="text-5xl font-bold">Om.</h2>
                
                <div className="flex gap-6 lg:hidden">
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-80 transition-opacity"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-8 w-8 fill-white" />
                  </a>
                  <a
                    href="https://behance.net"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-80 transition-opacity"
                    aria-label="Behance"
                  >
                    <svg
                      className="h-8 w-8"
                      viewBox="0 0 24 24"
                      fill="white"
                    >
                      <path d="M6.5 4.5h5.062c1.875 0 3.438 1.5 3.438 3.375 0 1.312-.75 2.438-1.875 2.938 1.5.375 2.625 1.687 2.625 3.312 0 2.063-1.688 3.375-3.75 3.375H6.5V4.5zm2.25 5.25h2.625c.75 0 1.313-.563 1.313-1.313s-.563-1.312-1.313-1.312H8.75v2.625zm0 5.625h3c.75 0 1.5-.75 1.5-1.5s-.75-1.5-1.5-1.5h-3v3zM15.5 7.5h5.25V9H15.5V7.5zm2.625 3.75c-2.063 0-3.75 1.688-3.75 3.75s1.687 3.75 3.75 3.75c1.687 0 3.187-1.125 3.562-2.625h-2.062c-.188.563-.75.938-1.5.938-1.125 0-1.875-.75-1.875-1.875h5.625c.063-.375.063-.563.063-.75 0-2.063-1.688-3.938-3.813-3.938zm-1.5 3c.188-.938.938-1.5 1.688-1.5s1.5.562 1.687 1.5h-3.375z" />
                    </svg>
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-80 transition-opacity"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-8 w-8 fill-white" />
                  </a>
                </div>
              </div>
              
              {/* Desktop: Social icons below Om. */}
              <div className="hidden lg:flex gap-6">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-8 w-8 fill-white" />
                </a>
                <a
                  href="https://behance.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity"
                  aria-label="Behance"
                >
                  <svg
                    className="h-8 w-8"
                    viewBox="0 0 24 24"
                    fill="white"
                  >
                    <path d="M6.5 4.5h5.062c1.875 0 3.438 1.5 3.438 3.375 0 1.312-.75 2.438-1.875 2.938 1.5.375 2.625 1.687 2.625 3.312 0 2.063-1.688 3.375-3.75 3.375H6.5V4.5zm2.25 5.25h2.625c.75 0 1.313-.563 1.313-1.313s-.563-1.312-1.313-1.312H8.75v2.625zm0 5.625h3c.75 0 1.5-.75 1.5-1.5s-.75-1.5-1.5-1.5h-3v3zM15.5 7.5h5.25V9H15.5V7.5zm2.625 3.75c-2.063 0-3.75 1.688-3.75 3.75s1.687 3.75 3.75 3.75c1.687 0 3.187-1.125 3.562-2.625h-2.062c-.188.563-.75.938-1.5.938-1.125 0-1.875-.75-1.875-1.875h5.625c.063-.375.063-.563.063-.75 0-2.063-1.688-3.938-3.813-3.938zm-1.5 3c.188-.938.938-1.5 1.688-1.5s1.5.562 1.687 1.5h-3.375z" />
                  </svg>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity"
                  aria-label="Instagram"
                >
                  <Instagram className="h-8 w-8 fill-white" />
                </a>
              </div>

              {/* Desktop: Navigation Links aligned with social icons */}
            </div>

            {/* Right Section */}
            <div className="space-y-8">
              <p className="text-lg leading-relaxed">
                I'd love to hear your thoughts or suggestions on my work! You can
                also reach out for collaborations or just say hello!
              </p>

              {/* Desktop: Navigation Links under text */}
              <nav className="hidden md:flex justify-between text-lg">
                <a href="#work" className="hover:opacity-80 transition-opacity">
                  Work
                </a>
                <a href="#about" className="hover:opacity-80 transition-opacity">
                  About
                </a>
                <a href="#contact" className="hover:opacity-80 transition-opacity">
                  Contact
                </a>
                <a href="#resume" className="hover:opacity-80 transition-opacity">
                  Resume
                </a>
              </nav>
            </div>
          </div>

          {/* Mobile Navigation Links */}
          <nav className="flex lg:hidden flex-wrap gap-6 text-lg mb-12">
            <a href="#work" className="hover:opacity-80 transition-opacity">
              Work
            </a>
            <a href="#about" className="hover:opacity-80 transition-opacity">
              About
            </a>
            <a href="#contact" className="hover:opacity-80 transition-opacity">
              Contact
            </a>
            <a href="#resume" className="hover:opacity-80 transition-opacity">
              Resume
            </a>
          </nav>

          {/* Bottom Bar */}
          <div className="border-t border-white/20 pt-8 text-sm">
            <div className="flex flex-row justify-between items-center gap-2 text-xs sm:text-sm">
              <p>© 2025 Om</p>
              <p>Developed and designed by om.</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
