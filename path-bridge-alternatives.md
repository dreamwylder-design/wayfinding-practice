# Path-bridge — saved alternatives

Two configurations worth keeping as alternatives. Both target the same CSS rule (`.path-bridge` in `css/style.css`) and assume the same PNG asset at `images/texture/texture-path-trace.png`.

---

## Option A — Smaller, ~2/3 size, no crop

A more delicate, restrained version. Path sits cleanly below the curve without cropping or opacity adjustment.

```css
.path-bridge {
  position: absolute;
  top: calc(90vh - 25px);
  left: 60%;
  transform: translateX(-50%);
  width: clamp(185px, 21vw, 320px);
  height: auto;
  pointer-events: none;
  z-index: 2;
}

@media (max-width: 768px) {
  .path-bridge {
    left: 58%;
    width: clamp(120px, 33vw, 175px);
    top: calc(90vh - 10px);
  }
}
```

---

## Option B — Full size, cropped top & bottom, 70% opacity

A more present version. Larger path, 15px cropped off the top so the painted edge meets the curve crisply, 25px cropped off the faded tail, dialled back to 70% opacity so it sits softly against the cream.

```css
.path-bridge {
  position: absolute;
  top: calc(90vh - 40px);
  left: calc(60% - 2px);
  transform: translateX(-50%);
  width: clamp(280px, 32vw, 480px);
  height: auto;
  -webkit-clip-path: inset(15px 0 25px 0);
          clip-path: inset(15px 0 25px 0);
  opacity: 0.7;
  pointer-events: none;
  z-index: 2;
}

@media (max-width: 768px) {
  .path-bridge {
    left: 58%;
    width: clamp(180px, 50vw, 260px);
    top: calc(90vh - 20px);
    -webkit-clip-path: inset(0 0 15px 0);
            clip-path: inset(0 0 15px 0);
  }
}
```

---

## Option C — Full size, deeper top crop, raised position (current — best so far)

Same overall treatment as B, but cropped harder at the top (50px) and raised 10px higher. The deeper top crop trims more of the asset's unpainted canvas above the watercolour, so the painted edge meets the curve more crisply. The raised position lets that painted edge sit cleanly against the curve's bottom.

```css
.path-bridge {
  position: absolute;
  top: calc(90vh - 75px);
  left: calc(60% + 2px);
  transform: translateX(-50%);
  width: clamp(280px, 32vw, 480px);
  height: auto;
  -webkit-clip-path: inset(50px 0 25px 0);
          clip-path: inset(50px 0 25px 0);
  opacity: 0.7;
  pointer-events: none;
  z-index: 2;
}

@media (max-width: 768px) {
  .path-bridge {
    left: 58%;
    width: clamp(180px, 50vw, 260px);
    top: calc(90vh - 20px);
    -webkit-clip-path: inset(0 0 15px 0);
            clip-path: inset(0 0 15px 0);
  }
}
```
