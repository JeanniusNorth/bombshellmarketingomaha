import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "How much does a website cost in Omaha?",
    answer: "Our custom websites start at $2,500 for a professional 5-page business site. Pricing depends on the number of pages, features, and complexity. We offer transparent pricing with no hidden fees — contact us for a free quote tailored to your business.",
  },
  {
    question: "How long does it take to build a website?",
    answer: "Most websites are completed in 2–4 weeks from start to launch. More complex projects with e-commerce or custom functionality may take 4–6 weeks. We keep you updated throughout the process so there are never any surprises.",
  },
  {
    question: "Do you offer logo design and branding packages?",
    answer: "Yes! We offer complete branding packages that include logo design, brand guidelines, color palettes, typography, and brand collateral. Whether you're starting from scratch or refreshing an existing brand, we create identities that stand out in the Omaha market.",
  },
  {
    question: "What is brand photography and do I need it?",
    answer: "Brand photography is professional imagery that captures your business, team, products, and culture. It's essential for building trust and making a strong first impression online. We shoot on-location in Omaha and provide fully edited, ready-to-use images for your website and social media.",
  },
  {
    question: "Do you help with SEO and getting found on Google?",
    answer: "Every website we build is optimized for search engines from the ground up. We handle technical SEO, local SEO for Omaha and Nebraska, page speed optimization, and structured data. We also offer ongoing SEO and content strategy to help you rank higher over time.",
  },
  {
    question: "Can you help with social media marketing?",
    answer: "Absolutely. We create and manage social media strategies for Omaha businesses across Facebook, Instagram, LinkedIn, and more. From content creation to paid advertising, we help you reach the right audience and grow your online presence.",
  },
  {
    question: "Do you work with businesses outside of Omaha?",
    answer: "Yes! While we're based in Omaha and love working with local businesses, we serve clients across Nebraska and nationwide. Our process is fully remote-friendly, so we can deliver the same quality no matter where you're located.",
  },
  {
    question: "What makes Bombshell Marketing different from other agencies?",
    answer: "We're a boutique agency that treats every project like our own. You get direct access to senior creatives — not junior staff or outsourced freelancers. We combine design expertise with real marketing strategy, and our track record of 300+ successful projects speaks for itself.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section className="bg-[#0d0d24] py-20 md:py-28" data-testid="faq-section">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="text-[#ccff00] text-xs md:text-sm font-sans uppercase tracking-[0.2em] mb-3 block">
            Got Questions?
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display uppercase text-white">
            Frequently Asked Questions
          </h2>
        </motion.div>

        <div className="space-y-2">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <button
                onClick={() => toggle(index)}
                className="w-full text-left flex items-center justify-between gap-4 py-5 px-5 bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.06] transition-colors group"
                data-testid={`button-faq-${index}`}
              >
                <span className="text-white font-sans text-sm md:text-base font-medium pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-[#ccff00] shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 py-4 bg-white/[0.02] border border-t-0 border-white/[0.06]">
                      <p className="text-white/60 text-sm font-sans leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
