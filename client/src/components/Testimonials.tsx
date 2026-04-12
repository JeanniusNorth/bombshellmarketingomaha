import { Star } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { motion } from "framer-motion";

export function Testimonials() {
  const testimonials = [
    {
      id: 1,
      text: "Bombshell designed our website and managed all of our social media. They understood our brand and helped us connect with the right audience. The web design and social strategy have been a huge part of our growth.",
      author: "Chris",
      role: "Merch Club",
    },
    {
      id: 2,
      text: "Our new website design is fantastic. It's clean, modern, and exactly what we needed to showcase our window and door products.",
      author: "Shane",
      role: "Legacy Window & Door",
    },
    {
      id: 3,
      text: "Bombshell built our entire lead funnel from the ground up. The landing page, the ads, the follow-up system—everything works together to bring in new customers consistently.",
      author: "Jay Moore",
      role: "Jay Moore Landscaping",
    },
    {
      id: 4,
      text: "The brand photography Bombshell did for us was incredible. Every shot captures the energy of our restaurant and brings people through the door.",
      author: "Owner",
      role: "Varsity Roman Coin",
    },
    {
      id: 5,
      text: "Bombshell's photography and branding work completely transformed how people see our bar and grill. The images they captured tell our story better than we ever could.",
      author: "Owner",
      role: "The Good Life Bar & Grill",
    },
    {
      id: 6,
      text: "Bombshell transformed our online presence completely. We've seen a 200% increase in leads since launching our new site.",
      author: "Jennifer L",
      role: "Peak Fitness",
    },
    {
      id: 7,
      text: "The logo design process was collaborative and fun. They nailed our brand identity on the first try.",
      author: "Amanda T",
      role: "Bloom Florals",
    },
    {
      id: 8,
      text: "Best investment we made for our business. The ROI from their marketing strategy has been incredible.",
      author: "Robert K",
      role: "Midwest Realty",
    },
    {
      id: 9,
      text: "Professional, creative, and always on deadline. Bombshell is our go-to agency for all things digital.",
      author: "Lisa P",
      role: "Innovate Labs",
    },
    {
      id: 10,
      text: "They took our outdated website and turned it into a conversion machine. Highly recommend their services.",
      author: "Marcus W",
      role: "Elite Auto",
    },
    {
      id: 11,
      text: "The attention to detail in every project is remarkable. They truly care about delivering excellence.",
      author: "Nicole B",
      role: "Serene Spa",
    },
    {
      id: 12,
      text: "Our e-commerce sales doubled after the rebrand. Bombshell knows how to create designs that convert.",
      author: "Kevin H",
      role: "StyleHub",
    },
  ];

  // Split testimonials into 3 columns
  const column1 = testimonials.filter((_, i) => i % 3 === 0);
  const column2 = testimonials.filter((_, i) => i % 3 === 1);
  const column3 = testimonials.filter((_, i) => i % 3 === 2);

  const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => (
    <div 
      className="bg-[#222] rounded-2xl p-6 mb-4 hover:bg-[#2a2a2a] transition-all duration-300 border border-white/5"
      data-testid={`testimonial-card-${testimonial.id}`}
    >
      {/* Stars */}
      <div className="flex gap-0.5 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-[#2563EB] text-[#2563EB]" />
        ))}
      </div>

      {/* Text */}
      <p className="text-white/80 leading-relaxed text-base mb-6">
        {testimonial.text}
      </p>

      {/* Author */}
      <div className="flex items-center gap-3">
        <Avatar className="w-10 h-10 border-2 border-[#2563EB]">
          <AvatarFallback className="text-black bg-[#2563EB] font-bold text-sm">
            {testimonial.author[0]}
          </AvatarFallback>
        </Avatar>
        <div>
          <h4 className="font-semibold text-white text-sm">{testimonial.author}</h4>
          <p className="text-white/50 text-xs">{testimonial.role}</p>
        </div>
      </div>
    </div>
  );

  const ScrollingColumn = ({ 
    testimonials, 
    direction = "up",
    duration = 30 
  }: { 
    testimonials: typeof column1;
    direction?: "up" | "down";
    duration?: number;
  }) => {
    const duplicatedTestimonials = [...testimonials, ...testimonials];
    
    return (
      <div className="relative h-[600px] overflow-hidden">
        <motion.div
          className="flex flex-col"
          animate={{
            y: direction === "up" ? [0, -50 * testimonials.length * 4] : [-50 * testimonials.length * 4, 0]
          }}
          transition={{
            y: {
              repeat: Infinity,
              repeatType: "loop",
              duration: duration,
              ease: "linear",
            },
          }}
        >
          {duplicatedTestimonials.map((testimonial, index) => (
            <TestimonialCard key={`${testimonial.id}-${index}`} testimonial={testimonial} />
          ))}
        </motion.div>
        
        {/* Gradient overlays */}
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#1a1a1a] to-transparent pointer-events-none z-10" />
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#1a1a1a] to-transparent pointer-events-none z-10" />
      </div>
    );
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Bombshell Marketing",
            "url": "https://bombshellmarketingomaha.com",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": 4.9,
              "reviewCount": 47,
              "bestRating": 5,
              "worstRating": 1
            },
            "review": [
              {
                "@type": "Review",
                "author": { "@type": "Person", "name": "Chris" },
                "reviewBody": "Bombshell designed our website and managed all of our social media. They understood our brand and helped us connect with the right audience. The web design and social strategy have been a huge part of our growth.",
                "reviewRating": { "@type": "Rating", "ratingValue": 5, "bestRating": 5 }
              },
              {
                "@type": "Review",
                "author": { "@type": "Person", "name": "Shane" },
                "reviewBody": "Our new website design is fantastic. It's clean, modern, and exactly what we needed to showcase our window and door products.",
                "reviewRating": { "@type": "Rating", "ratingValue": 5, "bestRating": 5 }
              },
              {
                "@type": "Review",
                "author": { "@type": "Person", "name": "Jennifer L" },
                "reviewBody": "Bombshell transformed our online presence completely. We've seen a 200% increase in leads since launching our new site.",
                "reviewRating": { "@type": "Rating", "ratingValue": 5, "bestRating": 5 }
              }
            ]
          })
        }}
      />
    <section className="bg-[#1a1a1a] py-24 text-white font-sans overflow-hidden" data-testid="testimonials-section">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="text-[#2563EB] text-xl">✦</span>
            <span className="uppercase tracking-widest text-xs font-bold">Testimonials</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-display uppercase">
            What Our Clients Say
          </h2>
        </motion.div>

        {/* Scrolling Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="hidden lg:block">
            <ScrollingColumn testimonials={column1} direction="up" duration={35} />
          </div>
          <div>
            <ScrollingColumn testimonials={column2} direction="down" duration={40} />
          </div>
          <div className="hidden md:block">
            <ScrollingColumn testimonials={column3} direction="up" duration={38} />
          </div>
        </div>

      </div>
    </section>
    </>
  );
}
