import { useEffect } from "react";

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface ServiceSchema {
  name: string;
  description: string;
  provider?: string;
  areaServed?: string;
  serviceType?: string;
}

interface SEOProps {
  title: string;
  description: string;
  canonicalPath?: string;
  keywords?: string;
  breadcrumbs?: BreadcrumbItem[];
  service?: ServiceSchema;
}

const BASE_URL = "https://bombshellmarketingomaha.com";

export function SEO({ title, description, canonicalPath = "/", keywords, breadcrumbs, service }: SEOProps) {
  useEffect(() => {
    document.title = title;
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", description);
    }

    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute("href", `${BASE_URL}${canonicalPath}`);
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute("content", title);
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute("content", description);
    }

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) {
      ogUrl.setAttribute("content", `${BASE_URL}${canonicalPath}`);
    }

    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) {
      twitterTitle.setAttribute("content", title);
    }

    const twitterDescription = document.querySelector('meta[name="twitter:description"]');
    if (twitterDescription) {
      twitterDescription.setAttribute("content", description);
    }

    if (keywords) {
      const metaKeywords = document.querySelector('meta[name="keywords"]');
      if (metaKeywords) {
        metaKeywords.setAttribute("content", keywords);
      }
    }

    return () => {
      document.title = "Bombshell Marketing | Omaha Web Design, Logo Design & Brand Photography";
    };
  }, [title, description, canonicalPath, keywords]);

  const breadcrumbSchema = breadcrumbs ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${BASE_URL}${item.url}`,
    })),
  } : null;

  const serviceSchema = service ? {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    provider: {
      "@type": "LocalBusiness",
      name: service.provider || "Bombshell Marketing",
      url: BASE_URL,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Omaha",
        addressRegion: "NE",
        postalCode: "68102",
        addressCountry: "US",
      },
    },
    areaServed: {
      "@type": "State",
      name: service.areaServed || "Nebraska",
    },
    serviceType: service.serviceType || service.name,
  } : null;

  return (
    <>
      {breadcrumbSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      )}
      {serviceSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
      )}
    </>
  );
}
