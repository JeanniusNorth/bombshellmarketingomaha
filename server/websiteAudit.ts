import OpenAI from "openai";
import * as cheerio from "cheerio";
import { z } from "zod";

const openai = new OpenAI({
  apiKey: process.env.AI_INTEGRATIONS_OPENAI_API_KEY,
  baseURL: process.env.AI_INTEGRATIONS_OPENAI_BASE_URL,
});

export const websiteAuditSchema = z.object({
  url: z.string().min(1, "URL is required").refine((val) => {
    try {
      let normalized = val.trim();
      if (!normalized.startsWith("http://") && !normalized.startsWith("https://")) {
        normalized = "https://" + normalized;
      }
      new URL(normalized);
      return true;
    } catch {
      return false;
    }
  }, "Please enter a valid website URL"),
});

export function normalizeUrl(url: string): string {
  let normalized = url.trim();
  if (!normalized.startsWith("http://") && !normalized.startsWith("https://")) {
    normalized = "https://" + normalized;
  }
  return normalized;
}

const BLOCKED_HOSTS = [
  "localhost",
  "127.0.0.1",
  "0.0.0.0",
  "::1",
  "metadata.google.internal",
  "169.254.169.254",
];

const PRIVATE_IP_RANGES = [
  /^10\./,
  /^172\.(1[6-9]|2[0-9]|3[0-1])\./,
  /^192\.168\./,
  /^127\./,
  /^169\.254\./,
  /^fc00:/i,
  /^fe80:/i,
];

export class ValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ValidationError";
  }
}

function isPrivateOrBlockedUrl(urlString: string): boolean {
  try {
    const parsed = new URL(urlString);
    
    if (parsed.protocol !== "http:" && parsed.protocol !== "https:") {
      return true;
    }
    
    const hostname = parsed.hostname.toLowerCase();
    
    if (BLOCKED_HOSTS.some(blocked => hostname === blocked || hostname.endsWith("." + blocked))) {
      return true;
    }
    
    if (PRIVATE_IP_RANGES.some(pattern => pattern.test(hostname))) {
      return true;
    }
    
    return false;
  } catch {
    return true;
  }
}

async function resolveAndCheckIp(hostname: string): Promise<boolean> {
  const dns = await import("dns").then(m => m.promises);
  try {
    const addresses = await dns.resolve4(hostname).catch(() => []);
    const addresses6 = await dns.resolve6(hostname).catch(() => []);
    const allIps = [...addresses, ...addresses6];
    
    for (const ip of allIps) {
      if (PRIVATE_IP_RANGES.some(pattern => pattern.test(ip))) {
        return true;
      }
      if (BLOCKED_HOSTS.includes(ip)) {
        return true;
      }
    }
    return false;
  } catch {
    return false;
  }
}

interface WebsiteData {
  url: string;
  title: string;
  metaDescription: string;
  headings: string[];
  content: string;
  hasViewport: boolean;
  imageCount: number;
  linkCount: number;
  wordCount: number;
}

export async function fetchWebsiteData(url: string): Promise<WebsiteData> {
  const normalizedUrl = url.trim();
  
  if (isPrivateOrBlockedUrl(normalizedUrl)) {
    throw new ValidationError("Invalid or restricted URL");
  }

  const parsed = new URL(normalizedUrl);
  const isPrivateIp = await resolveAndCheckIp(parsed.hostname);
  if (isPrivateIp) {
    throw new ValidationError("Cannot access internal or private addresses");
  }

  const response = await fetch(normalizedUrl, {
    headers: {
      "User-Agent": "Mozilla/5.0 (compatible; BombshellAudit/1.0)",
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch website: ${response.status}`);
  }

  const html = await response.text();
  const $ = cheerio.load(html);

  const title = $("title").text().trim() || "";
  const metaDescription = $('meta[name="description"]').attr("content") || "";
  const headings: string[] = [];
  
  $("h1, h2, h3").each((_, el) => {
    const text = $(el).text().trim();
    if (text) headings.push(text);
  });

  $("script, style, nav, footer, header").remove();
  const content = $("body").text().replace(/\s+/g, " ").trim().slice(0, 5000);

  const hasViewport = $('meta[name="viewport"]').length > 0;
  const imageCount = $("img").length;
  const linkCount = $("a").length;
  const wordCount = content.split(/\s+/).length;

  return {
    url,
    title,
    metaDescription,
    headings: headings.slice(0, 10),
    content,
    hasViewport,
    imageCount,
    linkCount,
    wordCount,
  };
}

export async function analyzeWebsite(data: WebsiteData) {
  const prompt = `You are a website audit expert. Analyze this website and provide scores and specific issues.

Website URL: ${data.url}
Title: ${data.title}
Meta Description: ${data.metaDescription}
Headings: ${data.headings.join(", ")}
Has Mobile Viewport: ${data.hasViewport}
Image Count: ${data.imageCount}
Link Count: ${data.linkCount}
Word Count: ${data.wordCount}
Content Preview: ${data.content.slice(0, 2000)}

Provide a JSON response with this exact structure:
{
  "overallScore": <number 0-100>,
  "categories": [
    {
      "name": "Performance",
      "score": <number 0-100>,
      "issues": ["issue 1", "issue 2", "issue 3"]
    },
    {
      "name": "SEO",
      "score": <number 0-100>,
      "issues": ["issue 1", "issue 2", "issue 3"]
    },
    {
      "name": "Mobile",
      "score": <number 0-100>,
      "issues": ["issue 1", "issue 2", "issue 3"]
    },
    {
      "name": "Content & Copy",
      "score": <number 0-100>,
      "issues": ["issue 1", "issue 2", "issue 3"]
    }
  ],
  "bounceReasons": ["reason 1", "reason 2", "reason 3"]
}

Be specific and actionable with issues. For bounceReasons, explain why visitors might leave, hesitate, or bounce from this specific website. Base scores on actual observations from the data provided.`;

  const response = await openai.chat.completions.create({
    model: "gpt-5.2",
    messages: [{ role: "user", content: prompt }],
    response_format: { type: "json_object" },
    max_tokens: 1500,
  });

  const content = response.choices[0]?.message?.content || "{}";
  const result = JSON.parse(content);

  return {
    ...result,
    websiteTitle: data.title,
    websiteUrl: data.url,
  };
}
