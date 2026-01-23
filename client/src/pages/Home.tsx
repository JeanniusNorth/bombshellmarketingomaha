import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Services } from "@/components/Services";
import { About } from "@/components/About";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navigation />
      
      <main>
        <Hero />
        <Marquee />
        <Services />
        <About />
      </main>
      
      <footer className="bg-black text-white py-12 border-t border-white/10">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white/40 font-mono text-sm">
            © 2026 BOMBSHELL AI MARKETING. ALL RIGHTS RESERVED.
          </p>
        </div>
      </footer>
    </div>
  );
}