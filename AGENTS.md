<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Project rules – The Smile Studio (kit-dental-clinic)

Concept dental clinic website by Sanra Labs, built as a portfolio piece. Every name, number and address is fictional.

## Stack
- Next.js 16 (App Router, `src/`), React 19, TypeScript, Tailwind CSS v4 (tokens in `src/app/globals.css` `@theme`)
- Fonts are self-hosted in `src/app/fonts/` via `next/font/local` – do not add Google Fonts
- No UI libraries, icon packs or animation libraries without asking. Icons go in `src/components/ui/Icon.tsx`

## Conventions
- One section per file in `src/components/sections/<Name>.tsx`, exported as a named function, added to `src/app/page.tsx` in order
- All copy and data live in `src/content/site.ts` – components read from it, never hard-code business copy
- Use design tokens only: `brand`, `brand-dark`, `brand-soft`, `surface`, `ink`, `muted`, `line`, `accent`, `accent-dark`, `font-display`, `rounded-[var(--radius-card)]`. No raw hex values in components
- Reuse `Button` and `SectionHeading` from `src/components/ui/Button.tsx`
- Layout: `mx-auto max-w-6xl px-4 sm:px-6`, section padding `py-20 md:py-28`
- Mobile-first; check 360, 768 and 1280 px widths
- Format with `npx prettier@3 --print-width 100 --write "src/**/*.{ts,tsx}"` before committing; avoid long single-line JSX
- Server components by default; add `"use client"` only for interactivity, and keep client components small
- Accessibility: one `h1` (in Hero), sections use `aria-labelledby`, buttons/links have visible text or `aria-label`, touch targets ≥ 44 px, visible focus, respect `prefers-reduced-motion`
- No `new Date()` / `Math.random()` in server components (Cache Components is on)
- Images: `next/image`, WebP/AVIF, explicit sizes; only AI-generated or licensed images; people shown must be fictional
- Never add real business names, real phone numbers, real addresses or fake testimonials/reviews

## Before opening a PR
- `npm run build` and `npm run lint` pass with no warnings
- Work on a branch named `feat/<section>`, never push to `main`
- PR description: what changed and how it behaves at 390 px and 1280 px widths

## Section status
| Section | id | Status |
|---|---|---|
| Header, Hero, Services, WhyUs, Footer, WhatsApp FAB | – | done |
| Doctors (initials now, AI portraits later) | `#doctors` | done |
| ClinicTour (gallery + `<dialog>` lightbox) | `#tour` | done |
| Pricing | `#pricing` | done |
| Faq | `#faq` | done |
| Booking (demo form, no backend) | `#booking` | done |
| Location (illustrated SVG map + hours) | `#location` | done |
