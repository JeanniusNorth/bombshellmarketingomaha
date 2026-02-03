import { Link } from "wouter";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useContactModal } from "@/contexts/ContactModalContext";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const { openContactModal } = useContactModal();

  const serviceLinks = [
    { name: "Web Design & Development", href: "/web-design" },
    { name: "Logo & Branding", href: "/logo-branding" },
    { name: "Brand Photography", href: "/brand-photography" },
    { name: "Marketing & Digital Strategy", href: "/marketing-strategy" },
  ];

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <nav className="absolute top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-6 md:px-12">
      {/* Logo */}
      <Link href="/">
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="text-primary text-3xl animate-pulse">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 0L14.5 9L24 12L14.5 15L12 24L9.5 15L0 12L9.5 9L12 0Z" />
            </svg>
          </div>
          <span className="font-display text-2xl tracking-widest text-white">BOMBSHELL</span>
        </div>
      </Link>

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center gap-8">
        <a 
          href="/"
          className="text-white/80 hover:text-primary font-sans text-sm font-semibold tracking-wide uppercase transition-colors"
        >
          Home
        </a>
        <a 
          href="/about"
          className="text-white/80 hover:text-primary font-sans text-sm font-semibold tracking-wide uppercase transition-colors"
        >
          About Us
        </a>
        
        {/* Services Dropdown */}
        <div 
          className="relative"
          onMouseEnter={() => setServicesOpen(true)}
          onMouseLeave={() => setServicesOpen(false)}
        >
          <a 
            href="/services"
            className="text-white/80 hover:text-primary font-sans text-sm font-semibold tracking-wide uppercase transition-colors flex items-center gap-1"
          >
            Services
            <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
          </a>
          
          {servicesOpen && (
            <div className="absolute top-full left-0 pt-2">
              <div className="bg-black/95 backdrop-blur-sm border border-white/10 py-2 min-w-[220px]">
                {serviceLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => window.scrollTo(0, 0)}
                    className="block px-4 py-3 text-white/70 hover:text-primary hover:bg-white/5 text-sm font-semibold tracking-wide transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>

        <a 
          href="/portfolio"
          className="text-white/80 hover:text-primary font-sans text-sm font-semibold tracking-wide uppercase transition-colors"
        >
          Portfolio
        </a>
        <button 
          onClick={openContactModal}
          className="text-white/80 hover:text-primary font-sans text-sm font-semibold tracking-wide uppercase transition-colors"
        >
          Contact Us
        </button>
      </div>

      {/* Contact Button & Mobile Menu */}
      <div className="flex items-center gap-4">
        
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-black md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-black hover:text-black hover:bg-transparent">
                <Menu size={24} />
              </Button>
            </SheetTrigger>
            <SheetContent 
              side="right" 
              className="bg-background border-l border-white/10 w-full sm:w-[300px]"
              onCloseAutoFocus={(e) => e.preventDefault()}
            >
              <div className="flex flex-col gap-6 mt-12">
                <a 
                  href="/"
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-display text-white hover:text-primary uppercase"
                >
                  Home
                </a>
                <a 
                  href="/about"
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-display text-white hover:text-primary uppercase"
                >
                  About Us
                </a>
                
                {/* Mobile Services Dropdown */}
                <div>
                  <button 
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    className="text-2xl font-display text-white hover:text-primary uppercase flex items-center gap-2 w-full text-left"
                  >
                    Services
                    <ChevronDown className={`w-5 h-5 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {mobileServicesOpen && (
                    <div className="ml-4 mt-4 flex flex-col gap-3">
                      {serviceLinks.map((link) => (
                        <a
                          key={link.name}
                          href={link.href}
                          onClick={() => {
                            setIsOpen(false);
                            window.scrollTo(0, 0);
                          }}
                          className="text-lg text-white/70 hover:text-primary transition-colors"
                        >
                          {link.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>

                <a 
                  href="/portfolio"
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-display text-white hover:text-primary uppercase"
                >
                  Portfolio
                </a>
                <button 
                  onClick={() => { setIsOpen(false); openContactModal(); }}
                  className="text-2xl font-display text-white hover:text-primary uppercase text-left"
                >
                  Contact Us
                </button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
