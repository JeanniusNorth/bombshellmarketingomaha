import { ArrowUpRight, ArrowRight, Play, Phone, ExternalLink, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger, DialogClose, DialogTitle } from "@/components/ui/dialog";
import { useState } from "react";
import tennisxImage from "@/assets/images/portfolio-tennisx.png";
import goldoniImage from "@/assets/images/portfolio-goldoni.png";
import brandiniImage from "@/assets/images/portfolio-brandini.png";
import legacyImage from "@/assets/images/portfolio-legacy.png";
import nebraskaiImage from "@/assets/images/portfolio-nebraskai.png";
import midwestGritImage from "@/assets/images/portfolio-midwestgrit.png";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";

export function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<{title: string, url: string} | null>(null);

  const portfolioItems = [
    {
      category: "WEB DESIGN",
      title: "TENNISX - AI VIDEO ANALYSIS APP",
      image: tennisxImage,
      height: "h-[400px]",
      url: "https://tennis-x-website.replit.app/"
    },
    {
      category: "WEB DESIGN",
      title: "GOLDONI LEGISLATURE - CAMPAIGN SITE",
      image: goldoniImage,
      height: "h-[300px]",
      url: "https://JessGoldoni.com" 
    },
    {
      category: "WEB DESIGN",
      title: "MIDWEST GRIT FITNESS",
      image: midwestGritImage,
      height: "h-[350px]",
      url: "https://midwest-grit-fitness.replit.app/"
    },
    {
      category: "WEB DESIGN",
      title: "BRANDINI - MERCH STORE PLATFORM",
      image: brandiniImage,
      height: "h-[350px]",
      url: "https://TryBrandini.com"
    },
    {
      category: "WEB DESIGN",
      title: "LEGACY WINDOW & DOOR - WEBSITE DESIGN",
      image: legacyImage,
      height: "h-[400px]",
      url: "https://legacywindowco.com/"
    },
    {
      category: "SOCIAL MEDIA",
      title: "BLOOM & BLISS - SOCIAL MEDIA CAMPAIGN",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800",
      height: "h-[450px]",
      url: null // No website for social media
    },
    {
      category: "AI CONSULTING",
      title: "NEBRASK.AI - AI CONSULTING FIRM",
      image: nebraskaiImage,
      height: "h-[400px]",
      url: "https://nebrask.ai/"
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
          
          <button className="group px-6 py-3 border border-black hover:bg-black hover:text-black hover:text-white transition-all text-black text-xs font-bold uppercase tracking-widest flex items-center gap-2">
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
            {/* Item 1 - TennisX */}
            <PortfolioItem item={portfolioItems[0]} />

            {/* Item 2 - Goldoni */}
            <PortfolioItem item={portfolioItems[1]} />

             {/* Item 3 - Midwest Grit (New Item) */}
            <PortfolioItem item={portfolioItems[2]} />

             {/* Item 7 - Nebrask.AI */}
            <PortfolioItem item={portfolioItems[6]} />

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
             {/* Item 4 - Brandini */}
             <PortfolioItem item={portfolioItems[3]} />

            {/* Item 5 - Legacy */}
            <PortfolioItem item={portfolioItems[4]} />

            {/* Item 6 - Bloom & Bliss */}
            <PortfolioItem item={portfolioItems[5]} />
          </div>

        </div>
      </div>
    </section>
  );
}

function PortfolioItem({ item }: { item: any }) {
  const [isOpen, setIsOpen] = useState(false);

  // If there's a URL, wrap in Dialog, otherwise just show image
  if (item.url) {
    return (
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <div className="group cursor-pointer">
            <div className="overflow-hidden mb-6 bg-gray-200 relative">
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                 <div className="bg-primary text-black px-4 py-2 text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                    Preview Website <ExternalLink className="w-4 h-4" />
                 </div>
              </div>
            </div>
            <div className="space-y-1">
              <p className="text-[10px] font-bold text-black/50 uppercase tracking-widest">{item.category}</p>
              <h3 className="text-xl font-display text-black uppercase">{item.title}</h3>
            </div>
          </div>
        </DialogTrigger>
        <DialogContent className="max-w-[95vw] w-full h-[90vh] p-0 bg-black border-none rounded-xl overflow-hidden [&>button]:hidden">
          <VisuallyHidden.Root>
            <DialogTitle>{item.title}</DialogTitle>
          </VisuallyHidden.Root>
          <div className="w-full h-full flex flex-col">
             {/* Modal Header */}
             <div className="bg-black text-white px-4 py-3 flex items-center justify-between border-b border-white/10">
                <div className="flex items-center gap-3">
                   <h3 className="font-display uppercase text-lg">{item.title}</h3>
                   <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-xs text-white/50 hover:text-primary flex items-center gap-1">
                      Open in new tab <ExternalLink className="w-3 h-3" />
                   </a>
                </div>
                <DialogClose asChild>
                   <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 rounded-full h-8 w-8">
                      <X className="w-4 h-4" />
                   </Button>
                </DialogClose>
             </div>
             
             {/* Iframe */}
             <div className="flex-1 bg-white w-full h-full relative">
                <iframe 
                  src={item.url} 
                  className="w-full h-full border-0"
                  title={`${item.title} Website Preview`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                />
             </div>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  // Fallback for non-interactive items
  return (
    <div className="group cursor-pointer">
      <div className="overflow-hidden mb-6 bg-gray-200">
        <img 
          src={item.image} 
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="space-y-1">
        <p className="text-[10px] font-bold text-black/50 uppercase tracking-widest">{item.category}</p>
        <h3 className="text-xl font-display text-black uppercase">{item.title}</h3>
      </div>
    </div>
  );
}