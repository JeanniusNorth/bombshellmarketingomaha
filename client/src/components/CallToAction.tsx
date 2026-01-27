import { ArrowUpRight } from "lucide-react";

export function CallToAction() {
  return (
    <section className="bg-[#201cc5] py-20 text-white relative overflow-hidden" data-testid="cta-section">
      <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay" 
           style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/noise.png")' }}>
      </div>
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-display uppercase mb-6">
          Ready To Start Your Project?
        </h2>
        
        <p className="text-white/70 max-w-2xl mx-auto mb-10 text-sm md:text-base leading-relaxed">
          Let's create something explosive together. Get a free brand audit and see how we can transform your business with stunning web design, logo design, or brand photography.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="/contact"
            className="group px-8 py-4 bg-[#ccff00] text-black border border-[#ccff00] hover:bg-white hover:border-white transition-all text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2"
            data-testid="cta-contact-button"
          >
            Contact Us
            <ArrowUpRight className="w-4 h-4" />
          </a>
          
          <a 
            href="https://style-matcher.replit.app"
            target="_blank"
            rel="noopener noreferrer"
            className="group px-8 py-4 bg-transparent text-white border border-white hover:bg-white hover:text-black transition-all text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2"
            data-testid="cta-audit-button"
          >
            Free Audit
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
