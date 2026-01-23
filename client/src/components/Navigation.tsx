import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Pages", href: "#" },
    { name: "Contact Us", href: "#contact" },
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
          <span className="font-display text-2xl tracking-widest text-white">BOMBSHELL<span className="text-primary">.AI</span></span>
        </div>
      </Link>

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <a 
            key={link.name} 
            href={link.href}
            className="text-white/80 hover:text-primary font-sans text-sm font-semibold tracking-wide uppercase transition-colors"
          >
            {link.name}
          </a>
        ))}
      </div>

      {/* Contact Button & Mobile Menu */}
      <div className="flex items-center gap-4">
        <div className="hidden md:flex flex-col items-end text-right">
          <span className="text-xs text-white/60 font-sans">PHONE NUMBER</span>
          <span className="text-sm font-bold text-white tracking-wider">+1 800 555 0199</span>
        </div>
        
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-black md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-black hover:text-black hover:bg-transparent">
                <Menu size={24} />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-background border-l border-white/10 w-full sm:w-[300px]">
              <div className="flex flex-col gap-8 mt-12">
                {navLinks.map((link) => (
                  <a 
                    key={link.name} 
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-2xl font-display text-white hover:text-primary uppercase"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}