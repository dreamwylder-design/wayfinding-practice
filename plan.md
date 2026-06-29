# PLAN.md — Wayfinding Practice
## Build Phases

Each phase is completable in one Claude Code session.
Clear context between phases. SPEC.md persists and is re-read at the start of each phase.

---

## Pre-build checklist

- [x] Folder structure created per SPEC.md file structure
- [x] All WebP images converted at 85% quality, max 2400px long edge, placed in correct subfolders
- [x] Logo PNGs with transparency in images/logo/
- [x] Formspree account created — form ID xnjkzdkw (routes to richard@wayfindingpractice.com.au)
- [x] Calendly booking URL live — `https://calendly.com/richard-wayfindingpractice/free-call` — popup widget wired via main.js
- [x] GitHub repository created (wayfinding-practice, private — dreamwylder-design/wayfinding-practice)
- [x] Cloudflare Pages connected to GitHub — auto-deploys on push to main
- [x] DNS transferred to Cloudflare — site live at wayfindingpractice.com.au and www.wayfindingpractice.com.au
- [x] All planning documents in project root: CLAUDE.md, SPEC.md, PLAN.md, brand.md

---

## Phase 0 — Foundation ✓ COMPLETE

**Done:**
- [x] style.css exists with all CSS variables matching brand.md exactly
- [x] main.js exists with Lenis and GSAP wired
- [x] prefers-reduced-motion handled — animations disabled, Lenis disabled if set
- [x] Nav renders correctly on desktop and mobile
- [x] Footer renders correctly
- [x] Hamburger menu opens and closes
- [x] Nav transitions from transparent to scrolled state correctly at 60px

---

## Phase 1 — Home page ✓ COMPLETE

**Done:**
- [x] All 9 sections present and correctly structured
- [x] All images loading with correct alt text
- [x] Four TTM captions present at correct positions, correct colour and size
- [x] Scroll animations working on all .reveal elements
- [x] Amber divider renders correctly
- [x] Contour emergence SVG in Section 3 triggers on scroll
- [x] Quote section renders in dark amber gradient, .reveal-settle working
- [x] Tree section renders in dark forest green with B&W image
- [x] Fungus band renders at 300px height with caption
- [x] Service rows hover with transform: translateX
- [x] Process steps render correctly
- [x] Contact section includes full form and typographic moment above split
- [x] Mobile layout correct at 375px width
- [x] Nav correct on this page

---

## Phase 2 — About page ✓ COMPLETE

**Done:**
- [x] Portrait image displays correctly with cream gradient fade at bottom
- [x] Richard's copy used verbatim
- [x] Credentials section present — Certified Practising Counsellor, PACFA / Reg. 33600
- [x] Companion images placed correctly
- [x] CTA section with two buttons present
- [x] Mobile layout correct

---

## Phase 3 — Contact page ✓ COMPLETE

**Done:**
- [x] Form renders with all 5 fields correctly
- [x] Honeypot field present, hidden, named _gotcha
- [x] Formspree ID xnjkzdkw correctly inserted (routes to richard@wayfindingpractice.com.au)
- [x] JavaScript validation working
- [x] Success message shows on valid submit, form hides
- [x] Dandelion closing image renders with caption
- [x] Mobile layout correct

---

## Phase 4 — Privacy policy page ✓ COMPLETE

**Done:**
- [x] Shared nav and footer present
- [x] All privacy sections present
- [x] Last updated date included
- [x] Email address linked correctly
- [x] Formspree privacy policy linked
- [x] Halaxy mentioned in clinical records section
- [x] Mobile readable

---

## Phase 5 — SEO and performance audit ✓ COMPLETE

**Done:**
- [x] All pages have complete and correct meta tags
- [x] All images have descriptive alt text
- [x] All heading hierarchies correct
- [x] All internal links use relative paths
- [x] Google Fonts loaded correctly via link tag
- [x] No accessibility violations
- [x] Schema markup on index.html and about.html

---

## Phase 6 — Deployment ✓ COMPLETE

**Completed 29-06-2026:**
- [x] Site live at wayfindingpractice.com.au and www.wayfindingpractice.com.au
- [x] SSL active via Cloudflare (automatic)
- [x] All pages load correctly on mobile
- [x] Contact form delivers email to richard@wayfindingpractice.com.au
- [x] Calendly booking link works and opens popup
- [x] No broken images
- [x] No placeholder text remaining

---

## Launch session changes — 29-06-2026

All changes made during the launch session. Committed to main and deployed to Cloudflare Pages.

### Content
- PACFA credential updated to "Certified Practising Counsellor, PACFA / Reg. 33600" on About page and in schema markup
- Footer updated: PACFA Reg. Certified Practising 33600 added directly under copyright line, centered
- Aboriginal flag (aboriginalflag.png) added to footer acknowledgement section

### Forms
- Formspree form replaced: old form xeenlvka → new form xnjkzdkw (routes to richard@wayfindingpractice.com.au)
- Form success div moved outside `<form>` element to fix visibility bug
- main.js updated: form success selector changed from `form.querySelector` to `form.parentElement.querySelector`
- Form updated on both index.html and contact.html

### Dark mode and browser compatibility
- `color-scheme: light only` added to CSS `:root` and as `<meta name="color-scheme" content="light only">` on all pages — prevents Safari and other browsers from auto-darkening
- JS-based forced dark mode detection added to main.js — creates invisible test element, reads computed cream colour, adds `html.forced-dark` class if brightness < 128 (i.e. browser is actually darkening the page, e.g. Brave)
- `html.forced-dark` CSS rules added: nav scrolled state gets forest background, cream/white text, white outline logo with filter, white hamburger spans via filter: brightness(0) invert(1)
- Approach: CSS media query (`prefers-color-scheme: dark`) was tried and abandoned — it fires in Safari too (which respects color-scheme: light only and keeps cream nav), so a JS detection approach was used instead

### Mobile fixes
- Contact section `::before` pseudo-element gradient hidden on mobile (max-width: 900px) — gradient centre fell on-screen at ~330px creating visible vertical tonal band
- Contact section `::before` `top` changed from 20% to 0 to eliminate horizontal tonal seam

### Logo
- All mobile logo overrides reverted — compact logo on cream nav is the correct behaviour now that dark mode is handled separately

### Hosting and DNS
- Site deployed to Cloudflare Pages (wayfinding-practice.pages.dev) via GitHub auto-deploy
- Cloudflare Pages connected to dreamwylder-design/wayfinding-practice on GitHub
- DNS transferred from Ventraip DNS Hosting to Cloudflare DNS
- www.wayfindingpractice.com.au: CNAME → wayfinding-practice.pages.dev (added in Cloudflare DNS)
- wayfindingpractice.com.au: apex custom domain added in Cloudflare Pages (Cloudflare handles CNAME flattening)
- Ventraip retained as domain registrar — only DNS management moved to Cloudflare
- Google Workspace email (MX, SPF, DKIM TXT records) migrated to Cloudflare DNS — email intact

---

## Remaining pre-launch items

- [ ] about-richard-portrait.webp — replace with final professional portrait when available (simple image swap, no code change needed)
- [ ] FAQ — add consulting room address when confirmed

---

## Post-launch backlog

- [ ] PACFA Credly badge — add to About page when received (email from admin@credly.com)
- [ ] PACFA Find-A-Therapist profile — available in PACFA member portal
- [ ] Delete old Formspree form xeenlvka from Formspree account
- [ ] Google Business Profile — set up post-launch
- [ ] Professional portrait — replace placeholder when available
- [ ] Google Analytics or Plausible (privacy-first) setup
- [ ] Psychology Today listing created, linking to site
- [ ] Approach page
- [ ] Fees page
- [ ] Animated SVG logo line (amber path tracing inward)
