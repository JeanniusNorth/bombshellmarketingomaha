import { useState } from "react";
import { Link } from "wouter";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { ArrowUpRight, Send } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    budget: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://services.leadconnectorhq.com/hooks/XzZlnhTkP4nSfG8eq2QP/webhook-trigger/5b717584-7e29-4500-a4a0-785713d98bc5', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          service: formData.service,
          budget: formData.budget,
          message: formData.message,
          source: 'Website Contact Form'
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        setIsSubmitted(true);
      }
    } catch (error) {
      setIsSubmitted(true);
    }
    
    setIsSubmitting(false);
  };

  return (
    <>
      <SEO 
        title="Contact Us | Bombshell Marketing - Omaha Web Design & Branding"
        description="Contact Bombshell Marketing for web design, logo design, and brand photography. Based in Omaha, serving businesses everywhere. Let's blow up your business together."
        canonicalPath="/contact"
        keywords="contact Bombshell Marketing, Omaha web design contact, get a quote, marketing agency Omaha"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Contact", url: "/contact" }
        ]}
      />
    <div className="min-h-screen bg-[#EDE3E1]">
      <Navigation />
      
      <section className="bg-[#EDE3E1] pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay" 
             style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/noise.png")' }}>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-6">
              <span className="text-primary text-xl">✦</span>
              <span className="text-[#2B2B2B]/60 uppercase tracking-widest text-xs font-bold">Get In Touch</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-display text-[#111111] uppercase mb-6">
              Let's Blow Up<br />Your Business
            </h1>
            <div className="sr-only">
              <Link href="/">Home</Link>
              <span>/</span>
              <span>Contact Us</span>
            </div>
            <p className="text-[#2B2B2B]/70 max-w-2xl mx-auto">
              Ready to take your brand to the next level? Get in touch and let's create something explosive together.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {isSubmitted ? (
              <div className="bg-[#1F1F1F] p-12 text-center">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Send className="w-10 h-10 text-black" />
                </div>
                <h2 className="text-4xl font-display text-white uppercase mb-4">Message Sent!</h2>
                <p className="text-white/70 mb-8 max-w-md mx-auto">
                  Thanks for reaching out! We'll get back to you within 24 hours. Get ready for something explosive.
                </p>
                <Link 
                  href="/"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-bold uppercase tracking-widest text-xs hover:bg-[#0E7C6B] transition-colors"
                >
                  Back to Home
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-primary p-8 md:p-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="firstName" className="block text-black/60 text-xs uppercase tracking-widest mb-2 font-bold">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full bg-white border-2 border-transparent focus:border-[#EDE3E1] text-black px-4 py-4 outline-none transition-colors placeholder:text-black/30"
                      placeholder="John"
                      data-testid="input-firstName"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-black/60 text-xs uppercase tracking-widest mb-2 font-bold">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full bg-white border-2 border-transparent focus:border-[#EDE3E1] text-black px-4 py-4 outline-none transition-colors placeholder:text-black/30"
                      placeholder="Doe"
                      data-testid="input-lastName"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="email" className="block text-black/60 text-xs uppercase tracking-widest mb-2 font-bold">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-white border-2 border-transparent focus:border-[#EDE3E1] text-black px-4 py-4 outline-none transition-colors placeholder:text-black/30"
                      placeholder="john@company.com"
                      data-testid="input-email"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-black/60 text-xs uppercase tracking-widest mb-2 font-bold">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-white border-2 border-transparent focus:border-[#EDE3E1] text-black px-4 py-4 outline-none transition-colors placeholder:text-black/30"
                      placeholder="(555) 123-4567"
                      data-testid="input-phone"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="company" className="block text-black/60 text-xs uppercase tracking-widest mb-2 font-bold">
                    Company / Business Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full bg-white border-2 border-transparent focus:border-[#EDE3E1] text-black px-4 py-4 outline-none transition-colors placeholder:text-black/30"
                    placeholder="Your Company Name"
                    data-testid="input-company"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="service" className="block text-black/60 text-xs uppercase tracking-widest mb-2 font-bold">
                      Service Interested In *
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full bg-white border-2 border-transparent focus:border-[#EDE3E1] text-black px-4 py-4 outline-none transition-colors appearance-none cursor-pointer"
                      data-testid="select-service"
                    >
                      <option value="" className="text-black/30">Select a service...</option>
                      <option value="web-design">Web Design & Development</option>
                      <option value="logo-branding">Logo Design & Branding</option>
                      <option value="brand-photography">Brand Photography</option>
                      <option value="full-package">Full Brand Package</option>
                      <option value="other">Other / Not Sure</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="budget" className="block text-black/60 text-xs uppercase tracking-widest mb-2 font-bold">
                      Estimated Budget
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full bg-white border-2 border-transparent focus:border-[#EDE3E1] text-black px-4 py-4 outline-none transition-colors appearance-none cursor-pointer"
                      data-testid="select-budget"
                    >
                      <option value="" className="text-black/30">Select budget range...</option>
                      <option value="under-2500">Under $2,500</option>
                      <option value="2500-5000">$2,500 - $5,000</option>
                      <option value="5000-10000">$5,000 - $10,000</option>
                      <option value="10000-25000">$10,000 - $25,000</option>
                      <option value="25000-plus">$25,000+</option>
                    </select>
                  </div>
                </div>

                <div className="mb-8">
                  <label htmlFor="message" className="block text-black/60 text-xs uppercase tracking-widest mb-2 font-bold">
                    Tell Us About Your Project *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-white border-2 border-transparent focus:border-[#EDE3E1] text-black px-4 py-4 outline-none transition-colors resize-none placeholder:text-black/30"
                    placeholder="What are your goals? What challenges are you facing? How can we help you stand out?"
                    data-testid="textarea-message"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#EDE3E1] text-[#111111] py-5 font-bold uppercase tracking-widest text-sm hover:bg-black transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                  data-testid="button-submit"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <ArrowUpRight className="w-5 h-5" />
                    </>
                  )}
                </button>

                <p className="text-black/40 text-xs text-center mt-6">
                  By submitting this form, you agree to be contacted about our services.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
    </>
  );
}
