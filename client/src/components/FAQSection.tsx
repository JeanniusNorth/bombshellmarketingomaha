import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs: FAQItem[];
  heading?: string;
  subheading?: string;
  schemaType?: string;
}

export function FAQSection({ faqs, heading = "Frequently Asked Questions", subheading }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
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
          }),
        }}
      />
      <section className="py-20 bg-white" data-testid="faq-section">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-2 mb-4">
                <span className="text-primary text-xl">✦</span>
                <span className="text-black/60 uppercase tracking-widest text-xs font-bold">FAQ</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-display text-black uppercase mb-4">
                {heading}
              </h2>
              {subheading && (
                <p className="text-black/60 max-w-2xl mx-auto">{subheading}</p>
              )}
            </div>

            <div className="divide-y divide-black/10">
              {faqs.map((faq, index) => (
                <div key={index} data-testid={`faq-item-${index}`}>
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full flex items-center justify-between py-6 text-left group"
                    data-testid={`faq-toggle-${index}`}
                  >
                    <h3 className="text-lg font-bold text-black group-hover:text-[#EDE3E1] transition-colors pr-8">
                      {faq.question}
                    </h3>
                    <ChevronDown
                      className={`w-5 h-5 text-black/40 flex-shrink-0 transition-transform duration-300 ${
                        openIndex === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openIndex === index ? "max-h-[500px] pb-6" : "max-h-0"
                    }`}
                  >
                    <p className="text-black/60 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
