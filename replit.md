# Bombshell Marketing - Omaha Web Design Agency

## Overview

This is a marketing agency website for Bombshell Marketing, a web design, logo design, and brand photography agency based in Omaha, Nebraska. The application is a full-stack React/Express project with a modern component-based frontend and a simple backend API structure. The site showcases the agency's portfolio, services, team, and provides contact functionality.

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
- **Runtime**: Node.js with Express 5
- **Language**: TypeScript with ESM modules
- **API Pattern**: RESTful API with `/api` prefix convention
- **Storage**: Pluggable storage interface (currently in-memory, prepared for PostgreSQL)
- **Database ORM**: Drizzle ORM with PostgreSQL dialect configured
- **Schema Validation**: Zod with drizzle-zod integration

### Build System
- **Development**: Vite dev server with HMR, proxied through Express
- **Production**: esbuild bundles server code, Vite builds client to `dist/public`
- **Scripts**: Custom build script handles both client and server compilation

### Design System
- **Typography**: Anton (headlines/display), Montserrat (body/sans)
- **Color Scheme**: Dusty Pink (#D9A3B0) background, Lavender (#A995D6) primary, Golden Yellow (#F2C94C) secondary, Soft Blush (#E5B6C1) cards, Primary Black (#1A1A1A) text
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
- **PostgreSQL**: Configured via `DATABASE_URL` environment variable
- **Drizzle Kit**: Database migrations stored in `/migrations` directory
- **Schema**: User authentication table defined in `shared/schema.ts`

### Key NPM Packages
- **Frontend**: React, Wouter, Framer Motion, TanStack Query, Radix UI components
- **Backend**: Express 5, Drizzle ORM, connect-pg-simple for sessions
- **Build**: Vite, esbuild, TypeScript, Tailwind CSS

### Fonts
- Google Fonts: Montserrat (loaded via CSS)

### Image Assets
- Portfolio images stored in `client/src/assets/images/`
- Public assets in `client/public/` (favicon, robots.txt, OpenGraph images)