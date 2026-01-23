import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Play } from "lucide-react";
import heroImage from "@/assets/hero-creative.png";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function Hero() {
  return (
    <div className="relative h-screen w-full overflow-hidden flex flex-col pt-24 md:pt-32 bg-[#1a1b4b]">
      {/* Background Texture/Grain */}
      <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay" 
           style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/noise.png")' }}>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10 flex-1 flex flex-col justify-center h-full">
        
        {/* === LEFT COLUMN: Stats & Avatars === */}
        <div className="absolute left-6 md:left-12 top-[20%] z-30 w-48 flex flex-col gap-12">
          
          {/* Avatar Group */}
          <div>
             <div className="flex -space-x-3 mb-4">
                {[1, 2, 3].map((i) => (
                  <Avatar key={i} className="w-10 h-10 border-2 border-[#1a1b4b]">
                    <AvatarImage src={`https://i.pravatar.cc/150?img=${i + 20}`} />
                    <AvatarFallback>U{i}</AvatarFallback>
                  </Avatar>
                ))}
             </div>
             <p className="text-[10px] text-white/90 uppercase leading-relaxed font-bold tracking-widest max-w-[140px]">
               The Expert Team Brings Creativity To Every Project.
             </p>
          </div>

          {/* Stats List */}
          <div className="flex flex-col gap-8">
            <div className="space-y-1">
              <h3 className="text-3xl font-display text-white flex items-center gap-1">500<span className="text-primary text-2xl">+</span></h3>
              <p className="text-[10px] uppercase tracking-widest text-white/70 font-bold">Happy Client</p>
            </div>
            <div className="space-y-1">
              <h3 className="text-3xl font-display text-white flex items-center gap-1">125<span className="text-primary text-2xl">+</span></h3>
              <p className="text-[10px] uppercase tracking-widest text-white/70 font-bold">Project Done</p>
            </div>
            <div className="space-y-1">
              <h3 className="text-3xl font-display text-white flex items-center gap-1">450<span className="text-primary text-2xl">+</span></h3>
              <p className="text-[10px] uppercase tracking-widest text-white/70 font-bold">Media Featured</p>
            </div>
          </div>
        </div>


        {/* === CENTER: Headline & Image === */}
        <div className="absolute inset-0 z-0 flex flex-col items-center justify-center pointer-events-none">
            
            {/* Top Text: CREATIVE (BOMBSHELL) - Behind Image */}
            <h1 className="text-[15vw] leading-[0.8] font-display text-primary uppercase relative z-0 tracking-tighter mix-blend-normal">
              BOMBSHELL
            </h1>

            {/* Bottom Text: AGENCY (MARKETING) - Front of Image (Outlined) */}
            <h1 className="text-[15vw] leading-[0.8] font-display text-transparent uppercase relative z-20 tracking-tighter mt-[-2vw]"
                style={{ WebkitTextStroke: '1px #ccff00' }}>
              MARKETING
            </h1>

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
        <div className="absolute right-6 md:right-12 top-[15%] z-30 w-64 h-[70%] flex flex-col justify-between items-end text-right">
          
          {/* Top Right Decorative Star */}
          <div className="w-20 h-20 border border-white/20 rounded-full flex items-center justify-center animate-spin-slow">
            <Sparkles className="w-10 h-10 text-primary fill-primary" />
          </div>

          {/* Description and Button Block */}
          <div className="flex flex-col gap-6 items-end mb-12">
            <p className="text-white/80 text-xs leading-relaxed font-medium max-w-[200px]">
              We combine explosive creativity with AI precision to blow up your brand awareness. Located in Omaha, NE.
            </p>
            
            <button className="group px-6 py-3 border border-white/40 hover:bg-white hover:text-black hover:border-white transition-all text-white text-[10px] font-bold uppercase tracking-widest flex items-center gap-3">
              <span>Get Started</span>
              <div className="w-4 h-4 rounded-full bg-white text-black flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors">
                 <ArrowRight className="w-3 h-3 -rotate-45" />
              </div>
            </button>
          </div>

           {/* Bottom Right Play Button */}
           <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center text-black shadow-[0_0_20px_rgba(204,255,0,0.3)] cursor-pointer hover:scale-110 transition-transform">
               <Play className="w-5 h-5 fill-black ml-1" />
           </div>

        </div>

      </div>
      
      {/* Integrated Marquee at the bottom */}
      <div className="absolute -bottom-1 left-0 w-full z-40 bg-primary text-black py-3 transform -rotate-1 scale-105 origin-left border-y-2 border-black font-display text-xl uppercase tracking-widest overflow-hidden whitespace-nowrap">
         <div className="animate-marquee flex gap-8 items-center">
            {[...Array(10)].map((_, i) => (
               <div key={i} className="flex items-center gap-8">
                  <span>Branding</span>
                  <span>*</span>
                  <span>Graphic Design</span>
                  <span>*</span>
                  <span>Web Design</span>
                  <span>*</span>
                  <span>Digital Marketing</span>
                  <span>*</span>
               </div>
            ))}
         </div>
      </div>

    </div>
  );
}