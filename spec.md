# SPEC.md — Wayfinding Practice
## Technical Specification v1.4

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

The welcome section is clear and grounded from the first viewport. The proposition, the practitioner, and a path forward are all visible without scrolling. Atmosphere lives in the middle of the journey — the quote, the tree, the fungus band. Contact is plain, warm, and functional.

**The arc:**
- **Welcome (Section 1):** Clear immediately. Proposition, practitioner, CTA all in first viewport. No ambiguity about what this is or who it's for.
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
├── privacy.html        # Privacy policy (simple)
├── css/
│   └── style.css       # Single stylesheet, shared across all pages
├── js/
│   └── main.js         # Single JS file, shared across all pages
├── images/
│   ├── hero/
│   ├── about/
│   ├── contact/
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
| about-bark-galleries.webp | Bark insect galleries, full width | About page Section 4 (visual breath) |

### images/contact/
| Filename | Description | Used in |
|---|---|---|
| contact-dandelion-dispersal.webp | Dandelion seeds dispersing | Contact page Section 3 (closing image) |

### images/texture/
| Filename | Description | Used in |
|---|---|---|
| texture-amber-diagonal.webp | Amber fungus growing edge diagonal across dark surface | Home page Section 6 (fungus band) |
| texture-fungus-purple-blue.webp | Purple-blue bracket fungus with amber edges | Background texture — exact placement TBD |

### images/logo/
| Filename | Description |
|---|---|
| wayfinding-logo.png | Logo with transparency — single file, colour switching handled by CSS |

**Logo colour switching — CSS only, no second file needed:**
```css
/* Default — dark logo on cream (scrolled nav) */
.logo img { filter: none; }

/* Light logo on dark backgrounds (footer, transparent nav over hero) */
.nav-transparent .logo img,
.footer .logo img { filter: brightness(0) invert(1); }
```
`brightness(0)` renders all artwork pure black, `invert(1)` flips to white. No second logo file required.

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
- Contents: Logo left | About · Contact (text links, centre-right) | Book a Discovery Call (CTA button, right)
- Version 1 links: About, Contact. Architecture must support adding Approach, Fees, FAQs without restructuring.
- Logo: wayfinding-logo.png with transparency. Links to index.html.
- CTA button: links to Halaxy booking page (placeholder: `#halaxy`), opens in new tab

**Mobile (below 768px):**
- Logo left | Book (text link, `#halaxy`) | ☰ hamburger right
- Hamburger opens full-screen overlay menu with all page links
- Overlay: var(--forest) background, var(--cream) text, links centred, large serif font
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
| Dark Tree section → Fungus band | Hard edge — both dark, band provides punctuation |
| Fungus band → Services (cream) | 60px gradient transition |
| All others | Hard edge unless specified |

### Photography captions
Four captions only. Each placed at the structural moment corresponding to a TTM stage. The arc is felt, not announced — no visitor will consciously read it as a model.

**Format:**
- Italic, 0.68rem, tracking 0.06em
- Colour: var(--stone) — receding, not competing
- Written in mixed case HTML, no punctuation
- Position: below image, left-aligned
- Maximum length: five words
- Visible on both desktop and mobile (smaller on mobile — reduce to 0.6rem)

**The rule:** Captions do not describe what is pictured. They do not explain the therapy. They name a quality of perception or transformation that the photograph is already enacting.

**The four captions — TTM arc:**

| Stage | Image | Caption |
|---|---|---|
| Precontemplation | hero-path-golden-hour.webp | the ground before you know |
| Contemplation | hero-tree-bw-panoramic.webp | still here, after everything |
| Preparation | texture-amber-diagonal.webp (fungus band) | the growing edge |
| Action | contact-dandelion-dispersal.webp | ready, without knowing where |

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

### Section 1 — Welcome (split layout)
**Layout:** CSS Grid, two columns, **55fr 45fr** (image slightly dominant). Min-height: 90vh (not 100vh — let content breathe; proposition must be visible without scrolling). Padding-top: nav height (80px).

**Left column — image:**
- Image: `hero-path-golden-hour.webp`
- Object-fit: cover, object-position: center 40%
- Full height of section
- No parallax — image is fixed
- Alt text: "A dirt path through eucalyptus trees toward golden morning light, Melbourne"
- Caption below image (both desktop and mobile): "the ground before you know"

**Right column — content:**
- Background: var(--cream)
- Padding: 4rem 4rem 4rem 5rem (reduced from 6rem to ensure content fits without scrolling)
- Vertical alignment: centre

Content order (all `.reveal`):
1. Eyebrow: "Psychotherapy · Melbourne" — section label scale, var(--mist), written in mixed case, uppercased by CSS
2. H1: "Finding your way / through uncertain terrain" — Cormorant Garamond, italic, clamp(3rem, 6vw, 5rem), line-height: 1.05, var(--forest), line-break after "way"
3. Body: "Individual psychotherapy for adults navigating difficulty, transition, and the harder questions of living. Depth-oriented, relational, unhurried." — DM Sans 300, 1rem, var(--earth). Max-width 480px.
4. CTA link: "Begin the conversation →" — underline-only, links to contact.html
5. Divider line: 0.5px solid var(--pale)
6. Practitioner credit: label "Practitioner" in var(--mist), name "Richard Tronson" in Cormorant Garamond, var(--earth)

**Mobile:** Stack to single column. Image top (50vh), content below. Padding 3rem 2rem.

### Section 2 — Amber divider
- Height: 24px
- Background: see brand.md amber divider gradient
- Opacity: 0.5
- No text
- This is a genuine visual pause, not a hairline. Give it room.

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
  - Pillar 02 copy: Leave this placeholder in the HTML exactly: `<!-- [COPY NEEDED: Richard to provide body text for "Grounded & Contextual" pillar] -->`
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
**Layout:** Two columns, **45fr 55fr** (content slightly dominant — reversed from welcome). Min-height: 80vh.
**Background:** var(--forest)

**Left column — B&W tree image:**
- Image: `hero-tree-bw-panoramic.webp`
- filter: grayscale(100%)
- Object-fit: cover, object-position: center top
- Full height
- Caption (both desktop and mobile, below image): "still here, after everything"

**Right column — content:**
- Padding: 6rem 5rem
- Section label: "The practitioner" — var(--sage) on dark, `.reveal`
- H2: "A human before / a therapist" — var(--cream), Cormorant, `.reveal-mask`
- Two body paragraphs — var(--sage), DM Sans 300. Max-width 480px.
- Link: "Learn more about my approach →" — DM Sans 400, var(--sage), links to about.html
- Second link below, quieter: "Or reach out directly →" — DM Sans 300, 0.85rem, var(--stone), links to contact.html. Not a button — a thread to pull for someone who has already decided.

### Section 6 — Fungus band divider
**Height:** 300px
**Background image:** `texture-amber-diagonal.webp`, darkened with overlay rgba(0,0,0,0.55)
**Centred text:** "In person · Telehealth · Melbourne" — spaced small caps, var(--amber-gold) at 50% opacity, 0.72rem
**Caption:** "the growing edge" — below the band, right-aligned, var(--stone)

### Section 7 — Services
**Background:** var(--cream) with very subtle radial glow at 6% opacity (use var(--dusk) for tint, blue-grey direction)
**Padding:** 8rem 3rem, max-width 900px centred

- Two-column header: H2 "What I offer" left, intro text right (max-width 380px)
- Service rows list (border-top at section start, each row border-bottom 0.5px solid var(--pale)):
  - Each row layout: large row number (Cormorant, 4rem, var(--pale) at 60% — left side) | service name (Cormorant italic, 1.6rem, var(--forest)) | description (DM Sans 300, 0.86rem, var(--stone) — below the name, not a second column)
  - Hover: `transform: translateX(0.75rem)` on the name (0.3s ease) — use transform, not padding-left, to avoid layout reflow
  - Services — in this order:
    - 01 Individual therapy
    - 02 Anxiety & stress
    - 03 Life transitions & identity
    - 04 Grief & loss
    - 05 Trauma & difficulty
  - Each row: `.reveal` with stagger

### Section 8 — Process (dark)
**Background:** See brand.md forest green gradient.
**Padding:** 8rem 3rem, max-width 1000px

- Section label: "How it begins" at label scale, var(--sage), `.reveal`
- H2: "How it begins" — var(--cream), `.reveal-mask`
- Intro paragraph: var(--sage), `.reveal`. Max-width 580px.
- Three step dots with connecting line (desktop), stacked (mobile)
- Each step: dot, heading (Cormorant italic, var(--cream)), body (DM Sans 300, var(--sage))
- Steps: **Reach out / A first conversation / Take it from there**
  - "Take it from there" implies no predetermined commitment to a course of therapy
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
- Response time: "I'll be in touch within two business days." — the subject is a person, not a timeframe
- Book a Session button: links to `#halaxy`, opens new tab

**Right column — form:**
See Contact page form specification. The same form HTML is used here and on contact.html. Both submit to the same Formspree endpoint. This is intentional — the home page form catches visitors who are ready without navigating away.

---

## Page 2 — about.html

### SEO
```html
<title>About Richard Tronson — Wayfinding Practice Melbourne</title>
<meta name="description" content="Richard Tronson is a depth-oriented psychotherapist in Melbourne offering individual therapy for adults. Learn about his approach and training.">
<link rel="canonical" href="https://wayfindingpractice.com.au/about.html">
```

### Shared nav and footer
Uses the same nav and footer HTML as all other pages. See shared components above.

### Section 1 — Portrait
**Layout:** Portrait image sits large at top — not a conventional full-width hero.

- Max-height: 70vh desktop, 50vh mobile
- Object-fit: cover
- Object-position: 70% from left — not centred. Negative space on one side. This is a deliberate aesthetic decision.
- Width: 100%
- Gradient overlay at image bottom: transparent → var(--cream), covering the bottom 80px
- The cream band creates a soft visual bridge to the content below — not a hard cut
- H1 sits on the cream band, line-height: 1.05. At max clamp size (~5rem) the first line sits within the 80px gradient zone. This is intentional — text and image share the same space.
- Image: `about-richard-portrait.webp` — **PLACEHOLDER. Background blurred and darkened. Replace with final portrait before launch.**
- Alt text: "Richard Tronson, psychotherapist, Wayfinding Practice Melbourne"

### Section 2 — About content
**Background:** var(--cream)
**Padding:** 6rem 3rem 4rem, max-width 580px centred

Content blocks (all `.reveal`):
- H1: Richard's name — Cormorant, clamp(3rem, 6vw, 5rem), line-height: 1.05, var(--forest)
- Subheading: "Psychotherapist · Melbourne" — section label scale, var(--mist), written in mixed case, uppercased by CSS
- About copy — Richard's own text (to be provided, used verbatim). DM Sans 300, 1rem, var(--earth). Max-width 580px strictly observed.
- Divider: 0.5px solid var(--amber-gold), full column width

### Section 3 — Approach / credentials
**Layout:** Two columns — approach text left (~60%), credentials right (~40%)
**Background:** var(--cream)
**Padding:** 4rem 3rem 8rem

**Left — approach text:**
- Cormorant italic pull quote (strongest line from Richard's copy), left border 2px solid var(--amber-gold), padding-left 2rem, var(--sage)
- Approach prose: DM Sans 300, var(--earth)

**Right — credentials:**
- Treated as secondary — smaller type, lower contrast
- Training: Bachelor of Counselling & Psychotherapy (year, institution)
- Professional membership: PACFA (pending — show as "PACFA member in registration")
- Supervision: ongoing clinical supervision
- Approach influences: listed naturally in prose, not as bullet points
- Max-width: 280px — kept narrow and subordinate
- Font: DM Sans 300, 0.85rem, var(--stone)

### Section 4 — Companion images
**Bark galleries image:**
- `about-bark-galleries.webp` — full width, 320px height, overlay rgba(0,0,0,0.45)
- No caption — used structurally as a visual breath between content sections

**Moss and pull quote (side by side):**
- Two columns, 45fr 55fr
- Left: `about-moss-sporophytes.webp`, object-fit: cover, full height of block
- Right: Pull quote — Cormorant italic, clamp(2rem, 4vw, 3rem), var(--sage), left border 2px solid var(--amber-gold), padding-left 2.5rem
- Pull quote text: "I am a human before I am a therapist."
- No caption on moss image — the pull quote beside it is doing that work

**Note:** `about-eucalyptus-dawn.webp` is available for this page. Exact placement to be decided in Phase 2 once Richard's copy is available and the layout has room for it.

### Section 5 — CTA
**Background:** var(--cream)
**Padding:** 6rem 3rem 8rem
**Max-width:** 580px centred

- No heading — buttons stand alone with generous whitespace. A visitor who has read the bio and pull quote does not need to be asked if they're ready.
- Two buttons side by side: "Book a discovery call" (links to `#halaxy`, new tab) | "Get in touch" (links to contact.html)
- Below buttons, small text: "Free 20-minute discovery call available" — DM Sans 300, 0.8rem, var(--stone)

---

## Page 3 — contact.html

### SEO
```html
<title>Contact — Wayfinding Practice Melbourne</title>
<meta name="description" content="Get in touch with Wayfinding Practice. Book a free 20-minute discovery call or send a message. Melbourne psychotherapy, in person and telehealth.">
<link rel="canonical" href="https://wayfindingpractice.com.au/contact.html">
```

### Shared nav and footer
Uses the same nav and footer HTML as all other pages.

### Section 1 — Contact opening
The conventional darkened-image hero is removed. The contact page opens directly into content — clear, warm, no friction.

**Background:** var(--cream)
**Padding-top:** Nav height (80px) + 5rem

- H1: "You're welcome here." — Cormorant italic, clamp(3rem, 6vw, 5rem), line-height: 1.05, var(--forest). `.reveal-mask`
- Subline: "Reach out with questions, or simply to introduce yourself." — DM Sans 300, 1rem, var(--stone). `.reveal`

The two-column split begins directly below with no visual gap — the heading belongs to both columns.

### Section 2 — Contact grid
**Background:** var(--cream)
**Padding:** 4rem 3rem 7rem, max-width 900px, two columns desktop / single column mobile

**Left column — details:**
- Section label: "Contact" — var(--mist), `.reveal`
- H2: "No pressure to explain / everything at once." — var(--forest), `.reveal-mask`
  - This is the most therapeutically accurate line on the site. It names the visitor's actual experience.
- Body: "I aim to respond within two business days." — var(--earth), `.reveal`
- Details list (DM Sans 300, 0.9rem, var(--earth)):
  - Location: Melbourne, Victoria
  - Sessions: In person & telehealth
  - Email: hello@wayfindingpractice.com.au (linked, var(--forest))
- Book a discovery call button: links to `#halaxy`, opens new tab

**Right column — form:**

```html
<form action="https://formspree.io/f/[FORMSPREE_ID]" method="POST">
  <!-- Honeypot spam protection -->
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
- Message is optional — no asterisk, no `required`. Removes the barrier for someone without words yet.
- Only name and email are required.
- This same form HTML is used on index.html Section 9 — both submit to Formspree. Intentional.

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
- Submit button: border 0.5px solid var(--sage), transparent bg, transitions to var(--forest) on hover, var(--cream) text on hover

### Section 3 — Closing image
After the form. The visitor has reached out, or is about to. A final breath.

- Full width, 300px height
- Background: `contact-dandelion-dispersal.webp`, overlay rgba(0,0,0,0.5)
- Caption: "ready, without knowing where" — centred, var(--stone), italic, 0.68rem

---

## Page 4 — privacy.html

### SEO
```html
<title>Privacy Policy — Wayfinding Practice</title>
<link rel="canonical" href="https://wayfindingpractice.com.au/privacy.html">
```

### Shared nav and footer
Uses the same nav and footer HTML as all other pages.

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
