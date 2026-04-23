# Bombshell Marketing - Omaha Web Design Agency

## Overview

This is a marketing agency website for Bombshell Marketing, a web design, logo design, and brand photography agency based in Omaha, Nebraska. The application is a **static React SPA** with a build-time prerendering step for SEO. The site showcases the agency's portfolio, services, team, and provides contact functionality. Form submissions are sent client-side directly to GoHighLevel.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **Styling**: Tailwind CSS v4 with custom design tokens and CSS variables
- **UI Components**: Shadcn/ui component library (New York style) with Radix UI primitives
- **Animations**: Framer Motion for page transitions and scroll animations
- **State Management**: TanStack React Query for server state
- **Build Tool**: Vite with custom plugins for development

### Backend Architecture
- **None.** This is a static frontend-only project. There is no Express server, no API, no database.
- Contact form submissions POST directly from the browser to a GoHighLevel webhook.

### Build System
- **Development**: `npx vite dev --port 5000` (pure Vite)
- **Production build**: `npx tsx prerender/index.ts` runs Vite build, then prerenders 26 routes (static + blog + portfolio + unlisted) into `dist/<route>/index.html` with per-route SEO meta tags and hidden SSR content for crawlers. Also writes Cloudflare `_redirects` (SPA fallback) and `_headers` (cache control).
- **SEO modules**: `prerender/seo.ts` (per-route meta), `prerender/ssr-content.ts` (hidden crawler content)
- **Deployment target**: Cloudflare Pages (static site). Build command: `npx tsx prerender/index.ts`. Publish directory: `dist/`.

### Design System
- **Typography**: Montserrat Bold (headlines/display), Montserrat (body/sans)
- **Color Scheme**: Black and white minimal palette
- **Border Radius**: Set to 0 for sharp, modern aesthetic
- **Custom Animations**: Marquee scrolling effect, custom keyframe animations

### Page Structure
- Home page with hero, services, portfolio, case studies, team, testimonials
- Individual service pages (Web Design, Logo Branding, Brand Photography)
- Portfolio page with project showcases and case study detail pages
- About and Contact pages with embedded form integration

## External Dependencies

### Third-Party Services
- **Google Analytics**: Tracking via gtag.js (ID: G-W3NWLVE9FK)
- **Contact Forms**: External form embed from msgsndr.com (GoHighLevel)
- **Website Audit Tool**: External link to audit.bombshellmarketingomaha.com

### Database
- None. The project no longer uses any database.

### Key NPM Packages
- **Frontend**: React 19, Wouter, Framer Motion, TanStack Query, Radix UI components
- **Build**: Vite 7, TypeScript, Tailwind CSS v4, tsx (runs the prerender script)

### Fonts
- Google Fonts: Montserrat (loaded via CSS)

### Image Assets
- Portfolio images stored in `client/src/assets/images/`
- Public assets in `client/public/` (favicon, robots.txt, OpenGraph images)