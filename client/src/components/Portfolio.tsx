import { ArrowUpRight, ArrowRight, Play, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Portfolio() {
  const portfolioItems = [
    {
      category: "BRANDING & IDENTITY DESIGN",
      title: "STELLAR VISION - BRANDING & IDENTITY",
      image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80&w=800",
      height: "h-[400px]"
    },
    {
      category: "MOTION GRAPHICS",
      title: "VELOCITY - MOTION GRAPHICS & VIDEO",
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800",
      height: "h-[300px]"
    },
    {
      category: "WEB DESIGN",
      title: "HORIZON HUB - WEBSITE DESIGN",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&q=80&w=800",
      height: "h-[350px]"
    },
    {
      category: "SOCIAL MEDIA",
      title: "BLOOM & BLISS - SOCIAL MEDIA CAMPAIGN",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800",
      height: "h-[450px]"
    },
    {
      category: "PACKAGING DESIGN",
      title: "LUXE HAVEN - PACKAGING DESIGN",
      image: "https://images.unsplash.com/photo-1541689592655-f5f52825a3b8?auto=format&fit=crop&q=80&w=800",
      height: "h-[400px]"
    }
  ];

  return (
    <section id="portfolio" className="bg-[#e6e6e6] py-24 relative overflow-hidden">
      {/* Noise Texture */}
      <div className="absolute inset-0 opacity-40 pointer-events-none mix-blend-multiply" 
           style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/noise.png")' }}>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-primary text-xl">✦</span>
              <span className="text-black/60 uppercase tracking-widest text-xs font-bold">Our Work</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-display text-black uppercase leading-[0.85]">
              Transforming Ideas <br/> Into Memorable Brand <br/> Experiences.
            </h2>
            <p className="mt-6 text-black/60 max-w-xl text-sm leading-relaxed">
              Lorem ipsum dolor amet, consectetur adipiscing elit. Congue aptent placerat neque senectus amet cras efficitur. Aptent malesuada.
            </p>
          </div>
          
          <button className="group px-6 py-3 border border-black hover:bg-black hover:text-white transition-all text-black text-xs font-bold uppercase tracking-widest flex items-center gap-2">
            Contact Us
            <div className="w-5 h-5 rounded-full bg-black text-white group-hover:bg-white group-hover:text-black flex items-center justify-center transition-colors">
               <ArrowRight className="w-3 h-3 -rotate-45" />
            </div>
          </button>
        </div>

        {/* Portfolio Grid - Masonry-ish Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          
          {/* Left Column */}
          <div className="flex flex-col gap-12">
            {/* Item 1 */}
            <div className="group cursor-pointer">
              <div className="overflow-hidden mb-6 bg-gray-200">
                <img 
                  src={portfolioItems[0].image} 
                  alt={portfolioItems[0].title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="space-y-1">
                <p className="text-[10px] font-bold text-black/50 uppercase tracking-widest">{portfolioItems[0].category}</p>
                <h3 className="text-xl font-display text-black uppercase">{portfolioItems[0].title}</h3>
              </div>
            </div>

            {/* Item 2 */}
            <div className="group cursor-pointer">
              <div className="overflow-hidden mb-6 bg-gray-200">
                <img 
                  src={portfolioItems[1].image} 
                  alt={portfolioItems[1].title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="space-y-1">
                <p className="text-[10px] font-bold text-black/50 uppercase tracking-widest">{portfolioItems[1].category}</p>
                <h3 className="text-xl font-display text-black uppercase">{portfolioItems[1].title}</h3>
              </div>
            </div>

             {/* CTA Card (Black) */}
            <div className="bg-[#1a1a1a] p-12 flex flex-col justify-between min-h-[300px] text-white relative overflow-hidden group">
               <div className="relative z-10">
                 <h3 className="text-4xl font-display uppercase leading-tight mb-4">
                   Our Work Speaks <br/> For Itself
                 </h3>
                 <p className="text-white/60 text-xs max-w-xs leading-relaxed mb-8">
                   From startups to global brands, we've made crafted impactful designs that tell stories.
                 </p>
                 
                 <div className="flex items-center gap-6 mt-auto pt-8">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-black">
                       <Phone className="w-5 h-5" />
                    </div>
                    <div className="flex flex-col">
                       <span className="text-[10px] text-white/50 uppercase tracking-widest">Phone Number</span>
                       <span className="text-sm font-bold">+43 879 5673 9876</span>
                    </div>
                 </div>

                 <button className="mt-8 w-full border border-white/20 py-4 text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors flex items-center justify-center gap-2">
                    View All Portfolio
                    <ArrowRight className="w-3 h-3" />
                 </button>
               </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-12 md:mt-24">
             {/* Item 3 */}
             <div className="group cursor-pointer">
              <div className="overflow-hidden mb-6 bg-gray-200">
                <img 
                  src={portfolioItems[2].image} 
                  alt={portfolioItems[2].title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="space-y-1">
                <p className="text-[10px] font-bold text-black/50 uppercase tracking-widest">{portfolioItems[2].category}</p>
                <h3 className="text-xl font-display text-black uppercase">{portfolioItems[2].title}</h3>
              </div>
            </div>

            {/* Item 4 */}
            <div className="group cursor-pointer">
              <div className="overflow-hidden mb-6 bg-gray-200">
                <img 
                  src={portfolioItems[3].image} 
                  alt={portfolioItems[3].title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="space-y-1">
                <p className="text-[10px] font-bold text-black/50 uppercase tracking-widest">{portfolioItems[3].category}</p>
                <h3 className="text-xl font-display text-black uppercase">{portfolioItems[3].title}</h3>
              </div>
            </div>

            {/* Item 5 */}
            <div className="group cursor-pointer">
              <div className="overflow-hidden mb-6 bg-gray-200">
                <img 
                  src={portfolioItems[4].image} 
                  alt={portfolioItems[4].title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="space-y-1">
                <p className="text-[10px] font-bold text-black/50 uppercase tracking-widest">{portfolioItems[4].category}</p>
                <h3 className="text-xl font-display text-black uppercase">{portfolioItems[4].title}</h3>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}