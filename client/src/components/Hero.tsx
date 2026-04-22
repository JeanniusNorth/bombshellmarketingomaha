import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { useContactModal } from "@/contexts/ContactModalContext";
import { PortfolioScroller } from "@/components/Portfolio";

export function Hero() {
  const { openContactModal } = useContactModal();

  const videoId = "ytCiUPO4ef0";

  return (
    <div className="relative min-h-[85vh] md:min-h-screen w-full overflow-hidden flex flex-col pt-24 md:pt-32 pb-12 bg-[#000000]">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[max(177.77vh,100vw)] h-[max(56.25vw,100vh)] scale-150">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&iv_load_policy=3&disablekb=1`}
            title="Background video"
            allow="autoplay; encrypted-media"
            frameBorder="0"
            className="w-full h-full"
            data-testid="hero-video"
          />
        </div>
        {/* Dark overlay for text legibility */}
        <div className="absolute inset-0 bg-black/55" />
        {/* Subtle bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/80 to-transparent" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 flex-1 flex flex-col justify-center pb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-3xl mx-auto text-center"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display text-white leading-[0.95] tracking-tight mb-6">
            Omaha's Top-Rated Agency For Web Design
          </h1>
          <p className="text-white/85 text-lg md:text-xl leading-relaxed max-w-lg mb-10 mx-auto">
            Branding, photography, and websites that turn heads and drive results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <button
              onClick={openContactModal}
              className="group px-7 py-3.5 rounded-full bg-white text-black hover:bg-black hover:text-white border border-white transition-all text-sm font-bold flex items-center gap-3"
              data-testid="button-hero-get-started"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
            <a
              href="https://audit.bombshellmarketingomaha.com/"
              className="group px-7 py-3.5 rounded-full bg-transparent text-white hover:bg-white/10 border border-white/40 transition-all text-sm font-bold flex items-center gap-3"
              data-testid="link-hero-audit"
            >
              <Play className="w-4 h-4 fill-white" />
              <span>Free Website Audit</span>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Brands That Trust Us — Auto-Scroller */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="relative z-10 mt-8 md:mt-12"
      >
        <div className="container mx-auto px-6 md:px-12 mb-4">
          <p className="text-white/60 uppercase tracking-widest text-[11px] font-bold">Omaha Brands That Trust Us</p>
        </div>
        <PortfolioScroller cardWidthClass="w-[260px] md:w-[380px]" />
      </motion.div>
    </div>
  );
}
