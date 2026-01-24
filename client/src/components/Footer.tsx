import { Sparkles, Pin, Facebook, Linkedin, Dribbble } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white pt-24 pb-12 border-t border-white/10 font-sans">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8 mb-20">
          
          {/* Column 1: Logo & Contact Info */}
          <div className="space-y-12">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <Sparkles className="w-12 h-12 text-[#ccff00] fill-[#ccff00]" />
              <div className="flex flex-col leading-none">
                <span className="font-display text-3xl uppercase tracking-tighter">BOMBSHELL</span>
                <span className="font-display text-sm uppercase tracking-[0.4em] text-white/50">Marketing</span>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="font-display uppercase text-lg mb-2">Contact Us</h4>
                <p className="text-white/60 text-sm leading-relaxed">
                  Omaha, Nebraska
                </p>
              </div>
            </div>
          </div>

          {/* Column 2: Pages Removed */}

          {/* Column 3: Connect With Us */}
          <div>
            <h4 className="font-display uppercase text-[#ccff00] text-2xl mb-8">Connect With Us</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li>
                <a href="#" className="flex items-center gap-3 hover:text-[#ccff00] transition-colors">
                  <Facebook className="w-4 h-4 text-[#ccff00]" /> Facebook
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-3 hover:text-[#ccff00] transition-colors">
                  <Linkedin className="w-4 h-4 text-[#ccff00]" /> Linkedin
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-3 hover:text-[#ccff00] transition-colors">
                  <Dribbble className="w-4 h-4 text-[#ccff00]" /> Dribbble
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-3 hover:text-[#ccff00] transition-colors">
                  <Pin className="w-4 h-4 text-[#ccff00]" /> Pinterest
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Big Contact */}
          <div className="flex flex-col gap-8">
            <div>
               <div className="flex items-end gap-2 leading-none">
                 <h3 className="font-display text-3xl md:text-3xl lg:text-3xl break-all">hello@bombshell.com</h3>
                 <span className="text-[#ccff00] font-bold text-[10px] uppercase tracking-wider mb-1 opacity-50 block md:hidden lg:block">Email Address</span>
               </div>
            </div>

            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              With a team of passionate designers, marketers, and innovators, we specialize in delivering unique solutions that elevate your brand and captivate your audience.
            </p>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40 font-mono uppercase">
          <p>© 2026 Bombshell AI Marketing. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
