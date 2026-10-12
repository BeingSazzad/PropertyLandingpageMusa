# Landlord HQ — AI Real Estate & Property Intelligence Landing Page

A luxury, high-converting marketing landing page and web suite for **Landlord HQ**, engineered with the **Spaciaz Design System** (Switzer + Plus Jakarta Sans typography, electric lime accents, warm sand backgrounds, and dark onyx bento showcases).

![Architecture](https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop)

---

## 🏛️ Design System & Aesthetic Foundation

Inspired by luxury Mediterranean architectural and real estate agency experiences:
- **Typography:**
  - **Headings / Display:** `Switzer` (via Fontshare CDN) — editorial, modern architectural grotesk.
  - **Body / Subtitles:** `Plus Jakarta Sans` — ultra-legible, geometric sans.
  - **Numbers / Metrics:** `Space Grotesk` (Monospace).
- **Color Palette (Spaciaz Global Tokens):**
  - `--spaciaz-primary`: `#E4ED64` (Electric Architectural Lime Accent)
  - `--spaciaz-bg-light`: `#F6F3EC` (Warm Stone / Architectural Cream)
  - `--spaciaz-dark`: `#121514` (Deep Charcoal / Obsidian Luxury Surface)
  - `--spaciaz-accent`: `#0B0F0E` (Pure Onyx)
  - `--spaciaz-border`: `#E2E2D8`

---

## 📁 Architecture & Folder Organization

This project adheres strictly to Next.js App Router route groups and scalable component hierarchy:

```
src/
├── app/
│   ├── (website)/             # Public marketing landing page (Hero, Process, Showcase, CTA)
│   ├── (auth)/                # Role-based Login and Registration flows
│   ├── (user-dashboard)/      # Resident portal preview
│   ├── (agent-dashboard)/     # Landlord command center preview
│   ├── (InfoPages)/           # About Us, Contact, and Privacy Policy
│   ├── globals.css            # Spaciaz design tokens & utilities
│   └── layout.tsx             # Root layout with Redux Provider & Download Modal
│
├── components/
│   ├── ui/                    # Base atoms: Button, Badge, Card, Modal
│   ├── layout/                # Global Navbar (floating pill) and luxury Footer
│   ├── shared/                # AppDownloadModal, QRCard, PropertyCard
│   └── web-pages/             # Page sections:
│       ├── HeroSection.tsx
│       ├── ProcessSection.tsx
│       ├── DarkShowcaseSection.tsx
│       └── AppDownloadCTA.tsx
│
├── redux/                     # Redux Toolkit global state (UI modal, filters, tabs)
│   ├── features/
│   ├── hooks.ts
│   └── store.ts
└── Mockdata.ts                # Rich, production-grade mock data
```

---

## 🚀 Key Features

1. **Floating Pill Navigation:** Clean blur glassmorphism bar with role login and app download action.
2. **Hero Editorial Showcase:** Architectural imagery with floating badges, live metrics, and inset preview cards (`01` & `02`).
3. **Interactive 4-Step Process Accordion:** Step-by-step AI automation walkthrough synced to interactive visual previews.
4. **Dark Ecosystem Showcase:** 3 tall bento cards highlighting the Mobile App, Contractor Hub, and Financial Yield Radar.
5. **Native App Conversion Hub:** Direct download links for Apple App Store & Google Play with instant QR code scanning and interactive mobile device mockup.

---

## 🛠️ Getting Started

### Prerequisites
- Node.js 18+ (tested on Node 20 & 24)
- npm or pnpm

### Installation & Run

```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev

# 3. Open in browser
http://localhost:3000
```

### Production Build

```bash
npm run build
npm run start
```
