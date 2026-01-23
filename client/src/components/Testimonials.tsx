import { Star, Quote, ArrowRight } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function Testimonials() {
  const testimonials = [
    {
      id: 1,
      text: "Bombshell AI Marketing completely transformed our online presence. Their AI-driven approach identified audience segments we didn't even know existed, doubling our conversion rate in just three months.",
      author: "Sarah Jenkins",
      role: "CEO, TechFlow Solutions",
      image: "https://i.pravatar.cc/150?u=sarah"
    },
    {
      id: 2,
      text: "The creative team at Bombshell is unmatched. They took our vague concept and turned it into a powerful brand identity that resonates perfectly with our market. The results speak for themselves.",
      author: "Marcus Thorne",
      role: "Founder, Apex Gear",
      image: "https://i.pravatar.cc/150?u=marcus"
    }
  ];

  return (
    <section className="bg-[#1a1a1a] py-24 text-white font-sans">
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
          
          <button className="hidden md:flex px-6 py-3 border border-white/20 hover:bg-[#ccff00] hover:text-black hover:border-[#ccff00] transition-all text-white text-xs font-bold uppercase tracking-widest items-center gap-2">
            View More
            <div className="w-5 h-5 rounded-full bg-white text-black flex items-center justify-center transition-colors">
               <ArrowRight className="w-3 h-3 -rotate-45" />
            </div>
          </button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-[#222] p-10 md:p-12 relative group hover:bg-[#2a2a2a] transition-colors">
              
              {/* Stars */}
              <div className="flex gap-1 mb-8">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#ccff00] text-[#ccff00]" />
                ))}
              </div>

              {/* Text */}
              <p className="text-white/80 leading-relaxed text-lg mb-12 min-h-[120px]">
                "{testimonial.text}"
              </p>

              {/* Footer */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Avatar className="w-14 h-14 border-2 border-[#ccff00]">
                    <AvatarImage src={testimonial.image} />
                    <AvatarFallback>{testimonial.author[0]}</AvatarFallback>
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
        </div>

        <div className="mt-8 flex justify-center md:hidden">
            <button className="px-6 py-3 border border-white/20 hover:bg-[#ccff00] hover:text-black hover:border-[#ccff00] transition-all text-white text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                View More
                <div className="w-5 h-5 rounded-full bg-white text-black flex items-center justify-center transition-colors">
                    <ArrowRight className="w-3 h-3 -rotate-45" />
                </div>
            </button>
        </div>

      </div>
    </section>
  );
}
