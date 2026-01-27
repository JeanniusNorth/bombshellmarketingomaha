import { useEffect } from "react";
import { Link } from "wouter";
import { ArrowUpRight, Palette, Globe, Target, Camera, Sparkles, Layers } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const services = [
  {
    icon: Palette,
    title: "Brand Building & Strategy",
    description: "Omaha's leading brand strategists help you forge identities that hit like a shockwave. Strategic positioning meets visual dominance to create memorable brand experiences that resonate with Nebraska audiences.",
    link: "/contact",
    highlight: false
  },
  {
    icon: Globe,
    title: "Web Design & Development",
    description: "Professional web design in Omaha that doesn't just function—it performs. We build high-octane user experiences with modern technology, responsive design, and stunning visuals for Nebraska businesses.",
    link: "/contact",
    highlight: true
  },
  {
    icon: Target,
    title: "Digital Marketing Strategy",
    description: "AI-powered digital marketing strategies for Omaha businesses. We target your ideal audience with precision using data-driven campaigns that convert visitors into customers.",
    link: "/contact",
    highlight: false
  },
  {
    icon: Layers,
    title: "Logo & Brand Design",
    description: "Custom logo design in Omaha that sears into memory. Our visual identities, brand systems, and guidelines command attention and build recognition for Nebraska brands.",
    link: "/contact",
    highlight: false
  },
  {
    icon: Sparkles,
    title: "Content Creation Solutions",
    description: "Compelling content creation for Omaha businesses. From copywriting to social media management, we create content that engages your Nebraska audience and converts.",
    link: "/contact",
    highlight: true
  },
  {
    icon: Camera,
    title: "Brand Photography",
    description: "Professional brand photography in Omaha, Nebraska. Capture the raw energy of your brand with professional shots that tell your story instantly and elevate your visual presence.",
    link: "/contact",
    highlight: false
  }
];

export default function ServicesPage() {
  useEffect(() => {
    document.title = "Marketing Services | Web Design, Logo Design & Brand Photography in Omaha, NE";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professional web design, logo design, and brand photography services in Omaha, Nebraska. AI-powered marketing agency with 300+ successful projects. Free brand audit available.');
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#f0f0f0]">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-[#201cc5] pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay" 
             style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/noise.png")' }}>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-display text-white uppercase mb-6">
            Solutions You Need
          </h1>
          <div className="flex items-center justify-center gap-2 text-white/70 text-sm uppercase tracking-widest">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white">Our Services</span>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-[#e8e8e8] py-20 relative">
        <div className="absolute inset-0 opacity-30 pointer-events-none mix-blend-multiply" 
             style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/noise.png")' }}>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-16">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-primary text-xl">✦</span>
                <span className="text-black/60 uppercase tracking-widest text-xs font-bold">Simplify Your Goals</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-display text-black uppercase leading-[0.9]">
                Empowering Brands<br />With Creativity
              </h2>
            </div>
            
            <div className="flex gap-12">
              <div className="text-center">
                <div className="flex items-center gap-1">
                  <Sparkles className="w-6 h-6 text-primary fill-primary" />
                  <span className="text-5xl font-display text-black">300</span>
                  <span className="text-primary text-3xl font-display">+</span>
                </div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-black/50 mt-2">Successful Projects</p>
              </div>
              <div className="text-center">
                <div className="flex items-center gap-1">
                  <Sparkles className="w-6 h-6 text-primary fill-primary" />
                  <span className="text-5xl font-display text-black">200</span>
                  <span className="text-primary text-3xl font-display">+</span>
                </div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-black/50 mt-2">Brands Grow Globally</p>
              </div>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <a 
                  key={index}
                  href={service.link}
                  className={`group relative p-8 min-h-[280px] flex flex-col justify-between hover:translate-y-[-8px] transition-transform duration-300 ${
                    service.highlight 
                      ? 'bg-[#201cc5]' 
                      : 'bg-[#1a1a2e]'
                  }`}
                >
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-14 h-14 rounded-lg bg-primary/20 border border-primary flex items-center justify-center">
                      <IconComponent className="w-7 h-7 text-primary" />
                    </div>
                    <div className="w-10 h-10 rounded-full bg-primary text-black flex items-center justify-center group-hover:scale-110 transition-transform">
                      <ArrowUpRight size={20} />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-display uppercase text-white mb-4 leading-tight">
                      {service.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-white/60">
                      {service.description}
                    </p>
                  </div>
                </a>
              );
            })}
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
            Ready to Get Started?
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto mb-8">
            Let's create something explosive together. Get in touch to discuss your project and see how we can help your brand stand out.
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
              href="https://style-matcher.replit.app" 
              className="group px-8 py-4 border border-white/40 hover:bg-primary hover:text-black hover:border-primary transition-all text-white text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-3"
            >
              <span>Free Audit</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}