import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
// import { Marquee } from "@/components/Marquee"; // Integrated into Hero
import { Mission } from "@/components/Mission";
import { Services } from "@/components/Services";
import { Portfolio } from "@/components/Portfolio";
import { CaseStudy } from "@/components/CaseStudy";
import { Team } from "@/components/Team";
import { Testimonials } from "@/components/Testimonials";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
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
      </main>
      
      <Footer />
    </div>
  );
}