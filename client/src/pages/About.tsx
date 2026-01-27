import { useEffect } from "react";
import { Link } from "wouter";
import { ArrowUpRight } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Team } from "@/components/Team";
import { Footer } from "@/components/Footer";

export default function AboutPage() {
  useEffect(() => {
    document.title = "About Us | Bombshell AI Marketing - Omaha Web Design & Branding Agency";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Meet the team behind Bombshell AI Marketing. Based in Omaha with 20+ years experience in web design, logo design, and brand photography. Serving businesses everywhere.');
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
            <a 
              href="https://bombshellaimarketing.com/contact" 
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