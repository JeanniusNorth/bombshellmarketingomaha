import { Link } from "wouter";
import { ArrowUpRight } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";

export default function NotFound() {
  return (
    <>
      <SEO 
        title="Page Not Found | Bombshell Marketing"
        description="The page you're looking for doesn't exist. Return to Bombshell Marketing for web design, logo design, and brand photography services in Omaha."
        canonicalPath="/404"
      />
      <div className="min-h-screen bg-[#201cc5]">
        <Navigation />
        <section className="pt-32 pb-20 min-h-[60vh] flex items-center justify-center">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-8xl md:text-9xl font-display text-primary mb-6">404</h1>
            <h2 className="text-3xl md:text-5xl font-display text-white mb-6">
              Page Not Found
            </h2>
            <p className="text-white/70 max-w-xl mx-auto mb-10">
              The page you're looking for doesn't exist or has been moved. Let's get you back on track.
            </p>
            <Link 
              href="/"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-black font-bold uppercase tracking-widest text-xs hover:bg-white transition-colors"
            >
              Back to Home
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}
