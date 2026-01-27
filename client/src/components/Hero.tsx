import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Play, Star } from "lucide-react";
import heroImage from "@/assets/hero-creative.png";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function Hero() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden flex flex-col pt-24 md:pt-32 bg-[#201cc5]">
      {/* Background Texture/Grain */}
      <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay" 
           style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/noise.png")' }}>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10 flex-1 flex flex-col justify-center h-full pb-56">
        
        {/* === LEFT COLUMN: Stats & Avatars === */}
        <div className="hidden md:flex absolute left-6 md:left-12 top-[20%] -mt-[75px] z-30 w-48 flex-col gap-12">
          
          {/* Avatar Group Removed */}

          {/* Stats List */}
          <div className="flex flex-col gap-8">
            <div className="space-y-1">
              <h3 className="text-3xl font-display text-white flex items-center gap-1">225<span className="text-primary text-2xl">+</span></h3>
              <p className="text-[10px] uppercase tracking-widest text-white/70 font-bold">Happy Clients</p>
            </div>
            <div className="space-y-1">
              <h3 className="text-3xl font-display text-white flex items-center gap-1">300<span className="text-primary text-2xl">+</span></h3>
              <p className="text-[10px] uppercase tracking-widest text-white/70 font-bold">Projects Done</p>
            </div>
            <div className="space-y-1">
              <h3 className="text-3xl font-display text-white flex items-center gap-1">220<span className="text-primary text-2xl">+</span></h3>
              <p className="text-[10px] uppercase tracking-widest text-white/70 font-bold">Media Features</p>
            </div>
          </div>
        </div>


        {/* Floating Rating Card */}
        <motion.div 
          initial={{ x: -100, opacity: 0, rotate: -10 }}
          animate={{ x: 0, opacity: 1, rotate: -6 }}
          transition={{ duration: 0.8, delay: 0.5, type: "spring" }}
          className="absolute left-6 md:left-24 bottom-48 md:bottom-32 z-40 bg-white p-5 rounded-lg shadow-[0_20px_50px_rgba(0,0,0,0.3)] max-w-[200px] hidden md:block"
        >
          <div className="flex items-center gap-3 mb-1">
            <span className="text-4xl font-display text-black font-bold tracking-tight">4.9</span>
            <div className="flex text-yellow-400 gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-current" />
              ))}
            </div>
          </div>
          <p className="text-gray-400 text-[10px] font-bold tracking-widest uppercase mb-3">Client Feedback</p>
          <div className="bg-[#ccff00] text-black px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider inline-block">
            Top Rated
          </div>
        </motion.div>


        {/* === CENTER: Headline & Image === */}
        <div className="absolute inset-0 z-0 flex flex-col items-center justify-center pointer-events-none pt-[100px] md:pt-[50px]">
            
            {/* Top Text: BOMBSHELL - Behind Image */}
            <h1 className="text-[20vw] md:text-[15vw] leading-[0.8] font-display text-primary uppercase relative z-0 tracking-tighter mix-blend-normal mt-0 md:mt-[50px]">
              <span>BOMBSHELL</span>
              <span className="block text-[20vw] md:text-[15vw] leading-[0.8] font-display text-transparent uppercase relative z-20 tracking-tighter mt-[-2vw]"
                  style={{ WebkitTextStroke: '1px #ccff00' }}>
                MARKETING
              </span>
            </h1>

            <div className="mt-4 md:mt-8 flex flex-col items-center gap-6 relative z-30 pointer-events-auto mb-[50px] md:mb-[150px]">
                <p className="text-white/80 text-sm leading-relaxed font-medium max-w-md text-center px-4">
                  Omaha's premier AI-powered marketing agency. We combine explosive creativity with precision to deliver stunning web design, logo design, and brand photography for businesses.
                </p>
                
                <div className="flex flex-col md:flex-row gap-4">
                  <a href="/contact" className="group px-8 py-4 bg-primary text-black border border-primary hover:bg-white hover:text-black hover:border-white transition-all text-xs font-bold uppercase tracking-widest flex items-center gap-3">
                    <span>Get Started</span>
                    <div className="w-5 h-5 rounded-full bg-black text-white flex items-center justify-center group-hover:bg-primary group-hover:text-black transition-colors">
                       <ArrowRight className="w-3 h-3" />
                    </div>
                  </a>
                  <a href="https://style-matcher.replit.app" className="group px-8 py-4 border border-white/40 hover:bg-primary hover:text-black hover:border-primary transition-all text-white text-xs font-bold uppercase tracking-widest flex items-center gap-3">
                    <span>Free Audit</span>
                    <div className="w-5 h-5 rounded-full bg-white text-black flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors">
                       <ArrowRight className="w-3 h-3" />
                    </div>
                  </a>
                </div>
            </div>

            {/* Hero Image - Sandwiched */}
            {/* <div className="absolute inset-0 z-10 flex items-end justify-center pb-0">
               <div className="relative h-[85%] w-auto aspect-[3/4] md:h-[95%]">
                  <img 
                    src={heroImage} 
                    alt="Creative Director" 
                    className="h-full w-full object-contain object-bottom mix-blend-lighten contrast-125 brightness-90" 
                    
                  />
               </div>
            </div> */}
        </div>


        {/* === RIGHT COLUMN: Description & Button === */}
        <div className="hidden md:flex absolute right-6 md:right-12 top-[15%] z-30 w-64 h-[70%] flex-col justify-between items-end text-right">
          
          {/* Top Right Decorative Star */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="w-20 h-20 border border-white/20 rounded-full flex items-center justify-center"
          >
            <Sparkles className="w-10 h-10 text-primary fill-primary" />
          </motion.div>

          {/* Description and Button Block Removed - Moved to Center */}
          
           {/* Bottom Right Play Button */}
           <motion.div 
             animate={{ scale: [1, 1.1, 1] }}
             transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
             className="w-14 h-14 rounded-full bg-primary flex items-center justify-center text-black shadow-[0_0_20px_rgba(204,255,0,0.3)] cursor-pointer hover:scale-110 transition-transform"
           >
               <Play className="w-5 h-5 fill-black ml-1" />
           </motion.div>

        </div>

      </div>
      
      {/* Integrated Marquee at the bottom */}
      <div className="absolute -bottom-1 left-0 w-full z-40 bg-primary text-black py-3 transform -rotate-1 scale-105 origin-left border-y-2 border-black font-display text-xl uppercase tracking-widest overflow-hidden whitespace-nowrap">
         <div className="animate-marquee flex gap-8 items-center">
            {[...Array(10)].map((_, i) => (
               <div key={i} className="flex items-center gap-8">
                  <span>Brand Building & Strategy</span>
                  <span>*</span>
                  <span>Logo & Brand Design</span>
                  <span>*</span>
                  <span>Web Design</span>
                  <span>*</span>
                  <span>Brand Photography</span>
                  <span>*</span>
               </div>
            ))}
         </div>
      </div>

    </div>
  );
}