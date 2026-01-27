import { ArrowRight, Play } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "wouter";

export function CaseStudy() {
  return (
    <section className="bg-[#1a1a1a] py-24 text-white font-sans" data-testid="case-study-section">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="flex items-center gap-2 mb-6">
          <span className="text-[#ccff00] text-xl">✦</span>
          <span className="uppercase tracking-widest text-xs font-bold">Featured Bombshell Success Story</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Image Section */}
          <motion.div 
            className="relative group cursor-pointer"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative overflow-hidden rounded-2xl">
              <img 
                src="/chris-brandini.jpg" 
                alt="Chris - Founder of Brandini" 
                className="w-full h-[500px] object-cover object-top group-hover:scale-105 transition-transform duration-500"
                data-testid="case-study-image"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              {/* Play button */}
              <div className="absolute bottom-6 right-6 w-14 h-14 bg-white rounded-full flex items-center justify-center group-hover:bg-[#ccff00] transition-colors">
                <Play className="w-6 h-6 text-black fill-black ml-1" />
              </div>
              
              {/* Text overlay */}
              <div className="absolute bottom-6 left-6">
                <p className="text-white/80 text-sm mb-1">See the story</p>
                <h3 className="text-white text-2xl font-display uppercase">Brandini</h3>
              </div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-display uppercase mb-2">
              Chris
            </h2>
            <p className="text-white/60 text-lg mb-6">Founder at Brandini</p>
            
            <blockquote className="text-xl md:text-2xl text-white/90 leading-relaxed mb-8">
              "Bombshell handled our entire product and brand launch. From concept to execution, they brought Brandini to life and helped us build an on-demand merch platform that brands love."
            </blockquote>

            <Link href="/portfolio" onClick={() => window.scrollTo(0, 0)}>
              <button 
                className="bg-[#ccff00] text-black px-8 py-4 rounded-full font-bold uppercase tracking-wider hover:bg-white transition-colors flex items-center gap-2 group mb-12"
                data-testid="case-study-portfolio-button"
              >
                View Full Portfolio
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-8">
              <div>
                <p className="text-4xl md:text-5xl font-display text-[#ccff00] mb-2">+340%</p>
                <p className="text-white/60 text-sm">Brand awareness increase after launch campaign</p>
              </div>
              <div>
                <p className="text-4xl md:text-5xl font-display text-white mb-2">50+</p>
                <p className="text-white/60 text-sm">Partner brands onboarded in first quarter</p>
              </div>
            </div>

          </motion.div>
        </div>

      </div>
    </section>
  );
}
