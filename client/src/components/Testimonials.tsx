import { Star, Quote, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import chrisImage from "@/assets/images/testimonial-chris.jpg";
import shaneImage from "@/assets/images/testimonial-shane.jpg";

export function Testimonials() {
  const testimonials = [
    {
      id: 1,
      text: "Working with Bombshell was seamless. They understood the Brandini vision immediately and executed a strategy that put our merchandise platform on the map. Highly recommended.",
      author: "Chris Harwood",
      role: "Brandini",
      image: chrisImage
    },
    {
      id: 2,
      text: "Our new website design is fantastic. It's clean, modern, and exactly what we needed to showcase our window and door products. The team really listened to our needs.",
      author: "Shane",
      role: "Legacy Window & Door",
      image: shaneImage
    },
    {
      id: 3,
      text: "The AI integration for our campaign was a game changer. Bombshell helped us reach our target audience with precision we didn't think was possible.",
      author: "Sarah Jenkins",
      role: "TechFlow",
      image: ""
    },
    {
      id: 4,
      text: "From the photoshoot to the final website launch, everything was top-notch. The visual identity they created for us perfectly captures our vibe.",
      author: "Mike Ross",
      role: "Urban Eats",
      image: ""
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Get current and next testimonial for 2-column layout
  const visibleTestimonials = [
    testimonials[currentIndex],
    testimonials[(currentIndex + 1) % testimonials.length]
  ];

  return (
    <section className="bg-[#1a1a1a] py-24 text-white font-sans overflow-hidden">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8">
          <div className="flex items-center gap-2">
            <span className="text-[#ccff00] text-xl">✦</span>
            <span className="uppercase tracking-widest text-xs font-bold">Testimonials</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-display uppercase text-center flex-1">
            What Our Client Says
          </h2>
          
          <div className="hidden md:flex gap-4">
            <button onClick={prevSlide} className="w-12 h-12 border border-white/20 hover:bg-[#ccff00] hover:text-black hover:border-[#ccff00] transition-all flex items-center justify-center rounded-full">
               <ChevronLeft className="w-5 h-5" />
            </button>
            <button onClick={nextSlide} className="w-12 h-12 border border-white/20 hover:bg-[#ccff00] hover:text-black hover:border-[#ccff00] transition-all flex items-center justify-center rounded-full">
               <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel Content */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div 
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {visibleTestimonials.map((testimonial) => (
                <div key={testimonial.id} className="bg-[#222] p-10 md:p-12 relative group hover:bg-[#2a2a2a] transition-colors min-h-[400px] flex flex-col justify-between">
                  
                  <div>
                    {/* Stars */}
                    <div className="flex gap-1 mb-8">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#ccff00] text-[#ccff00]" />
                      ))}
                    </div>

                    {/* Text */}
                    <p className="text-white/80 leading-relaxed text-lg mb-8">
                      "{testimonial.text}"
                    </p>
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center gap-4">
                      <Avatar className="w-14 h-14 border-2 border-[#ccff00]">
                        <AvatarImage src={testimonial.image} />
                        <AvatarFallback className="text-black bg-[#ccff00] font-bold">{testimonial.author[0]}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-display uppercase text-lg leading-none mb-1">{testimonial.author}</h4>
                        <p className="text-white/50 text-xs font-bold uppercase tracking-wider">{testimonial.role}</p>
                      </div>
                    </div>
                    
                    <Quote className="w-10 h-10 text-[#ccff00] opacity-50 transform rotate-180" />
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-8 flex justify-center gap-4 md:hidden">
            <button onClick={prevSlide} className="w-12 h-12 border border-white/20 hover:bg-[#ccff00] hover:text-black hover:border-[#ccff00] transition-all flex items-center justify-center rounded-full text-white">
               <ChevronLeft className="w-5 h-5" />
            </button>
            <button onClick={nextSlide} className="w-12 h-12 border border-white/20 hover:bg-[#ccff00] hover:text-black hover:border-[#ccff00] transition-all flex items-center justify-center rounded-full text-white">
               <ChevronRight className="w-5 h-5" />
            </button>
        </div>

      </div>
    </section>
  );
}
