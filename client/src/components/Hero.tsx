import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles, Star, Play } from "lucide-react";
import heroImage from "@/assets/hero-creative.png";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function Hero() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden flex flex-col pt-24 md:pt-32 bg-[#0000FF]">
      {/* Background Grid Pattern - Very Subtle */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10 flex-1 h-[80vh] flex items-center justify-center">
        
        {/* === LEFT COLUMN: Stats & Avatars === */}
        <div className="absolute left-4 md:left-12 top-1/2 -translate-y-1/2 flex flex-col gap-12 z-30 w-48">
          
          {/* Avatar Group */}
          <div className="flex flex-col gap-4">
             <div className="flex -space-x-4">
                {[1, 2, 3].map((i) => (
                  <Avatar key={i} className="w-10 h-10 border-2 border-primary">
                    <AvatarImage src={`https://i.pravatar.cc/150?img=${i + 10}`} />
                    <AvatarFallback>U{i}</AvatarFallback>
                  </Avatar>
                ))}
             </div>
             <p className="text-[10px] text-white/80 uppercase leading-tight font-bold max-w-[120px]">
               The Expert Team Brings Creativity To Every Project.
             </p>
          </div>

          {/* Stats List */}
          <div className="flex flex-col gap-8">
            <div className="space-y-1 border-l-2 border-white/20 pl-4">
              <h3 className="text-3xl font-display text-white flex items-start gap-1">500<span className="text-primary text-xl mt-1">+</span></h3>
              <p className="text-[10px] uppercase tracking-widest text-white/70 font-bold">Happy Client</p>
            </div>
            <div className="space-y-1 border-l-2 border-white/20 pl-4">
              <h3 className="text-3xl font-display text-white flex items-start gap-1">125<span className="text-primary text-xl mt-1">+</span></h3>
              <p className="text-[10px] uppercase tracking-widest text-white/70 font-bold">Project Done</p>
            </div>
            <div className="space-y-1 border-l-2 border-white/20 pl-4">
              <h3 className="text-3xl font-display text-white flex items-start gap-1">450<span className="text-primary text-xl mt-1">+</span></h3>
              <p className="text-[10px] uppercase tracking-widest text-white/70 font-bold">Media Featured</p>
            </div>
          </div>
        </div>


        {/* === CENTER: Headline & Image === */}
        <div className="relative w-full max-w-[1400px] flex flex-col items-center justify-center h-full">
            
            {/* Top Text: BOMBSHELL */}
            <h1 className="text-[18vw] md:text-[16vw] leading-[0.8] font-display text-primary uppercase relative z-0 tracking-tighter mix-blend-screen text-center w-full">
              BOMBSHELL
            </h1>

            {/* Bottom Text: MARKETING (Outlined) */}
            <h1 className="text-[18vw] md:text-[16vw] leading-[0.8] font-display text-transparent uppercase relative z-0 tracking-tighter text-center w-full mt-[-2vw]"
                style={{ WebkitTextStroke: '2px #ccff00' }}>
              MARKETING
            </h1>

            {/* Image Layered BETWEEN Text (Visual trick: actually on top but transparent bg) */}
            <div className="absolute inset-0 z-10 flex items-end justify-center pointer-events-none pb-[5vh]">
               <div className="relative w-[80%] md:w-[45%] aspect-[3/4]">
                  {/* Decorative Circle Behind Head */}
                  <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[80%] aspect-square rounded-full border border-white/10"></div>
                  
                  <img 
                    src={heroImage} 
                    alt="Creative Director" 
                    className="w-full h-full object-contain object-bottom drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                  />
               </div>
            </div>
        </div>


        {/* === RIGHT COLUMN: Description & Button === */}
        <div className="absolute right-4 md:right-12 top-1/2 -translate-y-1/2 flex flex-col gap-12 z-30 w-64 items-end text-right">
          
          {/* Top Right Decorative Star */}
          <div className="absolute -top-[30vh] right-0 w-24 h-24 border border-white/20 rounded-full flex items-center justify-center animate-spin-slow">
            <Sparkles className="w-12 h-12 text-primary fill-primary" />
          </div>

          <div className="flex flex-col gap-6 items-end mt-24">
            <p className="text-white/80 text-sm leading-relaxed font-medium">
              We combine explosive creativity with AI precision to blow up your brand awareness.
            </p>
            
            <button className="group relative overflow-hidden px-8 py-3 border border-white transition-all hover:bg-white hover:text-black text-white text-xs font-bold uppercase tracking-widest flex items-center gap-4">
              <span>Get Started</span>
              <div className="w-5 h-5 rounded-full border border-current flex items-center justify-center group-hover:bg-black group-hover:text-white group-hover:border-black transition-colors">
                 <ArrowUpRight className="w-3 h-3" />
              </div>
            </button>
          </div>

           {/* Bottom Right Play Button */}
           <div className="mt-24 w-16 h-16 rounded-full bg-primary flex items-center justify-center text-black shadow-[0_0_20px_rgba(204,255,0,0.5)] cursor-pointer hover:scale-110 transition-transform">
               <Play className="w-6 h-6 fill-black ml-1" />
           </div>

        </div>

      </div>
    </div>
  );
}