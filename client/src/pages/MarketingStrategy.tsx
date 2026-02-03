import { useEffect } from "react";
import { Link } from "wouter";
import { ArrowUpRight, Target, TrendingUp, BarChart3, Users, Megaphone, Zap, Quote } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { CallToAction } from "@/components/CallToAction";
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
                className="w-full h-auto shadow-2xl"
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
                From Local to National Brand
              </h2>
              <p className="text-black/60 text-lg leading-relaxed mb-6">
                When Chris came to us, he had great products but no cohesive brand strategy. We developed a complete marketing plan that included brand positioning, product photography, and a multi-channel digital campaign.
              </p>
              <p className="text-black/60 leading-relaxed mb-8">
                Within 6 months, his brand recognition increased by 300% and online sales tripled. Today, his products are sold nationwide and his brand is recognized as a leader in his industry.
              </p>
              <div className="grid grid-cols-3 gap-6">
                <div>
                  <div className="text-3xl font-display text-[#201cc5] mb-1">300%</div>
                  <div className="text-xs text-black/50 uppercase tracking-wider">Brand Growth</div>
                </div>
                <div>
                  <div className="text-3xl font-display text-[#201cc5] mb-1">3x</div>
                  <div className="text-xs text-black/50 uppercase tracking-wider">Sales Increase</div>
                </div>
                <div>
                  <div className="text-3xl font-display text-[#201cc5] mb-1">50+</div>
                  <div className="text-xs text-black/50 uppercase tracking-wider">Retail Partners</div>
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

      {/* CTA Section */}
      <CallToAction />

      <Footer />
    </div>
    </>
  );
}
