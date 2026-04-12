import { Link, useParams, useLocation } from "wouter";
import { ArrowLeft, Clock, Calendar, ArrowUpRight, Tag } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { useContactModal } from "@/contexts/ContactModalContext";
import { getArticleBySlug, getRelatedArticles, categoryColors, type ArticleSection } from "@/data/blogArticles";

import blogWebDesignCost from "@/assets/images/blog-web-design-cost.jpg";
import blogLogoRedesign from "@/assets/images/blog-logo-redesign.jpg";
import blogRestaurantPhotography from "@/assets/images/blog-restaurant-photography.jpg";
import blogSeoGuide from "@/assets/images/blog-seo-guide.jpg";
import blogBrandingRoi from "@/assets/images/blog-branding-roi.jpg";
import blogInlineTeam from "@/assets/images/blog-inline-team.jpg";
import blogInlineMobile from "@/assets/images/blog-inline-mobile.jpg";
import blogChooseAgency from "@/assets/images/blog-choose-agency.png";
import blogSocialMedia from "@/assets/images/blog-social-media.png";
import blogWhyWebsite from "@/assets/images/blog-why-website.png";

const imageMap: Record<string, string> = {
  "blog-web-design-cost": blogWebDesignCost,
  "blog-logo-redesign": blogLogoRedesign,
  "blog-restaurant-photography": blogRestaurantPhotography,
  "blog-seo-guide": blogSeoGuide,
  "blog-branding-roi": blogBrandingRoi,
  "blog-inline-team": blogInlineTeam,
  "blog-inline-mobile": blogInlineMobile,
  "blog-choose-agency": blogChooseAgency,
  "blog-social-media": blogSocialMedia,
  "blog-why-website": blogWhyWebsite,
};

function formatDate(dateStr: string) {
  return new Date(dateStr + "T00:00:00").toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function renderMarkdownLinks(text: string) {
  const parts = text.split(/(\[.*?\]\(.*?\)|\*\*.*?\*\*)/g);
  return parts.map((part, i) => {
    const linkMatch = part.match(/\[(.*?)\]\((.*?)\)/);
    if (linkMatch) {
      const isExternal = linkMatch[2].startsWith("http");
      if (isExternal) {
        return (
          <a key={i} href={linkMatch[2]} target="_blank" rel="noopener noreferrer" className="text-[#000000] font-bold hover:underline">
            {linkMatch[1]}
          </a>
        );
      }
      return (
        <Link key={i} href={linkMatch[2]} className="text-[#000000] font-bold hover:underline">
          {linkMatch[1]}
        </Link>
      );
    }
    const boldMatch = part.match(/\*\*(.*?)\*\*/);
    if (boldMatch) {
      return <strong key={i}>{boldMatch[1]}</strong>;
    }
    return <span key={i}>{part}</span>;
  });
}

function SectionRenderer({ section }: { section: ArticleSection }) {
  const { openContactModal } = useContactModal();

  switch (section.type) {
    case "paragraph":
      return (
        <p className="text-lg leading-relaxed text-black/75 mb-6">
          {renderMarkdownLinks(section.text)}
        </p>
      );

    case "heading":
      return (
        <h2 className="text-2xl md:text-3xl font-display text-black mt-14 mb-6 relative">
          <span className="absolute -left-4 top-0 bottom-0 w-1 bg-primary" />
          {section.text}
        </h2>
      );

    case "list":
      return (
        <ul className="space-y-3 mb-8 ml-2">
          {section.items.map((item, i) => (
            <li key={i} className="flex gap-3 text-lg text-black/75">
              <span className="text-primary mt-1.5 shrink-0">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0L14.5 9L24 12L14.5 15L12 24L9.5 15L0 12L9.5 9L12 0Z" /></svg>
              </span>
              <span className="leading-relaxed">{renderMarkdownLinks(item)}</span>
            </li>
          ))}
        </ul>
      );

    case "blockquote":
      return (
        <blockquote className="my-10 border-l-4 border-primary bg-[#ffffff]/5 py-6 px-8 relative">
          <div className="absolute -top-4 left-6 text-primary text-6xl font-serif leading-none">"</div>
          <p className="text-xl italic text-black/80 leading-relaxed pt-4">
            {renderMarkdownLinks(section.text)}
          </p>
          {section.attribution && (
            <cite className="block mt-4 text-sm font-sans font-semibold text-black/50 not-italic uppercase tracking-wider">
              — {section.attribution}
            </cite>
          )}
        </blockquote>
      );

    case "stat":
      return (
        <div className="my-10 bg-[#000000] text-white p-8 md:p-10 text-center">
          <div className="text-5xl md:text-6xl font-display text-primary mb-2">{section.value}</div>
          <div className="text-lg font-semibold uppercase tracking-wider mb-3">{section.label}</div>
          <p className="text-white/70 max-w-lg mx-auto">{section.description}</p>
        </div>
      );

    case "stats_row":
      return (
        <div className="my-10 grid grid-cols-2 md:grid-cols-3 gap-4">
          {section.stats.map((stat, i) => (
            <div key={i} className="bg-black text-white p-6 text-center">
              <div className="text-3xl md:text-4xl font-display text-primary mb-2">{stat.value}</div>
              <div className="text-sm text-white/70 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      );

    case "image":
      return (
        <figure className="my-10">
          <div className="overflow-hidden">
            <img
              src={imageMap[section.src] || section.src}
              alt={section.alt}
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </div>
          {section.caption && (
            <figcaption className="mt-3 text-sm text-black/50 italic text-center">
              {section.caption}
            </figcaption>
          )}
        </figure>
      );

    case "callout":
      const variants = {
        info: "bg-blue-50 border-blue-200 text-blue-900",
        tip: "bg-[#ffffff]/10 border-primary/30 text-black",
        warning: "bg-amber-50 border-amber-200 text-amber-900",
      };
      const variant = section.variant || "info";
      return (
        <div className={`my-8 border-l-4 p-6 ${variants[variant]}`}>
          <div className="font-display text-lg mb-2">{section.title}</div>
          <p className="leading-relaxed">{renderMarkdownLinks(section.text)}</p>
        </div>
      );

    case "cta":
      const isExternal = section.linkHref.startsWith("http");
      const isContact = section.linkHref === "/contact";
      return (
        <div className="my-12 bg-[#000000] p-8 md:p-12 text-center">
          <p className="text-xl md:text-2xl font-display text-white mb-6">{section.text}</p>
          {isExternal ? (
            <a
              href={section.linkHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-black font-semibold px-8 py-4 text-lg hover:bg-primary/90 transition-colors uppercase tracking-wider"
              data-testid="cta-blog-external"
            >
              {section.linkText}
              <ArrowUpRight className="w-5 h-5" />
            </a>
          ) : isContact ? (
            <button
              onClick={openContactModal}
              className="inline-flex items-center gap-2 bg-primary text-black font-semibold px-8 py-4 text-lg hover:bg-primary/90 transition-colors uppercase tracking-wider"
              data-testid="cta-blog-contact"
            >
              {section.linkText}
              <ArrowUpRight className="w-5 h-5" />
            </button>
          ) : (
            <Link
              href={section.linkHref}
              className="inline-flex items-center gap-2 bg-primary text-black font-semibold px-8 py-4 text-lg hover:bg-primary/90 transition-colors uppercase tracking-wider"
              data-testid="cta-blog-link"
            >
              {section.linkText}
              <ArrowUpRight className="w-5 h-5" />
            </Link>
          )}
        </div>
      );

    default:
      return null;
  }
}

export default function BlogArticlePage() {
  const params = useParams<{ slug: string }>();
  const [, navigate] = useLocation();
  const { openContactModal } = useContactModal();

  const article = getArticleBySlug(params.slug || "");

  if (!article) {
    navigate("/blog");
    return null;
  }

  const relatedArticles = getRelatedArticles(article.relatedSlugs);
  const heroImg = imageMap[article.heroImage];
  const catColor = categoryColors[article.category] || "bg-gray-100 text-gray-600 border-gray-200";

  const BASE_URL = "https://bombshellmarketingomaha.com";

  return (
    <>
      <SEO
        title={`${article.title} | Bombshell Marketing Blog`}
        description={article.excerpt}
        canonicalPath={`/blog/${article.slug}`}
        keywords={`${article.category} Omaha, ${article.title}, Omaha marketing, Bombshell Marketing blog`}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: article.title, url: `/blog/${article.slug}` },
        ]}
        schema={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: article.title,
          description: article.excerpt,
          image: heroImg,
          datePublished: article.datePublished,
          dateModified: article.dateModified,
          author: {
            "@type": "Organization",
            name: "Bombshell Marketing",
            url: BASE_URL,
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
        }}
      />
      <div className="min-h-screen bg-white">
        <Navigation />

        <div className="relative h-[60vh] md:h-[70vh] overflow-hidden">
          <img
            src={heroImg}
            alt={article.heroImageAlt}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />

          <div className="absolute inset-0 flex items-end">
            <div className="container mx-auto px-4 pb-12 md:pb-16">
              <div className="max-w-3xl">
                <div className="flex items-center gap-3 mb-4">
                  <span className={`px-3 py-1 text-xs font-semibold uppercase tracking-wider border ${catColor}`}>
                    {article.category}
                  </span>
                </div>
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-display text-white leading-tight mb-4">
                  {article.title}
                </h1>
                <div className="flex items-center gap-6 text-white/60 text-sm">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" />
                    {formatDate(article.datePublished)}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4" />
                    {article.readTime}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <article className="container mx-auto px-4 py-12 md:py-16">
          <div className="max-w-3xl mx-auto">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-semibold text-black/50 hover:text-primary transition-colors uppercase tracking-wider mb-10"
              data-testid="link-back-to-blog"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>

            {article.sections.map((section, i) => (
              <SectionRenderer key={i} section={section} />
            ))}
          </div>
        </article>

        {relatedArticles.length > 0 && (
          <section className="bg-black py-16 md:py-20">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-display text-white text-center mb-12">
                Keep Reading
              </h2>
              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {relatedArticles.map((related) => {
                  const relCatColor = categoryColors[related.category] || "bg-gray-100 text-gray-600 border-gray-200";
                  return (
                    <Link
                      key={related.slug}
                      href={`/blog/${related.slug}`}
                      className="group block bg-white/5 border border-white/10 hover:border-primary/50 transition-all"
                      data-testid={`related-article-${related.slug}`}
                    >
                      <div className="aspect-video overflow-hidden">
                        <img
                          src={imageMap[related.heroImage]}
                          alt={related.heroImageAlt}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                      </div>
                      <div className="p-6">
                        <span className={`inline-block px-2 py-0.5 text-xs font-semibold uppercase tracking-wider border mb-3 ${relCatColor}`}>
                          {related.category}
                        </span>
                        <h3 className="text-lg font-display text-white group-hover:text-primary transition-colors mb-2">
                          {related.title}
                        </h3>
                        <p className="text-white/50 text-sm line-clamp-2">{related.excerpt}</p>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        <Footer />
      </div>
    </>
  );
}
