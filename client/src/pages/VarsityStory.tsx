import { useEffect, useState } from "react";
import { Link } from "wouter";
import { ArrowUpRight, X } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Dialog, DialogContent, DialogClose, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";

import varsity1 from "@/assets/images/varsity-1.jpg";
import varsity2 from "@/assets/images/varsity-2.jpg";
import varsity3 from "@/assets/images/varsity-3.jpg";
import varsity4 from "@/assets/images/varsity-4.jpg";
import varsity5 from "@/assets/images/varsity-5.jpg";
import varsity6 from "@/assets/images/varsity-6.jpg";
import varsity7 from "@/assets/images/varsity-7.jpg";
import varsity8 from "@/assets/images/varsity-8.jpg";
import varsity9 from "@/assets/images/varsity-9.jpg";
import varsity10 from "@/assets/images/varsity-10.jpg";

const galleryImages = [
  { src: varsity1, alt: "Pizza in branded box", size: "large" },
  { src: varsity2, alt: "Hands grabbing pizza slices", size: "tall" },
  { src: varsity4, alt: "Taco pizza", size: "medium" },
  { src: varsity3, alt: "Gourmet sub sandwiches", size: "wide" },
  { src: varsity5, alt: "Buffalo wings with ranch", size: "medium" },
  { src: varsity7, alt: "Curly fries with dip", size: "medium" },
  { src: varsity6, alt: "Chicken sandwich with fries", size: "large" },
  { src: varsity9, alt: "Multiple pizzas display", size: "large" },
  { src: varsity10, alt: "Penne pasta with marinara", size: "medium" },
];

export default function VarsityStoryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    document.title = "Varsity Roman Coin | Brand Photography Case Study | Bombshell Marketing";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Brand photography case study for Varsity Roman Coin pizza restaurant in Omaha, Nebraska. See how we captured mouthwatering food photography that drives sales.');
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#1a1a1a]">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-[#201cc5] pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay" 
             style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/noise.png")' }}>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="text-primary text-xl">✦</span>
            <span className="text-white/60 uppercase tracking-widest text-xs font-bold">Brand Photography Case Study</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-display text-white uppercase mb-6">
            Varsity Roman Coin
          </h1>
          <div className="flex items-center justify-center gap-2 text-white/70 text-sm uppercase tracking-widest">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <Link href="/portfolio" className="hover:text-primary transition-colors">Portfolio</Link>
            <span>/</span>
            <span className="text-white">Varsity Roman Coin</span>
          </div>
          <p className="mt-6 text-white/70 max-w-2xl mx-auto">
            Mouthwatering food photography that captures the authentic, crave-worthy spirit of this beloved Omaha pizzeria.
          </p>
        </div>
      </section>

      {/* Project Info */}
      <section className="bg-[#1a1a1a] py-16 border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-primary text-xs font-bold uppercase tracking-widest mb-2">Client</p>
              <p className="text-white font-display uppercase">Varsity Roman Coin</p>
            </div>
            <div>
              <p className="text-primary text-xs font-bold uppercase tracking-widest mb-2">Industry</p>
              <p className="text-white font-display uppercase">Restaurant</p>
            </div>
            <div>
              <p className="text-primary text-xs font-bold uppercase tracking-widest mb-2">Service</p>
              <p className="text-white font-display uppercase">Brand Photography</p>
            </div>
            <div>
              <p className="text-primary text-xs font-bold uppercase tracking-widest mb-2">Location</p>
              <p className="text-white font-display uppercase">Omaha, NE</p>
            </div>
          </div>
        </div>
      </section>

      {/* Masonry Gallery */}
      <section className="py-12 bg-[#1a1a1a]">
        <div className="container mx-auto px-4">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
            {galleryImages.slice(0, 5).map((image, index) => (
              <div 
                key={index}
                className="break-inside-avoid cursor-pointer group relative overflow-hidden"
                onClick={() => setSelectedImage(image.src)}
              >
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
              </div>
            ))}
            
            {/* CTA Box */}
            <div className="break-inside-avoid bg-[#201cc5] p-8 flex flex-col justify-center items-center text-center min-h-[300px]">
              <span className="text-primary text-2xl mb-4">✦</span>
              <h3 className="text-2xl font-display text-white uppercase mb-4">
                Want Photos Like These?
              </h3>
              <p className="text-white/70 text-sm mb-6">
                Let's make your menu irresistible.
              </p>
              <a 
                href="/contact"
                className="px-6 py-3 bg-primary text-black text-xs font-bold uppercase tracking-widest hover:bg-white transition-colors flex items-center gap-2"
              >
                <span>Get Started</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            {galleryImages.slice(5).map((image, index) => (
              <div 
                key={index + 5}
                className="break-inside-avoid cursor-pointer group relative overflow-hidden"
                onClick={() => setSelectedImage(image.src)}
              >
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About the Project */}
      <section className="py-20 bg-[#111]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-6">
              <span className="text-primary text-xl">✦</span>
              <span className="text-white/60 uppercase tracking-widest text-xs font-bold">About This Project</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display text-white uppercase leading-[0.9] mb-8">
              Making Food Look as Good as it Tastes
            </h2>
            <p className="text-white/60 leading-relaxed mb-6">
              Varsity Roman Coin is a beloved Omaha pizzeria known for their authentic recipes and generous portions. They needed photography that would make mouths water and fingers tap "order now."
            </p>
            <p className="text-white/60 leading-relaxed mb-6">
              We created a vibrant visual library featuring their signature pizzas, subs, pasta dishes, and appetizers. Using bold, colorful backgrounds that match their energetic brand personality, each shot was styled to highlight the quality ingredients and irresistible appeal of their menu.
            </p>
            <p className="text-white/60 leading-relaxed">
              The result? Scroll-stopping content that performs across their website, social media, and delivery platforms—driving orders and making customers hungry.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#201cc5] py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay" 
             style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/noise.png")' }}>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-display text-white uppercase mb-6">
            Ready for Your Brand Story?
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto mb-8">
            Let's create stunning photography that captures your brand's essence and drives real results.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="group px-8 py-4 bg-primary text-black border border-primary hover:bg-white hover:text-black hover:border-white transition-all text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-3"
            >
              <span>Contact Us</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <a 
              href="/brand-photography" 
              className="group px-8 py-4 border border-white/40 hover:bg-primary hover:text-black hover:border-primary transition-all text-white text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-3"
            >
              <span>View Photography Services</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <Dialog open={!!selectedImage} onOpenChange={(open) => !open && setSelectedImage(null)}>
        <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 bg-black/95 border-none overflow-hidden [&>button]:hidden flex items-center justify-center">
          <VisuallyHidden.Root>
            <DialogTitle>Image Preview</DialogTitle>
          </VisuallyHidden.Root>
          <DialogClose asChild>
            <Button 
              variant="ghost" 
              size="icon" 
              className="absolute top-4 right-4 z-50 text-white bg-black/50 hover:bg-black/80 rounded-full h-12 w-12 border border-white/30"
            >
              <X className="w-7 h-7" />
            </Button>
          </DialogClose>
          {selectedImage && (
            <img 
              src={selectedImage} 
              alt="Full size preview"
              className="max-w-full max-h-[90vh] object-contain"
            />
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
}
