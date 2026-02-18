import { useState } from "react";
import { Link } from "wouter";
import { ArrowUpRight, Clock, ChevronDown, ChevronUp, Tag } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { useContactModal } from "@/contexts/ContactModalContext";

const BASE_URL = "https://bombshellmarketingomaha.com";

interface BlogArticle {
  id: string;
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  readTime: string;
  datePublished: string;
  dateModified: string;
  content: React.ReactNode;
}

const blogArticles: BlogArticle[] = [
  {
    id: "web-design-cost-omaha",
    slug: "web-design-cost-omaha-2026",
    category: "Web Design",
    title: "How Much Does Web Design Cost in Omaha? (2026 Guide)",
    excerpt: "Wondering what you'll pay for a professional website in Omaha? We break down typical pricing, what affects cost, and how to get the most value from your investment.",
    readTime: "7 min read",
    datePublished: "2026-01-15",
    dateModified: "2026-02-10",
    content: (
      <div className="prose prose-lg max-w-none text-black/80 space-y-4">
        <p>
          If you're an Omaha business owner looking to build or redesign your website, one of the first questions you'll ask is: <strong>how much does web design cost?</strong> The answer depends on several factors, but understanding the typical pricing landscape in Omaha can help you budget wisely and avoid overpaying—or underpaying—for your online presence.
        </p>
        <h3 className="text-xl font-display uppercase text-black mt-8 mb-3">What Affects Web Design Pricing?</h3>
        <p>
          Not all websites are created equal. A simple five-page brochure site for a local Omaha coffee shop will cost significantly less than a full e-commerce platform for a Nebraska-based retailer. Here are the main factors that drive cost:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Number of pages:</strong> More pages mean more design, more content, and more development time. A five-page site is far simpler than a 30-page site with a blog, team directory, and resource center.</li>
          <li><strong>Custom design vs. templates:</strong> Template-based sites are cheaper upfront but limit your brand's uniqueness. Custom design gives you a site that truly represents your Omaha business.</li>
          <li><strong>Features and functionality:</strong> Contact forms, booking systems, customer portals, interactive maps, and integrations with CRMs or payment processors all add to the investment.</li>
          <li><strong>E-commerce capabilities:</strong> Online stores require product management, shopping carts, secure checkout, and inventory tracking—all of which add complexity.</li>
          <li><strong>SEO and content strategy:</strong> A website built with search engine optimization in mind from day one will rank better in Google and attract more Omaha customers organically.</li>
        </ul>
        <h3 className="text-xl font-display uppercase text-black mt-8 mb-3">Typical Budget Ranges in Omaha</h3>
        <p>
          Based on the current Omaha market, here's what businesses typically invest in web design:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>$1,000–$3,000 (Basic):</strong> Simple template-based websites with minimal customization. Best for startups or solopreneurs who need an online presence quickly. These sites typically include 3–5 pages, basic contact forms, and mobile responsiveness.</li>
          <li><strong>$3,000–$10,000 (Custom):</strong> Fully custom-designed websites built to match your brand identity. This range includes custom graphics, SEO setup, content integration, and responsive design across all devices. Most Omaha small businesses fall into this category.</li>
          <li><strong>$10,000+ (Enterprise):</strong> Complex web applications, large e-commerce platforms, or sites requiring advanced functionality like membership portals, API integrations, or custom dashboards. Ideal for established Nebraska companies ready to dominate online.</li>
        </ul>
        <h3 className="text-xl font-display uppercase text-black mt-8 mb-3">Why Professional Web Design Pays Off</h3>
        <p>
          Your website is often the first interaction a potential customer has with your business. Studies show that 75% of users judge a company's credibility based on its website design. For Omaha businesses competing in a growing market, a professional website isn't a luxury—it's a necessity.
        </p>
        <p>
          A well-designed website improves your conversion rates, reduces bounce rates, and strengthens your brand perception. It also lays the foundation for effective <Link href="/marketing-strategy" className="text-[#201cc5] font-bold hover:underline">digital marketing strategies</Link> and local SEO, helping you attract more customers from Omaha, Lincoln, and across Nebraska.
        </p>
        <p>
          At <Link href="/web-design" className="text-[#201cc5] font-bold hover:underline">Bombshell Marketing</Link>, we specialize in building custom websites for Omaha businesses that don't just look stunning—they perform. Every site we create is hand-coded for speed, optimized for search engines, and designed to convert visitors into paying customers. Whether you're launching a new venture in the Old Market or refreshing your brand in West Omaha, we're ready to help you make an impact online.
        </p>
      </div>
    ),
  },
  {
    id: "omaha-business-new-logo",
    slug: "5-signs-omaha-business-needs-new-logo",
    category: "Branding",
    title: "5 Signs Your Omaha Business Needs a New Logo",
    excerpt: "Your logo is the face of your brand. Here are five telltale signs it might be time for a refresh—and how a new logo can transform your Omaha business.",
    readTime: "6 min read",
    datePublished: "2026-01-22",
    dateModified: "2026-02-05",
    content: (
      <div className="prose prose-lg max-w-none text-black/80 space-y-4">
        <p>
          Your logo is more than just a graphic—it's the visual cornerstone of your entire brand. For Omaha businesses competing in an increasingly crowded marketplace, a strong logo can mean the difference between being remembered and being overlooked. But how do you know when your current logo is holding you back? Here are five signs it's time for a redesign.
        </p>
        <h3 className="text-xl font-display uppercase text-black mt-8 mb-3">1. Your Logo Looks Outdated</h3>
        <p>
          Design trends evolve, and what looked modern ten years ago may now scream "stuck in the past." If your logo features clip art, heavy gradients, or overly complex illustrations from the early 2000s, it's sending the wrong message to potential customers. Omaha's business landscape is evolving rapidly, and your brand identity should reflect that growth.
        </p>
        <h3 className="text-xl font-display uppercase text-black mt-8 mb-3">2. It Doesn't Work Digitally</h3>
        <p>
          A logo that looks great on a business card but turns into an unreadable blur on a smartphone screen is a serious problem. In 2026, your logo needs to work seamlessly across websites, social media profiles, email signatures, Google Business Profiles, and mobile apps. If your current logo wasn't designed with digital platforms in mind, it's time for an update.
        </p>
        <h3 className="text-xl font-display uppercase text-black mt-8 mb-3">3. Your Brand Feels Inconsistent</h3>
        <p>
          Do you have slightly different versions of your logo floating around? Maybe one on your website, a different variation on your signage, and yet another on your invoices? Brand inconsistency confuses customers and weakens recognition. A professional rebrand creates a unified visual system—logo, colors, typography, and guidelines—that works cohesively everywhere your brand appears.
        </p>
        <h3 className="text-xl font-display uppercase text-black mt-8 mb-3">4. It Has a DIY Look</h3>
        <p>
          Many Nebraska entrepreneurs start with a quick logo from a free online tool or a budget marketplace. While that's understandable when bootstrapping, a DIY logo can undermine credibility as your business grows. Customers in Omaha are increasingly design-savvy, and they notice the difference between amateur and professional work. Investing in a <Link href="/logo-branding" className="text-[#201cc5] font-bold hover:underline">professionally designed logo</Link> signals that you take your business seriously.
        </p>
        <h3 className="text-xl font-display uppercase text-black mt-8 mb-3">5. Your Business Has Evolved</h3>
        <p>
          Businesses grow, pivot, and expand. If you started as a local Omaha lawn care company but now offer full landscaping design services, your logo should reflect that evolution. A logo designed for who you were five years ago may not represent who you are today—or where you're heading tomorrow.
        </p>
        <h3 className="text-xl font-display uppercase text-black mt-8 mb-3">What to Do Next</h3>
        <p>
          If any of these signs hit home, don't panic—a logo refresh doesn't have to be stressful. At Bombshell Marketing, we work with Omaha businesses every day to create logos and <Link href="/logo-branding" className="text-[#201cc5] font-bold hover:underline">brand identities</Link> that are timeless, versatile, and built for the digital age. We start with your story, your values, and your vision, then translate that into a visual identity you'll be proud to put everywhere. Pair your new logo with a <Link href="/web-design" className="text-[#201cc5] font-bold hover:underline">custom website</Link> to create a cohesive brand experience from click to conversion.
        </p>
      </div>
    ),
  },
  {
    id: "omaha-restaurant-brand-photography",
    slug: "omaha-restaurant-professional-brand-photography",
    category: "Photography",
    title: "Why Every Omaha Restaurant Needs Professional Brand Photography",
    excerpt: "In a city that loves food, your restaurant's photos can make or break the first impression. Learn how professional brand photography drives more customers through your doors.",
    readTime: "6 min read",
    datePublished: "2026-02-01",
    dateModified: "2026-02-12",
    content: (
      <div className="prose prose-lg max-w-none text-black/80 space-y-4">
        <p>
          Omaha has an incredible food scene. From classic steakhouses to innovative farm-to-table restaurants, competition for diners' attention has never been fiercer. In this environment, the quality of your restaurant's photography can be the deciding factor between a full dining room and empty tables. Here's why professional <Link href="/brand-photography" className="text-[#201cc5] font-bold hover:underline">brand photography</Link> is essential for every Omaha restaurant.
        </p>
        <h3 className="text-xl font-display uppercase text-black mt-8 mb-3">First Impressions Happen Online</h3>
        <p>
          Before a customer walks through your door, they've already formed an opinion about your restaurant. They've scrolled through your Instagram, checked your Google Business Profile, or visited your website. If the photos they see are dark, grainy, or taken on a smartphone under fluorescent lighting, they're likely to keep scrolling. Professional photography captures the true essence of your food, your atmosphere, and your brand in a way that stops thumbs and drives reservations.
        </p>
        <h3 className="text-xl font-display uppercase text-black mt-8 mb-3">Social Media Demands Quality</h3>
        <p>
          Omaha's food lovers are active on Instagram, Facebook, and TikTok. Restaurants that post high-quality images consistently see higher engagement, more shares, and stronger follower growth. Professional food photography isn't just about making your dishes look good—it's about telling a visual story that connects with your audience emotionally. A beautifully styled plate of locally sourced Nebraska beef tells a story that a blurry phone snapshot never could.
        </p>
        <h3 className="text-xl font-display uppercase text-black mt-8 mb-3">Google Business Profile Photos Matter</h3>
        <p>
          Did you know that Google Business Profiles with photos receive 42% more requests for directions and 35% more click-throughs to websites? For Omaha restaurants, optimizing your Google profile with professional interior, exterior, and food photography is one of the most impactful things you can do for local SEO. When someone searches "best restaurants near me" in Omaha, your photos are often the first thing they see.
        </p>
        <h3 className="text-xl font-display uppercase text-black mt-8 mb-3">Menu Photography Drives Orders</h3>
        <p>
          Whether you have a physical menu, a digital menu on your website, or a delivery platform listing, professional food photography increases average order values. Research shows that menus with high-quality images see up to a 30% increase in sales for photographed items. For Omaha restaurants offering takeout or delivery through apps, stunning food photography is essential for standing out in a sea of competitors.
        </p>
        <h3 className="text-xl font-display uppercase text-black mt-8 mb-3">Building a Consistent Brand</h3>
        <p>
          Professional brand photography extends beyond food shots. It includes photos of your team, your dining space, behind-the-scenes kitchen moments, and the details that make your restaurant unique. This comprehensive visual library gives you content for your <Link href="/web-design" className="text-[#201cc5] font-bold hover:underline">website</Link>, social media, print materials, and <Link href="/marketing-strategy" className="text-[#201cc5] font-bold hover:underline">marketing campaigns</Link>—all with a consistent, polished look that reinforces your brand identity.
        </p>
        <p>
          At Bombshell Marketing, we've photographed restaurants, bars, and food brands across Omaha and Nebraska. Our <Link href="/brand-photography" className="text-[#201cc5] font-bold hover:underline">brand photography service</Link> is designed to capture the energy, flavor, and personality of your establishment so you can attract more customers and build a stronger brand. Ready to see the difference professional photos can make? Let's talk.
        </p>
      </div>
    ),
  },
  {
    id: "seo-small-business-omaha",
    slug: "seo-small-businesses-omaha-beginners-guide",
    category: "Marketing",
    title: "SEO for Small Businesses in Omaha: A Complete Beginner's Guide",
    excerpt: "New to SEO? This beginner-friendly guide covers everything Omaha business owners need to know about getting found on Google and driving more local traffic.",
    readTime: "8 min read",
    datePublished: "2026-02-05",
    dateModified: "2026-02-15",
    content: (
      <div className="prose prose-lg max-w-none text-black/80 space-y-4">
        <p>
          If you own a small business in Omaha, you've probably heard the term "SEO" thrown around. But what does it actually mean, and how can it help you get more customers? Search Engine Optimization is the practice of improving your website and online presence so that search engines like Google rank you higher when people search for the products or services you offer. For local businesses in Omaha and across Nebraska, mastering SEO can be a game-changer.
        </p>
        <h3 className="text-xl font-display uppercase text-black mt-8 mb-3">Start with Google Business Profile</h3>
        <p>
          Your Google Business Profile (formerly Google My Business) is the single most important tool for local SEO in Omaha. It's what shows up when someone searches "plumber near me" or "best pizza in Omaha." To optimize your profile, make sure you've claimed your listing, filled out every field completely, added high-quality photos, selected accurate categories, and regularly posted updates. Encourage happy customers to leave reviews—Google uses review quantity and quality as a ranking signal.
        </p>
        <h3 className="text-xl font-display uppercase text-black mt-8 mb-3">On-Page SEO Basics</h3>
        <p>
          On-page SEO refers to optimizations you make directly on your website. For Omaha businesses, this includes writing clear, descriptive title tags that include your location (e.g., "Custom Wedding Cakes | Omaha, NE"), creating unique meta descriptions for every page, using header tags (H1, H2, H3) to structure your content logically, and ensuring your website loads quickly on both desktop and mobile devices. A <Link href="/web-design" className="text-[#201cc5] font-bold hover:underline">professionally built website</Link> will have these elements in place from day one.
        </p>
        <h3 className="text-xl font-display uppercase text-black mt-8 mb-3">Content Marketing for Local SEO</h3>
        <p>
          Creating helpful, relevant content is one of the most effective ways to improve your search rankings. For an Omaha business, this might mean writing blog posts about topics your customers care about, creating FAQ pages that answer common questions, publishing case studies showing results you've delivered for Nebraska clients, or sharing guides related to your industry. The key is to create content that genuinely helps your audience while naturally incorporating relevant keywords and local references.
        </p>
        <h3 className="text-xl font-display uppercase text-black mt-8 mb-3">Building Local Backlinks</h3>
        <p>
          Backlinks—links from other websites pointing to yours—are one of Google's most important ranking factors. For Omaha businesses, focus on earning links from local sources: the Omaha Chamber of Commerce, Nebraska business directories, local news outlets, community organizations, and partnerships with other Omaha businesses. Getting featured in local publications or sponsoring community events can earn valuable backlinks that boost your authority in Google's eyes.
        </p>
        <h3 className="text-xl font-display uppercase text-black mt-8 mb-3">Technical SEO Matters Too</h3>
        <p>
          Behind the scenes, your website's technical health affects how well Google can crawl, index, and rank your pages. Key technical SEO factors include site speed (pages should load in under 3 seconds), mobile responsiveness, secure HTTPS connection, clean URL structure, proper schema markup, and an XML sitemap. If these terms sound overwhelming, that's okay—a good <Link href="/web-design" className="text-[#201cc5] font-bold hover:underline">web design partner</Link> handles all of this for you.
        </p>
        <h3 className="text-xl font-display uppercase text-black mt-8 mb-3">How Bombshell Helps with SEO</h3>
        <p>
          At Bombshell Marketing, we build SEO into every project from the ground up. Whether we're designing a new website, creating a <Link href="/logo-branding" className="text-[#201cc5] font-bold hover:underline">brand identity</Link>, or developing a <Link href="/marketing-strategy" className="text-[#201cc5] font-bold hover:underline">digital marketing strategy</Link>, search visibility is always part of the conversation. We've helped dozens of Omaha businesses climb the ranks on Google, and we can do the same for you. Our approach combines technical expertise with genuine, helpful content—because that's what Google rewards in 2026.
        </p>
      </div>
    ),
  },
  {
    id: "roi-professional-branding-omaha",
    slug: "roi-professional-branding-omaha-companies",
    category: "Strategy",
    title: "The ROI of Professional Branding: Why Omaha Companies Are Investing in Their Image",
    excerpt: "Professional branding isn't just about looking good—it's about business growth. Discover why more Omaha companies are investing in their brand and the measurable returns they're seeing.",
    readTime: "7 min read",
    datePublished: "2026-02-10",
    dateModified: "2026-02-18",
    content: (
      <div className="prose prose-lg max-w-none text-black/80 space-y-4">
        <p>
          In an era where consumers are bombarded with choices, your brand is your most powerful asset. For businesses in Omaha and across Nebraska, investing in professional branding isn't just about aesthetics—it's about building trust, standing out from competitors, and driving measurable business growth. But what's the actual return on investment? Let's break it down.
        </p>
        <h3 className="text-xl font-display uppercase text-black mt-8 mb-3">Brand Consistency Increases Revenue</h3>
        <p>
          According to research by Lucidpress, consistent brand presentation across all platforms can increase revenue by up to 23%. That means when your logo, colors, messaging, and visual style are unified across your website, social media, print materials, and physical space, customers recognize and trust you more—and they spend more. For Omaha businesses with both physical locations and online presence, brand consistency is especially critical because customers interact with you across multiple channels daily.
        </p>
        <h3 className="text-xl font-display uppercase text-black mt-8 mb-3">First Impressions Are Everything</h3>
        <p>
          It takes just 7 seconds to form a first impression of a brand. In those 7 seconds, potential customers are evaluating your professionalism, credibility, and trustworthiness based almost entirely on visual cues. A polished <Link href="/logo-branding" className="text-[#201cc5] font-bold hover:underline">logo and brand identity</Link> instantly communicates that you're established, reliable, and serious about your business. In Omaha's competitive market—whether you're in real estate, hospitality, professional services, or retail—that first impression can determine whether a prospect reaches out or moves on to a competitor.
        </p>
        <h3 className="text-xl font-display uppercase text-black mt-8 mb-3">Trust Builds Customer Loyalty</h3>
        <p>
          Branding goes beyond visuals—it encompasses your entire customer experience, from the tone of your website copy to the way your team interacts with clients. Professional branding creates a sense of trust and familiarity that keeps customers coming back. Studies show that 81% of consumers need to trust a brand before they'll consider buying from it. In Omaha, where word-of-mouth and community reputation carry significant weight, earning that trust through consistent, professional branding is invaluable.
        </p>
        <h3 className="text-xl font-display uppercase text-black mt-8 mb-3">Competitive Advantage in the Omaha Market</h3>
        <p>
          Omaha's economy is growing, and with it comes more competition in virtually every industry. Professional branding gives you a clear competitive edge. When two businesses offer similar services at similar prices, the one with stronger branding wins almost every time. Think about it—when choosing between a company with a clean, modern website and consistent visual identity versus one with an outdated logo and a clunky, slow website, the choice is obvious. Your brand is the tiebreaker.
        </p>
        <h3 className="text-xl font-display uppercase text-black mt-8 mb-3">The Numbers Don't Lie</h3>
        <p>
          Consider these statistics that illustrate the business impact of professional branding: color improves brand recognition by up to 80%, branded businesses are 3.5 times more visible in search results, companies with strong employer brands see 50% more qualified applicants, and customers are willing to pay a 20% premium for products from well-branded companies. For Nebraska businesses looking to grow, these numbers make a compelling case for investing in your brand.
        </p>
        <h3 className="text-xl font-display uppercase text-black mt-8 mb-3">A Holistic Approach to Brand Investment</h3>
        <p>
          The most successful Omaha companies understand that branding is holistic. It's not just about a logo—it's about how your <Link href="/web-design" className="text-[#201cc5] font-bold hover:underline">website looks and functions</Link>, how your <Link href="/brand-photography" className="text-[#201cc5] font-bold hover:underline">photography represents your team and products</Link>, how your <Link href="/marketing-strategy" className="text-[#201cc5] font-bold hover:underline">marketing strategy</Link> amplifies your message, and how every touchpoint reinforces your brand promise. At Bombshell Marketing, we help Omaha companies build brands that aren't just beautiful—they're strategic assets that drive growth, build loyalty, and deliver measurable ROI. Ready to invest in your brand's future? Let's start the conversation.
        </p>
      </div>
    ),
  },
];

const categoryColors: Record<string, string> = {
  "Web Design": "bg-blue-500/10 text-blue-600 border-blue-500/20",
  "Branding": "bg-purple-500/10 text-purple-600 border-purple-500/20",
  "Photography": "bg-amber-500/10 text-amber-600 border-amber-500/20",
  "Marketing": "bg-green-500/10 text-green-600 border-green-500/20",
  "Strategy": "bg-rose-500/10 text-rose-600 border-rose-500/20",
};

export default function BlogPage() {
  const [expandedArticle, setExpandedArticle] = useState<string | null>(null);
  const { openContactModal } = useContactModal();

  const toggleArticle = (id: string) => {
    setExpandedArticle(expandedArticle === id ? null : id);
    if (expandedArticle !== id) {
      setTimeout(() => {
        const el = document.getElementById(`article-${id}`);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    }
  };

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
        "@id": `${BASE_URL}/blog#${article.slug}`,
      },
    })),
  };

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

        <section className="bg-[#201cc5] pt-32 pb-20 relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay"
            style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/noise.png")' }}
          ></div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className="text-5xl md:text-7xl font-display text-white uppercase mb-6">
              Insights & Resources
            </h1>
            <div className="flex items-center justify-center gap-2 text-white/70 text-sm uppercase tracking-widest">
              <Link href="/" className="hover:text-primary transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white">Blog</span>
            </div>
            <p className="mt-6 text-white/70 max-w-2xl mx-auto">
              Expert advice on web design, branding, photography, and marketing strategy for Omaha businesses ready to grow.
            </p>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-primary text-xl">✦</span>
              <span className="text-black/60 uppercase tracking-widest text-xs font-bold">Latest Articles</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display text-black uppercase leading-[0.9] mb-12">
              From Our Blog
            </h2>

            <div className="space-y-6">
              {blogArticles.map((article) => {
                const isExpanded = expandedArticle === article.id;
                return (
                  <article
                    key={article.id}
                    id={`article-${article.id}`}
                    className="border border-black/10 bg-white transition-all duration-300"
                    data-testid={`blog-card-${article.id}`}
                  >
                    <div
                      className="p-6 md:p-8 cursor-pointer group"
                      onClick={() => toggleArticle(article.id)}
                      data-testid={`blog-toggle-${article.id}`}
                    >
                      <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-3">
                            <span className={`inline-flex items-center gap-1.5 px-3 py-1 text-[10px] font-bold uppercase tracking-widest border ${categoryColors[article.category] || "bg-gray-100 text-gray-600 border-gray-200"}`}>
                              <Tag className="w-3 h-3" />
                              {article.category}
                            </span>
                            <span className="flex items-center gap-1 text-black/40 text-xs">
                              <Clock className="w-3 h-3" />
                              {article.readTime}
                            </span>
                          </div>
                          <h3 className="text-xl md:text-2xl font-display text-black uppercase leading-tight mb-2 group-hover:text-[#201cc5] transition-colors">
                            {article.title}
                          </h3>
                          <p className="text-black/60 text-sm leading-relaxed">
                            {article.excerpt}
                          </p>
                        </div>
                        <div className="flex items-center gap-2 text-[#201cc5] text-xs font-bold uppercase tracking-widest shrink-0 mt-2 md:mt-4">
                          <span data-testid={`blog-read-more-${article.id}`}>
                            {isExpanded ? "Close" : "Read More"}
                          </span>
                          {isExpanded ? (
                            <ChevronUp className="w-4 h-4" />
                          ) : (
                            <ChevronDown className="w-4 h-4" />
                          )}
                        </div>
                      </div>
                    </div>

                    {isExpanded && (
                      <div className="px-6 md:px-8 pb-8 border-t border-black/10 pt-6" data-testid={`blog-content-${article.id}`}>
                        {article.content}
                        <script
                          type="application/ld+json"
                          dangerouslySetInnerHTML={{
                            __html: JSON.stringify({
                              "@context": "https://schema.org",
                              "@type": "BlogPosting",
                              headline: article.title,
                              description: article.excerpt,
                              datePublished: article.datePublished,
                              dateModified: article.dateModified,
                              author: {
                                "@type": "Organization",
                                name: "Bombshell Marketing",
                              },
                              publisher: {
                                "@type": "Organization",
                                name: "Bombshell Marketing",
                                url: BASE_URL,
                                logo: {
                                  "@type": "ImageObject",
                                  url: `${BASE_URL}/favicon.png`,
                                },
                              },
                              mainEntityOfPage: {
                                "@type": "WebPage",
                                "@id": `${BASE_URL}/blog#${article.slug}`,
                              },
                            }),
                          }}
                        />
                      </div>
                    )}
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-[#201cc5] py-20 relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay"
            style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/noise.png")' }}
          ></div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-4xl md:text-6xl font-display text-white uppercase mb-6">
              Ready to Grow Your Business?
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto mb-8">
              Whether you need a stunning website, a memorable brand identity, or a marketing strategy that delivers results—Bombshell Marketing is here to help Omaha businesses thrive.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <button
                onClick={openContactModal}
                data-testid="blog-cta-contact"
                className="group px-8 py-4 bg-primary text-black border border-primary hover:bg-white hover:text-black hover:border-white transition-all text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-3"
              >
                <span>Contact Us</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <a
                href="https://audit.bombshellmarketingomaha.com/"
                data-testid="blog-cta-audit"
                className="group px-8 py-4 border border-white/40 hover:bg-primary hover:text-black hover:border-primary transition-all text-white text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-3"
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