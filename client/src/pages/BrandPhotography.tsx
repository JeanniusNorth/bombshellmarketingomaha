import { useEffect } from "react";
import { Link } from "wouter";
import { ArrowUpRight, Camera, Users, Building, ShoppingBag, Utensils, Heart } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { CallToAction } from "@/components/CallToAction";
import { SEO } from "@/components/SEO";

const photographyServices = [
  {
    icon: Users,
    title: "Headshots & Team Photos",
    description: "Professional headshots and team photography that capture personality and build trust. Perfect for LinkedIn, websites, and marketing materials.",
    highlight: false
  },
  {
    icon: Building,
    title: "Office & Location Shots",
    description: "Showcase your workspace, storefront, or location with stunning architectural and interior photography that tells your brand story.",
    highlight: true
  },
  {
    icon: ShoppingBag,
    title: "Product Photography",
    description: "Clean, compelling product shots for e-commerce, catalogs, and social media. Make your products irresistible with professional lighting and styling.",
    highlight: false
  },
  {
    icon: Utensils,
    title: "Food & Beverage",
    description: "Mouth-watering food photography that makes scrollers stop. Perfect for restaurants, cafes, and food brands looking to elevate their visual presence.",
    highlight: false
  },
  {
    icon: Heart,
    title: "Lifestyle & Brand Story",
    description: "Authentic lifestyle imagery that connects your brand with your audience. We capture the moments that define your brand personality.",
    highlight: true
  },
  {
    icon: Camera,
    title: "Event Coverage",
    description: "Professional event photography for corporate events, launches, and special occasions. Capture the energy and excitement of your brand moments.",
    highlight: false
  }
];

const portfolioImages = [
  {
    src: "/photo-headshot.png",
    category: "Headshots",
    title: "Professional Portrait"
  },
  {
    src: "/photo-churro.png",
    category: "Food & Beverage",
    title: "Dessert Styling"
  },
  {
    src: "/photo-pizza.png",
    category: "Food & Beverage",
    title: "Restaurant Menu"
  },
  {
    src: "/photo-product.png",
    category: "Product",
    title: "Branded Merchandise"
  }
];

export default function BrandPhotographyPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEO 
        title="Brand Photography Omaha | Professional Business & Product Photography"
        description="Professional brand photography in Omaha, Nebraska. Headshots, product photography, food photography, and lifestyle brand imagery. Elevate your visual presence with Bombshell Marketing."
        canonicalPath="/brand-photography"
        keywords="brand photography Omaha, product photography Nebraska, headshots Omaha, food photography, commercial photographer"
      />
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-[#201cc5] pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay" 
             style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/noise.png")' }}>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-display text-white uppercase mb-6">
            Brand Photography
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto mb-6">
            Capture the raw energy of your brand with professional photography that tells your story instantly and makes scrolling thumbs stop dead in their tracks.
          </p>
          <div className="flex items-center justify-center gap-2 text-white/70 text-sm uppercase tracking-widest">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-primary transition-colors">Services</Link>
            <span>/</span>
            <span className="text-white">Brand Photography</span>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="bg-[#e8e8e8] py-20 relative">
        <div className="absolute inset-0 opacity-30 pointer-events-none mix-blend-multiply" 
             style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/noise.png")' }}>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-primary text-xl">✦</span>
                <span className="text-black/60 uppercase tracking-widest text-xs font-bold">Visual Storytelling</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-display text-black uppercase leading-[0.9] mb-6">
                Photography That <br/>Elevates Your Brand
              </h2>
              <p className="text-black/60 text-sm leading-relaxed mb-8">
                Based in Omaha, our professional photographers specialize in creating stunning visual content that captures the essence of your brand. From corporate headshots to lifestyle imagery, we deliver photos that connect with your audience and drive results.
              </p>
              <div className="flex gap-8">
                <div>
                  <p className="text-4xl font-display text-black mb-1">500<span className="text-primary">+</span></p>
                  <p className="text-xs text-black/50 uppercase tracking-wider">Photo Sessions</p>
                </div>
                <div>
                  <p className="text-4xl font-display text-black mb-1">100<span className="text-primary">%</span></p>
                  <p className="text-xs text-black/50 uppercase tracking-wider">Client Satisfaction</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {portfolioImages.slice(0, 4).map((img, i) => (
                <div key={i} className="relative overflow-hidden group">
                  <img 
                    src={img.src} 
                    alt={img.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <div>
                      <p className="text-primary text-xs uppercase tracking-wider">{img.category}</p>
                      <p className="text-white text-sm font-bold">{img.title}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Photography Services Grid */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-primary text-xl">✦</span>
              <span className="text-black/60 uppercase tracking-widest text-xs font-bold">What We Offer</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display text-black uppercase leading-[0.9] mb-12">
              Photography Services
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {photographyServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div 
                  key={index}
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
                  </div>

                  <div>
                    <h3 className="text-xl font-display uppercase text-white mb-4 leading-tight">
                      {service.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-white/60">
                      {service.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-[#1a1a1a] py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="text-primary text-xl">✦</span>
              <span className="text-white/60 uppercase tracking-widest text-xs font-bold">Our Process</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display text-white uppercase">
              How It Works
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", desc: "We learn about your brand, goals, and vision for the shoot." },
              { step: "02", title: "Planning", desc: "We create a shot list, scout locations, and plan every detail." },
              { step: "03", title: "Shoot Day", desc: "Professional photography session with expert direction and styling." },
              { step: "04", title: "Delivery", desc: "Edited, polished images delivered ready for use across all platforms." }
            ].map((item, i) => (
              <div key={i} className="text-center">
                <p className="text-6xl font-display text-primary mb-4">{item.step}</p>
                <h3 className="text-xl font-display text-white uppercase mb-2">{item.title}</h3>
                <p className="text-white/60 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CallToAction />
      <Footer />
    </div>
    </>
  );
}
