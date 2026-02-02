import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  canonicalPath?: string;
  keywords?: string;
}

const BASE_URL = "https://bombshellmarketingomaha.com";

export function SEO({ title, description, canonicalPath = "/", keywords }: SEOProps) {
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

  return null;
}
