# PLAN.md — Wayfinding Practice
## Build Phases

Each phase is completable in one Claude Code session.
Clear context between phases. SPEC.md persists and is re-read at the start of each phase.

---

## Pre-build checklist (complete before Phase 0)

- [ ] Folder structure created on Desktop per SPEC.md file structure
- [ ] All WebP images converted at 85% quality, max 2400px long edge, placed in correct subfolders
- [ ] Logo PNG with transparency in images/logo/
- [ ] Formspree account created — form ID ready to replace [FORMSPREE_ID]
- [ ] Halaxy booking URL ready to replace #halaxy placeholder
- [ ] GitHub repository created (wayfinding-practice, private)
- [ ] Cloudflare Pages account connected to GitHub
- [ ] VentraIP DNS pointed to Cloudflare Pages
- [ ] All planning documents in project root: CLAUDE.md, SPEC.md, PLAN.md, brand.md

**Images ready for conversion (85% WebP, max 2400px long edge):**
- hero-path-golden-hour.webp — from croppedheropath.jpg → images/hero/
- hero-tree-bw-panoramic.webp — from hero-tree-bw-panoramic.jpg → images/hero/
- about-richard-portrait.webp — PLACEHOLDER, background blurred/darkened → images/about/
- about-eucalyptus-dawn.webp — from Newtree.webp → images/about/
- about-moss-sporophytes.webp — from about-moss-sporophytes.jpg → images/about/
- about-bark-galleries.webp → images/about/
- contact-dandelion-dispersal.webp → images/contact/
- texture-amber-diagonal.webp — from texture-amber-diagonal.jpg → images/texture/
- texture-fungus-purple-blue.webp — from texture-fungus-purple-blue.jpg → images/texture/

**Portrait note:** about-richard-portrait.webp is a placeholder. The background has been blurred and darkened in Photoshop. Replace with final professional portrait before launch — this is a simple image swap, no code change needed.

---

## Phase 0 — Foundation (do this first, once)

**Goal:** Shared CSS, shared JS, shared nav and footer working across all pages.

**Instructions for Claude Code:**
"Read CLAUDE.md, SPEC.md, and brand.md. Then build the shared foundation only — do not build any page content yet. Deliver: (1) style.css with all CSS custom properties from brand.md, reset, typography, nav styles, footer styles, form styles, animation classes (.reveal, .reveal-mask, .reveal-settle), and responsive breakpoints. (2) main.js with Lenis initialisation, GSAP ScrollTrigger setup, nav scroll behaviour at 60px, mobile hamburger menu, prefers-reduced-motion handling, and form submission handler. (3) A nav.html and footer.html snippet — not standalone pages, just the HTML fragments to be copy-pasted into each page. Show me the nav and footer rendered before proceeding."

**Done when:**
- [ ] style.css exists with all CSS variables matching brand.md exactly
- [ ] main.js exists with Lenis and GSAP wired
- [ ] prefers-reduced-motion handled — animations disabled, Lenis disabled if set
- [ ] Nav renders correctly on desktop and mobile
- [ ] Footer renders correctly
- [ ] Hamburger menu opens and closes
- [ ] Nav transitions from transparent to scrolled state correctly at 60px

---

## Phase 1 — Home page (index.html)

**Goal:** Complete home page with all 9 sections, real images, animations working.

**Instructions for Claude Code:**
"Read SPEC.md sections for index.html. Build the complete home page — all 9 sections — using the shared style.css and main.js from Phase 0. Use the actual image files from the images/ folder as specified in the image inventory in SPEC.md. Do not use placeholder images. Wire all scroll animations using GSAP ScrollTrigger applied to .reveal, .reveal-mask, and .reveal-settle classes. The contour emergence SVG goes in Section 3 only. The Halaxy booking URL placeholder is #halaxy — leave it as is. Show me a screenshot review after building."

**Build order within this phase:**
1. HTML structure — all 9 sections, semantic markup, correct heading hierarchy
2. Images — all placed correctly with WebP src, correct object-position, and alt text
3. CSS — section-specific styles only (shared styles already in style.css)
4. Animations — GSAP ScrollTrigger applied to all .reveal elements, contour emergence SVG in Section 3
5. Review and fix

**Key image placements to verify:**
- Section 1: hero-path-golden-hour.webp, object-position: center 40%
- Section 5: hero-tree-bw-panoramic.webp, filter: grayscale(100%)
- Section 6: texture-amber-diagonal.webp, overlay rgba(0,0,0,0.55)

**Done when:**
- [ ] All 9 sections present and correctly structured
- [ ] All images loading with correct alt text
- [ ] Four TTM captions present at correct positions, correct colour and size
- [ ] Scroll animations working on all .reveal elements
- [ ] Amber divider (Section 2) renders correctly
- [ ] Contour emergence SVG in Section 3 triggers on scroll
- [ ] Quote section (Section 4) renders in dark amber gradient, .reveal-settle working
- [ ] Tree section (Section 5) renders in dark forest green with B&W image
- [ ] Fungus band (Section 6) renders at 300px height with caption
- [ ] Service rows hover with transform: translateX not padding-left
- [ ] Process steps render correctly (Section 8)
- [ ] Contact section (Section 9) includes full form and typographic moment above split
- [ ] Mobile layout correct at 375px width
- [ ] Nav correct on this page
- [ ] Pillar 02 placeholder comment present in HTML

---

## Phase 2 — About page (about.html)

**Goal:** Complete About page with portrait, Richard's copy, credentials, pull quote, CTA.

**Pre-phase requirement:** Richard's About copy must be finalised and saved as about-copy.md in project root before this phase begins. Portrait placeholder is already in images/about/ — use it for build, flag for replacement.

**Instructions for Claude Code:**
"Read SPEC.md sections for about.html and read about-copy.md for the actual copy. Build the complete About page using shared style.css and main.js. Use the portrait image from images/about/about-richard-portrait.webp — note this is a placeholder to be replaced before launch. The eucalyptus dawn image (about-eucalyptus-dawn.webp) is available — place it where it fits best in the layout given Richard's actual copy. Apply all .reveal animations. The pull quote 'I am a human before I am a therapist' should use the pull-quote treatment specified in SPEC.md. H1 line-height must be 1.05, first line overlapping the portrait gradient zone."

**Done when:**
- [ ] Portrait image displays correctly with cream gradient fade at bottom
- [ ] H1 sits on cream band overlapping portrait bottom, line-height 1.05
- [ ] Richard's copy used verbatim from about-copy.md
- [ ] Credentials section present, appropriately weighted and subordinate
- [ ] Pull quote styled correctly with amber left border
- [ ] Companion images (bark galleries, moss sporophytes) placed correctly
- [ ] about-eucalyptus-dawn.webp placed appropriately given copy
- [ ] CTA section with two buttons present, no heading above buttons
- [ ] Mobile layout correct

---

## Phase 3 — Contact page (contact.html)

**Goal:** Complete Contact page with working form, Formspree integrated, success message.

**Pre-phase requirement:** Formspree form ID must be ready. Halaxy URL must be ready.

**Instructions for Claude Code:**
"Read SPEC.md sections for contact.html. Build the complete Contact page. Replace [FORMSPREE_ID] with the actual Formspree form ID. Replace #halaxy with the actual Halaxy booking URL. Implement JavaScript form validation with inline error messages as specified — required fields are name and email only, message is optional. Implement the inline success message — hide the form, show the success div. Confirm the honeypot field is present and hidden. The dandelion closing image must be placed after the form, not before it, darkened correctly, with caption."

**Done when:**
- [ ] Page opens directly into content — no darkened hero image
- [ ] H1 "You're welcome here." renders correctly with reveal-mask
- [ ] H2 "No pressure to explain everything at once." is the contact grid H2
- [ ] Form renders with all 5 fields correctly
- [ ] Message field has no asterisk and no required attribute
- [ ] Radio buttons custom styled — no default browser appearance
- [ ] Honeypot field present, hidden, named _gotcha
- [ ] Formspree ID correctly inserted
- [ ] JavaScript validation working — error states on name and email only
- [ ] Success message shows on valid submit, form hides
- [ ] Halaxy link in Book a Session button opens new tab
- [ ] Dandelion closing image renders after form with caption "ready, without knowing where"
- [ ] Mobile layout correct

---

## Phase 4 — Privacy policy page (privacy.html)

**Goal:** Simple, complete, legally adequate privacy policy page.

**Instructions for Claude Code:**
"Build privacy.html as specified in SPEC.md. Use the same shared nav and footer as all other pages. Simple cream page, max-width 580px centred, DM Sans 300 body text, Cormorant headings. Include all 7 sections specified. Add today's date as Last Updated. No animations needed on this page."

**Done when:**
- [ ] Shared nav and footer present
- [ ] All 7 privacy sections present
- [ ] Last updated date included
- [ ] Email address linked correctly
- [ ] Formspree privacy policy linked
- [ ] Halaxy mentioned in clinical records section
- [ ] Mobile readable

---

## Phase 5 — SEO and performance audit

**Goal:** Every page passes technical SEO and performance checks before deployment.

**Instructions for Claude Code:**
"Audit all four HTML files against these requirements: (1) Every page has unique title tag, meta description, canonical URL, and og: tags as specified in SPEC.md. (2) Every image has descriptive alt text — never empty alt=''. (3) Heading hierarchy is correct — one H1 per page, logical H2/H3 beneath. (4) All internal links use correct relative paths (about.html not /about). (5) Google Fonts loads via link tag with display=swap — never @import. (6) No inline styles that should be in style.css. (7) Form labels correctly associated with inputs via for/id. (8) Contour emergence SVG has aria-hidden='true' and pointer-events: none. (9) No hardcoded hex values in CSS — all colours use CSS variables. Report any issues found and fix them."

**Done when:**
- [ ] All pages have complete and correct meta tags per SPEC.md
- [ ] All images have descriptive alt text
- [ ] All heading hierarchies correct
- [ ] All internal links use relative paths and work correctly
- [ ] Google Fonts loaded correctly via link tag
- [ ] No inline styles present that belong in style.css
- [ ] No accessibility violations
- [ ] No hardcoded hex values in CSS rules

---

## Phase 6 — Deployment

**Goal:** Site live at wayfindingpractice.com.au

**Steps (human does these, not Claude Code):**
1. Replace #halaxy placeholder with actual Halaxy booking URL throughout
2. Replace [FORMSPREE_ID] with actual Formspree form ID
3. Replace about-richard-portrait.webp with final professional portrait if ready
4. `git add .`
5. `git commit -m "Initial build — Home, About, Contact, Privacy"`
6. `git push origin main`
7. Cloudflare Pages detects push and deploys automatically
8. Check deployment at the Cloudflare Pages URL
9. Confirm custom domain wayfindingpractice.com.au is pointing correctly
10. Check SSL certificate is active (Cloudflare handles this automatically)
11. Test all pages on mobile (actual phone, not browser emulation)
12. Test contact form end to end — submit a test message, confirm email received at hello@wayfindingpractice.com.au

**Done when:**
- [ ] Site accessible at wayfindingpractice.com.au
- [ ] SSL active (https)
- [ ] All pages load correctly on mobile
- [ ] Contact form delivers email to hello@wayfindingpractice.com.au
- [ ] Halaxy booking link works and opens in new tab
- [ ] No broken images
- [ ] No placeholder text (#halaxy, [FORMSPREE_ID]) remaining

---

## Pre-launch replacements (before going live)
- [ ] about-richard-portrait.webp — replace with final professional portrait
- [ ] #halaxy — replace with actual Halaxy booking page URL
- [ ] [FORMSPREE_ID] — replace with actual Formspree form ID
- [ ] Pillar 02 copy — Richard to provide body text for "Grounded & Contextual" pillar
- [ ] Privacy policy Last Updated date — confirm correct

---

## Version 2 backlog (after launch)

- Google Analytics or Plausible (privacy-first) setup
- Google Business Profile created and verified
- Psychology Today listing created, linking to site
- PACFA badge added to footer once registered
- Approach page
- Fees page
- FAQs page
- Animated SVG logo line (amber path tracing inward)
- texture-fungus-purple-blue.webp — assign to a section
- about-eucalyptus-dawn.webp — confirm final placement
- Replace placeholder portrait with final professional portrait if not done pre-launch
