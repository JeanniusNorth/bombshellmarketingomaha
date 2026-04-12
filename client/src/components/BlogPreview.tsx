import { Link } from "wouter";
import { ArrowUpRight, Clock, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { blogArticles, categoryColors } from "@/data/blogArticles";

import blogWebDesignCost from "@/assets/images/blog-web-design-cost.jpg";
import blogLogoRedesign from "@/assets/images/blog-logo-redesign.jpg";
import blogRestaurantPhotography from "@/assets/images/blog-restaurant-photography.jpg";
import blogSeoGuide from "@/assets/images/blog-seo-guide.jpg";
import blogBrandingRoi from "@/assets/images/blog-branding-roi.jpg";
import blogChooseAgency from "@/assets/images/blog-choose-agency.png";
import blogSocialMedia from "@/assets/images/blog-social-media.png";
import blogWhyWebsite from "@/assets/images/blog-why-website.png";

const imageMap: Record<string, string> = {
  "blog-web-design-cost": blogWebDesignCost,
  "blog-logo-redesign": blogLogoRedesign,
  "blog-restaurant-photography": blogRestaurantPhotography,
  "blog-seo-guide": blogSeoGuide,
  "blog-branding-roi": blogBrandingRoi,
  "blog-choose-agency": blogChooseAgency,
  "blog-social-media": blogSocialMedia,
  "blog-why-website": blogWhyWebsite,
};

const recentArticles = blogArticles.slice(0, 3);

export function BlogPreview() {
  return (
    <section className="bg-[#E5B6C1] py-20 md:py-28" data-testid="blog-preview-section">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 md:mb-16"
        >
          <div>
            <span className="text-[#A995D6] text-xs md:text-sm font-sans uppercase tracking-[0.2em] mb-3 block">
              Latest Insights
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display uppercase text-[#1A1A1A]">
              From The Blog
            </h2>
          </div>
          <Link
            href="/blog"
            className="mt-4 md:mt-0 text-[#2A2A2A]/60 hover:text-[#A995D6] transition-colors text-sm font-sans flex items-center gap-1 group"
            data-testid="link-view-all-blog"
          >
            View all articles
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {recentArticles.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                href={`/blog/${article.slug}`}
                className="group block"
                data-testid={`card-blog-preview-${article.id}`}
              >
                <div className="relative overflow-hidden mb-4">
                  <img
                    src={imageMap[article.heroImage]}
                    alt={article.heroImageAlt}
                    className="w-full aspect-[16/10] object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3">
                    <span
                      className="text-[10px] uppercase tracking-wider font-sans font-medium px-2.5 py-1"
                      style={{
                        backgroundColor: categoryColors[article.category]?.bg || "#A995D6",
                        color: categoryColors[article.category]?.text || "#000",
                      }}
                    >
                      {article.category}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3 mb-3 text-[#2A2A2A]/50 text-xs font-sans">
                  <span>{new Date(article.datePublished).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
                  <span className="w-1 h-1 rounded-full bg-white/20" />
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {article.readTime}
                  </span>
                </div>

                <h3 className="text-[#1A1A1A] font-display uppercase text-lg md:text-xl leading-tight mb-2 group-hover:text-[#A995D6] transition-colors">
                  {article.title}
                </h3>

                <p className="text-[#2A2A2A]/60 text-sm font-sans leading-relaxed line-clamp-2">
                  {article.excerpt}
                </p>

                <span className="inline-flex items-center gap-1 text-[#A995D6] text-xs font-sans uppercase tracking-wider mt-4 group-hover:gap-2 transition-all">
                  Read More
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
