import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { useContactModal } from "@/contexts/ContactModalContext";

export function CallToAction() {
  const { openContactModal } = useContactModal();

  return (
    <section className="bg-[#1F1F1F] py-20 text-white relative overflow-hidden" data-testid="cta-section">
      <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay" 
           style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/noise.png")' }}>
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4 relative z-10 text-center"
      >
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-display uppercase mb-6">
          Ready To Start Your Project?
        </h2>
        
        <p className="text-white/70 max-w-2xl mx-auto mb-10 text-sm md:text-base leading-relaxed">
          Let's create something explosive together. Get a free brand audit and see how we can transform your business with stunning web design, logo design, or brand photography.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={openContactModal}
            className="group px-8 py-4 bg-[#1FA88F] text-white border border-[#1FA88F] hover:bg-[#0E7C6B] hover:border-[#0E7C6B] transition-all text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2"
            data-testid="cta-contact-button"
          >
            Contact Us
            <ArrowUpRight className="w-4 h-4" />
          </button>
          
          <a 
            href="https://audit.bombshellmarketingomaha.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="group px-8 py-4 bg-transparent text-white border border-white/30 hover:bg-white hover:text-[#1F1F1F] transition-all text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2"
            data-testid="cta-audit-button"
          >
            Free Website Audit
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
