import { useState } from "react";
import { Link } from "wouter";
import { ArrowUpRight, X } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Dialog, DialogContent, DialogClose, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import { useContactModal } from "@/contexts/ContactModalContext";

import goodlife1 from "@/assets/images/goodlife-1.jpg";
import goodlife2 from "@/assets/images/goodlife-2.jpg";
import goodlife3 from "@/assets/images/goodlife-3.jpg";
import goodlife4 from "@/assets/images/goodlife-4.jpg";
import goodlife5 from "@/assets/images/goodlife-5.jpg";
import goodlife6 from "@/assets/images/goodlife-6.jpg";
import goodlife7 from "@/assets/images/goodlife-7.jpg";
import goodlife8 from "@/assets/images/goodlife-8.jpg";

const galleryImages = [
  { src: goodlife1, alt: "Churros with chocolate dipping sauce" },
  { src: goodlife7, alt: "Gourmet burger with curly fries" },
  { src: goodlife5, alt: "Colorful cocktails lineup" },
  { src: goodlife2, alt: "Child enjoying tacos" },
  { src: goodlife3, alt: "Bartender serving margarita" },
  { src: goodlife8, alt: "Fish tacos with corn salsa" },
  { src: goodlife4, alt: "Bartender pouring whiskey" },
  { src: goodlife6, alt: "Phone capturing food spread" },
];

export default function GoodLifeStoryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const { openContactModal } = useContactModal();

  return (
    <>
      <SEO 
        title="The Good Life Bar & Grill | Brand Photography Case Study | Bombshell Marketing"
        description="Brand photography case study for The Good Life Bar & Grill in Omaha, Nebraska. See how we captured the vibrant atmosphere, delicious food, and craft cocktails."
        canonicalPath="/portfolio/good-life"
        keywords="bar photography Omaha, restaurant photography, food and drink photography, brand photography case study"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Portfolio", url: "/portfolio" },
          { name: "The Good Life", url: "/portfolio/good-life" }
        ]}
      />
    <div className="min-h-screen bg-[#1a1a1a]">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-[#EDE3E1] pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay" 
             style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/noise.png")' }}>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="text-primary text-xl">✦</span>
            <span className="text-[#2B2B2B]/60 uppercase tracking-widest text-xs font-bold">Brand Photography Case Study</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-display text-[#111111] uppercase mb-6">
            The Good Life Bar & Grill
          </h1>
          <div className="flex items-center justify-center gap-2 text-[#2B2B2B]/70 text-sm uppercase tracking-widest">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <Link href="/portfolio" className="hover:text-primary transition-colors">Portfolio</Link>
            <span>/</span>
            <span className="text-white">The Good Life</span>
          </div>
          <p className="mt-6 text-[#2B2B2B]/70 max-w-2xl mx-auto">
            Capturing the vibrant atmosphere, mouthwatering food, and expertly crafted cocktails of this beloved Omaha destination.
          </p>
        </div>
      </section>

      {/* Project Info */}
      <section className="bg-[#1a1a1a] py-16 border-b border-[#111111]/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-primary text-xs font-bold uppercase tracking-widest mb-2">Client</p>
              <p className="text-[#111111] font-display uppercase">The Good Life</p>
            </div>
            <div>
              <p className="text-primary text-xs font-bold uppercase tracking-widest mb-2">Industry</p>
              <p className="text-[#111111] font-display uppercase">Bar & Restaurant</p>
            </div>
            <div>
              <p className="text-primary text-xs font-bold uppercase tracking-widest mb-2">Service</p>
              <p className="text-[#111111] font-display uppercase">Brand Photography</p>
            </div>
            <div>
              <p className="text-primary text-xs font-bold uppercase tracking-widest mb-2">Location</p>
              <p className="text-[#111111] font-display uppercase">Omaha, NE</p>
            </div>
          </div>
        </div>
      </section>

      {/* Masonry Gallery */}
      <section className="py-12 bg-[#1a1a1a]">
        <div className="container mx-auto px-4">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
            {galleryImages.slice(0, 4).map((image, index) => (
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
            <div className="break-inside-avoid bg-[#EDE3E1] p-8 flex flex-col justify-center items-center text-center min-h-[300px]">
              <span className="text-primary text-2xl mb-4">✦</span>
              <h3 className="text-2xl font-display text-[#111111] uppercase mb-4">
                Showcase Your Vibe
              </h3>
              <p className="text-[#2B2B2B]/70 text-sm mb-6">
                Let's capture what makes your spot special.
              </p>
              <button 
                onClick={openContactModal}
                className="px-6 py-3 bg-primary text-black text-xs font-bold uppercase tracking-widest hover:bg-white transition-colors flex items-center gap-2"
              >
                <span>Get Started</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

            {galleryImages.slice(4).map((image, index) => (
              <div 
                key={index + 4}
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
              <span className="text-[#2B2B2B]/60 uppercase tracking-widest text-xs font-bold">About This Project</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display text-[#111111] uppercase leading-[0.9] mb-8">
              Where Good Food Meets Good Times
            </h2>
            <p className="text-[#2B2B2B]/60 leading-relaxed mb-6">
              The Good Life Bar & Grill is an Omaha staple known for their incredible food, signature cocktails, and welcoming atmosphere. They needed photography that would capture the energy and authenticity of their establishment.
            </p>
            <p className="text-[#2B2B2B]/60 leading-relaxed mb-6">
              We spent time in the restaurant capturing real moments—guests enjoying meals, bartenders crafting drinks, and the mouthwatering dishes that keep customers coming back. The result is a collection of images that tell the story of what makes The Good Life so special.
            </p>
            <p className="text-[#2B2B2B]/60 leading-relaxed">
              From social media to their website and menu boards, these images help The Good Life connect with new customers and remind regulars why they keep coming back.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#EDE3E1] py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay" 
             style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/noise.png")' }}>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-display text-[#111111] uppercase mb-6">
            Ready for Your Brand Story?
          </h2>
          <p className="text-[#2B2B2B]/70 max-w-2xl mx-auto mb-8">
            Let's create stunning photography that captures your brand's essence and drives real results.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button 
              onClick={openContactModal}
              className="group px-8 py-4 bg-primary text-black border border-primary hover:bg-white hover:text-black hover:border-[#111111] transition-all text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-3"
            >
              <span>Contact Us</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <a 
              href="/brand-photography" 
              className="group px-8 py-4 border border-[#111111]/20 hover:bg-primary hover:text-black hover:border-primary transition-all text-[#111111] text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-3"
            >
              <span>View Photography Services</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <Dialog open={!!selectedImage} onOpenChange={(open) => !open && setSelectedImage(null)}>
        <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 bg-black/95 border-none overflow-hidden flex items-center justify-center [&>button:first-child]:hidden">
          <VisuallyHidden.Root>
            <DialogTitle>Image Preview</DialogTitle>
          </VisuallyHidden.Root>
          <DialogClose asChild>
            <Button 
              variant="ghost" 
              size="icon" 
              className="absolute top-4 right-4 z-50 text-[#111111] bg-black/50 hover:bg-black/80 rounded-full h-12 w-12 border border-[#111111]/15"
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
    </>
  );
}
