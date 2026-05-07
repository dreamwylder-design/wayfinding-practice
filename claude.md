# CLAUDE.md — Wayfinding Practice

## Read these files before every task
1. SPEC.md — full technical specification and image inventory
2. brand.md — colours, typography, palette
3. PLAN.md — current phase and what has been completed

## What this project is
Static 4-page website. Plain HTML + CSS + JS only.
No React. No Vue. No Next.js. No build tools. No package.json.
External libraries via CDN only: Lenis, GSAP, Google Fonts.

## The core design test
Before implementing any visual element, ask:
Does this make the visitor FEEL that something is becoming legible?
Or does it SHOW them a wayfinding concept?
If it illustrates — remove it.
If it enacts — keep it.

## The legibility arc — critical
The welcome section is clear and grounded from the first viewport.
Proposition, practitioner, and CTA are all visible without scrolling.
Do NOT make the opening atmospheric or indistinct.
Atmosphere lives in the MIDDLE sections — the quote, the tree, the fungus band.
Contact is plain, warm, and functional — the clearest part of the site.
The visitor is never made to wait for clarity.

## Visitor context — always remember
Most visitors are in contemplation or precontemplation.
They may not have words for why they're here.
The site never asks if they're ready.
Every CTA, label, and placeholder is tested against:
does this work for someone uncertain, vulnerable, and still deciding?

## File structure rules
- One shared style.css — all pages use it
- One shared main.js — all pages use it
- Images in /images/ subfolders per image inventory in SPEC.md
- All images WebP format

## Code rules
- Semantic HTML always: header, nav, main, section, article, footer
- One H1 per page — never more
- Every image must have descriptive alt text — never empty alt=""
- Form labels must be associated with inputs via for/id attributes
- No inline styles — all styles go in style.css
- No !important — fix specificity properly
- CSS custom properties for all colours — never hardcode hex values in CSS rules
- Use brand.md hex values exactly — do not approximate

## Colour rules
Never deviate from brand.md. If a colour is needed that isn't in brand.md, ask first.
Background colours must use CSS variables: var(--cream), var(--forest), etc.
--rust is for form error states ONLY — never use it decoratively.

## Typography rules
- Cormorant Garamond: headings, pull quotes, large display text, pillar numbers
- DM Sans: body, labels, nav links, small text, captions, form elements
- Google Fonts loaded via link tag in head with display=swap
- Never @import fonts in CSS

## Animation rules
- All scroll animations via GSAP ScrollTrigger
- Apply class .reveal to elements that should animate (opacity 0→1, Y 20px→0, 0.7s, power2.out)
- Apply class .reveal-mask to section headings for clip-from-bottom reveal (0.9s)
- Apply class .reveal-settle to the dark quote blockquote ONLY (opacity 0.4→1, 2s, no Y movement)
- Contour emergence SVG in Approach section ONLY — stroke-dashoffset animation, opacity 0→0.12 (test 0.12–0.15), 2s
- Smooth scroll via Lenis — initialise in main.js on DOMContentLoaded
- Respect prefers-reduced-motion — disable all animations if set
- Never use reveal-settle or contour emergence on any other element

## Images
- Always use WebP sources
- Always include width and height attributes to prevent layout shift
- Hero/large images: loading="eager"
- All other images: loading="lazy"
- Never use placeholder image URLs from the internet
- Four images carry captions — see SPEC.md photography captions section
- No other images carry captions

## Forms
- Formspree for submission — ID specified in SPEC.md
- Honeypot field: input name="_gotcha" display:none
- Required fields: name and email ONLY — message is optional
- JavaScript validation with inline error messages
- Success state: hide form, show .form-success div
- Never redirect on form submit — inline success only

## Navigation
- Transparent by default, scrolled state triggers at 60px
- Mobile: Logo | Book | ☰ hamburger
- Hamburger opens full-screen overlay, forest green background
- All pages share identical nav HTML
- Logo colour: CSS filter brightness(0) invert(1) on dark backgrounds — single PNG file, no second logo needed

## What Claude gets wrong on this project — rules to prevent it
- Do NOT use placeholder images or lorempixel URLs — use actual image files
- Do NOT use React or any framework — this is plain HTML
- Do NOT create separate CSS files per page — one style.css only
- Do NOT add Google Analytics — not in version 1
- Do NOT add cookie banners — not needed for this site
- Do NOT use @import for fonts — use link tag
- Do NOT hardcode colours — use CSS variables
- Do NOT add animations that violate prefers-reduced-motion
- Do NOT create intake forms — contact form only, Halaxy handles clinical data
- Do NOT make the welcome section atmospheric — it must be clear immediately
- Do NOT invent copy for the "Grounded & Contextual" pillar — leave a marked placeholder
- Do NOT add captions to images beyond the four specified in SPEC.md
- Do NOT use --rust for anything except form error states

## Plan mode
Use plan mode for any task that touches more than one file or adds a new section.
Present the plan, wait for approval, then execute.
One step at a time — never implement more than what was approved.

## Session end
At the end of each session, summarise:
- What was completed
- What files were modified
- What the next phase is
- Any decisions made that should be added to SPEC.md
