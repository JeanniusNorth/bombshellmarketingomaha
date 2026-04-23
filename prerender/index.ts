import { build as viteBuild } from "vite";
import { rm, readFile, writeFile, mkdir } from "fs/promises";
import path from "path";
import { injectMetaTags, getAllRoutes, noIndexPages } from "./seo";
import { getSSRContent } from "./ssr-content";

const OUT_DIR = path.resolve(process.cwd(), "dist");

function injectSSR(html: string, pathname: string): string {
  const ssr = getSSRContent(pathname);
  if (!ssr) return html;
  return html.replace(
    '<div id="root"></div>',
    `<div id="root"></div><div id="ssr-content" aria-hidden="true" tabindex="-1" style="position:absolute;left:-9999px;width:1px;height:1px;overflow:hidden;clip:rect(0,0,0,0)">${ssr.replace(/<a /g, '<a tabindex="-1" ')}</div>`
  );
}

function routeToFilePath(route: string): string {
  if (route === "/") return path.join(OUT_DIR, "index.html");
  const clean = route.replace(/^\//, "").replace(/\/$/, "");
  return path.join(OUT_DIR, clean, "index.html");
}

async function run() {
  console.log("→ Cleaning dist/");
  await rm(OUT_DIR, { recursive: true, force: true });

  console.log("→ Building client (vite)…");
  await viteBuild({
    build: { outDir: OUT_DIR, emptyOutDir: true },
  });

  const baseHtml = await readFile(path.join(OUT_DIR, "index.html"), "utf-8");
  const routes = getAllRoutes();

  console.log(`→ Prerendering ${routes.length} routes…`);
  for (const route of routes) {
    let html = injectMetaTags(baseHtml, route);
    html = injectSSR(html, route);
    const file = routeToFilePath(route);
    await mkdir(path.dirname(file), { recursive: true });
    await writeFile(file, html, "utf-8");
    console.log(`   ✓ ${route}`);
  }

  // Cloudflare Pages: SPA fallback for any unknown route → render shell
  // (Note: prerendered HTML files take precedence over this fallback)
  const redirects = `/* /index.html 200\n`;
  await writeFile(path.join(OUT_DIR, "_redirects"), redirects, "utf-8");

  // Cloudflare Pages: cache headers
  const headers = [
    "/*",
    "  Cache-Control: public, max-age=0, must-revalidate",
    "",
    "/assets/*",
    "  Cache-Control: public, max-age=31536000, immutable",
    "",
    "/*.svg",
    "  Cache-Control: public, max-age=86400",
    "",
    "/*.png",
    "  Cache-Control: public, max-age=86400",
    "",
    "/*.jpg",
    "  Cache-Control: public, max-age=86400",
    "",
    "/*.jpeg",
    "  Cache-Control: public, max-age=86400",
    "",
    "/*.webp",
    "  Cache-Control: public, max-age=86400",
    "",
  ].join("\n");
  await writeFile(path.join(OUT_DIR, "_headers"), headers, "utf-8");

  console.log(`\n✓ Build complete. Output: ${OUT_DIR}`);
  console.log(`  Routes prerendered: ${routes.length}`);
  console.log(`  Noindex pages: ${noIndexPages.length}`);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
