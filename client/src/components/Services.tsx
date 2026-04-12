import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import logoDesignImage from "@/assets/images/service-logo-design.png";
import webDesignImage from "@/assets/images/service-web-design.png";
import photographyImage from "@/assets/images/service-photography.png";

const services = [
  {
    title: "Marketing & Digital Strategy",
    description: "Campaigns that hit like a shockwave. Strategic planning meets digital innovation — built to dominate your market and drive real growth.",
    details: ["Market Research & Analysis", "Social Media Strategy", "Paid Advertising (PPC)", "Email Marketing", "SEO & Content Strategy", "Brand Positioning"],
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800",
    link: "/marketing-strategy",
    color: "#ccff00",
  },
  {
    title: "Logo & Brand Design",
    description: "Logos that sear into memory. Visual identities, brand systems, and guidelines that command attention and refuse to be ignored.",
    details: ["Logo Design & Concepts", "Brand Guidelines", "Color & Typography Systems", "Business Card & Collateral", "Brand Strategy", "Visual Identity"],
    image: logoDesignImage,
    link: "/logo-branding",
    color: "#201cc5",
  },
  {
    title: "Web Design & Development",
    description: "Websites that don't just function — they perform. High-octane user experiences engineered for conversion and built to dominate search results.",
    details: ["Custom Website Design", "Responsive Development", "E-Commerce Solutions", "Landing Pages & Funnels", "CMS Integration", "Speed & SEO Optimization"],
    image: webDesignImage,
    link: "/web-design",
    color: "#0d0d24",
  },
  {
    title: "Brand Photography",
    description: "Capture the raw energy of your brand. Shots that tell your story instantly and make scrolling thumbs stop dead in their tracks.",
    details: ["Commercial Photography", "Product Photography", "Team & Headshots", "Restaurant & Food", "Lifestyle & Branding", "Social Media Content"],
    image: photographyImage,
    link: "/brand-photography",
    color: "#f5f0e8",
  },
];

export function Services() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="services" className="bg-white py-24 relative overflow-hidden" data-testid="services-section">
      <div className="container mx-auto px-4">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-[#201cc5] text-xs uppercase tracking-[0.2em] font-semibold mb-3 block">What We Do</span>
          <h2 className="text-4xl md:text-6xl font-display text-[#0d0d24] leading-[0.9] max-w-3xl">
            Creative Firepower For Brands That Refuse To Blend In
          </h2>
        </motion.div>

        <div className="border-t border-black/10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="border-b border-black/10"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full text-left py-6 md:py-8 flex items-center justify-between gap-4 group"
                data-testid={`button-service-${index}`}
              >
                <h3 className="text-3xl md:text-5xl lg:text-6xl font-display text-[#0d0d24] group-hover:text-[#201cc5] transition-colors leading-none">
                  {service.title}
                </h3>
                <div
                  className={`w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-[#0d0d24] flex items-center justify-center shrink-0 transition-all duration-300 group-hover:border-[#201cc5] group-hover:text-[#201cc5] ${
                    openIndex === index ? "rotate-45 bg-[#201cc5] border-[#201cc5] text-white" : "text-[#0d0d24]"
                  }`}
                >
                  <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6" />
                </div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="pb-8 md:pb-12 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                      <div className="flex flex-col justify-between">
                        <div>
                          <p className="text-[#0d0d24]/70 text-base md:text-lg leading-relaxed mb-6 max-w-md">
                            {service.description}
                          </p>
                          <div className="grid grid-cols-2 gap-x-8 gap-y-2 mb-8">
                            {service.details.map((detail, i) => (
                              <span key={i} className="text-[#0d0d24]/50 text-sm py-1">
                                {detail}
                              </span>
                            ))}
                          </div>
                        </div>
                        <Link
                          href={service.link}
                          onClick={() => window.scrollTo(0, 0)}
                          className="inline-flex items-center gap-2 text-[#201cc5] text-sm font-bold uppercase tracking-wider hover:gap-3 transition-all group/link"
                          data-testid={`link-service-${index}`}
                        >
                          Learn More
                          <ArrowUpRight className="w-4 h-4" />
                        </Link>
                      </div>

                      <div className="relative overflow-hidden aspect-[4/3]" style={{ backgroundColor: service.color }}>
                        <img
                          src={service.image}
                          alt={`${service.title} - Bombshell Marketing Omaha`}
                          className="w-full h-full object-cover mix-blend-multiply"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Link
            href="/services"
            onClick={() => window.scrollTo(0, 0)}
            className="group px-8 py-4 bg-[#201cc5] text-white border border-[#201cc5] hover:bg-[#ccff00] hover:text-black hover:border-[#ccff00] transition-all text-xs font-bold uppercase tracking-widest flex items-center gap-3"
            data-testid="link-all-services"
          >
            <span>All Services</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
