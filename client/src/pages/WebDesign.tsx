import { useState } from "react";
import { Link } from "wouter";
import { ArrowUpRight, Globe, Code, Smartphone, Zap, Search, ShieldCheck, ExternalLink, X } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { FAQSection } from "@/components/FAQSection";
import { Dialog, DialogContent, DialogClose, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import { useContactModal } from "@/contexts/ContactModalContext";
import midwestGritImage from "@/assets/images/portfolio-midwestgrit.png";
import jaymooreImage from "@/assets/images/portfolio-jaymoore.png";
import merchclubImage from "@/assets/images/portfolio-merchclub.png";
import tennisxImage from "@/assets/images/portfolio-tennisx.png";
import legacyImage from "@/assets/images/portfolio-legacy.png";
import goldoniImage from "@/assets/images/portfolio-goldoni.png";

const services = [
  {
    icon: Globe,
    title: "Custom Website Design",
    description: "Stunning, unique designs tailored to your brand. We create websites that capture attention and convert visitors into customers."
  },
  {
    icon: Code,
    title: "Web Development",
    description: "Clean, modern code built for performance. Fast-loading, secure websites that work flawlessly across all devices and browsers."
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description: "Mobile-first approach ensures your website looks perfect on phones, tablets, and desktops. Reach customers wherever they are."
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Lightning-fast load times and smooth interactions. We optimize every aspect for speed and user experience."
  },
  {
    icon: Search,
    title: "SEO Foundation",
    description: "Built-in search engine optimization to help your website rank higher. We structure your site for maximum visibility."
  },
  {
    icon: ShieldCheck,
    title: "Maintenance & Support",
    description: "Ongoing support to keep your website secure, updated, and running smoothly. We're here when you need us."
  }
];

const portfolioItems = [
  {
    title: "MIDWEST GRIT FITNESS",
    category: "WEB DESIGN",
    image: midwestGritImage,
    url: "https://midwest-grit-fitness.replit.app/"
  },
  {
    title: "TENNISX - AI VIDEO ANALYSIS",
    category: "WEB DESIGN",
    image: tennisxImage,
    url: "https://tennis-x-website.replit.app/"
  },
  {
    title: "JAY MOORE LANDSCAPING",
    category: "WEB DESIGN",
    image: jaymooreImage,
    url: "https://jaymoore.design/"
  },
  {
    title: "LEGACY WINDOW & DOOR",
    category: "WEB DESIGN",
    image: legacyImage,
    url: "https://legacywindowco.com/"
  },
  {
    title: "MERCH CLUB",
    category: "WEB DESIGN",
    image: merchclubImage,
    url: "https://merch-club.replit.app/"
  },
  {
    title: "GOLDONI LEGISLATURE",
    category: "WEB DESIGN",
    image: goldoniImage,
    url: "https://JessGoldoni.com"
  }
];

const webDesignFAQs = [
  {
    question: "How much does web design cost in Omaha?",
    answer: "Web design costs in Omaha typically range from $3,000 to $15,000+ depending on the project scope. At Bombshell Marketing, we tailor every website to your specific business needs—whether it's a simple branding site or a full e-commerce platform. We offer free consultations to provide an accurate quote based on your goals."
  },
  {
    question: "How long does it take to build a website?",
    answer: "Most custom websites take 4 to 8 weeks from kickoff to launch. This includes our discovery phase, custom design mockups, development, content integration, and thorough testing. Larger projects with e-commerce or custom functionality may take 8 to 12 weeks. We keep you updated at every stage."
  },
  {
    question: "Do you build mobile-friendly websites?",
    answer: "Absolutely. Every website we design at Bombshell Marketing is built with a mobile-first approach. Over 60% of web traffic comes from mobile devices, so we ensure your site looks and performs flawlessly on phones, tablets, and desktops. Responsive design is included in every project."
  },
  {
    question: "What platform do you build websites on?",
    answer: "We build custom websites using modern technologies like React, Next.js, and WordPress depending on your needs. For businesses that need to update content frequently, we set up user-friendly content management systems. For maximum performance and SEO, we often recommend custom-coded solutions that load faster than template-based sites."
  },
  {
    question: "Will I be able to update my website myself?",
    answer: "Yes! We build every website with ease of management in mind. Whether we use a CMS like WordPress or a custom solution, we provide training so you can update text, images, and content on your own. Plus, we offer ongoing maintenance and support packages if you'd rather have us handle updates."
  },
  {
    question: "Do you include SEO with web design?",
    answer: "Yes—SEO is built into every website we create. This includes proper site structure, fast load times, mobile optimization, meta tags, schema markup, image optimization, and clean code. We set the foundation for strong Google rankings from day one. We also offer ongoing SEO and digital marketing services to help you climb to the top of search results in Omaha and beyond."
  }
];

const processSteps = [
  {
    number: "01",
    title: "Discovery",
    description: "We learn about your business, goals, and target audience to create a strategic foundation for your website."
  },
  {
    number: "02",
    title: "Design",
    description: "We create custom mockups and wireframes, refining the visual design until it perfectly represents your brand."
  },
  {
    number: "03",
    title: "Development",
    description: "We build your website with clean, modern code, ensuring fast performance and seamless functionality."
  },
  {
    number: "04",
    title: "Launch",
    description: "After thorough testing, we launch your website and provide training so you can manage your content with confidence."
  }
];

export default function WebDesignPage() {
  const [selectedProject, setSelectedProject] = useState<{title: string, url: string} | null>(null);
  const { openContactModal } = useContactModal();

  return (
    <>
      <SEO 
        title="Web Design & Development | Omaha Website Design | Bombshell Marketing"
        description="Professional web design and development in Omaha, Nebraska. Custom websites that look stunning and perform flawlessly. Get your free website audit today."
        canonicalPath="/web-design"
        keywords="web design Omaha, website development Nebraska, custom website design, Omaha web developer, responsive web design"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
          { name: "Web Design", url: "/web-design" }
        ]}
        service={{
          name: "Web Design & Development",
          description: "Professional custom web design and development services in Omaha, Nebraska. Responsive websites built for performance and conversions.",
          serviceType: "Web Design"
        }}
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
            Web Design & Development
          </h1>
          <div className="flex items-center justify-center gap-2 text-white/70 text-sm uppercase tracking-widest">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-primary transition-colors">Services</Link>
            <span>/</span>
            <span className="text-white">Web Design</span>
          </div>
          <p className="mt-6 text-white/70 max-w-2xl mx-auto">
            Custom websites that don't just look stunning—they perform. We build high-octane digital experiences that convert visitors into customers.
          </p>
        </div>
      </section>

      {/* Featured Work */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-primary text-xl">✦</span>
            <span className="text-black/60 uppercase tracking-widest text-xs font-bold">Featured Work</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display text-black uppercase leading-[0.9] mb-12">
            Recent Web Projects
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioItems.map((item, index) => (
              <div 
                key={index}
                onClick={() => setSelectedProject({ title: item.title, url: item.url })}
                className="group cursor-pointer"
              >
                <div className="overflow-hidden mb-4 bg-gray-200 relative aspect-[4/3]">
                  <img 
                    src={item.image} 
                    alt={`${item.title} - Custom Web Design by Bombshell Marketing Omaha`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="bg-primary text-black px-4 py-2 text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                      Preview Website <ExternalLink className="w-4 h-4" />
                    </div>
                  </div>
                </div>
                <p className="text-[10px] font-bold text-black/50 uppercase tracking-widest mb-1">{item.category}</p>
                <h3 className="text-xl font-display text-black uppercase">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Website Preview Modal */}
      <Dialog open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
        <DialogContent className="max-w-[95vw] w-full h-[90vh] p-0 bg-black border-none rounded-xl overflow-hidden [&>button]:hidden">
          <VisuallyHidden.Root>
            <DialogTitle>{selectedProject?.title}</DialogTitle>
          </VisuallyHidden.Root>
          <div className="w-full h-full flex flex-col">
            <div className="bg-black text-white px-4 py-3 flex items-center justify-between border-b border-white/10">
              <div className="flex items-center gap-3">
                <h3 className="font-display uppercase text-lg">{selectedProject?.title}</h3>
                <a href={selectedProject?.url} target="_blank" rel="noopener noreferrer" className="text-xs text-white/50 hover:text-primary flex items-center gap-1">
                  Open in new tab <ExternalLink className="w-3 h-3" />
                </a>
              </div>
              <DialogClose asChild>
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 rounded-full h-8 w-8">
                  <X className="w-4 h-4" />
                </Button>
              </DialogClose>
            </div>
            <div className="flex-1 bg-white w-full h-full relative">
              {selectedProject && (
                <iframe 
                  src={selectedProject.url} 
                  className="w-full h-full border-0"
                  title={`${selectedProject.title} Website Preview`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                />
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="absolute inset-0 opacity-30 pointer-events-none mix-blend-multiply" 
             style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/noise.png")' }}>
        </div>
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-primary text-xl">✦</span>
            <span className="text-black/60 uppercase tracking-widest text-xs font-bold">What We Offer</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display text-black uppercase leading-[0.9] mb-12">
            Web Design Services
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div 
                  key={index}
                  className="group relative p-8 bg-white hover:bg-[#201cc5] transition-colors duration-300"
                >
                  <div className="w-14 h-14 rounded-lg bg-primary/20 border border-primary flex items-center justify-center mb-6 group-hover:bg-primary/30">
                    <IconComponent className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-display uppercase text-black group-hover:text-white mb-4 leading-tight transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-black/60 group-hover:text-white/70 transition-colors">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Bombshell Section - Hidden visually, kept for SEO */}
      <section className="sr-only" aria-hidden="true">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-primary text-xl">✦</span>
              <span className="text-black/60 uppercase tracking-widest text-xs font-bold">Why Us</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display text-black uppercase leading-[0.9] mb-8">
              Why Choose Bombshell for Web Design in Omaha
            </h2>

            <div className="space-y-6 text-black/70 leading-relaxed">
              <p>
                At Bombshell Marketing, we understand that your website is more than just a digital brochure—it's the foundation of your brand's online presence. As an Omaha-based web design agency, we've helped dozens of local businesses across Nebraska build websites that not only look exceptional but drive real results. From small startups in the Old Market to established companies in West Omaha, we bring the same level of dedication and creativity to every project.
              </p>
              <p>
                What sets us apart from other web design agencies in Omaha is our holistic approach. We don't just design websites—we craft complete digital experiences that align with your brand identity. Our team works closely with you to understand your business goals, target audience, and competitive landscape before writing a single line of code. This strategic foundation ensures your website serves as a powerful tool for growth, not just a pretty face online. Take a look at our <Link href="/portfolio" className="text-[#201cc5] font-bold hover:underline">portfolio</Link> to see the results for yourself.
              </p>
              <p>
                Every website we build is custom-designed and hand-coded for maximum performance. We don't rely on cookie-cutter templates—your business is unique, and your website should be too. Our designs are rooted in your brand's visual identity, and if you need help refining your brand before we build, our <Link href="/logo-branding" className="text-[#201cc5] font-bold hover:underline">logo and branding services</Link> can create a cohesive look that carries across every touchpoint, from your website to your business cards.
              </p>
              <p>
                Beyond beautiful design, we prioritize the technical details that matter: fast load times, mobile responsiveness, clean code architecture, and SEO best practices baked in from the start. Nebraska businesses deserve a web partner who understands the local market and delivers websites that compete on a national level. Whether you need a sleek single-page site or a complex e-commerce platform, Bombshell Marketing is ready to bring your vision to life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-[#1a1a1a]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-display text-white uppercase leading-[0.9] mb-4 text-center">
            Our Design Process
          </h2>
          <p className="text-white/60 text-center max-w-2xl mx-auto mb-16">
            A proven methodology that delivers results. Every project follows our strategic approach.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="text-7xl font-display text-primary mb-4">{step.number}</div>
                <h3 className="text-lg font-display uppercase text-white mb-3">{step.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQSection faqs={webDesignFAQs} heading="Web Design FAQs" subheading="Common questions about our Omaha web design services" />

      {/* CTA Section */}
      <section className="bg-[#201cc5] py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay" 
             style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/noise.png")' }}>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-display text-white uppercase mb-6">
            Ready for a New Website?
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto mb-8">
            Let's create a website that works as hard as you do. Get a free website audit and see how we can transform your online presence.
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
