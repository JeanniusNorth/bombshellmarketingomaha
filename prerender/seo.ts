const BASE_URL = "https://bombshellmarketingomaha.com";

interface PageMeta {
  title: string;
  description: string;
  keywords: string;
  canonical: string;
  ogTitle: string;
  ogDescription: string;
}

const pageMeta: Record<string, PageMeta> = {
  "/": {
    title: "Bombshell Marketing | Web Design, Logo Design & Brand Photography in Omaha, NE",
    description: "Bombshell Marketing is Omaha's top-rated agency for web design, logo design, and brand photography. Over 300 projects delivered with 4.9-star ratings. Serving Nebraska businesses and clients nationwide. Get a free website audit today.",
    keywords: "web design Omaha, logo design Omaha, brand photography Omaha, Omaha web designer, Omaha logo designer, brand photographer Omaha, Nebraska web design, Omaha marketing agency, digital marketing Omaha, branding agency Omaha, website development Omaha, Omaha web design company",
    canonical: "/",
    ogTitle: "Bombshell Marketing | #1 Web Design & Logo Design Agency in Omaha",
    ogDescription: "Omaha's top-rated marketing agency for web design, logo design, and brand photography. 300+ successful projects delivered. Get a free website audit.",
  },
  "/about": {
    title: "About Bombshell Marketing | Omaha's Premier Creative Agency",
    description: "Learn about Bombshell Marketing, Omaha's premier creative agency. We specialize in web design, logo design, and brand photography with over 300 successful projects. Meet our team and discover our creative process.",
    keywords: "about Bombshell Marketing, Omaha creative agency, marketing team Omaha, web design agency Omaha Nebraska, creative professionals Omaha",
    canonical: "/about",
    ogTitle: "About Bombshell Marketing | Omaha's Premier Creative Agency",
    ogDescription: "Meet the team behind Omaha's top-rated creative agency. 300+ projects, 225+ happy clients, and a passion for explosive design.",
  },
  "/web-design": {
    title: "Web Design Omaha | Professional Website Design Services | Bombshell Marketing",
    description: "Professional web design services in Omaha, Nebraska. Custom responsive websites, e-commerce solutions, and modern web development. Bombshell Marketing delivers stunning websites that convert visitors into customers. Free website audit available.",
    keywords: "web design Omaha, website design Omaha, Omaha web designer, website development Nebraska, responsive web design Omaha, custom website Omaha, e-commerce web design Omaha, professional web design Omaha NE, web design company Omaha",
    canonical: "/web-design",
    ogTitle: "Web Design Omaha | Custom Websites That Convert | Bombshell Marketing",
    ogDescription: "Professional web design services in Omaha, NE. Custom responsive websites built to convert visitors into customers. Free website audit.",
  },
  "/logo-branding": {
    title: "Logo Design & Branding Omaha | Custom Logo Design Services | Bombshell Marketing",
    description: "Custom logo design and brand identity services in Omaha, Nebraska. Professional logo creation, brand guidelines, and visual identity development. Bombshell Marketing creates memorable brands that stand out.",
    keywords: "logo design Omaha, branding Omaha, brand identity Omaha, custom logo Omaha, logo designer Omaha Nebraska, brand development Omaha, visual identity Omaha, logo design company Omaha",
    canonical: "/logo-branding",
    ogTitle: "Logo Design & Branding Omaha | Custom Brand Identity | Bombshell Marketing",
    ogDescription: "Custom logo design and brand identity services in Omaha, NE. Memorable logos and cohesive brand identities that make your business stand out.",
  },
  "/brand-photography": {
    title: "Brand Photography Omaha | Professional Photography Services | Bombshell Marketing",
    description: "Professional brand photography services in Omaha, Nebraska. Product photography, headshots, lifestyle branding, and commercial photography. Bombshell Marketing captures your brand's story through stunning visuals.",
    keywords: "brand photography Omaha, product photography Omaha, commercial photographer Omaha, headshot photographer Omaha, lifestyle photography Nebraska, professional photographer Omaha, business photography Omaha",
    canonical: "/brand-photography",
    ogTitle: "Brand Photography Omaha | Professional Commercial Photography | Bombshell Marketing",
    ogDescription: "Professional brand photography in Omaha, NE. Product photos, headshots, and lifestyle imagery that tell your brand's story.",
  },
  "/marketing-strategy": {
    title: "Marketing & Digital Strategy Omaha | AI Marketing Services | Bombshell Marketing",
    description: "Marketing and digital strategy services in Omaha, Nebraska. AI-powered marketing, brand strategy, social media marketing, and digital growth solutions. Bombshell Marketing helps businesses grow with data-driven strategies.",
    keywords: "digital marketing Omaha, marketing strategy Omaha, AI marketing Omaha, social media marketing Omaha, digital strategy Nebraska, brand strategy Omaha, marketing agency Omaha",
    canonical: "/marketing-strategy",
    ogTitle: "Marketing & Digital Strategy Omaha | AI-Powered Growth | Bombshell Marketing",
    ogDescription: "AI-powered marketing and digital strategy in Omaha, NE. Data-driven strategies that deliver measurable growth for your business.",
  },
  "/portfolio": {
    title: "Portfolio | Web Design & Brand Photography Projects | Bombshell Marketing Omaha",
    description: "View our portfolio of web design, logo design, and brand photography projects for Omaha and Nebraska businesses. See real results from 300+ projects delivered by Bombshell Marketing.",
    keywords: "web design portfolio Omaha, brand photography portfolio, logo design examples, Nebraska web design projects, marketing agency portfolio Omaha",
    canonical: "/portfolio",
    ogTitle: "Our Work | Web Design & Brand Photography Portfolio | Bombshell Marketing",
    ogDescription: "Explore 300+ web design, logo design, and brand photography projects. Real work for real businesses in Omaha and beyond.",
  },
  "/portfolio/good-life": {
    title: "The Good Life Bar & Grill Case Study | Brand Photography Omaha | Bombshell Marketing",
    description: "See how Bombshell Marketing transformed The Good Life Bar & Grill's brand through professional photography in Omaha, Nebraska. Full case study with results.",
    keywords: "brand photography case study, restaurant photography Omaha, The Good Life Bar Grill, commercial photography Omaha",
    canonical: "/portfolio/good-life",
    ogTitle: "The Good Life Bar & Grill | Brand Photography Case Study | Bombshell Marketing",
    ogDescription: "How professional brand photography transformed The Good Life Bar & Grill's visual presence in Omaha.",
  },
  "/portfolio/varsity-roman-coin": {
    title: "Varsity Roman Coin Case Study | Brand Photography Omaha | Bombshell Marketing",
    description: "See how Bombshell Marketing captured Varsity Roman Coin's brand through professional photography in Omaha, Nebraska. Full case study with results.",
    keywords: "product photography case study, restaurant photography Omaha, Varsity Roman Coin, food photography Omaha",
    canonical: "/portfolio/varsity-roman-coin",
    ogTitle: "Varsity Roman Coin | Brand Photography Case Study | Bombshell Marketing",
    ogDescription: "Professional brand photography case study for Varsity Roman Coin in Omaha, NE.",
  },
  "/services": {
    title: "Marketing Services | Web Design, Logo Design & Brand Photography Omaha",
    description: "Professional web design, logo design, brand photography, and digital marketing services in Omaha, Nebraska. 300+ successful projects. Get a free brand audit today.",
    keywords: "web design services Omaha, logo design services Nebraska, brand photography services, marketing agency Omaha, digital marketing services Omaha",
    canonical: "/services",
    ogTitle: "Our Services | Web Design, Branding & Photography | Bombshell Marketing",
    ogDescription: "Full-service marketing agency in Omaha. Web design, logo design, brand photography, and digital strategy. 300+ projects delivered.",
  },
  "/contact": {
    title: "Contact Bombshell Marketing | Web Design & Branding Agency Omaha, NE",
    description: "Contact Bombshell Marketing for web design, logo design, brand photography, and digital marketing services in Omaha, Nebraska. Free consultations and website audits available.",
    keywords: "contact Bombshell Marketing, Omaha marketing agency contact, web design consultation Omaha, free website audit Omaha",
    canonical: "/contact",
    ogTitle: "Contact Bombshell Marketing | Omaha's Premier Creative Agency",
    ogDescription: "Get in touch with Bombshell Marketing for a free consultation. Web design, logo design, and brand photography in Omaha, NE.",
  },
  "/blog": {
    title: "Marketing Blog | Web Design, Branding & SEO Tips for Omaha Businesses",
    description: "Expert marketing insights for Omaha businesses. Tips on web design costs, logo design, brand photography, SEO, and digital strategy from Bombshell Marketing.",
    keywords: "web design blog Omaha, marketing tips Nebraska, SEO guide Omaha, logo design tips, brand photography guide, small business marketing Omaha",
    canonical: "/blog",
    ogTitle: "Marketing Insights & Resources | Bombshell Marketing Blog",
    ogDescription: "Expert tips on web design, branding, photography, and SEO for Omaha businesses. Free guides and insights from Bombshell Marketing.",
  },
};

const blogArticleMeta: Record<string, { title: string; description: string; keywords: string }> = {
  "web-design-cost-omaha-2026": {
    title: "How Much Does Web Design Cost in Omaha? (2026 Guide) | Bombshell Marketing",
    description: "Wondering what you'll pay for a professional website in Omaha? We break down typical pricing, what affects cost, and how to get the most value from your investment.",
    keywords: "web design cost Omaha, website pricing Nebraska, how much does web design cost, Omaha web design pricing 2026",
  },
  "5-signs-omaha-business-needs-new-logo": {
    title: "5 Signs Your Omaha Business Needs a New Logo | Bombshell Marketing",
    description: "Your logo is the face of your brand. Here are five telltale signs it might be time for a refresh and how a new logo can transform your Omaha business.",
    keywords: "logo redesign Omaha, new logo signs, Omaha logo design, brand refresh Nebraska, logo update",
  },
  "omaha-restaurant-professional-brand-photography": {
    title: "Why Every Omaha Restaurant Needs Professional Brand Photography | Bombshell Marketing",
    description: "In a city that loves food, your restaurant's photos can make or break the first impression. Learn how professional brand photography drives more customers.",
    keywords: "restaurant photography Omaha, food photography Nebraska, brand photography restaurants, Omaha food photos",
  },
  "seo-small-businesses-omaha-beginners-guide": {
    title: "SEO for Small Businesses in Omaha: A Complete Beginner's Guide | Bombshell Marketing",
    description: "New to SEO? This beginner-friendly guide covers everything Omaha business owners need to know about getting found on Google and driving more local traffic.",
    keywords: "SEO Omaha, small business SEO Nebraska, local SEO guide, Google ranking Omaha, SEO beginners guide",
  },
  "roi-professional-branding-omaha-companies": {
    title: "The ROI of Professional Branding for Omaha Companies | Bombshell Marketing",
    description: "Professional branding isn't just about looking good—it's about business growth. Discover why more Omaha companies are investing in their brand.",
    keywords: "branding ROI Omaha, professional branding Nebraska, brand investment, Omaha branding agency, brand strategy ROI",
  },
  "how-to-choose-best-marketing-agency-omaha": {
    title: "How to Choose the Best Marketing Agency in Omaha (2026 Guide) | Bombshell Marketing",
    description: "Not all marketing agencies are created equal. Here's what Omaha business owners should look for—and watch out for—when choosing a marketing partner.",
    keywords: "best marketing agency Omaha, choose marketing agency Nebraska, Omaha marketing company, marketing agency near me Omaha, top marketing firms Omaha",
  },
  "social-media-marketing-omaha-small-businesses": {
    title: "Social Media Marketing for Omaha Small Businesses: What Actually Works | Bombshell Marketing",
    description: "Tired of posting with no results? Here's what's actually working for Omaha small businesses on social media—and what's a waste of your time.",
    keywords: "social media marketing Omaha, social media small business Nebraska, Instagram marketing Omaha, Facebook marketing Omaha, social media agency Omaha",
  },
  "why-omaha-business-needs-website-2026": {
    title: "Why Your Omaha Business Still Needs a Website in 2026 | Bombshell Marketing",
    description: "Think social media is enough? Here's why a professional website is still the most important digital asset for Omaha businesses.",
    keywords: "why need website Omaha, business website Nebraska, website importance 2026, Omaha web design, do I need a website Omaha",
  },
};

export function getPageMeta(pathname: string): PageMeta {
  if (pathname.startsWith("/blog/")) {
    const slug = pathname.replace("/blog/", "");
    const articleMeta = blogArticleMeta[slug];
    if (articleMeta) {
      return {
        title: articleMeta.title,
        description: articleMeta.description,
        keywords: articleMeta.keywords,
        canonical: pathname,
        ogTitle: articleMeta.title,
        ogDescription: articleMeta.description,
      };
    }
  }
  return pageMeta[pathname] || pageMeta["/"];
}

const noIndexPages = ["/social-media", "/email-signature", "/MccoyRoofingProposal", "/MccoyRoofingInvoice", "/MerchClubInvoice", "/CharmingChildrenProposal"];

export function getAllRoutes(): string[] {
  const staticRoutes = Object.keys(pageMeta);
  const blogRoutes = Object.keys(blogArticleMeta).map((slug) => `/blog/${slug}`);
  const portfolioRoutes = ["/portfolio/good-life", "/portfolio/varsity-roman-coin"];
  const unlisted = [...noIndexPages];
  return Array.from(new Set([...staticRoutes, ...blogRoutes, ...portfolioRoutes, ...unlisted]));
}

export { noIndexPages };

export function injectMetaTags(html: string, pathname: string): string {
  const meta = getPageMeta(pathname);

  html = html.replace(
    /<title>[^<]*<\/title>/,
    `<title>${meta.title}</title>`
  );

  html = html.replace(
    /<meta name="description" content="[^"]*" \/>/,
    `<meta name="description" content="${meta.description}" />`
  );

  html = html.replace(
    /<meta name="keywords" content="[^"]*" \/>/,
    `<meta name="keywords" content="${meta.keywords}" />`
  );

  html = html.replace(
    /<link rel="canonical" href="[^"]*" \/>/,
    `<link rel="canonical" href="${BASE_URL}${meta.canonical}" />`
  );

  html = html.replace(
    /<meta property="og:title" content="[^"]*" \/>/,
    `<meta property="og:title" content="${meta.ogTitle}" />`
  );

  html = html.replace(
    /<meta property="og:description" content="[^"]*" \/>/,
    `<meta property="og:description" content="${meta.ogDescription}" />`
  );

  html = html.replace(
    /<meta property="og:url" content="[^"]*" \/>/,
    `<meta property="og:url" content="${BASE_URL}${meta.canonical}" />`
  );

  html = html.replace(
    /<meta name="twitter:title" content="[^"]*" \/>/,
    `<meta name="twitter:title" content="${meta.ogTitle}" />`
  );

  html = html.replace(
    /<meta name="twitter:description" content="[^"]*" \/>/,
    `<meta name="twitter:description" content="${meta.ogDescription}" />`
  );

  if (noIndexPages.includes(pathname)) {
    html = html.replace(
      "</head>",
      `<meta name="robots" content="noindex, nofollow" />\n</head>`
    );
  }

  const breadcrumb = getBreadcrumbSchema(pathname);
  if (breadcrumb) {
    html = html.replace(
      "</head>",
      `<script type="application/ld+json">${JSON.stringify(breadcrumb)}</script>\n</head>`
    );
  }

  return html;
}

function getBreadcrumbSchema(pathname: string): object | null {
  if (pathname === "/" || noIndexPages.includes(pathname)) return null;

  const items: { name: string; url: string }[] = [
    { name: "Home", url: `${BASE_URL}/` },
  ];

  const breadcrumbNames: Record<string, string> = {
    "/about": "About",
    "/services": "Services",
    "/web-design": "Web Design",
    "/logo-branding": "Logo Design & Branding",
    "/brand-photography": "Brand Photography",
    "/marketing-strategy": "Marketing Strategy",
    "/portfolio": "Portfolio",
    "/contact": "Contact",
    "/blog": "Blog",
  };

  if (pathname.startsWith("/portfolio/")) {
    items.push({ name: "Portfolio", url: `${BASE_URL}/portfolio` });
    const slug = pathname.replace("/portfolio/", "");
    const caseNames: Record<string, string> = {
      "good-life": "The Good Life Bar & Grill",
      "varsity-roman-coin": "Varsity Roman Coin",
    };
    items.push({ name: caseNames[slug] || slug, url: `${BASE_URL}${pathname}` });
  } else if (pathname.startsWith("/blog/")) {
    items.push({ name: "Blog", url: `${BASE_URL}/blog` });
    const slug = pathname.replace("/blog/", "");
    const articleMeta = blogArticleMeta[slug];
    if (articleMeta) {
      items.push({ name: articleMeta.title.split(" | ")[0], url: `${BASE_URL}${pathname}` });
    }
  } else if (breadcrumbNames[pathname]) {
    items.push({ name: breadcrumbNames[pathname], url: `${BASE_URL}${pathname}` });
  } else {
    return null;
  }

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url,
    })),
  };
}
