import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Mission } from "@/components/Mission";
import { Services } from "@/components/Services";
import { CaseStudy } from "@/components/CaseStudy";
import { Team } from "@/components/Team";
import { Testimonials } from "@/components/Testimonials";
import { CallToAction } from "@/components/CallToAction";
import { BlogPreview } from "@/components/BlogPreview";
import { FAQ } from "@/components/FAQ";
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
        breadcrumbs={[
          { name: "Home", url: "/" }
        ]}
      />
      <Navigation />
      
      <main>
        <Hero />
        <Services />
        <CaseStudy />
        <Testimonials />
        <Team />
        <BlogPreview />
        <FAQ />
        <CallToAction />
      </main>
      
      <Footer />
    </div>
  );
}