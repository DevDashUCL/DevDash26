# DevDash '26 – Landing Page: Context & Structured Prompt

---

## Project Overview

**Client:** UCL ICT Club — organizer of DevDash '26 (UCL's inaugural university-wide hackathon)
**Deliverable:** A full-featured, SEO-optimized, mobile-responsive event landing page
**Framework:** Next.js 14+ (App Router) with TypeScript
**Deployment Target:** Vercel (or any Node.js host)
**Design Mode:** Full black-mode dark theme; mission-command / HUD visual language (no fictional lore — real event, dramatic tone)

---

## Brand Identity & Design Tokens

### Color Palette
```
--color-bg-primary:      #0A0A0A   /* Near-pitch black – page background */
--color-bg-surface:      #111111  /* Cards, nav, elevated surfaces */
--color-bg-elevated:     #1A1A1A  /* Hover states, input fields, accordion panels */
--color-signal-green:    #1F7A3D  /* Primary accent — HUD borders, CTAs, active states */
--color-signal-green-glow: #39FF6A /* Brighter glow variant — pulses, progress bars, particle accents */
--color-amber:           #E8A33D  /* Secondary accent — pending/TBA badges, warnings, hover highlights */
--color-white:           #FFFFFF  /* Pure white – headings, icons */
--color-text-primary:    #FFFFFF  /* Body text */
--color-text-secondary:  #A0A0A0  /* Muted / supporting text */
--color-border:          #2A2A2A  /* Subtle borders, dividers */
--color-green-hover:     #165E2E  /* Green hover / pressed state */
```

### Typography
```
Display / Hero:   "Chakra Petch" or "Rajdhani" (Google Fonts) – uppercase, tight tracking, technical feel
Headings (H2–H4): "Inter" 700–900 weight – clean, confident, modern
Body / UI:        "Inter" 400–500 – readable, neutral
System / Labels:  "JetBrains Mono" or "Space Mono" – loading sequences, timestamps, mono-style tags
Section Labels:   "Inter" 500, letter-spacing: 0.15em, uppercase, color: var(--color-signal-green)
```

### Spacing Scale (rem-based, Tailwind-compatible)
```
4px → 8px → 12px → 16px → 24px → 32px → 48px → 64px → 96px → 128px
```

### Border Radius
```
Cards / Inputs:   8px
Buttons:          6px
Badges:           4px
Hero / Full-bleed images: 0px
HUD frame corners: custom clipped-corner bracket (via clip-path), not radius
```

---

## Animation Strategy — Framer Motion + GSAP

Two libraries, two distinct jobs. Never mix them on the same element.

### Library Responsibilities

| Library | Use For | Why |
|---|---|---|
| **Framer Motion** | Component mount/unmount, scroll-triggered section reveals, hover micro-interactions, page-load stagger sequences, accordion open/close, mobile menu overlay | Declarative React integration, layout animations, `AnimatePresence` for exit states |
| **GSAP + ScrollTrigger** | Loading-screen boot sequence, hero background scan/parallax, event-timeline progress-rail draw, reactor pulse loop, navbar background transition on scroll | Timeline-based precision, ScrollTrigger scrub/pin, complex sequencing outside React render cycle |

### Installation
```bash
npm install framer-motion gsap @gsap/react
```

---

### Framer Motion – Patterns by Component

#### 1. Shared Scroll-Reveal Wrapper (`components/animations/ScrollReveal.tsx`)
Used to wrap any section content that should fade-up on scroll entry.
```tsx
const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } }
}
// Usage: wrap with <ScrollReveal> — uses useInView + motion.div
```

#### 2. Loading Screen (`components/sections/LoadingScreen.tsx`)
- Sequential text lines animate in and swap: `DEVDASH — INITIALIZING…` → `LOADING SYSTEMS…`
  ```tsx
  <AnimatePresence mode="wait">
    <motion.p key={line} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} />
  </AnimatePresence>
  ```
- On completion, `AnimatePresence` unmounts the loading screen (`exit={{ opacity: 0 }}`) once GSAP's flash-and-cut timeline (below) completes.

#### 3. Hero (`components/sections/Hero.tsx`)
- **Page-load stagger**: eyebrow → H1 → subheadline → CTA enters sequentially
  ```tsx
  const container = { hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }
  // Each child: opacity 0→1, y 40→0, duration 0.7
  ```
- **CTA button hover**: `whileHover={{ scale: 1.03 }}` + `whileTap={{ scale: 0.97 }}`
- **Sticky CTA**: Register button remains visible via `motion.div` `animate` tied to scroll position

#### 4. Navbar (`components/layout/Navbar.tsx`)
- **Background transition**: `motion.header` `animate={{ backgroundColor: scrolled ? '#111111' : 'transparent', backdropFilter: scrolled ? 'blur(12px)' : 'none' }}`
- **Mobile menu**: `AnimatePresence` + `motion.div` `initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}`
- **Nav link hover underline**: `motion.span` underline, `scaleX 0→1` on hover, `transformOrigin: 'left'`

#### 5. Mission Brief (`components/sections/MissionBrief.tsx`)
- Paragraphs wrapped individually in `ScrollReveal` with incremented delay (index × 0.12s)

#### 6. Meet the Team (`components/sections/MeetTheTeam.tsx`)
- Committee cards staggered fade-in: `container` with `staggerChildren: 0.08`, each card `opacity 0→1, y 16→0`
- **Card hover lift**: `whileHover={{ y: -4 }}`

#### 7. Event Timeline (`components/sections/EventTimeline.tsx`)
- Each timeline row wrapped in `ScrollReveal`; final "DevDash '26 Hackathon" row gets an extra `whileInView` pulse/scale emphasis

#### 8. The Arsenal (`components/sections/TheArsenal.tsx`)
- Prize-tier cards `ScrollReveal` stagger; "TBA" badge uses a subtle `animate={{ opacity: [1, 0.6, 1] }}` breathing loop (respecting reduced motion)

#### 9. War Council / FAQ (`components/sections/WarCouncil.tsx`)
- `AnimatePresence` per accordion item: `initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}`
- Chevron icon rotates `whileTap`/`animate` on open state change

#### 10. Join the Program (`components/sections/JoinTheProgram.tsx`)
- Headline word reveal: each word in a `motion.span` with stagger, `clipPath: 'inset(0 100% 0 0)' → 'inset(0 0% 0 0)'`
- CTA button: `whileHover={{ scale: 1.03 }}`, ambient glow via `animate={{ boxShadow: [...] }}` loop

#### 11. Footer (`components/layout/Footer.tsx`)
- 4-column `ScrollReveal` stagger fade-up on scroll entry

---

### GSAP + ScrollTrigger – Patterns by Component

Register plugins once in a `lib/gsap.ts` file:
```ts
// lib/gsap.ts
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
export { gsap, ScrollTrigger }
```

All GSAP code runs inside `useGSAP()` hook from `@gsap/react` with the section's `containerRef` as scope. Always return cleanup: `return () => ScrollTrigger.getAll().forEach(t => t.kill())`.

#### 1. Loading Screen Boot Sequence (`components/sections/LoadingScreen.tsx`)
```ts
const tl = gsap.timeline({ onComplete: () => setBootComplete(true) })
tl.to(progressBarRef.current, { width: '100%', duration: 1.8, ease: 'power1.inOut' })
  .to(flashRef.current, { opacity: 1, duration: 0.15 })
  .to(flashRef.current, { opacity: 0, duration: 0.35 })
```

#### 2. Hero Background Scan / Parallax (`components/sections/Hero.tsx`)
```ts
gsap.to(heroBgRef.current, {
  yPercent: 15,
  ease: 'none',
  scrollTrigger: { trigger: heroRef.current, start: 'top top', end: 'bottom top', scrub: true }
})
```

#### 3. Navbar Background Transition (`components/layout/Navbar.tsx`)
```ts
ScrollTrigger.create({
  start: 'top -80px',
  onEnter: () => gsap.to(navRef.current, { backgroundColor: '#111111', backdropFilter: 'blur(12px)', duration: 0.3 }),
  onLeaveBack: () => gsap.to(navRef.current, { backgroundColor: 'transparent', backdropFilter: 'none', duration: 0.3 })
})
```
> Note: Use GSAP for the navbar background OR Framer Motion's `animate` prop — not both. GSAP is preferred here for scroll precision.

#### 4. Event Timeline Progress-Rail Draw (`components/sections/EventTimeline.tsx`)
```ts
gsap.fromTo(railRef.current,
  { scaleY: 0 },
  { scaleY: 1, transformOrigin: 'top center', ease: 'none',
    scrollTrigger: { trigger: timelineRef.current, start: 'top 70%', end: 'bottom 80%', scrub: 0.5 }
  }
)
```

#### 5. The Arsenal Reactor Pulse (`components/sections/TheArsenal.tsx`)
```ts
gsap.to(reactorGlowRef.current, {
  opacity: 0.5, scale: 1.05,
  duration: 1.6, ease: 'sine.inOut',
  repeat: -1, yoyo: true
})
```

#### 6. Join the Program CTA Power-On (`components/sections/JoinTheProgram.tsx`)
```ts
gsap.fromTo(ctaGlowRef.current,
  { opacity: 0 },
  { opacity: 1, duration: 1.2, ease: 'power2.out',
    scrollTrigger: { trigger: ctaRef.current, start: 'top 75%', once: true }
  }
)
```

---

### SSR Safety Rules for Animations

Both libraries require browser APIs. Follow these rules in Next.js App Router:

1. All components using Framer Motion or GSAP must be `'use client'` components.
2. Wrap GSAP `useGSAP()` calls in a check: `if (typeof window === 'undefined') return`
3. Use `dynamic()` import with `{ ssr: false }` for the LoadingScreen (blocks first paint by design):
   ```ts
   const LoadingScreen = dynamic(() => import('@/components/sections/LoadingScreen'), { ssr: false })
   ```
4. Always respect reduced motion:
   ```ts
   // Framer Motion — global, in layout: <MotionConfig reducedMotion="user">

   // GSAP — in each useGSAP block
   const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
   if (prefersReduced) return
   ```
5. If `prefers-reduced-motion` is set, the Loading Screen should skip straight to the Hero (no boot animation, no flash).

---

## Page Sections & Component Specifications

### 0. Loading Screen
- Full black overlay, mounted at root, shown once per session (session-storage flag)
- Sequential system text: `DEVDASH — INITIALIZING…` → `LOADING SYSTEMS…`
- Progress bar fills 0% → 100%
- Green flash, then unmounts into Hero
- Skips automatically if `prefers-reduced-motion` is set

### 1. Navbar
- Fixed, transparent on scroll-top → solid `#111111` + `backdrop-blur` on scroll (GSAP ScrollTrigger)
- Logo: "DEVDASH '26" wordmark
- Nav links (anchor scroll): About, Team, Timeline, Prizes, FAQ
- CTA Button: "Register" → green pill button, right-aligned (Framer Motion `whileHover`)
- Mobile: hamburger → full-screen slide-down menu overlay (Framer Motion `AnimatePresence`)
- Aria-label on nav, skip-to-main link for a11y

### 2. Hero
- Full-viewport height (`100dvh`), dark HUD/mission-control background (`object-fit: cover`)
- Overlay: `linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.9) 100%)`
- Eyebrow label: "UCL ICT CLUB PRESENTS" in green, letter-spaced
- H1: `BUILD THE FUTURE. DEFEND THE MISSION.` (Chakra Petch / Rajdhani, ~80–96px desktop, 48px mobile)
- Subheadline: "Join UCL's Inaugural University Hackathon — 10 HOURS where the next generation of engineers, developers, designers, and innovators build tomorrow's technology."
- CTA: Primary "Register →" (green button)
- **GSAP**: background scan/parallax
- **Framer Motion**: staggered content entrance on page load, sticky CTA on scroll

### 3. Mission Brief (About)
- Single-column dossier-style layout, max-width ~720px, centered or left-aligned
- Section label: "MISSION BRIEF" green, uppercase
- H2: "THE MISSION NEEDS BUILDERS."
- 3-paragraph confirmed body copy (see Content section below)
- **Framer Motion**: paragraph-by-paragraph `ScrollReveal` stagger

### 4. Meet the Team
- Section label: "MEET THE TEAM"
- H2: "The Committee"
- Grid of 8 member cards: Name, Role, and (only for Event Lead + Program Coordinator) Email + Contact No.
- Card anatomy: `#111111` background, green top border accent, name bold white, role in `#A0A0A0`
- **Framer Motion**: staggered card fade-in, `whileHover={{ y: -4 }}`

### 5. Event Timeline
- Section label: "EVENT TIMELINE"
- H2: "Operation Schedule"
- Vertical rail with 4 nodes: 3 workshops + the hackathon day (visually emphasized, e.g. green-filled node + bold label)
- Each node: Session/Workshop name, Conducted By, Date, Time
- **GSAP**: vertical progress rail draws (scaleY) as the section scrolls into view
- **Framer Motion**: each node's text content `ScrollReveal`

### 6. The Arsenal (Prizes)
- Section label: "THE ARSENAL"
- H2: "Prizes"
- Three prize tiers (1st / 2nd / 3rd) displayed as cards around a central glowing "reactor" graphic
- Copy: "Cash prizes and certificates await the top three teams. Full prize breakdown to be announced soon — certificates provided to all participants."
- Visible "TBA" badge (amber) on the prize amount until confirmed
- **GSAP**: reactor glow pulses on an infinite yoyo loop
- **Framer Motion**: card `ScrollReveal` stagger, breathing "TBA" badge opacity loop

### 7. War Council (FAQ)
- Section label: "WAR COUNCIL"
- H2: "Mission Protocols"
- Accordion with 4 items:
  1. Can students join? *(placeholder — confirm eligibility)*
  2. How many participants are allowed? *(placeholder — confirm team size limit)*
  3. Can beginners apply? — Yes, DevDash welcomes builders of all experience levels.
  4. Do I need to bring a laptop? — Yes, participants should bring their own laptop and charger.
- **Framer Motion**: `AnimatePresence` height/opacity expand-collapse per item

### 8. Join the Program (Final CTA)
- Full-width closing panel, HUD accent glow matching Hero
- H2: "THE NEXT BUILDER IS YOU."
- CTA: "Register Now →" (green button)
- **GSAP**: glow fades in once on scroll entry
- **Framer Motion**: headline word-by-word clip-path reveal, CTA `whileHover`

### 9. Footer
- 4-column: Logo + tagline, Quick Links (About, Team, Timeline, Prizes, FAQ), Contact, Social/Partner logos
- Line: "DEVDASH '26 — UCL's Inaugural University Hackathon"
- Line: "Powered by the UCL ICT Club" + club logo + UCL logo
- Closing line, styled as a system sign-off: "Transmission Complete."
- Bottom copyright bar (`#1A1A1A`)
- **Framer Motion**: footer columns stagger fade-up on scroll entry

---

## Technical Architecture

### Folder Structure
```
/
├── app/
│   ├── layout.tsx              # Root layout, metadata, fonts, MotionConfig
│   ├── page.tsx                # Home page – assembles all sections + JSON-LD
│   └── globals.css             # CSS variables, Tailwind base overrides
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx           # 'use client' – GSAP ScrollTrigger + FM AnimatePresence
│   │   └── Footer.tsx           # 'use client' – FM stagger
│   ├── sections/
│   │   ├── LoadingScreen.tsx    # 'use client' – GSAP boot timeline + FM AnimatePresence, ssr:false
│   │   ├── Hero.tsx             # 'use client' – FM stagger + GSAP parallax
│   │   ├── MissionBrief.tsx     # 'use client' – FM ScrollReveal
│   │   ├── MeetTheTeam.tsx      # 'use client' – FM stagger cards
│   │   ├── EventTimeline.tsx    # 'use client' – GSAP rail draw + FM ScrollReveal
│   │   ├── TheArsenal.tsx       # 'use client' – GSAP pulse loop + FM stagger
│   │   ├── WarCouncil.tsx       # 'use client' – FM AnimatePresence accordion
│   │   ├── JoinTheProgram.tsx   # 'use client' – GSAP glow-in + FM word reveal
│   │   └── Footer.tsx           # (see layout/Footer.tsx)
│   ├── ui/
│   │   ├── Button.tsx           # FM whileHover / whileTap
│   │   ├── SectionLabel.tsx     # Static
│   │   ├── TeamCard.tsx         # FM whileHover
│   │   ├── TimelineNode.tsx     # FM ScrollReveal child
│   │   ├── PrizeCard.tsx        # FM ScrollReveal child
│   │   ├── FaqAccordionItem.tsx # FM AnimatePresence
│   │   └── Icon.tsx             # FM whileHover
│   └── animations/
│       ├── ScrollReveal.tsx     # FM useInView wrapper (fade-up)
│       └── WordReveal.tsx       # FM per-word clip-path stagger
│
├── lib/
│   ├── gsap.ts                  # Register GSAP plugins once
│   ├── constants.ts             # Nav links, committee data, timeline data, FAQ data, registration URL
│   ├── types.ts                 # TypeScript interfaces
│   └── utils.ts                 # cn() helper, formatters
│
├── hooks/
│   ├── useScrolled.ts           # Scroll position boolean
│   └── useMediaQuery.ts         # Breakpoint detection
│
├── public/
│   ├── images/                  # Optimized WebP images
│   └── icons/                   # SVG brand/social icons
│
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── .env.local
```

### Key Technical Decisions

| Concern | Decision | Reason |
|---|---|---|
| Styling | Tailwind CSS v3 + CSS variables | Utility-first + themeable tokens |
| Fonts | `next/font/google` (Chakra Petch/Rajdhani + Inter + JetBrains Mono) | Zero layout shift, self-hosted |
| Images | `next/image` with WebP + `priority` on hero | Core Web Vitals (LCP) |
| Scroll animations | Framer Motion `useInView` | Declarative, React-native, easy stagger |
| Complex timelines | GSAP + ScrollTrigger | Precision scrub, rail draw, pulse loop |
| SSR safety | `'use client'` + `dynamic({ ssr: false })` on LoadingScreen | Both libs need browser APIs |
| Registration | External link (Google Form / Tally) via `NEXT_PUBLIC_REGISTRATION_URL` | No backend form needed for MVP; swap to `/api/register` later if in-house form is required |
| Committee & Timeline data | Structured arrays in `lib/constants.ts` | Content updates without code edits |
| SEO | `generateMetadata()`, JSON-LD (`Event` schema), semantic HTML | Google rich results, event rich snippets |
| Accessibility | `aria-*`, keyboard nav, `MotionConfig reducedMotion="user"` | WCAG 2.1 AA |

---

## SEO Configuration

### `app/layout.tsx`
```typescript
import { MotionConfig } from 'framer-motion'

export const metadata: Metadata = {
  title: "DevDash '26 | UCL's Inaugural University Hackathon",
  description: "Join UCL ICT Club's first-ever university-wide hackathon. 10 hours. Builders of all levels welcome. Register today.",
  keywords: ['UCL hackathon', 'DevDash', 'UCL ICT Club', 'university hackathon Sri Lanka', 'student developer event'],
  openGraph: {
    title: "DevDash '26 – UCL's Inaugural University Hackathon",
    description: 'Build the future. Defend the mission. Register for DevDash \'26.',
    url: 'https://yourdomain.com',
    siteName: "DevDash '26",
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://yourdomain.com' },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MotionConfig reducedMotion="user">
          {children}
        </MotionConfig>
      </body>
    </html>
  )
}
```

### JSON-LD in `app/page.tsx`
```json
{
  "@context": "https://schema.org",
  "@type": "Event",
  "name": "DevDash '26",
  "description": "UCL's inaugural university-wide hackathon, organized by the UCL ICT Club.",
  "startDate": "2026-09-19T08:00:00+05:30",
  "endDate": "2026-09-19T19:00:00+05:30",
  "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
  "eventStatus": "https://schema.org/EventScheduled",
  "location": {
    "@type": "Place",
    "name": "[VenueName]",
    "address": { "@type": "PostalAddress", "streetAddress": "[StreetAddress]", "addressLocality": "[City]", "addressCountry": "LK" }
  },
  "organizer": { "@type": "Organization", "name": "UCL ICT Club" },
  "offers": { "@type": "Offer", "url": "[RegistrationURL]", "price": "0", "priceCurrency": "LKR", "availability": "https://schema.org/InStock" }
}
```

> Note: `startDate`/`endDate` times are marked tentative in the source content (8 AM–7 PM) — confirm before publishing structured data, as inaccurate event schema can trigger Search Console warnings.

---

## Assets Required from Client

Supply in `/public/images/`:

| Filename | Usage | Dimensions |
|---|---|---|
| `hero-bg.jpg` | Hero full-bleed background (mission-control / HUD ambience) | 1920×1080px |
| `team-shehani.jpg` | Meet the Team – Event Lead | 400×400px |
| `team-mahdi.jpg` | Meet the Team – Program Coordinator | 400×400px |
| `team-vinuki.jpg` | Meet the Team – Judging & Evaluation Coordinator | 400×400px |
| `team-vinuli.jpg` | Meet the Team – Logistics & Communication Lead | 400×400px |
| `team-mirco.jpg` | Meet the Team – Technical Coordinator | 400×400px |
| `team-moksha.jpg` | Meet the Team – Technical Coordinator | 400×400px |
| `team-ovin.jpg` | Meet the Team – Design Coordinator | 400×400px |
| `team-eeshal.jpg` | Meet the Team – Design Coordinator | 400×400px |
| `cta-bg.jpg` | Join the Program background accent | 1440×480px |
| `og-image.jpg` | Open Graph social share | 1200×630px |
| `logo-ict-club.svg` | UCL ICT Club logo (footer) | vector |
| `logo-ucl.svg` | UCL logo (footer) | vector |

All raster images: WebP preferred, optimised to <200KB each.

---

## Content Placeholders

```
[RegistrationURL]  → Final Google Form / registration page link
[VenueName]        → Hackathon venue name
[StreetAddress]    → Venue street address
[City]             → Colombo / Negombo / etc.
[ContactEmail]      → General event inbox, if different from committee emails
[InstagramURL]     → Social link
[FacebookURL]      → Social link
[LinkedInURL]      → Social link
```

**Confirmed content already locked in** (do not treat as placeholder): Hero headline/subhead, Mission Brief copy, full committee roster, workshop + hackathon-day schedule, prize copy, and 2 of 4 FAQ answers.

**Outstanding — confirm before launch:**
- Eligibility rule (War Council Q1)
- Team size limit (War Council Q2)
- Final registration link destination
- Confirmed hackathon-day start/end time (currently tentative)
- Full prize breakdown (currently "to be announced soon")

---

## Structured Prompt for Antigravity / AI Code Generation

> **Copy and paste the block below directly into Antigravity:**

---

### ANTIGRAVITY PROMPT (copy from here)

```
You are building a production-ready, SEO-optimized, mobile-responsive landing page for DevDash '26, UCL's inaugural university-wide hackathon, organized by the UCL ICT Club.

## Stack
- Next.js 14+ with App Router and TypeScript
- Tailwind CSS v3 for styling
- next/font for Google Fonts (Chakra Petch or Rajdhani for display, Inter for body/UI, JetBrains Mono for system/loading text)
- next/image for all images with WebP and priority on hero
- Framer Motion for component-level animations (scroll reveals, stagger, hover, accordion, AnimatePresence)
- GSAP + ScrollTrigger (@gsap/react) for scroll-driven animations (boot sequence, parallax, rail draw, pulse loop)
- CSS custom properties for the full design token system

## Animation Library Split — FOLLOW THIS EXACTLY

### Framer Motion handles:
- Loading screen sequential text swap (AnimatePresence mode="wait")
- Page-load hero content stagger (eyebrow → H1 → subheadline → CTA, staggerChildren: 0.15)
- Navbar mobile menu AnimatePresence slide-in/out
- All ScrollReveal (useInView) section fade-ups: opacity 0→1, y 32→0, ease [0.22,1,0.36,1]
- Meet the Team card stagger fade-in + whileHover lift
- Event Timeline node text ScrollReveal
- The Arsenal card stagger + breathing "TBA" badge opacity loop
- War Council accordion AnimatePresence height/opacity expand-collapse
- Join the Program headline word-by-word clipPath reveal stagger
- All Button whileHover (scale 1.03) + whileTap (scale 0.97)
- Footer columns ScrollReveal stagger
- Navbar background color animate prop (backgroundColor, backdropFilter) driven by useScrolled hook

### GSAP + ScrollTrigger handles:
- Loading screen progress bar fill (0→100%) + green flash + timeline onComplete callback
- Hero background parallax (yPercent: 15, scrub: true)
- Event Timeline vertical progress-rail scaleY draw (scrub: 0.5)
- The Arsenal reactor glow infinite pulse (repeat: -1, yoyo: true)
- Join the Program CTA glow fade-in (once: true, on scroll entry)

### SSR Safety (MANDATORY):
- Every component using either library must be 'use client'
- Use dynamic(() => import(...), { ssr: false }) for LoadingScreen
- Register GSAP plugins once in lib/gsap.ts: gsap.registerPlugin(ScrollTrigger)
- All useGSAP() calls scoped to containerRef
- Always cleanup: ScrollTrigger.getAll().forEach(t => t.kill())
- Wrap root layout children in <MotionConfig reducedMotion="user"> for a11y
- If prefers-reduced-motion is set, LoadingScreen skips straight to Hero with no boot animation

## Design System
Full dark mode. Mission-command / HUD palette (no fictional lore in copy):
- Background: #0A0A0A (page), #111111 (nav/cards), #1A1A1A (inputs/elevated)
- Accent Green: #1F7A3D (primary accent — buttons, labels, active states, progress), glow variant #39FF6A
- Accent Amber: #E8A33D (used sparingly — TBA badges, warnings)
- Text: #FFFFFF (headings), #A0A0A0 (body/muted)
- Borders: #2A2A2A

Typography:
- Section eyebrows: Inter 500, uppercase, letter-spacing 0.15em, color #1F7A3D
- H1: Chakra Petch/Rajdhani 96px desktop / 48px mobile, white, tight tracking
- H2: Inter 700, 48px desktop / 32px mobile, white
- Body: Inter 400, 16px/1.7, #A0A0A0
- System text (loading screen): JetBrains Mono, uppercase, letter-spacing 0.1em

## Sections to Build (in order)

0. **Loading Screen** – Full black overlay, mounted once per session. JetBrains Mono text: "DEVDASH — INITIALIZING…" then "LOADING SYSTEMS…" (Framer AnimatePresence swap). GSAP timeline fills a progress bar 0→100%, then triggers a green flash, then the component unmounts into the Hero. Skips entirely if prefers-reduced-motion.

1. **Navbar** – Fixed. useScrolled hook drives Framer Motion animate prop (backgroundColor transparent→#111111, backdropFilter none→blur(12px)). Logo "DEVDASH '26". Nav links (anchor scroll): About, Team, Timeline, Prizes, FAQ. "Register" green CTA with whileHover, links to NEXT_PUBLIC_REGISTRATION_URL. Hamburger → AnimatePresence full-screen mobile overlay. Focus trap on open. Skip-to-main link.

2. **Hero** – 100dvh. next/image priority background (/images/hero-bg.jpg) with GSAP parallax. Dark gradient overlay. Framer stagger container: eyebrow "UCL ICT CLUB PRESENTS" (green) → H1 "BUILD THE FUTURE. DEFEND THE MISSION." (Chakra Petch/Rajdhani, white) → subheadline (#A0A0A0, mentions 10-hour hackathon) → single CTA "Register →". Sticky CTA behavior on scroll.

3. **Mission Brief** – SectionLabel "MISSION BRIEF" + H2 "THE MISSION NEEDS BUILDERS." 3 paragraphs of confirmed copy (see content section), each paragraph in its own Framer ScrollReveal with staggered delay.

4. **Meet the Team** – SectionLabel "MEET THE TEAM" + H2 "The Committee". Grid of 8 TeamCard components (Name, Role; Email + Contact No. shown only for Event Lead and Program Coordinator, all others show role only — do not fabricate missing contact details). Framer stagger fade-in + whileHover lift.

5. **Event Timeline** – SectionLabel "EVENT TIMELINE" + H2 "Operation Schedule". Vertical rail with 4 TimelineNode entries (3 workshops + hackathon day, final node visually emphasized). GSAP scaleY rail draw on scroll, Framer ScrollReveal per node.

6. **The Arsenal** – SectionLabel "THE ARSENAL" + H2 "Prizes". 3 PrizeCard components (1st/2nd/3rd) around a central reactor-glow graphic (GSAP infinite pulse). Copy: cash prizes + certificates for top 3, full breakdown TBA, certificates for all participants. Amber "TBA" badge with Framer breathing-opacity loop.

7. **War Council** – SectionLabel "WAR COUNCIL" + H2 "Mission Protocols". FaqAccordionItem × 4 (Framer AnimatePresence height/opacity expand-collapse): can students join (placeholder), how many participants (placeholder), can beginners apply (yes), do I need a laptop (yes, bring laptop + charger).

8. **Join the Program** – Full-width closing panel matching Hero's HUD accent. H2 "THE NEXT BUILDER IS YOU." with Framer WordReveal clip-path stagger. CTA "Register Now →" (green, whileHover). GSAP glow fade-in once on scroll entry.

9. **Footer** – 4-column Framer stagger. Col1: "DEVDASH '26" wordmark + tagline. Col2: Quick Links (About, Team, Timeline, Prizes, FAQ). Col3: Contact (event email if available). Col4: "Powered by the UCL ICT Club" + club logo + UCL logo + social icons. Closing line styled as a system sign-off: "Transmission Complete." Bottom bar: copyright, #1A1A1A bg.

## Key Requirements
- Semantic HTML5: <header>, <main>, <section id="...">, <footer>, <nav>, <article>
- Section IDs: about, team, timeline, prizes, faq
- generateMetadata() in app/layout.tsx with full OG + Twitter tags
- JSON-LD Event schema script in app/page.tsx (mark tentative fields clearly in code comments until confirmed)
- Mobile-first breakpoints: sm:640 md:768 lg:1024 xl:1280
- Registration CTAs link to NEXT_PUBLIC_REGISTRATION_URL env variable — no hardcoded URL, no backend form for MVP
- No placeholder.com — use next/image with /images/ paths
- Do not fabricate committee contact details, prize amounts, eligibility rules, or event times beyond what is provided — render clearly marked "TBA"/placeholder states instead

## Folder Structure (exact)
app/ → layout.tsx, page.tsx, globals.css
components/layout/ → Navbar.tsx, Footer.tsx
components/sections/ → LoadingScreen.tsx, Hero.tsx, MissionBrief.tsx, MeetTheTeam.tsx, EventTimeline.tsx, TheArsenal.tsx, WarCouncil.tsx, JoinTheProgram.tsx
components/ui/ → Button.tsx, SectionLabel.tsx, TeamCard.tsx, TimelineNode.tsx, PrizeCard.tsx, FaqAccordionItem.tsx, Icon.tsx
components/animations/ → ScrollReveal.tsx, WordReveal.tsx
lib/ → gsap.ts, constants.ts, types.ts, utils.ts
hooks/ → useScrolled.ts, useMediaQuery.ts
public/images/ → (client-supplied WebP assets)

## Content
Use the confirmed DevDash '26 copy exactly as provided for Hero, Mission Brief, Meet the Team roster, Event Timeline, The Arsenal, and the two confirmed FAQ answers. Mark unconfirmed items (eligibility, team size, prize breakdown, registration link, event end time) as clearly flagged placeholders in code comments, not invented values.
```

---

*End of context.md*
