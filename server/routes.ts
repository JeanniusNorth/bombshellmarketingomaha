import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { fetchWebsiteData, analyzeWebsite, websiteAuditSchema, normalizeUrl, ValidationError } from "./websiteAudit";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.post("/api/website-audit", async (req, res) => {
    try {
      const parsed = websiteAuditSchema.safeParse(req.body);
      
      if (!parsed.success) {
        return res.status(400).json({ error: parsed.error.errors[0]?.message || "Invalid request" });
      }

      const normalizedUrl = normalizeUrl(parsed.data.url);
      const websiteData = await fetchWebsiteData(normalizedUrl);
      const auditResult = await analyzeWebsite(websiteData);
      
      res.json(auditResult);
    } catch (error) {
      console.error("Website audit error:", error);
      if (error instanceof ValidationError) {
        return res.status(400).json({ error: error.message });
      }
      res.status(500).json({ 
        error: error instanceof Error ? error.message : "Failed to analyze website" 
      });
    }
  });

  return httpServer;
}
