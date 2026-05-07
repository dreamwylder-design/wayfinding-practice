# brand.md — Wayfinding Practice
## Colour & Typography Reference v1.3

All hex values sourced directly from the practice's photograph collection.
Claude Code must use these exact values. Never approximate. Never invent.
If a colour is needed that isn't here, ask before proceeding.

---

## CSS Custom Properties

These are the variable names Claude Code will use in style.css.
Every colour reference in CSS must use var(--name), never a hardcoded hex.

```css
:root {
  /* Backgrounds */
  --cream:        #f4f0e6;   /* Page background — all cream sections */
  --dusk:         #c8bfb0;   /* In-between register — subtle section bg radial glows only */

  /* Forest */
  --forest:       #1a2218;   /* Dark sections, footer, nav overlay, H1 on cream */

  /* Amber — from the fungus growing edge */
  --amber-gold:   #c8922a;   /* Accents, pull quote borders, amber divider core */
  --amber-pale:   #e8c97a;   /* Quote text on dark, amber divider edges */
  --amber-dark:   #3a2a14;   /* Quote section background — lets gold glow without tipping luxury */

  /* Green — one green only */
  --sage:         #7a8c6e;   /* Body text on dark, pull quote colour, form borders, section labels on dark */

  /* Mauve — from the purple-blue fungus */
  --mist:         #7a6e7c;   /* Practitioner label, subtle secondary labels — felt before it's seen */

  /* Neutrals */
  --earth:        #5c5448;   /* Body text on cream — warm brown sits in page, not on top */
  --stone:        #8a8070;   /* Captions, secondary text, quiet links — printed marginalia register */
  --pale:         #e2dccf;   /* Dividers, hairlines — same material as cream, different density */

  /* Functional — strictly off-limits elsewhere */
  --rust:         #8a4030;   /* Form error states ONLY — never decorative, breaks chromatic arc */
}
```

---

## Colour roles — what each variable does

| Variable | Hex | Role | Never use for |
|---|---|---|---|
| --cream | #f4f0e6 | Page background, right column bg | Text |
| --dusk | #c8bfb0 | Radial glow tints at low opacity (5–8%) only | Primary backgrounds, text |
| --forest | #1a2218 | Dark sections, footer, nav overlay, scrolled nav bg at 94% opacity | Body text on cream |
| --amber-gold | #c8922a | Amber divider core, pull quote left border | Backgrounds, body text |
| --amber-pale | #e8c97a | Quote blockquote text on dark, amber divider edges | Text on cream (too light) |
| --amber-dark | #3a2a14 | Quote section gradient centre stop only | Text, other backgrounds |
| --sage | #7a8c6e | Body text on dark, pull quote colour, form focus border, section labels on dark | H1 or H2 headings |
| --mist | #7a6e7c | Practitioner credit label, subtle secondary labels on cream | Body text (too low contrast on dark) |
| --earth | #5c5448 | Body text on cream | Headings, text on dark |
| --stone | #8a8070 | Captions, secondary text, quiet links | Primary body text |
| --pale | #e2dccf | Dividers, hairlines, row borders | Text |
| --rust | #8a4030 | Form validation error messages ONLY | Anything decorative — breaks chromatic arc |

**Section labels on cream** use `--mist`. Section labels on dark sections use `--sage`.
This keeps them receding in both contexts without sharing the same value as body text.

---

## Gradient definitions

### Quote section background
The dark quote section uses a three-stop gradient. This is the only place --amber-dark appears.

```css
background: linear-gradient(135deg, #2a1e0e, var(--amber-dark), #1e1608);
```

### Amber divider
Used for the 24px amber band between Welcome and Approach.

```css
background: linear-gradient(to right, transparent, var(--amber-pale), var(--amber-gold), var(--amber-pale), transparent);
opacity: 0.5;
```

### Forest green gradient
Used for the Process section background.

```css
background: linear-gradient(180deg, var(--forest), #1e2a1c);
```

---

## Font loading strategy

### Fonts in use
- **Cormorant Garamond** — headings, pull quotes, large display text, pillar numbers, service numbers
- **DM Sans** — body, labels, nav links, captions, small text, form elements

### Loading (link tag in head — never @import)
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap" rel="stylesheet">
```

### FOUT mitigation
Cormorant Garamond italic 300 is the H1 face. With `display=swap`, the browser will flash from a sans fallback to an italic serif on load — jarring for the welcome section. Apply a tuned fallback stack so the layout shift is minimal:

```css
h1, h2, blockquote, .pull-quote {
  font-family: 'Cormorant Garamond', 'Georgia', serif;
  size-adjust: 92%;   /* Compensates for Cormorant's narrower metrics vs Georgia */
}
```

This doesn't eliminate swap flash but reduces the reflow. Test on slow 3G profile in Chrome DevTools before launch.

---

## Typography scale

| Element | Size | Weight | Font | Colour |
|---|---|---|---|---|
| H1 | clamp(3rem, 6vw, 5rem) | 300 italic | Cormorant Garamond | --forest on cream / --cream on dark |
| H2 | clamp(2rem, 4vw, 3.5rem) | 300 italic | Cormorant Garamond | --forest on cream / --cream on dark |
| H3 | clamp(1.3rem, 2vw, 1.8rem) | 400 | Cormorant Garamond | --forest on cream |
| Pull quote | clamp(2rem, 4vw, 3.2rem) | 300 italic | Cormorant Garamond | --sage |
| Blockquote (dark section) | clamp(2rem, 4vw, 3.2rem) | 300 italic | Cormorant Garamond | --amber-pale |
| Pillar numbers | 5rem | 300 | Cormorant Garamond | --forest at 18% opacity |
| Service row numbers | 4rem | 300 | Cormorant Garamond | --pale at 60% opacity |
| Body | 1rem | 300 | DM Sans | --earth on cream / --sage on dark |
| Small body | 0.9rem | 300 | DM Sans | --earth on cream / --sage on dark |
| Section label (on cream) | 0.65rem | 400 | DM Sans, tracking 0.3em, uppercase | --mist |
| Section label (on dark) | 0.65rem | 400 | DM Sans, tracking 0.3em, uppercase | --sage |
| Caption | 0.68rem | 300 italic | DM Sans, tracking 0.06em | --stone |
| Nav links | 0.85rem | 400 | DM Sans | --cream (transparent) / --forest (scrolled) |
| Form labels | 0.65rem | 400 | DM Sans, tracking 0.2em, uppercase | --sage |
| Error messages | 0.75rem | 400 | DM Sans | --rust |
| Attribution | 0.65rem | 400 | DM Sans, tracking 0.2em, uppercase | --amber-gold at 40% opacity |

**Section labels in HTML:** Written in mixed case ("About the work", "The practitioner"). Uppercased by CSS via `text-transform: uppercase`. Never written in all-caps in HTML — preserves semantic content for screen readers.

---

## What this palette is not

- Not a nature practice palette — --mist keeps it from reading as ecological branding
- Not a luxury palette — --amber-dark prevents the gold from tipping that way
- Not a clinical palette — --cream and --earth keep it human

The palette is disciplined. --rust is the only colour that can break the arc if used decoratively.
It must not appear anywhere except form validation error states.
