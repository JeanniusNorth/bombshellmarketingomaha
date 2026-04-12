import { useEffect } from "react";
import { Link } from "wouter";
import { ArrowUpRight, Target, TrendingUp, BarChart3, Users, Megaphone, Zap, Quote } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { CallToAction } from "@/components/CallToAction";
import { FAQSection } from "@/components/FAQSection";
import { SEO } from "@/components/SEO";
import chrisImage from "@/assets/images/case-study-chris.jpg";

const strategyServices = [
  {
    icon: Target,
    title: "Strategic Planning",
    description: "Comprehensive marketing strategies tailored to your business goals. We analyze your market, competition, and audience to create actionable roadmaps for growth.",
    highlight: true
  },
  {
    icon: TrendingUp,
    title: "Growth Marketing",
    description: "Data-driven strategies designed to accelerate your business growth. From acquisition to retention, we optimize every stage of your customer journey.",
    highlight: false
  },
  {
    icon: BarChart3,
    title: "Analytics & Insights",
    description: "Turn data into decisions. We set up tracking, analyze performance, and provide actionable insights that drive continuous improvement.",
    highlight: false
  },
  {
    icon: Users,
    title: "Audience Research",
    description: "Deep-dive into your target market to understand their needs, behaviors, and pain points. Build marketing that truly resonates with your ideal customers.",
    highlight: true
  },
  {
    icon: Megaphone,
    title: "Campaign Strategy",
    description: "Multi-channel campaign planning that maximizes your marketing budget. We create integrated campaigns that work together to achieve your goals.",
    highlight: false
  },
  {
    icon: Zap,
    title: "Digital Transformation",
    description: "Modernize your marketing approach with the latest digital tools and techniques. From automation to AI, we help you stay ahead of the curve.",
    highlight: false
  }
];

const strategyFAQs = [
  {
    question: "How much does marketing strategy cost in Omaha?",
    answer: "Marketing strategy services in Omaha typically range from $2,000 to $10,000+ depending on the scope and duration. At Bombshell Marketing, we offer one-time strategic plans as well as ongoing monthly retainers for businesses that want continuous growth. Every engagement starts with a free consultation to understand your goals and budget."
  },
  {
    question: "How long before I see results from marketing?",
    answer: "Initial results from a well-executed marketing strategy can appear within 30 to 90 days, with significant momentum building over 3 to 6 months. SEO and content marketing are long-term investments that compound over time, while paid advertising and social media campaigns can drive immediate traffic and leads."
  },
  {
    question: "Do you offer ongoing marketing support?",
    answer: "Yes—many of our Omaha clients partner with us on an ongoing basis for continuous marketing support. Our monthly retainer packages include strategy refinement, campaign management, performance reporting, and proactive recommendations. We become an extension of your team, dedicated to your growth."
  },
  {
    question: "What industries do you work with?",
    answer: "We work with businesses across all industries in Omaha and beyond—from restaurants and fitness studios to tech startups and professional services. Our strategic approach adapts to any industry because great marketing fundamentals are universal. We've successfully launched brands in food service, e-commerce, health and wellness, real estate, and more."
  },
  {
    question: "How do you measure marketing success?",
    answer: "We believe in data-driven marketing. We track key performance indicators (KPIs) specific to your goals—whether that's website traffic, lead generation, conversion rates, social media engagement, or revenue growth. You'll receive regular reports with clear metrics showing exactly how your marketing investment is performing."
  },
  {
    question: "What makes Bombshell different from other Omaha marketing agencies?",
    answer: "Bombshell Marketing combines creative excellence with strategic thinking and cutting-edge technology including AI-powered marketing tools. We're not just designers—we're business growth partners. With over 300 projects delivered, a 4.9-star rating, and deep roots in the Omaha community, we bring both expertise and passion to every project."
  }
];

export default function MarketingStrategyPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEO 
        title="Marketing & Digital Strategy Omaha | Business Growth Experts"
        description="Strategic marketing and digital strategy services in Omaha, Nebraska. Data-driven campaigns, growth marketing, and business strategy to dominate your market. Bombshell Marketing."
        canonicalPath="/marketing-strategy"
        keywords="marketing strategy Omaha, digital strategy Nebraska, business growth, marketing consultant Omaha, digital marketing strategy"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
          { name: "Marketing Strategy", url: "/marketing-strategy" }
        ]}
        service={{
          name: "Marketing & Digital Strategy",
          description: "Data-driven marketing strategy and digital growth services in Omaha, Nebraska. Campaign planning, analytics, and business growth consulting.",
          serviceType: "Marketing Strategy"
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
            Marketing & Digital Strategy
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto mb-6">
            Strategic marketing that drives real business growth. We combine data-driven insights with creative excellence to help you dominate your market.
          </p>
          <div className="flex items-center justify-center gap-2 text-white/70 text-sm uppercase tracking-widest">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-primary transition-colors">Services</Link>
            <span>/</span>
            <span className="text-primary">Marketing Strategy</span>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display text-black uppercase mb-6">
              Strategy That Delivers Results
            </h2>
            <p className="text-black/60 text-lg leading-relaxed mb-8">
              Great marketing isn't about guessing—it's about strategy. We take a data-driven approach to understanding your business, your customers, and your competition. Then we build marketing plans that actually move the needle.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
              <div className="text-center">
                <div className="text-4xl font-display text-[#201cc5] mb-2">150+</div>
                <div className="text-sm text-black/50 uppercase tracking-wider">Strategies Built</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-display text-[#201cc5] mb-2">3x</div>
                <div className="text-sm text-black/50 uppercase tracking-wider">Avg ROI Increase</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-display text-[#201cc5] mb-2">20+</div>
                <div className="text-sm text-black/50 uppercase tracking-wider">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-display text-[#201cc5] mb-2">100%</div>
                <div className="text-sm text-black/50 uppercase tracking-wider">Data-Driven</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-20 bg-[#f8f8f8] relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src={chrisImage} 
                alt="Chris - Brand Strategy Client" 
                className="w-full h-auto shadow-2xl rounded-2xl"
              />
              <div className="absolute -bottom-4 -right-4 bg-primary p-4">
                <Quote className="w-8 h-8 text-black" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-primary text-xl">✦</span>
                <span className="text-black/60 uppercase tracking-widest text-xs font-bold">Client Success Story</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-display text-black uppercase mb-6">
                JAY MOORE LANDSCAPING
              </h2>
              <p className="text-black/70 text-sm uppercase tracking-widest mb-4">Jay Moore, Owner</p>
              <p className="text-black/60 text-lg leading-relaxed mb-6 italic">
                "Bombshell built our entire lead funnel from the ground up. From the landing page to the ads to the follow-up system, everything works together to bring in new customers consistently."
              </p>
              <p className="text-black/60 leading-relaxed mb-8">
                We partnered with Jay Moore Landscaping to build a complete lead generation funnel—landing page, ad campaigns, call tracking, and automated follow-up—turning their online presence into a consistent source of new business.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-3xl font-display text-[#201cc5] mb-1">+250%</div>
                  <div className="text-xs text-black/50 uppercase tracking-wider">Increase in Monthly Leads</div>
                </div>
                <div>
                  <div className="text-3xl font-display text-[#201cc5] mb-1">25+</div>
                  <div className="text-xs text-black/50 uppercase tracking-wider">Years Serving Omaha</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-[#201cc5] relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay" 
             style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/noise.png")' }}>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display text-white uppercase mb-4">
              Our Strategy Services
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              From market research to campaign execution, we provide the strategic guidance you need to grow.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {strategyServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div 
                  key={index}
                  className={`p-8 ${service.highlight ? 'bg-primary text-black' : 'bg-white/10 text-white'} transition-all hover:scale-[1.02]`}
                >
                  <Icon className={`w-10 h-10 mb-6 ${service.highlight ? 'text-black' : 'text-primary'}`} />
                  <h3 className="text-xl font-display uppercase mb-3">{service.title}</h3>
                  <p className={`text-sm leading-relaxed ${service.highlight ? 'text-black/70' : 'text-white/70'}`}>
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display text-black uppercase mb-4">
              Our Strategic Process
            </h2>
            <p className="text-black/60 max-w-2xl mx-auto">
              A proven methodology that transforms insights into action and action into results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#201cc5] text-white rounded-full flex items-center justify-center text-2xl font-display mx-auto mb-4">
                01
              </div>
              <h3 className="text-lg font-display text-black uppercase mb-2">Discovery</h3>
              <p className="text-sm text-black/60">
                Deep-dive into your business, market, and competition to uncover opportunities.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#201cc5] text-white rounded-full flex items-center justify-center text-2xl font-display mx-auto mb-4">
                02
              </div>
              <h3 className="text-lg font-display text-black uppercase mb-2">Strategy</h3>
              <p className="text-sm text-black/60">
                Develop a comprehensive marketing strategy aligned with your business goals.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#201cc5] text-white rounded-full flex items-center justify-center text-2xl font-display mx-auto mb-4">
                03
              </div>
              <h3 className="text-lg font-display text-black uppercase mb-2">Execute</h3>
              <p className="text-sm text-black/60">
                Launch campaigns and initiatives with precision, tracking every metric.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#201cc5] text-white rounded-full flex items-center justify-center text-2xl font-display mx-auto mb-4">
                04
              </div>
              <h3 className="text-lg font-display text-black uppercase mb-2">Optimize</h3>
              <p className="text-sm text-black/60">
                Continuously refine and improve based on real performance data.
              </p>
            </div>
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
            <h2 className="text-3xl md:text-5xl font-display text-black uppercase mb-8">
              Why Omaha Businesses Choose Bombshell for Marketing Strategy
            </h2>
            <p className="text-black/60 text-lg leading-relaxed mb-6">
              Omaha is a city built on strong businesses and even stronger relationships. At Bombshell Marketing, we understand the Nebraska market because we're part of it. Our marketing strategy services are designed specifically for local businesses that want to grow their reach, attract new customers, and build lasting brand loyalty in the Omaha metro and beyond. Whether you're a startup finding your footing or an established company looking to scale, our data-driven approach ensures every marketing dollar works harder for you.
            </p>
            <p className="text-black/60 text-lg leading-relaxed mb-6">
              What sets us apart is our ability to blend creative storytelling with cutting-edge technology. We leverage AI-powered marketing tools to analyze consumer behavior, optimize ad spend, and identify growth opportunities that traditional agencies miss. Combined with our expertise in <Link href="/web-design" className="text-[#201cc5] underline hover:text-primary transition-colors">web design</Link> and <Link href="/logo-branding" className="text-[#201cc5] underline hover:text-primary transition-colors">logo and branding</Link>, we deliver cohesive strategies that connect every touchpoint of your customer's journey—from first impression to loyal advocate.
            </p>
            <p className="text-black/60 text-lg leading-relaxed mb-6">
              Our team has helped hundreds of Omaha and Nebraska businesses transform their marketing from guesswork into a predictable growth engine. We don't believe in cookie-cutter strategies—every plan we build is tailored to your unique industry, audience, and goals. From local SEO and social media marketing to full-scale digital campaigns, we bring the strategic depth and creative firepower that drives real, measurable results.
            </p>
            <p className="text-black/60 text-lg leading-relaxed">
              When you partner with Bombshell, you're not just hiring a marketing agency—you're gaining a dedicated growth team that's invested in your success. We pride ourselves on transparent communication, honest reporting, and strategies that evolve with your business. That's why Omaha businesses keep coming back, and why our clients rate us 4.9 stars across the board.
            </p>
          </div>
        </div>
      </section>

      <FAQSection 
        faqs={strategyFAQs} 
        heading="Marketing Strategy FAQs" 
        subheading="Common questions about our Omaha marketing and digital strategy services" 
      />

      {/* CTA Section */}
      <CallToAction />

      <Footer />
    </div>
    </>
  );
}
