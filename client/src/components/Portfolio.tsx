import { ArrowUpRight, ArrowRight, Play, Phone, ExternalLink, X, Camera } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger, DialogClose, DialogTitle } from "@/components/ui/dialog";
import { useState } from "react";
import { motion } from "framer-motion";
import { useContactModal } from "@/contexts/ContactModalContext";
import tennisxImage from "@/assets/images/portfolio-tennisx.png";
import theLeagueImage from "@/assets/images/portfolio-the-league.png";
import jaymooreImage from "@/assets/images/portfolio-jaymoore.png";

import nebraskaiImage from "@/assets/images/portfolio-nebraskai.png";
import midwestGritImage from "@/assets/images/portfolio-midwestgrit.png";
import merchclubImage from "@/assets/images/portfolio-merchclub.png";
import omahaCookieImage from "@/assets/images/portfolio-omahacookie.png";
import varsityPizzaImage from "@/assets/portfolio-varsity-pizza.jpg";
import goodLifeImage from "@/assets/portfolio-good-life.png";
import mensHealthImage from "@/assets/images/portfolio-mens-health-clinic.png";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";

export const portfolioItems = [
    {
      category: "WEB DESIGN",
      title: "NEBRASK.AI - AI TRAINING PLATFORM",
      image: nebraskaiImage,
      height: "h-[350px]",
      url: "https://nebraskai.replit.app/"
    },
    {
      category: "WEB DESIGN",
      title: "THE MEN'S HEALTH CLINIC",
      image: mensHealthImage,
      height: "h-[350px]",
      url: "https://themenshealthclinic.com"
    },
    {
      category: "WEB DESIGN",
      title: "MERCH CLUB",
      image: merchclubImage,
      height: "h-[350px]",
      url: "https://merch-club.replit.app/"
    },
    {
      category: "LOGO & BRANDING",
      title: "THE LEAGUE - MEN'S HEALTH CLINIC",
      image: theLeagueImage,
      height: "h-[300px]",
      url: "",
      link: "/logo-branding"
    },
    {
      category: "PHOTOGRAPHY",
      title: "THE GOOD LIFE BAR & GRILL",
      image: goodLifeImage,
      link: "/portfolio/good-life",
      height: "h-[350px]",
      url: ""
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
      title: "JAY MOORE LANDSCAPING",
      image: jaymooreImage,
      height: "h-[350px]",
      url: "https://jaymoore.design/"
    },
    {
      category: "WEB DESIGN",
      title: "TENNISX - AI VIDEO ANALYSIS APP",
      image: tennisxImage,
      height: "h-[400px]",
      url: "https://tennis-x-website.replit.app/"
    },
    {
      category: "PHOTOGRAPHY",
      title: "VARSITY ROMAN COIN",
      image: varsityPizzaImage,
      height: "h-[350px]",
      url: "",
      link: "/portfolio/varsity-roman-coin"
    }
];

export function PortfolioScroller({ cardWidthClass = "w-[340px] md:w-[560px]" }: { cardWidthClass?: string }) {
  return (
    <div
      className="relative overflow-hidden group w-full"
      data-testid="scroll-portfolio"
    >
      <div className="flex gap-4 md:gap-6 w-max animate-portfolio-scroll group-hover:[animation-play-state:paused]">
        {[...portfolioItems, ...portfolioItems].map((item, index) => (
          <div key={index} className={`shrink-0 ${cardWidthClass}`}>
            <PortfolioItem item={item} />
          </div>
        ))}
      </div>
    </div>
  );
}

export function Portfolio() {
  const { openContactModal } = useContactModal();

  return (
    <section id="portfolio" className="bg-white py-16 md:py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-6 px-2 md:px-4"
        >
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-black text-xl">✦</span>
              <span className="text-black/60 uppercase tracking-widest text-xs font-bold">Our Work</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display text-black leading-[0.95]">
              Omaha Brands That Trust Us
            </h2>
          </div>
          
          <button onClick={openContactModal} className="group px-6 py-3 rounded-full border border-black hover:bg-black hover:text-white transition-all text-black text-xs font-bold uppercase tracking-widest flex items-center gap-2 shrink-0" data-testid="button-contact-portfolio">
            Contact Us
            <div className="w-5 h-5 rounded-full bg-black text-white group-hover:bg-white group-hover:text-black flex items-center justify-center transition-colors">
               <ArrowRight className="w-3 h-3 -rotate-45" />
            </div>
          </button>
        </motion.div>
      </div>

      <PortfolioScroller />
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
            <div className="overflow-hidden mb-4 bg-gray-200 relative aspect-[16/10] rounded-lg">
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
              <h3 className="text-xl font-display text-black">{item.title}</h3>
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
                   <h3 className="font-display text-lg">{item.title}</h3>
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

  // If there's an internal link, wrap in Link
  if (item.link) {
    return (
      <Link href={item.link} onClick={() => window.scrollTo(0, 0)}>
        <div className="group cursor-pointer">
          <div className="overflow-hidden mb-4 bg-gray-200 relative aspect-[16/10] rounded-lg">
            <img 
              src={item.image} 
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
               <div className="bg-primary text-black px-4 py-2 text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                  View Portfolio <Camera className="w-4 h-4" />
               </div>
            </div>
          </div>
          <div className="space-y-1">
            <p className="text-[10px] font-bold text-black/50 uppercase tracking-widest">{item.category}</p>
            <h3 className="text-xl font-display text-black">{item.title}</h3>
          </div>
        </div>
      </Link>
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
        <h3 className="text-xl font-display text-black">{item.title}</h3>
      </div>
    </div>
  );
}