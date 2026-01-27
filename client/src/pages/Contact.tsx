import { useEffect } from "react";
import { Link } from "wouter";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export default function ContactPage() {
  useEffect(() => {
    document.title = "Contact Us | Bombshell AI Marketing - Omaha Web Design & Branding";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Contact Bombshell AI Marketing for web design, logo design, and brand photography. Based in Omaha, serving businesses everywhere. Let\'s blow up your business together.');
    }

    const script = document.createElement('script');
    script.src = 'https://link.msgsndr.com/js/form_embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#201cc5]">
      <Navigation />
      
      {/* Hero + Form Section */}
      <section className="bg-[#201cc5] pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay" 
             style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/noise.png")' }}>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-display text-white uppercase mb-6">
            Let's Blow Up<br />Your Business
          </h1>
          <div className="sr-only">
            <Link href="/">Home</Link>
            <span>/</span>
            <span>Contact Us</span>
          </div>
          <p className="text-white/70 max-w-2xl mx-auto mb-12">
            Ready to take your brand to the next level? Get in touch and let's create something explosive together.
          </p>

          {/* Contact Form */}
          <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-lg shadow-lg">
            <iframe
              src="https://api.leadconnectorhq.com/widget/form/7KhLw01ZTte9Et1CkSOm"
              style={{ width: '100%', height: '830px', border: 'none', borderRadius: '3px' }}
              id="inline-7KhLw01ZTte9Et1CkSOm"
              data-layout="{'id':'INLINE'}"
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="Form 1"
              data-height="830"
              data-layout-iframe-id="inline-7KhLw01ZTte9Et1CkSOm"
              data-form-id="7KhLw01ZTte9Et1CkSOm"
              title="Contact Form"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}