import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Mission } from "@/components/Mission";
import { Services } from "@/components/Services";
import { Portfolio } from "@/components/Portfolio";
import { CaseStudy } from "@/components/CaseStudy";
import { Team } from "@/components/Team";
import { Testimonials } from "@/components/Testimonials";
import { CallToAction } from "@/components/CallToAction";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <SEO 
        title="Bombshell Marketing | Web Design, Logo Design & Brand Photography in Omaha, NE"
        description="Bombshell Marketing is Omaha's top-rated agency for web design, logo design, and brand photography. Over 300 projects delivered with 4.9-star ratings. Serving Nebraska businesses and clients nationwide. Get a free website audit today."
        canonicalPath="/"
        keywords="web design Omaha, logo design Omaha, brand photography Omaha, Omaha web designer, Omaha logo designer, brand photographer Omaha, Nebraska web design, Omaha marketing agency, digital marketing Omaha, branding agency Omaha, website development Omaha, Omaha web design company"
      />
      <Navigation />
      
      <main>
        <Hero />
        {/* <Marquee /> Removed as it is now in Hero */}
        <div className="-mt-12 relative z-20">
            <Services />
        </div>
        <Portfolio />
        <CaseStudy />
        <Mission />
        <Team />
        <Testimonials />
        <CallToAction />
      </main>
      
      <Footer />
    </div>
  );
}