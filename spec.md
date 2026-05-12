# SPEC.md — Wayfinding Practice
## Technical Specification v1.7

---

## Project overview

Four-page static website for Wayfinding Practice, a solo psychotherapy practice in Melbourne, Australia. Practitioner: Richard Tronson. The site's job is to welcome a prospective client, communicate who Richard is and how he works, and make first contact as frictionless as possible.

**Live URL:** wayfindingpractice.com.au
**Hosting:** Cloudflare Pages via GitHub
**Stack:** Plain HTML + CSS + JavaScript. No frameworks. No build tools. No package.json.
**External libraries (CDN only):**
- Lenis v1.x — smooth scroll
- GSAP v3.x + ScrollTrigger — scroll animations
- Google Fonts — Cormorant Garamond + DM Sans

**Booking system:** Halaxy. All "Book a discovery call" buttons link to the Halaxy booking page (placeholder: `#halaxy`), opening in a new tab. Do not embed a Halaxy widget — link only. Replace `#halaxy` with the actual URL when available.

---

## The core design principle

The site enacts its concept — it does not illustrate it.

"Terrain becoming legible in light" is not a motif to be depicted. It is a quality to be felt. Every design decision is tested against this: does this make the visitor feel that something is becoming legible? Or does it show them a wayfinding concept? If it illustrates — remove it. If it enacts — keep it.

The fungi, moss, bark, and grove images communicate depth, patience, and something real rather than clinical. They are not nature imagery for nature's sake. They are not signals of an eco-therapy practice. They are ground — present but not announced.

---

## Visitor context

Most people arriving at this site are in contemplation or precontemplation — they know something needs to shift but haven't committed to acting. Some don't yet fully have words for why they're here. The site must never require readiness it cannot assume. Every piece of copy, every CTA, every label is tested against this: does this work for someone who is uncertain, vulnerable, and still deciding?

The site never asks if the visitor is ready. It simply makes being here feel safe, and reaching out feel possible.

---

## Page legibility arc

The welcome section is atmospheric — full-bleed imagery with a quiet eyebrow line establishes ground before content. The practical proposition, practitioner, and CTA appear in the sections immediately below the hero. Atmosphere lives in the middle of the journey — the quote, the tree, the fungus band. Contact is plain, warm, and functional.

**The arc:**
- **Welcome (Section 1):** Atmospheric full-bleed hero. Brand mark, descriptors ("Psychotherapy & Counselling · Melbourne" / "In Person & Online"). The proposition begins immediately below in the next section.
- **Middle sections (2–6):** Depth and texture. The visitor who is curious goes deeper. The visitor who is ready can jump to contact at any point via the nav.
- **Lower sections (7–9):** Increasingly practical and grounded. Services, process, contact form.
- **Contact page:** The clearest, most structured part of the site. Plain, warm, no friction.

The visitor experiences the same movement the practice's name describes — but they are never made to wait for clarity.

---

## Spacing system

Base unit: 8px

| Context | Value |
|---|---|
| Section padding desktop | 8rem top and bottom (never less than 6rem) |
| Section padding mobile | 5rem top and bottom |
| Maximum container width | 1200px |
| Body text maximum width | 580px (never wider) |
| Heading to body gap | 2rem minimum |
| Element to element gap within sections | 1.5rem |
| Pull quote left indent (desktop) | 3rem |
| Section label to heading gap | 0.75rem |

**Negative space rule:** Never more than three elements competing for attention in the same viewport. Sections must earn their content — if a section feels dense, remove an element before adjusting spacing. Single paragraphs on pale fields need minimum 4rem above and below.

---

## File structure

```
wayfinding-practice/
├── index.html          # Home page
├── about.html          # About page
├── contact.html        # Contact page
├── faq.html            # FAQ page
├── privacy.html        # Privacy policy (simple)
├── css/
│   └── style.css       # Single stylesheet, shared across all pages
├── js/
│   └── main.js         # Single JS file, shared across all pages
├── images/
│   ├── hero/
│   ├── about/
│   ├── contact/
│   ├── faq/
│   ├── texture/
│   └── logo/
├── CLAUDE.md
├── SPEC.md
├── PLAN.md
├── brand.md
└── image-brief.md
```

---

## Image inventory

All images WebP format, 85% quality, maximum 2400px on the long edge.
Logo stays as PNG — transparency required.

### images/hero/
| Filename | Description | Used in |
|---|---|---|
| hero-path-golden-hour.webp | Dirt path through eucalyptus trees toward golden morning light | Home page Section 1 (welcome hero) |
| hero-tree-bw-panoramic.webp | Large moss-covered tree, looking up, B&W treatment | Home page Section 5 (practitioner, dark) |

### images/about/
| Filename | Description | Used in |
|---|---|---|
| about-richard-portrait.webp | Richard Tronson portrait — PLACEHOLDER, replace before launch. Background blurred and darkened in Photoshop. | About page Section 1 |
| about-eucalyptus-dawn.webp | Tall eucalyptus at dawn, terracotta bark, blue-grey canopy | About page — exact placement TBD in Phase 2 |
| about-moss-sporophytes.webp | Moss with sporophytes in golden light | About page Section 4 (beside pull quote) |
| about-bark-galleries.webp | Bark insect galleries, full width | About page — below amber divider after Richard's copy, before credentials section |

### images/contact/
| Filename | Description | Used in |
|---|---|---|
| contact-dandelion-dispersal.webp | Dandelion seeds dispersing | Contact page — between H1/subline and contact grid |

### images/faq/
| Filename | Description | Used in |
|---|---|---|
| faq-illustration-conversation.webp | Two people in conversation, delicate line illustration on cream | FAQ page — below H1 and intro, before first Q&A block |

### images/texture/
| Filename | Description | Used in |
|---|---|---|
| texture-amber-diagonal.webp | Amber fungus growing edge diagonal across dark surface | FAQ page — midway after telehealth question |
| texture-fungus-purple-blue.webp | Purple-blue bracket fungus with amber edges | Background texture — exact placement TBD |
| texture-path-trace.webp | Pale watercolour wash suggesting a winding path, transparent background | Home page — overlay between hero bottom and approach section. **Asset not yet complete — to be generated and added before implementation.** |

### images/logo/
| Filename | Description |
|---|---|
| wayfinding-logo-outline.png | Outline wordmark — used over hero imagery and on dark backgrounds (footer, transparent nav) |
| wayfinding-logo-compact.png | Compact mark + wordmark — used in scrolled nav state on cream |

**Logo colour switching — two-file model:**
Outline and compact logos are separate PNG assets. The nav cross-fades between them on scroll via opacity (no CSS filter trick). The footer and transparent-over-hero nav use the outline logo with `filter: brightness(0) invert(1)` to render it cream on forest. Single hero overlay uses the outline logo at 360px wide (240px on mobile) at the top-left of the welcome hero.

```css
.nav__logo-img--outline { /* default — visible over hero */ }
.nav__logo-img--compact { opacity: 0; /* fades in on .is-scrolled */ }
.nav.is-scrolled .nav__logo-img--outline { opacity: 0; }
.nav.is-scrolled .nav__logo-img--compact { opacity: 1; }
.footer .footer__logo img { filter: brightness(0) invert(1); }
```

**Important:** The `filter: brightness(0) invert(1)` applies to the outline logo in the footer and over the hero ONLY. It must never be applied to the compact logo in the scrolled nav state.

### Images available but not yet assigned
| Filename | Description | Notes |
|---|---|---|
| undertree2.jpg | Large oak tree, symmetrical, shot from below | Considered for hero, set aside. May have future use. |

---

## Shared components — identical across all pages

### Navigation
**Desktop:**
- Position: top of page, full width
- Default state: transparent background, cream text/logo
- Scrolled state: triggered after 60px scroll — slim fixed header, var(--cream) at 94% opacity, backdrop-filter blur(10px), fine bottom border (0.5px, var(--sage) at 15% opacity)
- Contents: Logo left | About · Contact · FAQ (text links, centre-right) | Book a Discovery Call (CTA button, right)
- Version 1 links: About, Contact, FAQ. Architecture is `<ul class="nav__links"><li>` based — adding Approach, Fees, etc. is a one-line `<li>` insertion with no restructuring.
- Logo: two-file model — outline + compact PNGs cross-fade via opacity on scroll. See Image inventory for details. Links to index.html.
- CTA button: links to Halaxy booking page (placeholder: `#halaxy`), opens in new tab

**Mobile (below 768px):**
- Logo left | Book (text link, `#halaxy`) | ☰ hamburger right
- Hamburger opens full-screen overlay menu with all page links
- Overlay: var(--forest) background, var(--cream) text, links centred, large serif font — font-family: 'Cormorant Garamond', serif, italic, explicit on .nav-overlay__link
- Close button top right

### Footer
**All pages:**
- Background: var(--forest)
- Left: Wayfinding Practice logo (cream version)
- Centre: copyright line — © 2025 Wayfinding Practice · Richard Tronson · Melbourne
- Right: Privacy Policy link
- Bottom row: PACFA member badge placeholder (hidden until activated with class .pacfa-active)
- Padding: 2.5rem 3rem

### Typography loading
See brand.md — copy the link tags exactly as specified there.

### Typography scale
See brand.md — all sizes, weights, fonts, and colour assignments are defined there.

**Section labels in HTML:** Written in mixed case. Uppercased by CSS via `text-transform: uppercase`. Never written in all-caps in HTML.

### Confirmed brand tokens
- `--cream: #f4f0e6` ✓
- `--mist: #7a6e7c` ✓ defined in :root
- `.nav-overlay__link` font-family: 'Cormorant Garamond', serif, italic ✓ explicit, not inherited

### Scroll animations — all pages
Implemented via GSAP ScrollTrigger.

**Default reveal — class `.reveal`:**
- Opacity: 0 → 1, Y: 20px → 0
- Duration: 0.7s, ease: power2.out
- Trigger: 15% into viewport
- Stagger: 0.1s between siblings

**Mask reveal — class `.reveal-mask`:**
- Text clips from bottom up
- Duration: 0.9s
- Applied to section headings (H2) only

**Quote settle — class `.reveal-settle`:**
- Opacity: 0.4 → 1, no Y movement — purely a settling into presence
- Duration: 2s, ease: power1.inOut
- Used ONCE only — Section 4 blockquote

**Contour emergence — Approach section SVG only:**
- Single SVG topographic line, absolutely positioned behind content
- Opacity: 0 → 0.12 on section entry (test at 0.12–0.15, not 0.08 — will be invisible at 0.08 on most screens)
- Stroke-dashoffset animation via GSAP ScrollTrigger
- Duration: 2s, ease: power1.inOut
- Triggered when section is 30% in viewport
- aria-hidden="true", pointer-events: none
- Used ONCE only — never repeated

**Prefers-reduced-motion policy:**
If `prefers-reduced-motion: reduce` is set:
- Disable Lenis entirely
- Set all `.reveal` elements to opacity: 1, transform: none immediately
- Skip contour emergence entirely
- Replace quote settle with instant full opacity
- Hard edges and gradients remain — only motion is removed

**Lenis smooth scroll:**
- Initialise on DOMContentLoaded
- Duration: 1.2, easing: exponential
- Apply to entire page
- Disabled when prefers-reduced-motion: reduce

### Section transitions
Hard edges and gradient transitions are explicit design decisions, not defaults.

| Transition | Treatment |
|---|---|
| Cream Welcome → dark Quote | 80px gradient overlap at bottom of cream section fading to dark |
| Dark Quote → Cream Approach | Hard edge — the contrast is the point |
| Dark Tree section → Amber divider | Hard edge into 24px amber band |
| Amber divider → Services (cream) | Hard edge out of band into cream |
| All others | Hard edge unless specified |

### Photography captions
Four captions only. Each placed at the structural moment corresponding to a TTM stage. The arc is felt, not announced — no visitor will consciously read it as a model.

**Format:**
- Italic, 0.68rem, tracking 0.06em
- Colour: var(--stone) — receding, not competing
- Written in mixed case HTML, no punctuation
- Position: below image, left-aligned except fungus band caption which is right-aligned
- Maximum length: five words
- Visible on both desktop and mobile (smaller on mobile — reduce to 0.6rem)

**The rule:** Captions do not describe what is pictured. They do not explain the therapy. They name a quality of perception or transformation that the photograph is already enacting.

**The four captions — TTM arc:**

| Stage | Image | Caption | Page |
|---|---|---|---|
| Precontemplation | hero-path-golden-hour.webp | the ground before you know | index.html |
| Contemplation | hero-tree-bw-panoramic.webp | still here, after everything | index.html |
| Preparation | texture-amber-diagonal.webp (fungus band) | the growing edge | faq.html |
| Action | contact-dandelion-dispersal.webp | ready, without knowing where | contact.html |

No other images carry captions. Images used as darkened section backgrounds carry no caption.

---

## Page 1 — index.html (Home)

### SEO
```html
<title>Wayfinding Practice — Psychotherapy — Richard Tronson</title>
<meta name="description" content="Depth-oriented individual psychotherapy for adults in Melbourne. Wayfinding Practice — Richard Tronson. In person and telehealth.">
<meta property="og:title" content="Wayfinding Practice — Psychotherapy Melbourne">
<meta property="og:description" content="Depth-oriented psychotherapy for adults navigating difficulty, transition, and the harder questions of living.">
<meta property="og:image" content="/images/hero/hero-path-golden-hour.webp">
<link rel="canonical" href="https://wayfindingpractice.com.au/">
```

### Section 1 — Welcome (full-bleed hero)
**Layout:** Full-bleed hero image. Min-height: 90vh. Padding-top: nav height (80px).

**Background image:**
- Image: `hero-path-golden-hour.webp`
- background-size: cover, background-position: center 40%
- Dark gradient overlay at top only — covers top 200px, fades to transparent below that. Does not reach the eyebrow stack at the bottom.
- Alt text equivalent: "A dirt path through eucalyptus trees toward golden morning light, Melbourne"
- Caption: "the ground before you know" — below hero image, left-aligned, var(--stone)

**Top-left overlay — hero logo:**
- Outline logo at 360px wide (240px on mobile), positioned top: 2rem, left: 3rem
- Filter: brightness(0) invert(1) — renders cream on the imagery

**Bottom-left overlay — eyebrow stack:**
- Padding-bottom on the section: 1rem
- Eyebrow line 1: "PSYCHOTHERAPY & COUNSELLING · MELBOURNE" — DM Sans, 14px, letter-spacing 0.3em, uppercase in HTML, colour var(--cream)
- Hairline divider: 0.5px solid var(--cream) at 20% opacity, max-width 360px
- Eyebrow line 2: "IN PERSON & ONLINE" — same styling as line 1
- Stack gap: 0.5rem between each item

### Section 1b — Path trace overlay (planned, asset pending)
**Status: Not yet implemented — texture-path-trace.webp not yet generated.**

When asset is ready:
- Absolutely positioned overlay emerging from the bottom of the hero
- Image: `texture-path-trace.webp` — pale watercolour wash, transparent background
- Fades to fully transparent before the first text content in Section 3
- aria-hidden="true", pointer-events: none
- Works on desktop. On mobile: narrower or absent if it compromises layout.

### Section 2 — Amber divider
- Height: 24px
- Background: see brand.md amber divider gradient
- Opacity: 0.5
- No text

### Section 3 — Approach
**Background:** var(--cream) with very subtle radial glow at 4% opacity (use var(--dusk) for the glow tint), right side.
**Padding:** 8rem 3rem. Max-width 1100px centred.

**Contour emergence SVG:** Absolutely positioned behind section content. Single topographic line. aria-hidden="true". See animation spec above.

Content:
- Section label: "About the work" — var(--mist) on cream, `.reveal`
- H2: "Therapy as orientation, / not instruction" — `.reveal-mask`
- Intro paragraph: "I work with individual adults across a broad range of experience…" — `.reveal`. Max-width 580px.
- Three pillars grid (3 columns desktop, 1 column mobile):
  - Each pillar: large number (Cormorant, 5rem, var(--forest) at 18% opacity), heading (Cormorant italic, 1.3rem, var(--forest)), body (DM Sans 300, 0.9rem, var(--earth))
  - **01 Relational / 02 Grounded & Contextual / 03 Unhurried**
  - **Pillar 02 copy: Written by Claude Design — Richard must review and approve before launch.**
  - Border-top: 0.5px solid var(--pale), padding-top: 3rem
  - Each pillar: `.reveal` with stagger 0.15s

### Section 4 — Quote (dark)
**Background:** See brand.md quote section gradient.
**Padding:** 10rem 3rem
**Content centred, max-width 720px:**
- No section label — the quote arrives without announcement
- Blockquote: "Wayfinding is not about knowing where you are going. It is about learning to read the terrain beneath your feet." — Cormorant Garamond italic, clamp(2rem, 4vw, 3.2rem), var(--amber-pale). Class `.reveal-settle`.
- Attribution: "— Wayfinding Practice" — var(--amber-gold) at 40% opacity, spaced caps, 0.65rem. Appears after quote settles.

### Section 5 — Tree / About deeper (split, dark)
**Layout:** Two columns, **45fr 55fr**. Min-height: 80vh.
**Background:** var(--forest)

**Left column — B&W tree image:**
- Image: `hero-tree-bw-panoramic.webp`
- filter: grayscale(100%)
- Object-fit: cover, object-position: center top
- Full height
- Caption: "still here, after everything" — below image, left-aligned, var(--stone)

**Right column — content:**
- Padding: 6rem 5rem
- Section label: "The practitioner" — var(--sage) on dark, `.reveal`
- H2: "A human before / a therapist" — var(--cream), Cormorant, `.reveal-mask`
- Two body paragraphs — var(--sage), DM Sans 300. Max-width 480px.
- Link: "Learn more about my approach →" — DM Sans 400, var(--sage), links to about.html
- Second link below, quieter: "Or reach out directly →" — DM Sans 300, 0.85rem, var(--stone), links to contact.html.

### Section 6 — Amber divider
- Height: 24px
- Background: see brand.md amber divider gradient
- Opacity: 0.5
- No text
- Sits between the tree section (dark) and services section (cream)

### Section 7 — Services
**Background:** var(--cream) with very subtle radial glow at 6% opacity (use var(--dusk) for tint, blue-grey direction)
**Padding:** 8rem 3rem, max-width 900px centred

- Two-column header: H2 "What I offer" left, intro text right (max-width 380px)
- Service rows list (border-top at section start, each row border-bottom 0.5px solid var(--pale)):
  - Each row layout: large row number (Cormorant, 4rem, var(--pale) at 60% — left side) | service name (Cormorant italic, 1.6rem, var(--forest)) | description (DM Sans 300, 0.86rem, var(--stone) — below the name)
  - Hover: `transform: translateX(0.75rem)` on the name (0.3s ease) — use transform, not padding-left
  - Services:
    - 01 Individual therapy
    - 02 Anxiety & stress
    - 03 Life transitions & identity
    - 04 Grief & loss
    - 05 Trauma & difficulty
  - Each row: `.reveal` with stagger

### Section 8 — Process (dark)
**Background:** See brand.md forest green gradient.
**Padding:** 8rem 3rem, max-width 1000px

- Section label: "How it begins" — var(--sage), `.reveal`
- H2: "How it begins" — var(--cream), `.reveal-mask`
- Intro paragraph: var(--sage), `.reveal`. Max-width 580px.
- Three step dots with connecting line (desktop), stacked (mobile)
- Each step: dot, heading (Cormorant italic, var(--cream)), body (DM Sans 300, var(--sage))
- Steps: **Reach out / A first conversation / Take it from there**
- Consultation offer box:
  - Border: 0.5px solid var(--sage) at 30% opacity
  - Heading: "Free 20-minute discovery call" — Cormorant italic, var(--cream), clamp(1.5rem, 2.5vw, 2rem)
  - Body: brief description, DM Sans 300, var(--sage)
  - CTA button: links to `#halaxy`, opens new tab

### Section 9 — Contact (cream)
**Background:** var(--cream) with subtle radial glow at 5% (use var(--dusk) for tint, mauve direction)
**Padding:** 8rem 3rem, max-width 900px, two columns

**Above the split — full-width typographic moment:**
- Single line in large italic Cormorant: "You don't need to explain everything at once."
- Size: clamp(1.6rem, 3vw, 2.4rem), var(--forest), opacity 0.8
- Max-width 680px, left-aligned with the grid
- `.reveal`

**Left column — details:**
- Section label: "Get in touch" — var(--mist), `.reveal`
- H2: "You're welcome / to reach out" — `.reveal-mask`
- Body paragraph: var(--earth), `.reveal`
- Contact details: Location (Melbourne, Victoria), Sessions (In person & telehealth)
- Response time: "I'll be in touch within two business days."
- Book a Session button: links to `#halaxy`, opens new tab

**Right column — form:**
See Contact page form specification. Same form HTML used here and on contact.html. Both submit to Formspree `xeenlvka`.

---

## Page 2 — about.html

### SEO
```html
<title>About Richard Tronson — Wayfinding Practice Melbourne</title>
<meta name="description" content="Richard Tronson is a depth-oriented psychotherapist in Melbourne offering individual therapy for adults. Learn about his approach and training.">
<link rel="canonical" href="https://wayfindingpractice.com.au/about.html">
```

### Section 1 — Portrait
- Max-height: 70vh desktop, 50vh mobile
- Object-fit: cover, object-position: 70% from left
- Width: 100%
- Gradient overlay at image bottom: transparent → var(--cream), covering bottom 80px
- H1 sits on the cream band, line-height: 1.05
- Image: `about-richard-portrait.webp` — **PLACEHOLDER. Replace with final portrait before launch.**
- Alt text: "Richard Tronson, psychotherapist, Wayfinding Practice Melbourne"

### Section 2 — About content
**Background:** var(--cream)
**Padding:** 6rem 3rem 4rem, max-width 580px centred

- H1: Richard's name — Cormorant, clamp(3rem, 6vw, 5rem), line-height: 1.05, var(--forest)
- Subheading: "Psychotherapist · Melbourne" — section label scale, var(--mist), uppercased by CSS
- About copy — verbatim:

  "I am a human before I am a therapist. I believe that connection is healing — that therapy offers people a chance to pause, slow down, and re-orient. I think of it as a form of wayfinding that happens in relationship: a space to listen more deeply, feel, speak openly, and make sense of life. The work is relational, but it is always in service of you.

  My approach is real, relational, and embodied. Before training in counselling and psychotherapy, I spent years facilitating movement, community wellbeing, and self-inquiry — including formal training in dance movement therapy. Those roots inform how I work: with steadiness, attunement, and a capacity to stay present with uncertainty, strong emotion, and the places where things don't yet make sense. I bring warmth, openness, and an ability to hold both the detail and the bigger picture of a person's experience.

  I am open to working with everyone, and have a particular interest in life transitions and identity exploration, experiences of disconnection, anxiety, stress and emotional overwhelm, grief and loss, and relational difficulties. My work is trauma-informed and integrative.

  You don't need to know exactly what you want to work on to begin — we can start wherever you are."

  DM Sans 300, 1rem, var(--earth). Max-width 580px strictly observed.
- Divider: 0.5px solid var(--amber-gold), full column width

### Section 3 — Bark galleries image
- `about-bark-galleries.webp` — full width, 320px height, overlay rgba(0,0,0,0.45)
- Sits directly below the amber divider after Richard's copy
- No caption — visual breath before credentials section

### Section 4 — Approach / credentials
**Layout:** Two columns — approach text left (~60%), credentials right (~40%)
**Background:** var(--cream)
**Padding:** 4rem 3rem 8rem

**Left — approach text:**
- Cormorant italic pull quote, left border 2px solid var(--amber-gold), padding-left 2rem, var(--sage)
- Approach prose: DM Sans 300, var(--earth)

**Right — credentials:**
- Training: Bachelor of Counselling & Psychotherapy — **[institution and year to be provided by Richard before launch]**
- Professional membership: PACFA (pending — show as "PACFA member in registration")
- Supervision: ongoing clinical supervision
- Approach influences: listed naturally in prose, not as bullet points
- Max-width: 280px
- Font: DM Sans 300, 0.85rem, var(--stone)

### Section 5 — Companion images
**Moss and pull quote (side by side):**
- Two columns, 45fr 55fr
- Left: `about-moss-sporophytes.webp`, object-fit: cover, full height of block
- Right: Pull quote — Cormorant italic, clamp(2rem, 4vw, 3rem), var(--sage), left border 2px solid var(--amber-gold), padding-left 2.5rem
- Pull quote text: "I am a human before I am a therapist."

**Note:** `about-eucalyptus-dawn.webp` is available. Exact placement TBD once Richard's final copy and credentials are provided.

### Section 6 — CTA
**Background:** var(--cream)
**Padding:** 6rem 3rem 8rem
**Max-width:** 580px centred

- No heading — buttons stand alone with generous whitespace
- Two buttons: "Book a discovery call" (links to `#halaxy`, new tab) | "Get in touch" (links to contact.html)
- Below buttons: "Free 20-minute discovery call available" — DM Sans 300, 0.8rem, var(--stone)

---

## Page 3 — contact.html

### SEO
```html
<title>Contact — Wayfinding Practice Melbourne</title>
<meta name="description" content="Get in touch with Wayfinding Practice. Book a free 20-minute discovery call or send a message. Melbourne psychotherapy, in person and telehealth.">
<link rel="canonical" href="https://wayfindingpractice.com.au/contact.html">
```

### Section 1 — Contact opening
**Background:** var(--cream)
**Padding-top:** Nav height (80px) + 5rem

- H1: "You're welcome here." — Cormorant italic, clamp(3rem, 6vw, 5rem), line-height: 1.05, var(--forest). `.reveal-mask`
- Subline: "Reach out with questions, or simply to introduce yourself." — DM Sans 300, 1rem, var(--stone). `.reveal`

### Section 1b — Dandelion image
Sits between the H1/subline and the contact grid. An invitation before the form.

- Full width, 300px height
- Background: `contact-dandelion-dispersal.webp`, overlay rgba(0,0,0,0.2) — very light
- background-size: cover, background-position: center
- Caption: "ready, without knowing where" — below the image, left-aligned, var(--stone), DM Sans 300 italic, 0.68rem, tracking 0.06em. Not overlaid on the image.

### Section 2 — Contact grid
**Background:** var(--cream)
**Padding:** 4rem 3rem 7rem, max-width 900px, two columns desktop / single column mobile

**Left column — details:**
- Section label: "Contact" — var(--mist), `.reveal`
- H2: "No pressure to explain / everything at once." — var(--forest), `.reveal-mask`
- Body: "I aim to respond within two business days." — var(--earth), `.reveal`
- Details list:
  - Location: Melbourne, Victoria
  - Sessions: In person & telehealth
  - Email: hello@wayfindingpractice.com.au (linked, var(--forest))
- Book a discovery call button: links to `#halaxy`, opens new tab

**Right column — form:**

```html
<form action="https://formspree.io/f/xeenlvka" method="POST">
  <input type="text" name="_gotcha" style="display:none">

  <div class="form-group">
    <label for="name">Your name *</label>
    <input type="text" id="name" name="name" required
           placeholder="How you'd like to be addressed">
  </div>

  <div class="form-group">
    <label for="email">Email *</label>
    <input type="email" id="email" name="email" required
           placeholder="Where I can reach you">
  </div>

  <div class="form-group">
    <label for="phone">Phone (optional)</label>
    <input type="tel" id="phone" name="phone"
           placeholder="Your phone number">
  </div>

  <div class="form-group">
    <label>Preferred contact method</label>
    <div class="radio-group">
      <label class="radio-label">
        <input type="radio" name="contact_method" value="email" checked>
        <span>Email</span>
      </label>
      <label class="radio-label">
        <input type="radio" name="contact_method" value="phone">
        <span>Phone</span>
      </label>
    </div>
  </div>

  <div class="form-group">
    <label for="message">Message (optional)</label>
    <textarea id="message" name="message"
              placeholder="Whatever you'd like to share — even a few words is enough."
              rows="5"></textarea>
  </div>

  <button type="submit" class="form-submit">Send message</button>

  <div class="form-success" id="formSuccess" hidden>
    <p>Thank you — I'll be in touch within two business days.</p>
  </div>
</form>
```

**Key form decisions:**
- Message is optional — no asterisk, no `required`
- Only name and email are required
- Formspree ID: `xeenlvka` — already inserted above
- Same form HTML used on index.html Section 9

**Form validation (JavaScript):**
- Required fields: name, email only
- Email: format validation
- Invalid submit: add `.error` class to field, show inline error message (var(--rust), 0.75rem)
- Successful submit: hide form, show `.form-success` div
- No page redirect

**Form styling:**
- Labels: 0.65rem, var(--sage), tracking 0.2em, uppercase via CSS
- Inputs: full width, no border, border-bottom 0.5px solid var(--pale), background transparent
- Focus: border-bottom transitions to var(--sage)
- Radio buttons: custom styled, no browser default appearance
- Submit button: border 0.5px solid var(--sage), transparent bg, transitions to var(--forest) on hover

---

## Page 4 — faq.html

### SEO
```html
<title>FAQ — Wayfinding Practice Melbourne</title>
<meta name="description" content="Frequently asked questions about Wayfinding Practice — sessions, fees, cancellations, telehealth, and Richard's approach.">
<link rel="canonical" href="https://wayfindingpractice.com.au/faq.html">
```

### Content
**Background:** var(--cream)
**Max-width:** 900px centred, left-aligned text in centred column
**Animations:** `.reveal` on each Q&A block with stagger 0.1s. No other animations on this page.

**H1:** "Some questions, answered."
**Intro:** "If something isn't covered here, you're welcome to get in touch. There are no wrong questions." — DM Sans 300, 1rem, var(--stone)

### Illustration
- Image: `faq-illustration-conversation.webp`
- Sits below the H1 and intro text, before the first Q&A block
- Full width, max-width 900px centred
- No overlay, no darkening, no caption
- Alt text: "Two people in conversation, rendered as a delicate line illustration."

### Q&A format — collapsible
- Questions visible by default, answers hidden
- Click/tap to expand — answer reveals with subtle fade-in
- + / − indicator right-aligned on each question row
- One answer open at a time
- Question: Cormorant italic, 1.2rem, var(--forest)
- Answer: DM Sans 300, 1rem, var(--earth), max-width 900px
- Divider between items: 0.5px solid var(--pale)

### Questions and answers — verbatim

**What does a session with you look like?**
I practice integrative psychotherapy — which means I don't apply a single method to everyone who walks in. Instead, I work from what you bring: your history, your context, the way you make sense of things. Sessions are collaborative and unhurried. There's no script, and no homework unless it genuinely fits. The work is done when it feels done — that's something we work out together, not something decided in advance.

**What does it cost, and are there rebates available?**
Sessions are $110. Psychotherapy is not currently covered by Medicare or private health insurance in Australia — an ongoing gap in recognition that affects many practitioners and the people who seek their support. If cost is a barrier, please reach out and we can talk about what's possible.

**What is your cancellation policy?**
I ask for 48 hours notice for cancellations or appointment changes. Cancellations made within 24 hours of a scheduled session will incur the full session fee. I understand that life doesn't always allow for advance notice — if something unexpected comes up, please reach out as soon as you can and we'll work it out.

**Where are you located, and how does telehealth work?**
I work from a consulting room in outer northeast Melbourne, and also offer sessions via telehealth. Online sessions run through a secure video platform — all you need is a quiet private space and a reliable internet connection. [Address and location details to be added before launch.]

### Fungus band divider
Sits midway through FAQ, after the "Where are you located" Q&A block.

- Full width, 200px height
- Background: `texture-amber-diagonal.webp`, overlay rgba(0,0,0,0.55)
- Centred text: "In person · Telehealth · Melbourne" — spaced small caps, var(--amber-gold) at 50% opacity, 0.72rem, centred
- Caption: "the growing edge" — below the band, right-aligned, var(--stone), DM Sans 300 italic, 0.68rem

### Questions continued — verbatim

**What's the difference between psychotherapy and counselling?**
There's a lot of overlap between the different approaches to mental health care, but there are meaningful distinctions. Psychology is a science and its approaches are largely evidence-based and structured — psychologists are trained to assess, diagnose, and treat specific conditions using established frameworks. Counselling tends to focus on specific life challenges, offering a supportive space to navigate difficulty and make sense of what's happening. Psychotherapy goes deeper — it's concerned not just with symptoms or situations, but with the underlying patterns, relationships, and ways of being that shape how we experience our lives. The work is slower, more relational, and oriented toward lasting change rather than immediate relief. My practice draws on both counselling and psychotherapy traditions, shaped by what each person actually needs.

**Do you work with couples or families?**
I work with individual adults only. I don't currently offer couples or family therapy.

**How do people know when they're ready to finish therapy?**
There's no fixed answer — the minimum effective dose of therapy is different for every person and every problem. Generally, people know they're ready to finish when the difficulty that brought them has resolved, when old patterns no longer have the same grip, or when they simply feel more integrated and at ease in themselves. That sense of readiness usually emerges naturally in the work rather than being decided in advance. We'll know it when we get there.

**What is your approach to working with clients from diverse cultural backgrounds, sexualities, and identities?**
You don't need to be a certain kind of person to belong in a session with me. Everyone is welcome. I work with people from all cultural backgrounds, sexualities, and identities — I don't assume a single experience of what it means to live a good life, or one right way of finding a way through it. I aim to meet each person with openness and care, attentive and responsive to your experience on its own terms, with all its complexity. I also recognise that I likely cannot fully understand your experience — particularly where it differs significantly from my own — and I won't pretend otherwise. What I can offer is a genuine commitment to not making you translate yourself to be understood.

**What if I'm in crisis or need urgent support?**
I'm not a crisis support service — my work is longer-term and relational rather than immediate intervention. If you're in crisis or need urgent support, please contact Lifeline on 13 11 14, available 24 hours a day. Beyond Blue (1300 22 4636) and the Crisis Assessment and Treatment team through your local hospital are also available. If you're in immediate danger, please call 000.

### Closing CTA
- Text: "Still have a question? Get in touch — even a few words is enough to start."
- Button: "Send a message" — links to contact.html
- Style: same as other page CTAs

---

## Page 5 — privacy.html

### SEO
```html
<title>Privacy Policy — Wayfinding Practice</title>
<link rel="canonical" href="https://wayfindingpractice.com.au/privacy.html">
```

### Content
Simple, clean, var(--cream) background. Max-width 580px centred. DM Sans 300 body, Cormorant headings. No animations on this page.

Sections:
1. What information we collect (name, email, phone from contact form)
2. How it is used (to respond to enquiries only)
3. Storage and security (Formspree handles form data — link to their privacy policy)
4. Clinical records (handled separately via Halaxy, not this website)
5. Your rights under the Australian Privacy Act 1988
6. Contact for privacy enquiries: hello@wayfindingpractice.com.au
7. Last updated: [date]

---

## Pre-launch checklist
- [ ] Replace `#halaxy` with actual Halaxy booking URL throughout all pages
- [ ] Replace `about-richard-portrait.webp` with final professional portrait
- [ ] Richard to review and approve Pillar 02 copy ("Grounded & Contextual") — written by Claude Design
- [ ] Richard to provide institution and year for credentials section on about.html
- [ ] Add physical address to FAQ telehealth answer
- [ ] Generate and implement `texture-path-trace.webp` path trace overlay on index.html
- [ ] Privacy policy Last Updated date confirmed
- [ ] Formspree tested end to end — submit test message, confirm receipt at hello@wayfindingpractice.com.au

---

## Performance requirements
- Google PageSpeed score: 90+ mobile, 95+ desktop
- Images: WebP format, 85% quality, max 2400px long edge, max 400kb hero images, max 200kb supporting images
- Fonts: preconnect, display=swap, fallback stack per brand.md
- No render-blocking resources
- No unused CSS or JS

## Accessibility requirements
- All images have descriptive alt text
- Semantic HTML throughout: header, nav, main, section, footer, article
- Heading hierarchy: one H1 per page, logical H2/H3 beneath
- Form labels associated with inputs via for/id
- Colour contrast: WCAG AA minimum
- Keyboard navigable: tab order logical, focus states visible
- Contour emergence SVG: aria-hidden="true", pointer-events: none
- Prefers-reduced-motion: fully honoured — see animation policy in shared components

## Browser support
- Chrome, Safari, Firefox — current and one version back
- iOS Safari 15+
- Android Chrome current

## What this site does NOT do
- No cookies except Formspree session (note in privacy policy)
- No analytics in version 1
- No intake forms — clinical data handled by Halaxy only
- No user accounts
- No CMS
- No React, Vue, or any frontend framework
- No Next.js
- No Calendly — booking is Halaxy only
