import { Link } from "wouter";
import { ArrowUpRight } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Portfolio } from "@/components/Portfolio";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { useContactModal } from "@/contexts/ContactModalContext";

export default function PortfolioPage() {
  const { openContactModal } = useContactModal();

  return (
    <>
      <SEO 
        title="Portfolio | Web Design & Brand Photography Omaha | Bombshell Marketing"
        description="View our portfolio of web design, logo design, and brand photography projects for Omaha and Nebraska businesses. Award-winning creative work by Bombshell Marketing."
        canonicalPath="/portfolio"
        keywords="web design portfolio Omaha, brand photography portfolio, logo design examples, Nebraska web design projects"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Portfolio", url: "/portfolio" }
        ]}
      />
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-[#D9A3B0] pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay" 
             style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/noise.png")' }}>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-display text-[#1A1A1A] uppercase mb-6">
            Our Portfolio
          </h1>
          <div className="flex items-center justify-center gap-2 text-[#2A2A2A]/70 text-sm uppercase tracking-widest">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white">Portfolio</span>
          </div>
          <p className="mt-6 text-[#2A2A2A]/70 max-w-2xl mx-auto">
            Explore our collection of web design, logo design, and brand photography projects. Based in Omaha, serving businesses everywhere.
          </p>
        </div>
      </section>

      {/* Portfolio Section */}
      <Portfolio />

      {/* CTA Section */}
      <section className="bg-[#D9A3B0] py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay" 
             style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/noise.png")' }}>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-display text-[#1A1A1A] uppercase mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-[#2A2A2A]/70 max-w-2xl mx-auto mb-8">
            Let's create something explosive together. Get a free brand audit and see how we can transform your business with stunning web design, logo design, or brand photography.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button 
              onClick={openContactModal}
              className="group px-8 py-4 bg-primary text-[#1A1A1A] border border-primary hover:bg-white hover:text-black hover:border-[#1A1A1A] transition-all text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-3"
            >
              <span>Contact Us</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <a 
              href="https://audit.bombshellmarketingomaha.com/" 
              className="group px-8 py-4 border border-[#1A1A1A]/20 hover:bg-primary hover:text-white hover:border-primary transition-all text-[#1A1A1A] text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-3"
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