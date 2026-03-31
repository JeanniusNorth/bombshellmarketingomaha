import express, { type Express } from "express";
import fs from "fs";
import path from "path";
import { injectMetaTags } from "./seo";
import { getSSRContent } from "./ssr-content";

export function serveStatic(app: Express) {
  const distPath = path.resolve(__dirname, "public");
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`,
    );
  }

  app.get("/sitemap.xml", (_req, res) => {
    const sitemapPath = path.resolve(distPath, "sitemap.xml");
    if (fs.existsSync(sitemapPath)) {
      res.setHeader("Content-Type", "application/xml");
      res.setHeader("Cache-Control", "public, max-age=3600");
      res.sendFile(sitemapPath);
    } else {
      res.status(404).send("Sitemap not found");
    }
  });

  app.get("/robots.txt", (_req, res) => {
    const robotsPath = path.resolve(distPath, "robots.txt");
    if (fs.existsSync(robotsPath)) {
      res.setHeader("Content-Type", "text/plain");
      res.setHeader("Cache-Control", "public, max-age=3600");
      res.sendFile(robotsPath);
    } else {
      res.status(404).send("Robots.txt not found");
    }
  });

  app.use(express.static(distPath, {
    maxAge: "1d",
    etag: true,
  }));

  app.use("/{*path}", (_req, res) => {
    const indexPath = path.resolve(distPath, "index.html");
    let html = fs.readFileSync(indexPath, "utf-8");
    html = injectMetaTags(html, _req.path);

    const ssrContent = getSSRContent(_req.path);
    if (ssrContent) {
      html = html.replace(
        '<div id="root"></div>',
        `<div id="root"></div><div id="ssr-content" aria-hidden="true" tabindex="-1" style="position:absolute;left:-9999px;width:1px;height:1px;overflow:hidden;clip:rect(0,0,0,0)">${ssrContent.replace(/<a /g, '<a tabindex="-1" ')}</div>`
      );
    }

    res.status(200).set({
      "Content-Type": "text/html",
      "Cache-Control": "public, max-age=300, s-maxage=600",
    }).end(html);
  });
}
