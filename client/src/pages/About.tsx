import { Link } from "wouter";
import { ArrowUpRight } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Team } from "@/components/Team";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { useContactModal } from "@/contexts/ContactModalContext";
import jeannieImage from "@/assets/images/team-jeannie.png";
import jessImage from "@/assets/images/team-jess.png";

export default function AboutPage() {
  const { openContactModal } = useContactModal();

  return (
    <>
      <SEO 
        title="About Us | Bombshell Marketing - Omaha Web Design & Branding Agency"
        description="Meet the team behind Bombshell Marketing. Based in Omaha with 20+ years experience in web design, logo design, and brand photography. Serving businesses everywhere."
        canonicalPath="/about"
        keywords="Omaha marketing agency, about Bombshell Marketing, web design team Omaha, branding agency Nebraska"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "About Us", url: "/about" }
        ]}
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
            About Us
          </h1>
          <div className="flex items-center justify-center gap-2 text-white/70 text-sm uppercase tracking-widest">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white">About Us</span>
          </div>
          <p className="mt-6 text-white/70 max-w-2xl mx-auto">
            Based in Omaha, we combine AI-powered creativity with 20+ years of marketing expertise to deliver stunning results for businesses everywhere.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <Team />

      {/* Jeannie Bio Section */}
      <section className="bg-white py-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden">
                <img 
                  src={jeannieImage} 
                  alt="Jeannie North"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary flex items-center justify-center">
                <span className="text-black text-4xl">✦</span>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-primary text-xl">✦</span>
                <span className="text-black/60 uppercase tracking-widest text-xs font-bold">Digital Marketer & Creative Director</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-display text-black uppercase leading-[0.9] mb-6">
                Jeannie North
              </h2>
              <div className="space-y-4 text-black/70 leading-relaxed">
                <p>
                  Jeannie North is a digital marketing strategist, brand designer, and growth-driven founder who builds bold brands that convert. She leads full-scale brand execution, from logos and visual systems to high-performing websites, content strategy, and revenue-focused campaigns.
                </p>
                <p>
                  With a foundation in web development and years of experience as a commercial photographer, Jeannie operates at the intersection of creative and technical. She understands how brands should look, how they should function, and how they actually make money. That edge has helped her build and scale multiple brands from scratch, several reaching viral traction through sharp positioning, high-impact visuals, and unapologetically direct messaging.
                </p>
                <p>
                  Today, Jeannie runs Bombshell Marketing, leading projects across digital marketing, AI-powered tools, e-commerce, and content platforms. Her work helps brands stand out fast, scale with intention, and stop blending in.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Jess Bio Section */}
      <section className="bg-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30 pointer-events-none mix-blend-multiply" 
             style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/noise.png")' }}>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-primary text-xl">✦</span>
                <span className="text-black/60 uppercase tracking-widest text-xs font-bold">Digital Marketer & Strategist</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-display text-black uppercase leading-[0.9] mb-6">
                Jess Goldoni
              </h2>
              <div className="space-y-4 text-black/70 leading-relaxed">
                <p>
                  Jess Goldoni is a digital marketing strategist and business consultant with more than 20 years of experience helping organizations grow with clarity, precision, and results. She has led marketing strategy and digital transformation initiatives for businesses and campaigns across industries including law, finance, healthcare, agriculture, and economic development.
                </p>
                <p>
                  Jess is known for cutting through complexity and turning scattered ideas into focused, actionable marketing systems. In addition to her consulting work, she has taught at the University of Nebraska Omaha and delivers corporate AI and marketing strategy training, helping teams modernize how they attract, convert, and retain customers.
                </p>
              </div>
            </div>
            <div className="relative order-1 lg:order-2">
              <div className="aspect-[4/5] overflow-hidden">
                <img 
                  src={jessImage} 
                  alt="Jess Goldoni"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary flex items-center justify-center">
                <span className="text-black text-4xl">✦</span>
              </div>
            </div>
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
            Ready to Work Together?
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto mb-8">
            Let's create something explosive together. Get a free brand audit and see how our team can transform your business with stunning web design, logo design, or brand photography.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button 
              onClick={openContactModal}
              className="group px-8 py-4 bg-primary text-black border border-primary hover:bg-white hover:text-black hover:border-white transition-all text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-3"
            >
              <span>Contact Us</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <a 
              href="https://audit.bombshellmarketingomaha.com/" 
              className="group px-8 py-4 border border-white/40 hover:bg-primary hover:text-black hover:border-primary transition-all text-white text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-3"
            >
              <span>Free Website Audit</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
    </>
  );
}