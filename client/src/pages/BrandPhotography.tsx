import { useEffect } from "react";
import { Link } from "wouter";
import { ArrowUpRight, Camera, Users, Building, ShoppingBag, Utensils, Heart } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { CallToAction } from "@/components/CallToAction";
import { SEO } from "@/components/SEO";
import { FAQSection } from "@/components/FAQSection";

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

const photographyFAQs = [
  {
    question: "How much does brand photography cost in Omaha?",
    answer: "Brand photography sessions in Omaha typically range from $500 to $3,000+ depending on the scope, location, and number of deliverables. At Bombshell Marketing, we offer packages for headshots, product photography, lifestyle shoots, and full-day brand story sessions. Contact us for a custom quote based on your specific needs."
  },
  {
    question: "How long is a typical photo shoot?",
    answer: "Most brand photography sessions last 2 to 4 hours, though full-day shoots are available for larger projects. Headshot sessions can be completed in about an hour. We plan every detail in advance so your time on set is efficient and productive."
  },
  {
    question: "How many photos will I receive?",
    answer: "The number of final edited photos depends on your package, but most sessions deliver 30 to 100+ professionally edited images. Every photo is individually color-corrected, retouched, and optimized for both web and print use."
  },
  {
    question: "Do you provide styling and creative direction?",
    answer: "Yes! Our team provides full creative direction including wardrobe guidance, prop styling, and shot composition. We create a detailed shot list before every session so we capture everything you need for your marketing materials, website, and social media."
  },
  {
    question: "Where do photo shoots take place?",
    answer: "We shoot on location throughout Omaha and Nebraska—at your business, studio spaces, outdoor locations, or anywhere that tells your brand story. We also have access to professional studio spaces in Omaha for controlled lighting setups and clean product photography."
  },
  {
    question: "How quickly will I receive my photos?",
    answer: "Most clients receive their fully edited photos within 7 to 14 business days after the shoot. Rush delivery is available for time-sensitive projects. We deliver images through a private online gallery where you can download, share, and organize your photos."
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
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
          { name: "Brand Photography", url: "/brand-photography" }
        ]}
        service={{
          name: "Brand Photography",
          description: "Professional brand photography services in Omaha, Nebraska. Headshots, product photography, food photography, and lifestyle brand imagery.",
          serviceType: "Photography"
        }}
      />
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-[#EDE3E1] pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay" 
             style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/noise.png")' }}>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-display text-[#111111] uppercase mb-6">
            Brand Photography
          </h1>
          <p className="text-[#2B2B2B]/70 max-w-2xl mx-auto mb-6">
            Capture the raw energy of your brand with professional photography that tells your story instantly and makes scrolling thumbs stop dead in their tracks.
          </p>
          <div className="flex items-center justify-center gap-2 text-[#2B2B2B]/70 text-sm uppercase tracking-widest">
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
                    alt={`${img.title} - Brand Photography by Bombshell Marketing Omaha`}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <div>
                      <p className="text-primary text-xs uppercase tracking-wider">{img.category}</p>
                      <p className="text-[#111111] text-sm font-bold">{img.title}</p>
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
                      ? 'bg-[#EDE3E1]' 
                      : 'bg-[#1a1a2e]'
                  }`}
                >
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-14 h-14 rounded-lg bg-primary/20 border border-primary flex items-center justify-center">
                      <IconComponent className="w-7 h-7 text-primary" />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-display uppercase text-[#111111] mb-4 leading-tight">
                      {service.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-[#2B2B2B]/60">
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
              <span className="text-[#2B2B2B]/60 uppercase tracking-widest text-xs font-bold">Our Process</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display text-[#111111] uppercase">
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
                <h3 className="text-xl font-display text-[#111111] uppercase mb-2">{item.title}</h3>
                <p className="text-[#2B2B2B]/60 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Bombshell Section - Hidden visually, kept for SEO */}
      <section className="sr-only" aria-hidden="true">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-primary text-xl">✦</span>
              <span className="text-black/60 uppercase tracking-widest text-xs font-bold">Why Bombshell</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-display text-black uppercase leading-[0.9] mb-10">
              Why Omaha Businesses Trust Bombshell for Brand Photography
            </h2>

            <div className="space-y-6 text-black/70 text-base leading-relaxed">
              <p>
                Omaha is home to a thriving community of restaurants, retail shops, service providers, and startups—each with a unique story to tell. At Bombshell Marketing, our brand photography team understands the local market and knows how to create images that resonate with Midwestern audiences while standing out in a crowded digital landscape. Whether you need professional headshots for your leadership team or lifestyle imagery for a new product launch, we bring the creative eye and technical skill to make it happen.
              </p>

              <p>
                We've partnered with some of Omaha's most recognized brands to deliver photography that drives real results. From capturing the energy and flavor of local restaurants like <Link href="/portfolio/good-life" className="text-[#EDE3E1] underline hover:text-primary transition-colors">Good Life Eat & Drink</Link> to producing polished product photography for growing e-commerce brands, our portfolio speaks for itself. Every shoot is backed by strategic thinking—we don't just take pretty pictures, we create visual assets designed to convert visitors into customers.
              </p>

              <p>
                What sets us apart is our full-service approach. Brand photography is just one piece of the puzzle. We integrate your photography with <Link href="/web-design" className="text-[#EDE3E1] underline hover:text-primary transition-colors">custom web design</Link>, social media strategy, and brand identity so every visual touchpoint is consistent and compelling. Small businesses in Omaha trust us because we treat every project—whether it's a quick headshot session or a full-day brand shoot—with the same level of professionalism and attention to detail.
              </p>

              <p>
                Our photographers are experienced in a wide range of industries, from food and beverage to professional services, fitness, and real estate. We stay current with the latest trends in commercial photography and invest in top-tier equipment to ensure every image meets the highest standards. If you're looking for a brand photographer in Omaha who genuinely cares about your business and delivers photos you'll be proud to share, Bombshell Marketing is the team to call.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FAQSection faqs={photographyFAQs} heading="Brand Photography FAQs" subheading="Common questions about our Omaha photography services" />
      <CallToAction />
      <Footer />
    </div>
    </>
  );
}
