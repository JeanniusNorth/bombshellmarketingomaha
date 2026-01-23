import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-creative.png";

export function Hero() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden flex flex-col pt-24 md:pt-32">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle, #ccff00 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10 flex-1 flex flex-col items-start justify-center md:pl-16">
        
        {/* Right Side Content - Moved Stats to Right to Balance Left-Aligned Hero */}
        <div className="md:absolute md:right-8 md:top-1/2 md:-translate-y-1/2 flex flex-row md:flex-col justify-center gap-8 md:gap-12 order-2 md:order-1 text-white/80 font-sans mt-12 md:mt-0 z-20 md:text-right md:items-end">
          <div className="space-y-1">
            <h3 className="text-3xl font-display text-white">500+</h3>
            <p className="text-xs uppercase tracking-widest text-primary">Happy Clients</p>
          </div>
          <div className="space-y-1">
            <h3 className="text-3xl font-display text-white">125+</h3>
            <p className="text-xs uppercase tracking-widest text-primary">Projects Done</p>
          </div>
          <div className="space-y-1">
            <h3 className="text-3xl font-display text-white">450+</h3>
            <p className="text-xs uppercase tracking-widest text-primary">Media Featured</p>
          </div>
        </div>

        {/* Left Aligned Image & Text */}
        <div className="w-full max-w-5xl relative flex flex-col items-start justify-center order-1 md:order-2">
          
          {/* Main Headline Layered Behind/Front */}
          <div className="relative w-full text-left">
            {/* Top Text */}
            <h1 className="text-[12vw] md:text-[11vw] leading-[0.85] font-display text-primary uppercase relative z-0 mix-blend-screen">
              BOMBSHELL
            </h1>
            
            {/* Image Container - Indented for Sandwich Layout */}
            <div className="relative z-10 mt-[-5vw] mb-[-5vw] ml-[5vw] w-[80%] md:w-[60%] max-w-[600px] aspect-[4/5] md:aspect-square">
              <div className="absolute inset-0 rounded-t-full overflow-hidden border-2 border-primary/20 bg-gradient-to-b from-primary/10 to-transparent">
                 <img 
                  src={heroImage} 
                  alt="Creative Director" 
                  className="w-full h-full object-cover object-top mix-blend-normal hover:scale-105 transition-transform duration-700"
                /> 
              </div>
              
              {/* Floating Decorative Elements */}
              <div className="absolute -right-8 top-20 animate-spin-slow">
                <Sparkles className="w-12 h-12 text-primary" />
              </div>
              
              <div className="absolute -left-4 bottom-20">
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-black font-bold">
                  <span className="animate-pulse">PLAY</span>
                </div>
              </div>
            </div>

            {/* Bottom Text - Outlined */}
            <h1 className="text-[12vw] md:text-[11vw] leading-[0.85] font-display text-transparent uppercase relative z-20"
                style={{ WebkitTextStroke: '2px #ccff00' }}>
              MARKETING
            </h1>

            {/* Description - Left Aligned Under Title */}
            <div className="hidden md:block absolute left-2 bottom-[-100px] w-80 text-left z-30">
              <p className="text-white/70 text-sm mb-6 leading-relaxed">
                We combine explosive creativity with AI precision to blow up your brand awareness.
              </p>
              <button className="group flex items-center gap-2 px-6 py-3 border border-white/20 hover:bg-primary hover:border-primary hover:text-black transition-all text-white text-xs font-bold uppercase tracking-widest">
                Get Started
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}