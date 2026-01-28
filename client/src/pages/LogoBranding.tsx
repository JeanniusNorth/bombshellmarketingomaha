import { useEffect } from "react";
import { Link } from "wouter";
import { ArrowUpRight, Palette, PenTool, Layers, FileText, Brush, Sparkles } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { CallToAction } from "@/components/CallToAction";

const brandingServices = [
  {
    icon: PenTool,
    title: "Logo Design",
    description: "Custom logo designs that capture your brand's essence. We create memorable, versatile logos that work across all platforms and applications.",
    highlight: true
  },
  {
    icon: Palette,
    title: "Brand Color Palette",
    description: "Strategic color selection that evokes the right emotions and sets you apart from competitors. Includes primary, secondary, and accent colors.",
    highlight: false
  },
  {
    icon: FileText,
    title: "Typography Systems",
    description: "Carefully curated font pairings that reflect your brand personality. From bold headers to readable body text, we ensure consistency across all touchpoints.",
    highlight: false
  },
  {
    icon: Layers,
    title: "Brand Guidelines",
    description: "Comprehensive brand style guides that ensure consistency across your entire organization. Everything your team needs to represent your brand correctly.",
    highlight: true
  },
  {
    icon: Brush,
    title: "Visual Identity",
    description: "Complete visual identity systems including patterns, icons, imagery styles, and graphic elements that make your brand instantly recognizable.",
    highlight: false
  },
  {
    icon: Sparkles,
    title: "Brand Strategy",
    description: "Deep-dive into your brand positioning, target audience, and competitive landscape to create a foundation for lasting brand success.",
    highlight: false
  }
];

const portfolioLogos = [
  {
    src: "/logo-the-league.png",
    title: "The League",
    category: "Men's Health Clinic"
  }
];

export default function LogoBrandingPage() {
  useEffect(() => {
    document.title = "Logo Design & Branding Omaha | Professional Brand Identity Services";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professional logo design and branding services in Omaha, Nebraska. Custom logos, brand identity, style guides, and visual design. Build a brand that stands out with Bombshell AI Marketing.');
    }
    window.scrollTo(0, 0);
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
            Logo & Branding
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto mb-6">
            Your logo is the face of your brand. We create distinctive, memorable identities that capture your essence and leave lasting impressions.
          </p>
          <div className="flex items-center justify-center gap-2 text-white/70 text-sm uppercase tracking-widest">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-primary transition-colors">Services</Link>
            <span>/</span>
            <span className="text-primary">Logo & Branding</span>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display text-black uppercase mb-6">
              Build a Brand That Stands Out
            </h2>
            <p className="text-black/60 text-lg leading-relaxed mb-8">
              In a crowded marketplace, your brand identity is everything. We combine strategic thinking with creative excellence to develop logos and brand systems that connect with your audience and drive business growth.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
              <div className="text-center">
                <div className="text-4xl font-display text-[#201cc5] mb-2">200+</div>
                <div className="text-sm text-black/50 uppercase tracking-wider">Logos Designed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-display text-[#201cc5] mb-2">50+</div>
                <div className="text-sm text-black/50 uppercase tracking-wider">Brand Systems</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-display text-[#201cc5] mb-2">15+</div>
                <div className="text-sm text-black/50 uppercase tracking-wider">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-display text-[#201cc5] mb-2">100%</div>
                <div className="text-sm text-black/50 uppercase tracking-wider">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 bg-[#f0f0f0]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display text-black uppercase mb-4">
              Recent Branding Work
            </h2>
            <p className="text-black/60 max-w-2xl mx-auto">
              A selection of brand identities we've created for businesses across industries.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            {portfolioLogos.map((item, index) => (
              <div key={index} className="group text-center">
                <div className="overflow-hidden mb-6 bg-black rounded-lg">
                  <img 
                    src={item.src} 
                    alt={item.title}
                    className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <p className="text-[10px] font-bold text-black/50 uppercase tracking-widest mb-1">{item.category}</p>
                <h3 className="text-xl font-display text-black uppercase">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display text-black uppercase mb-4">
              Our Branding Services
            </h2>
            <p className="text-black/60 max-w-2xl mx-auto">
              From initial concept to complete brand system, we offer comprehensive branding solutions tailored to your needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {brandingServices.map((service, index) => (
              <div 
                key={index}
                className={`p-8 transition-all hover:-translate-y-1 ${
                  service.highlight 
                    ? 'bg-[#201cc5] text-white' 
                    : 'bg-white text-black'
                }`}
              >
                <service.icon className={`w-10 h-10 mb-6 ${service.highlight ? 'text-primary' : 'text-[#201cc5]'}`} />
                <h3 className="text-xl font-display uppercase mb-4">{service.title}</h3>
                <p className={`text-sm leading-relaxed ${service.highlight ? 'text-white/70' : 'text-black/60'}`}>
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-[#121212]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display text-white uppercase mb-4">
              Our Design Process
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              A proven methodology that delivers results. Every project follows our strategic approach.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", desc: "Deep dive into your business, audience, and competition to understand what makes you unique." },
              { step: "02", title: "Concept", desc: "Multiple creative directions exploring different visual approaches for your brand identity." },
              { step: "03", title: "Refine", desc: "Collaborative refinement of the chosen direction until it perfectly represents your brand." },
              { step: "04", title: "Deliver", desc: "Complete brand package with all files, guidelines, and assets ready for immediate use." }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-6xl font-display text-primary mb-4">{item.step}</div>
                <h3 className="text-xl font-display text-white uppercase mb-3">{item.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CallToAction />

      <Footer />
    </div>
  );
}
