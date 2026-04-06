# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Plaza Morena** - A Next.js 15 website for a Mexican restaurant. Features animated menu carousel, restaurant information, contact form, and location pages.

## Commands

```bash
npm run dev     # Start development server at http://localhost:3000
npm run build   # Production build
npm run start   # Start production server
npm run lint    # Run ESLint
```

## Architecture

- **Framework**: Next.js 15 with App Router (`src/app/`)
- **Styling**: Tailwind CSS 4 with `@tailwindcss/postcss` (v4 syntax)
- **Animation**: Framer Motion for page transitions and interactive elements
- **Fonts**: Google Fonts loaded via `next/font/google`:
  - `Amatic_SC` (700) - headings
  - `Roboto` (400, 700) - body text
  - `Pacifico` (400) - decorative/quote text

### Page Structure

All pages are client components (`"use client"`) located in `src/app/[page]/page.tsx`:
- `/` (Home) - Animated circular food carousel with menu items and navigation buttons
- `/menu` - Full restaurant menu with categories (Entradas, Tacos, Especialidades, Bebidas, Postres)
- `/contacto` - Contact form page
- `/nosotros` - About page with restaurant history and team
- `/ubicacion` - Location page with hours and contact info

### Design System

Mexican flag-inspired color palette used throughout:
- White `#FFFFFF` - accents
- Green `#70A959` - primary actions
- Gold `#DAA520` - highlights
- Red `#CE1126` - backgrounds/headers
- Blue `#1E90FF` - decorative

Each page features animated color bar borders (fixed position) using this palette.

### Key Implementation Notes

- Google Fonts are configured per-page with CSS variables (`--font-amatic`, `--font-roboto`, `--font-pacifico`)
- All pages remove `cz-shortcut-listen` attribute from body on mount
- Images are served from `/public/` directory
- External images from Unsplash are used for food photography with fallback to inline SVG placeholders
- The home page uses a 6-item circular carousel with 60° rotation per item

## Technical Constraints

- No test suite configured (no tests in package.json)
- No API routes currently implemented
- Contact form is UI-only with no backend
