import { Link } from "wouter";
import { ArrowUpRight, Clock, Tag } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { useContactModal } from "@/contexts/ContactModalContext";
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

const BASE_URL = "https://bombshellmarketingomaha.com";

export default function BlogPage() {
  const { openContactModal } = useContactModal();

  const blogListSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Bombshell Marketing Blog - Insights & Resources",
    description: "Expert insights on web design, branding, photography, SEO, and marketing strategy for Omaha businesses.",
    url: `${BASE_URL}/blog`,
    publisher: {
      "@type": "Organization",
      name: "Bombshell Marketing",
      url: BASE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/favicon.png`,
      },
    },
    blogPost: blogArticles.map((article) => ({
      "@type": "BlogPosting",
      headline: article.title,
      description: article.excerpt,
      datePublished: article.datePublished,
      dateModified: article.dateModified,
      url: `${BASE_URL}/blog/${article.slug}`,
      author: {
        "@type": "Organization",
        name: "Bombshell Marketing",
      },
      publisher: {
        "@type": "Organization",
        name: "Bombshell Marketing",
        url: BASE_URL,
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `${BASE_URL}/blog/${article.slug}`,
      },
    })),
  };

  const featuredArticle = blogArticles[0];
  const remainingArticles = blogArticles.slice(1);

  return (
    <>
      <SEO
        title="Blog | Web Design, Branding & Marketing Insights | Bombshell Marketing Omaha"
        description="Expert articles on web design pricing, logo design, brand photography, SEO, and marketing strategy for Omaha businesses. Actionable insights to grow your brand."
        canonicalPath="/blog"
        keywords="Omaha web design blog, branding tips Omaha, SEO guide Nebraska, marketing strategy Omaha, brand photography tips"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Blog", url: "/blog" },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogListSchema) }}
      />
      <div className="min-h-screen bg-white">
        <Navigation />

        <section className="bg-[#EDE3E1] pt-32 pb-20 relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay"
            style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/noise.png")' }}
          ></div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className="text-5xl md:text-7xl font-display text-[#111111] uppercase mb-6">
              Insights & Resources
            </h1>
            <div className="flex items-center justify-center gap-2 text-[#2B2B2B]/70 text-sm uppercase tracking-widest">
              <Link href="/" className="hover:text-primary transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white">Blog</span>
            </div>
            <p className="mt-6 text-[#2B2B2B]/70 max-w-2xl mx-auto">
              Expert advice on web design, branding, photography, and marketing strategy for Omaha businesses ready to grow.
            </p>
          </div>
        </section>

        <section className="bg-white py-16 md:py-20">
          <div className="container mx-auto px-4">
            <Link
              href={`/blog/${featuredArticle.slug}`}
              className="group block mb-16"
              data-testid={`blog-featured-${featuredArticle.id}`}
            >
              <div className="grid md:grid-cols-2 gap-0 border border-black/10 overflow-hidden">
                <div className="aspect-video md:aspect-auto overflow-hidden">
                  <img
                    src={imageMap[featuredArticle.heroImage]}
                    alt={featuredArticle.heroImageAlt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 text-[10px] font-bold uppercase tracking-widest border ${categoryColors[featuredArticle.category]}`}>
                      <Tag className="w-3 h-3" />
                      {featuredArticle.category}
                    </span>
                    <span className="flex items-center gap-1 text-black/40 text-xs">
                      <Clock className="w-3 h-3" />
                      {featuredArticle.readTime}
                    </span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-display text-black uppercase leading-tight mb-4 group-hover:text-[#EDE3E1] transition-colors">
                    {featuredArticle.title}
                  </h2>
                  <p className="text-black/60 leading-relaxed mb-6">
                    {featuredArticle.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-2 text-[#EDE3E1] text-xs font-bold uppercase tracking-widest">
                    Read Article
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </span>
                </div>
              </div>
            </Link>

            <div className="flex items-center gap-2 mb-4">
              <span className="text-primary text-xl">✦</span>
              <span className="text-black/60 uppercase tracking-widest text-xs font-bold">More Articles</span>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {remainingArticles.map((article) => {
                const catColor = categoryColors[article.category] || "bg-gray-100 text-gray-600 border-gray-200";
                return (
                  <Link
                    key={article.id}
                    href={`/blog/${article.slug}`}
                    className="group block border border-black/10 hover:border-black/20 transition-all"
                    data-testid={`blog-card-${article.id}`}
                  >
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={imageMap[article.heroImage]}
                        alt={article.heroImageAlt}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <span className={`inline-flex items-center gap-1.5 px-3 py-1 text-[10px] font-bold uppercase tracking-widest border ${catColor}`}>
                          <Tag className="w-3 h-3" />
                          {article.category}
                        </span>
                        <span className="flex items-center gap-1 text-black/40 text-xs">
                          <Clock className="w-3 h-3" />
                          {article.readTime}
                        </span>
                      </div>
                      <h3 className="text-xl font-display text-black uppercase leading-tight mb-2 group-hover:text-[#EDE3E1] transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-black/60 text-sm leading-relaxed mb-4 line-clamp-2">
                        {article.excerpt}
                      </p>
                      <span className="inline-flex items-center gap-2 text-[#EDE3E1] text-xs font-bold uppercase tracking-widest">
                        Read Article
                        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-[#EDE3E1] py-20 relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay"
            style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/noise.png")' }}
          ></div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-4xl md:text-6xl font-display text-[#111111] uppercase mb-6">
              Ready to Grow Your Business?
            </h2>
            <p className="text-[#2B2B2B]/70 max-w-2xl mx-auto mb-8">
              Whether you need a stunning website, a memorable brand identity, or a marketing strategy that delivers results—Bombshell Marketing is here to help Omaha businesses thrive.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <button
                onClick={openContactModal}
                data-testid="blog-cta-contact"
                className="group px-8 py-4 bg-primary text-[#111111] border border-primary hover:bg-white hover:text-black hover:border-[#111111] transition-all text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-3"
              >
                <span>Contact Us</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <a
                href="https://audit.bombshellmarketingomaha.com/"
                data-testid="blog-cta-audit"
                className="group px-8 py-4 border border-[#111111]/20 hover:bg-primary hover:text-white hover:border-primary transition-all text-[#111111] text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-3"
              >
                <span>Free Website Audit</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
