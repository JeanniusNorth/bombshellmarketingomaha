import { ArrowUpRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import logoDesignImage from "@/assets/images/service-logo-design.png";
import webDesignImage from "@/assets/images/service-web-design.png";
import photographyImage from "@/assets/images/service-photography.png";

export function Services() {
  const services = [
    {
      title: "Brand Building & Strategy",
      description: "We forge identities that hit like a shockwave. Strategic positioning meets visual dominance—built to make your competition irrelevant.",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800",
      link: "/contact"
    },
    {
      title: "Logo & Brand Design",
      description: "Logos that sear into memory. Visual identities, brand systems, and guidelines that command attention and refuse to be ignored.",
      image: logoDesignImage,
      link: "/logo-branding"
    },
    {
      title: "Web Design & Development",
      description: "Websites that don't just function—they perform. High-octane user experiences engineered for conversion and built to dominate.",
      image: webDesignImage,
      highlight: true,
      link: "/web-design"
    },
    {
      title: "Brand Photography",
      description: "Capture the raw energy of your brand. Shots that tell your story instantly and make scrolling thumbs stop dead in their tracks.",
      image: photographyImage,
      link: "/brand-photography"
    }
  ];

  return (
    <section id="services" className="bg-[#121212] py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8 border-b border-white/10 pb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-primary text-xl">✦</span>
              <span className="text-white/60 uppercase tracking-widest text-xs font-bold">What We Do</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-display text-white uppercase max-w-3xl leading-[0.9]">
              Creative Firepower For Brands That Refuse To Blend In
            </h2>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Component = service.link ? 'a' : 'div';
            return (
            <Component 
              key={index}
              href={service.link}
              className={`group relative border ${service.highlight ? 'border-primary bg-primary' : 'border-white/10 bg-white/5'} p-8 min-h-[400px] flex flex-col justify-between hover:translate-y-[-8px] transition-transform duration-300 block`}
            >
              <div className="flex justify-between items-start mb-8">
                <h3 className={`text-2xl font-display uppercase max-w-[70%] leading-none ${service.highlight ? 'text-black' : 'text-white'}`}>
                  {service.title}
                </h3>
                <div className={`w-10 h-10 rounded-full border flex items-center justify-center transition-colors
                  ${service.highlight ? 'border-black text-black group-hover:bg-black group-hover:text-primary' : 'border-primary text-primary group-hover:bg-primary group-hover:text-black'}`}>
                  <ArrowUpRight size={20} />
                </div>
              </div>

              {/* Image Reveal on Hover (or static for highlight) */}
              <div className="relative aspect-video w-full overflow-hidden mb-6 grayscale group-hover:grayscale-0 transition-all">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover"
                />
              </div>

              <p className={`text-sm leading-relaxed ${service.highlight ? 'text-black/80' : 'text-white/60'}`}>
                {service.description}
              </p>
            </Component>
          )})}
        </div>

        {/* All Services Button */}
        <div className="flex justify-center mt-12">
          <Link 
            href="/services"
            onClick={() => window.scrollTo(0, 0)}
            className="group px-8 py-4 bg-primary text-black border border-primary hover:bg-white hover:text-black hover:border-white transition-all text-xs font-bold uppercase tracking-widest flex items-center gap-3"
          >
            <span>All Services</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}