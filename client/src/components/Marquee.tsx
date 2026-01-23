import { motion } from "framer-motion";

export function Marquee() {
  return (
    <div className="w-full bg-primary overflow-hidden py-4 border-y border-black relative z-30 transform -rotate-1 md:-rotate-2 scale-105 origin-center my-12">
      <motion.div 
        className="flex whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
      >
        {[...Array(10)].map((_, i) => (
          <div key={i} className="flex items-center gap-8 mx-4">
            <span className="text-3xl md:text-4xl font-display text-black uppercase tracking-tight">
              BRANDING
            </span>
            <span className="text-2xl text-black">+</span>
            <span className="text-3xl md:text-4xl font-display text-black uppercase tracking-tight">
              GRAPHIC DESIGN
            </span>
            <span className="text-2xl text-black">+</span>
            <span className="text-3xl md:text-4xl font-display text-black uppercase tracking-tight">
              WEB DESIGN
            </span>
            <span className="text-2xl text-black">+</span>
            <span className="text-3xl md:text-4xl font-display text-black uppercase tracking-tight">
              DIGITAL MARKETING
            </span>
            <span className="text-2xl text-black">+</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}