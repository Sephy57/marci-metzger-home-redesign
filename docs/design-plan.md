# Design Plan — Marci Metzger / The Ridge Realty Group

**Project:** Premium single-page redesign of marcimetzger.com
**Role of this document:** Complete design strategy for handoff to a developer. Every value in this doc is final and build-ready. If a decision is not covered here, choose the more restrained option.
**Prepared by:** Design Director (Sub-Agent 2)

---

## 1. Positioning & Creative Direction

**Concept:** "Desert Modern Editorial" — the visual language of a high-end print feature (Kinfolk / Architectural Digest / luxury brokerage brand books) applied to a single-page site for an established small-town realtor.

**Positioning pillars:**

| Pillar | How design expresses it |
|---|---|
| LUXURY REAL ESTATE | Editorial serif display type, champagne-gold hairline accents, generous whitespace, full-bleed photography |
| PAHRUMP / NEVADA | Real local photography (golf-community pond, mountain backdrop), location tag in hero, desert-warm ivory neutrals |
| ESTABLISHED REALTOR | "Nearly 3 decades" badge, stats band in ink, formal composition, no trend-chasing effects |
| LOCAL KNOWLEDGE | Neighborhood copy, hours/contact block, Chamber + Equal Housing badges in footer |
| MODERN EDITORIAL | Asymmetric 5/7 and 7/5 splits, numbered service rows with hairlines, clamp-based fluid type |

**Target feeling:** Premium. Elegant. Established. Trustworthy. Local. Warm.

**Anti-goals — this must NOT read as:** a SaaS dashboard, a crypto/Web3 site, a template demo (Wix/Squarespace stock feel), a cheap real-estate template (red/blue IDX portal look), or an over-animated "AI-generated" landing page. No parallax, no autoplay carousels, no gradient buttons, no icon soup, no emoji.

---

## 2. Color System (Final Tokens)

```css
:root {
  /* Surfaces */
  --ink:         #1A1F1B;  /* deep charcoal green-black — nav-on-scroll alt, stats band, footer */
  --pine:        #22302A;  /* deep slate green — CTA panel, search section tint, dark scrims base */
  --ivory:       #F7F4EE;  /* warm ivory — primary page background */
  --ivory-dark:  #EFEAE0;  /* warm ivory, one step down — alternate section bands, card fills, input fills */

  /* Accent */
  --gold:        #B9975B;  /* restrained champagne gold — accent ONLY */
  --gold-deep:   #9A7B41;  /* darker gold — hover / pressed states, text-on-ivory accent */

  /* Text */
  --text-dark:   #1A1F1B;  /* = --ink; body text on ivory/pine-light surfaces */
  --text-light:  #F7F4EE;  /* = --ivory; body text on ink/pine/photo-scrim surfaces */
  --text-muted:  #5B625C;  /* muted grey-green, secondary text on light (AA on ivory) */
  --text-muted-dark: #B9C0B9; /* secondary text on ink/pine (AA on both) */
}
```

### Usage rules — gold is a seasoning, not a sauce
- Gold is used **ONLY** for: eyebrow labels and their leading rules/lines, hairline dividers, button borders and button text, link hover states, the small "01/02/03" service numerals, focus rings, and the badge chip border. 
- Gold is **NEVER** used for: large background fills, full button fills in the resting state, headings, body copy, or blocks wider than ~2px (exceptions: 2px button borders, 1px rules).
- Surface order down the page: ivory (hero scrim is photo, not paint) → ink (stats) → ivory (about) → ivory/pine-tint (search, `#22302A` at 4–6% over ivory or a solid blend like `#EDEBE2`) → ivory (gallery) → ivory (services) → pine (CTA) → ivory (contact) → ink (footer). Alternation creates rhythm without borders.

### Contrast requirements (WCAG AA, verified pairs)
| Pair | Ratio (approx.) | Allowed usage |
|---|---|---|
| `--text-dark` (#1A1F1B) on `--ivory` (#F7F4EE) | ~15.9:1 | Body text — passes AAA |
| `--text-light` (#F7F4EE) on `--pine` (#22302A) | ~11.5:1 | Body text on dark — passes AAA |
| `--text-light` (#F7F4EE) on `--ink` (#1A1F1B) | ~15.9:1 | Stats band, footer — passes AAA |
| `--gold` (#B9975B) on `--ink` / `--pine` | ~4.6:1 | **Small text only** (eyebrows, button labels, numerals at 0.72–0.78rem+). Never body copy, never below 0.72rem |
| `--gold-deep` (#9A7B41) on `--ivory` | ~3.6:1 | **Decorative/large elements only** on light surfaces; for gold-toned text on ivory use `--gold-deep` at ≥0.78rem semibold, or prefer `--text-muted` |
| `--text-muted` (#5B625C) on `--ivory` | ~5.4:1 | Secondary text — passes AA |
| `--ink` (#1A1F1B) on `--gold` (#B9975B) fill (hover) | ~4.6:1 | Button hover label — passes AA |
| White text over hero scrim | ≥4.5:1 where text sits | Enforce via scrim (see §5 Hero) — text must sit in the darkest 60% of the gradient |

Rule of thumb: **gold text lives on dark; ink text lives on light.** Gold never sets long-form text anywhere.

---

## 3. Typography

### Families (Google Fonts, two families maximum)
- **Display — "Cormorant Garamond"**, weights 500 + 600, italic excluded unless a single pull-quote requires it (it does not on this page). Editorial serif for all display headings, the hero headline, big numerals, and section headings.
- **Body/UI — "Manrope"**, weights 400 / 500 / 600 / 700. Clean geometric sans for body copy, buttons, nav, forms, captions, eyebrows.

### Loading strategy
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600&family=Manrope:wght@400;500;600;700&display=swap" rel="stylesheet">
```
- `display=swap` so text renders immediately in fallback (`Georgia, 'Times New Roman', serif` for display; `system-ui, -apple-system, 'Segoe UI', sans-serif` for body).
- `font-synthesis: none;` on display headings to avoid faux-bold Cormorant during swap. Set `size-adjust`/metric overrides if CLS from swap exceeds 0.02.

### Type scale (fluid, clamp-based)
| Role | Font / weight | Value |
|---|---|---|
| Display (hero H1) | Cormorant Garamond 600 | `clamp(2.6rem, 6vw, 4.6rem)`, line-height 1.05, letter-spacing -0.01em |
| H2 section heading | Cormorant Garamond 600 | `clamp(2rem, 4vw, 3.25rem)`, line-height 1.12 |
| H3 (panel headlines, e.g. SELL/BUY) | Cormorant Garamond 600 | `clamp(1.5rem, 2.6vw, 2.1rem)`, line-height 1.2 |
| Eyebrow | Manrope 600 | `0.78rem`, `letter-spacing: 0.22em`, `text-transform: uppercase`, line-height 1.4 |
| Body large (hero subline, lede) | Manrope 400 | `clamp(1.05rem, 1.4vw, 1.25rem)`, line-height 1.6 |
| Body | Manrope 400 | `1rem` (16px base), line-height 1.7 |
| Body small / captions / form labels | Manrope 500 | `0.875rem`, line-height 1.55 |
| Button label | Manrope 600 | `0.72rem`, `letter-spacing: 0.18em`, uppercase |
| Stat numeral | Cormorant Garamond 600 | `clamp(2.4rem, 4vw, 3.5rem)`, line-height 1 |

### Measure & rhythm
- Max paragraph measure: **65ch** (`max-width: 65ch` on all body copy containers).
- Paragraph spacing: `0.9em`. No justified text. Hyphens off.
- Headings never orphaned: `text-wrap: balance` on H1/H2/H3.
- Base font-size never below 16px on mobile (no 14px body).

---

## 4. Layout & Grid

```css
:root {
  --container: 1200px;
  --gutter: 24px;              /* mobile side padding */
  --section-pad: clamp(4.5rem, 9vw, 8rem);
  --radius: 2px;               /* buttons may be pill (999px) or 2px — pick ONE site-wide */
  --hairline: 1px solid rgba(26, 31, 27, 0.14);      /* on light */
  --hairline-light: 1px solid rgba(247, 244, 238, 0.16); /* on dark */
}
.container { max-width: var(--container); margin-inline: auto; padding-inline: var(--gutter); }
section { padding-block: var(--section-pad); }
```

- **Grid:** 12-column CSS grid desktop (`grid-template-columns: repeat(12, 1fr)`, gap `clamp(1.25rem, 2.5vw, 2rem)`), collapsing to single column below 768px.
- **Editorial splits:** About = portrait left **5 cols** / text right **7 cols** (offset frame detail, §5). Services rows alternate **7/5 → 5/7 → 7/5** (text/visual weight flips). Never two equal 6/6 halves more than once on the page.
- **Stats band:** 4-up desktop (`grid-template-columns: repeat(4, 1fr)`), 2-up tablet (768–1023px), stacked mobile — separated by **1px hairline dividers** (`--hairline-light`) between columns/rows, **not cards**. No backgrounds, no borders around the group, no rounded corners.
- **Whitespace is the luxury signal:** minimum 96px between distinct content blocks on desktop; sections breathe via `--section-pad`.
- Full-bleed elements (hero, CTA panel, stats band) span the viewport; their inner content still respects `--container`.

---

## 5. Section-by-Section Art Direction

Single page, top to bottom. Anchor IDs in brackets.

### 5.1 Navigation — `header.nav`
- Sticky, fixed to top. Over the hero it is **transparent** with `--text-light` contents; after scroll > 24px it transitions (300ms ease) to `background: var(--ivory)`, `box-shadow: 0 1px 0 var(--hairline), 0 8px 24px rgba(26,31,27,0.06)`, and `--text-dark` contents.
- Height: **84px over hero → 64px scrolled** (transition the height with the bg change).
- Left: wordmark "MARCI METZGER" (Manrope 700, 0.95rem, letter-spacing 0.08em, uppercase) with "THE RIDGE REALTY GROUP" as a 0.62rem gold sub-line.
- Center/right links (Manrope 500, 0.82rem, uppercase, 0.1em tracking): ABOUT · SELL · BUY · SEARCH · GALLERY · SERVICES · CONTACT. Two of these are journey deep-links styled subtly as gold-underlined: **SELL → #sell**, **BUY → #buy**.
- Right: phone button "CALL MARCI" (small primary button, gold outline style — the persistent conversion anchor).
- Under 1024px (acceptable range 860–1024px if nav wraps earlier): links collapse into a hamburger. Menu opens a full-width ivory panel (or full-screen ink panel) with large Cormorant links, 44px+ targets, focus-trapped, closable with Escape. Hamburger is a 3-line icon that animates to an X — lines only, no burger emoji/icon font.

### 5.2 Hero — `#top`
- Full-bleed pond photograph (golf-community pond, mountain backdrop), `background-size: cover`, focal point on the mountains at the upper-right (`object-position` / `background-position: 62% 40%`).
- Scrim: single left-to-right dark gradient, e.g. `linear-gradient(90deg, rgba(26,31,27,0.78) 0%, rgba(26,31,27,0.45) 45%, rgba(26,31,27,0.10) 100%)` — **peak scrim opacity 45%** at the mid-fade and 0.78 only at the extreme left edge behind text; net average stays ≤45%. This is the ONLY gradient type permitted on the site (photo scrims).
- Content column left-aligned, vertically centered but bottom-weighted: max-width 640px, `padding-bottom: clamp(5rem, 10vh, 7rem)`.
  1. Eyebrow: "THE RIDGE REALTY GROUP" — gold, Manrope 600 0.78rem, 0.22em tracking, preceded by a 32px gold hairline.
  2. Display H1: **"FIND YOUR PLACE IN PAHRUMP"** — Cormorant 600, clamp per §3. Break as two lines: "FIND YOUR PLACE" / "IN PAHRUMP" with "IN PAHRUMP" on the second line.
  3. Subline: "Experience. Local Knowledge. Results." — Manrope 400, body-large size, `--text-light` at 90% opacity.
  4. Button row (wraps on small screens): primary "EXPLORE HOMES" (gold-border style, §6) + secondary phone button "CALL MARCI" with a small inline phone glyph (single line SVG, 16px).
  5. Badge chip: "REALTOR FOR NEARLY 3 DECADES" — pill, 1px gold border, transparent fill, Manrope 600 0.72rem uppercase 0.14em tracking, gold text on the scrim. Sits above or beside the eyebrow (above preferred), never on a photo hotspot.
- Bottom-left location tag: "PAHRUMP, NEVADA" — Manrope 500 0.72rem uppercase 0.2em, `--text-light` 80%, with a 1px gold 24px rule before it; positioned `bottom: 28px; left: var(--gutter)`.
- Scroll cue: bottom-center, a 1px × 40px vertical gold hairline with a slow (2.4s) subtle translate-y loop + "SCROLL" label at 0.62rem. Hidden under `prefers-reduced-motion` (line stays static).
- Hero height: `min-height: 92svh` desktop, `88svh` mobile. Content bottom-anchored so it never collides with the location tag on short landscape screens.

### 5.3 Stats band — `#stats`
- `background: var(--ink)`, `padding-block: clamp(3rem, 6vw, 4.5rem)` (tighter than standard sections — it's a band, not a section).
- 4 stats (e.g., "29+ Years in Real Estate", "500+ Families Served"*, "Born & Raised Local Knowledge", "The Ridge Realty Group Founder") — numerals in Cormorant 600 gold, labels in Manrope 0.78rem `--text-muted-dark`. Count-up animation per §7.
- Hairline dividers between items, 4-up / 2-up / stacked per §4. No cards, no icons.

### 5.4 About — `#about`
- Ivory section. 12-col grid: portrait **left 5 cols**, text **right 7 cols**.
- Portrait of Marci (blue blazer) inside an **offset frame**: a 1px gold border box offset `16px` down-right behind the photo (photo sits on top), so the gold frame peeks out on two sides. Photo `aspect-ratio: 4/5`, `filter: saturate(0.92) contrast(1.02)` for a print feel. Caption under photo: "Marci Metzger — Broker, The Ridge Realty Group" at 0.78rem `--text-muted`.
- Right column: eyebrow "ABOUT MARCI", H2 (e.g., "NEARLY THREE DECADES OF PAHRUMP REAL ESTATE"), 2–3 short paragraphs (measure 65ch), then a signature-style inline proof point (gold hairline + "Let's talk about your move — CALL MARCI link").
- Reveal: portrait and text stagger in per §7.

### 5.5 Sell / Buy journeys — `#sell`, `#buy`
- Two **tall image panels** side by side on desktop (each ~48vw × `min-height: 560px`, 24px gap; stacked full-width mobile at 4/3). Asymmetric: give SELL slightly more width (e.g., 52/48 split) for editorial tension.
- Each panel = real photography under a dark scrim (same left-to-right technique as hero; on these panels a **diagonal composition**: scrim `linear-gradient(115deg, rgba(26,31,27,0.72) 0%, rgba(34,48,42,0.35) 55%, rgba(26,31,27,0.15) 100%)`), text bottom-left.
- SELL panel: eyebrow "SELLING", H3 **"DON'T JUST LIST IT. GET IT SOLD!"** (Cormorant 600), one line of copy, primary button "GET A FREE HOME EVALUATION" → `#contact` (form pre-sets intent to Sell).
- BUY panel: eyebrow "BUYING", H3 "YOUR NEXT ADDRESS STARTS HERE", one line of copy, primary button "START YOUR HOME SEARCH" → `#search`.
- Buttons on scrims use the gold-outline-on-dark style so both panels stay cohesive.
- Hover: panel image scales to 1.03 over 700ms (transform only, `will-change: transform`), scrim deepens 5%. No parallax.

### 5.6 Search — `#search`
- Section background: **pine-tinted** ivory — `#EDEBE2` (or `color-mix(in srgb, var(--pine) 5%, var(--ivory))`).
- A single **ivory card** (`background: var(--ivory)`, `border: var(--hairline)`, NO shadow larger than `0 12px 32px rgba(26,31,27,0.06)`, radius 2px) centered, max-width 880px, padding `clamp(1.75rem, 4vw, 3rem)`.
- Card head: eyebrow "PROPERTY SEARCH", H3 "Search Pahrump Real Estate", one line of helper copy.
- **7 fields** in a responsive grid: Location / Property Type / Price Range / Beds / Baths / Min Sq Ft / Keyword or MLS#. Layout: **3-col ≥1024px → 2-col 560–1023px → 1-col <560px**, gap `1rem 1.25rem`.
- Fields: Manrope 0.875rem, `background: var(--ivory-dark)` fill or white fill with `var(--hairline)` 1px border (pick one), height 48px, **visible labels always above inputs** (0.78rem, Manrope 500, never placeholder-as-label), 2px radius, gold 2px focus ring.
- Submit: full-width on mobile, auto-width right-aligned desktop — **gold SEARCH NOW** button. Under it, 0.75rem helper line: "Prefer a personal search? CALL MARCI."
- (If wired to a real IDX later, the card layout and field spec stay identical.)

### 5.7 Gallery — `#gallery`
- Ivory section. Eyebrow "RECENT LISTINGS", H2 "Homes I've Marketed", 1-line intro.
- **Large featured image** (`aspect-ratio: 16/10`, max-height 68vh, radius 2px, hairline border) + a horizontal **thumbnail strip** beneath (7 thumbs, 88px tall, 1px hairline border; active thumb gets a 2px gold border). Strip scrolls horizontally with `scroll-snap-type: x mandatory` on mobile.
- **Prev/next arrows:** 44×44px circular ghost buttons (1px `--hairline` border, ivory bg at 85% opacity, ink chevron SVG), positioned overlapping the featured image's left/right edges, vertically centered. Disabled state at ends (or wraps — pick wrap). Hidden when a keyboard user tabs: arrows remain focusable, lightbox is the accessible path.
- Keyboard: ←/→ change images when the gallery has focus.
- **Lightbox:** click featured image (or thumbs with modifier) opens full-screen overlay — ink at 92% opacity backdrop, image centered at max 92vw × 88vh, caption 0.8rem below, close × 44px top-right, ←/→ nav, **focus trap + Escape to close**, `aria-modal="true"`, return focus to the trigger on close. Body scroll locked while open.

### 5.8 Services — `#services`
- Ivory section. Eyebrow "WHAT I DO", H2 "Full-Service, Start to Finish".
- **Three editorial numbered rows — NOT three cards.** Each row: a large Cormorant gold numeral (**01 / 02 / 03**, clamp(2.4rem, 4vw, 3.5rem)) + content block + optional small photo, separated by `var(--hairline)` rules above and below each row. Rows alternate alignment: row 1 text-left/numeral-right, row 2 reversed, row 3 like row 1 (7/5 → 5/7 → 7/5 rhythm).
- Rows: 01 SELL — pricing, staging, marketing; 02 BUY — search, negotiation, closing; 03 CONSULT — market analysis, relocation, land/golf-community guidance.
- Each row ends with a small gold text-link: "Sell with Marci → #contact", "Buy with Marci → #search", "Ask a question → #contact".
- Padding-block per row: `clamp(2.25rem, 5vw, 3.5rem)`. No icons. No emoji.

### 5.9 CTA band — `#cta`
- Full-width `background: var(--pine)` panel, `padding-block: clamp(3.5rem, 7vw, 5.5rem)`, centered composition (the only fully centered moment on the page).
- Eyebrow "THE NEXT STEP", display H2 **"READY FOR YOUR NEXT MOVE?"** in `--text-light`, one supporting line, then two buttons: primary gold-outline "CALL MARCI" + secondary outline-in-ivory "SEND A MESSAGE" → `#contact`.
- Optional: a 40px gold hairline centered above the eyebrow as the only ornament.

### 5.10 Contact — `#contact`
- Ivory section, two columns: **info+hours left (5 cols), form right (7 cols)**.
- Left: eyebrow "CONTACT", H2 "Talk to Marci", phone number as large Cormorant display link (gold-deep hover), email link, office/street address lines, and an hours block (Mon–Sat 9:00–18:00 etc.) as a compact definition list with hairline rules. Small note: "Serving Pahrump, Las Vegas outskirts & Nye County."
- Right: message form — Name, Phone, Email, I want to (select: Sell / Buy / Just a question), Message. Same field style as §5.6, visible labels, 2-col row for Name/Phone ≥560px, validation with inline error text (`#B00020` reserved solely for errors) and gold focus rings. Submit: primary button "SEND MESSAGE" (secondary ivory-solid style per §6 — gold border style is reserved for dark contexts and the search CTA). Success state: inline confirmation panel replacing the form, `--pine` text on `--ivory-dark`.
- Phone number is `tel:` linked everywhere it appears.

### 5.11 Footer
- `background: var(--ink)`, `padding-block: 3.5rem 2rem`, `--text-muted-dark` text.
- Row 1: wordmark left (ivory), phone + email right.
- Row 2: minimal inline nav (the 7 anchors), 0.78rem.
- Row 3: **compliance badges** — Equal Housing Opportunity logo, REALTOR® logo, Pahrump Valley Chamber of Commerce — as monochrome (opacity 0.7) inline SVG/image marks, 40–56px tall, with descriptive `alt`/`aria-label`; hover returns them to full opacity.
- Bottom line: "© 2026 Marci Metzger · The Ridge Realty Group · Pahrump, Nevada. All rights reserved." + "License #" placeholder. Equal Housing Opportunity statement line if required by state custom.

---

## 6. Buttons & States

```css
/* Primary — used on dark/photo/pine contexts */
.btn-primary {
  display: inline-flex; align-items: center; gap: 0.6rem;
  min-height: 48px; padding: 0.9rem 1.9rem;
  font: 600 0.72rem/1 Manrope; letter-spacing: 0.18em; text-transform: uppercase;
  color: var(--gold); background: transparent;
  border: 2px solid var(--gold); border-radius: 999px; /* pill site-wide — do not mix with 2px */
  transition: background-color 250ms ease, color 250ms ease, border-color 250ms ease;
}
.btn-primary:hover { background: var(--gold); color: var(--ink); border-color: var(--gold); }
.btn-primary:active { background: var(--gold-deep); border-color: var(--gold-deep); color: var(--ivory); }

/* Secondary — solid, context-dependent */
.btn-secondary { /* same metrics/typography */ }
.on-dark  .btn-secondary { background: var(--ivory); color: var(--ink); }
.on-dark  .btn-secondary:hover { background: var(--ivory-dark); }
.on-light .btn-secondary { background: var(--ink); color: var(--ivory); }
.on-light .btn-secondary:hover { background: var(--pine); }
```

- One radius system site-wide: **pill (999px)** recommended; if square is preferred, 2px everywhere — never both.
- Resting primary = outline + gold text; hover fill = gold with **ink** label (AA, §2). Gold fill exists only in hover/active — the "never large gold fills" rule holds.
- Minimum touch target 44×44px (buttons are 48px). `gap` 0.75rem between button-row items.
- **Focus visibility:** `:focus-visible { outline: 3px solid var(--gold); outline-offset: 3px; }` globally — on ivory backgrounds use `--gold-deep` for the outline if contrast is insufficient. Never remove outlines without an equal-or-better replacement.
- Links: body links underlined (`text-decoration-color: rgba(185,151,91,0.6)`, `text-underline-offset: 3px`), gold/gold-deep on hover.
- Disabled: 45% opacity, `cursor: not-allowed`, still 3px focusable outline.

---

## 7. Motion

**Philosophy:** motion confirms, never performs. One reveal system, one count-up, nothing else.

- **Scroll reveal (IntersectionObserver, threshold 0.15, once):**
  - `opacity: 0 → 1`, `transform: translateY(16px) → none`, `transition: 600ms cubic-bezier(0.22, 1, 0.36, 1)`.
  - Staggered siblings: 60–90ms delay increments (`transition-delay: calc(var(--i) * 75ms)` via a `--i` custom property on li/grid children).
  - Content is fully visible (no opacity:0) if JS fails — apply the hidden state via a `.js` class on `<html>`.
- **Stats count-up:** numerals animate 0 → target over ~1.4s, `requestAnimationFrame`, ease-out, once when the band enters view. Non-numeric stats ("Born & Raised") simply fade in.
- **Nav transition:** bg/shadow/height over 300ms ease (§5.1).
- **Gallery hover** scale 1.03 / 700ms; button color transitions 250ms; accordion/menu 300ms. Nothing else animates.
- **`prefers-reduced-motion: reduce`:** ALL transitions/animations disabled (`* { transition-duration: 0.01ms !important; animation-duration: 0.01ms !important; }` or equivalent), reveals render in final state, count-up renders final numbers immediately, scroll cue static. The site must be fully readable and complete with zero motion.
- **Explicitly banned:** parallax, scroll-jacking, autoplay carousels, cursor followers, text typing effects, bounce/ease-elastic, entrance scale/rotate, animated gradients, floating shapes.

---

## 8. Responsive Strategy

**Mobile-first.** Breakpoints (min-width):

| Breakpoint | Changes |
|---|---|
| **base (<560px)** | Single column everywhere; 24px side padding; hamburger nav; hero 88svh; stats stacked; Sell/Buy panels stacked; search 1-col; contact stacked (info above form); gallery thumbs swipeable strip |
| **560px** | Search grid → 2-col; name/phone form row; stats → 2-up |
| **768px** | 12-col grid active for About/Services/Contact; stats remain 2-up; hero content max-width locks; gallery arrows shown |
| **1024px** | Full desktop nav (hamburger disappears between 860–1024px — implement at 1024px unless nav wraps, then 860px); stats 4-up; Sell/Buy side-by-side (52/48); services rows to alternating 7/5–5/7; search 3-col |
| **1280px+** | Container caps at 1200px; extra viewport becomes margin; hero display hits 4.6rem cap; section padding caps at 8rem |

- **Hero:** `min-height: 92svh` desktop / `88svh` mobile (use `svh` with a `vh` fallback for legacy); content bottom-anchored so the location tag (28px from bottom) and content never collide — test at 320×568.
- **Touch targets:** all interactive elements ≥44×44px, spacing ≥8px between adjacent targets. Arrows and close buttons exactly 44px.
- **320px no-overflow guarantee:** no fixed widths on text containers (always `max-width`, never `width`); fluid clamp type bottoms out ≥1rem for body and ≥2.6rem display (2.6rem "FIND YOUR PLACE" wraps cleanly); button rows wrap (`flex-wrap: wrap`); thumbnails scroll rather than shrink below 72px; long words in copy avoided; `overflow-x: hidden` is a last resort only, not the fix.
- Images: `srcset`/responsive sizes, `loading="lazy"` below the fold, hero `fetchpriority="high"`, explicit `width`/`height` (or `aspect-ratio`) to reserve space.

---

## 9. Accessibility (designed in, not retrofitted)

- **Contrast:** all pairs per §2 table; body text AA minimum 4.5:1, large display ≥3:1. Gold-on-dark text never below 0.72rem.
- **Focus:** 3px gold `:focus-visible` outlines everywhere (§6); visible on both ivory and ink; mobile menu and lightbox **trap focus** while open; Escape closes both; focus returns to the triggering element.
- **Reduced motion:** full opt-out per §7.
- **Forms:** labels always visible above inputs (no placeholder-as-label); `autocomplete` attributes on name/email/phone/tel; errors announced via `aria-describedby` + inline text; required fields marked in text, not color alone.
- **Semantics:** one `h1` (hero); section `h2`s in order; nav landmarks; gallery images have descriptive alt text (address or listing descriptor), decorative scrims `aria-hidden`; stats band as a `<dl>` or list; buttons are `<button>`, links are `<a>` (the phone CTA is an `href="tel:+1775XXXXXXX"` link).
- **Lightbox:** role=dialog, `aria-modal`, Escape, arrow-key nav, focus trap, scroll lock, alt captions.
- Hit areas and text zoom: layout must survive 200% browser zoom without horizontal scroll at desktop widths.

---

## 10. Conversion Flow

- **Primary conversion: the phone call.** "CALL MARCI" (tel: link) appears in: nav (persistent), hero button row, About proof line, CTA band, contact info column, footer. Phone number is clickable everywhere it is displayed.
- **Secondary conversion: the message form** (`#contact`) — linked from hero ("EXPLORE HOMES" funnels to search first), search card helper line, Sell/Buy panel buttons (form pre-selects intent), services row links, CTA band.
- **Every major section ends in one of the two actions.** No dead-end sections.
- **Journey deep-links:** nav SELL → `#sell`, BUY → `#buy` (gold-underlined in nav); the Sell/Buy panels route onward — Sell → contact form (Sell intent), Buy → search. One decision per screen; never more than two CTAs in view.
- Trust reinforcement along the funnel: stats band (before About), badge chip (hero), compliance badges (footer at form-submit adjacency is unnecessary — footer suffices).

---

## 11. Why This Won't Read as AI-Generated / Template

1. **Asymmetric editorial layouts** — 5/7 splits, 52/48 panels, alternating service rows; no uniform 3-card or 4-card grids anywhere (the stats band uses hairlines, not cards; services are rows, not cards).
2. **Hairline dividers over borders/shadows** — sections and list items separate with 1px rules, not boxed cards; at most one elevated card exists on the page (search).
3. **One restrained accent** — champagne gold as eyeliner (rules, eyebrows, button strokes), never fills; a strict dark/ivory duotone world otherwise.
4. **Real local photography** — the actual pond/mountain hero, Marci's actual portrait, actual listing photos; treated like a magazine (subtle desaturation, scrims) not stock collages.
5. **Real business copy** — "DON'T JUST LIST IT. GET IT SOLD!", "REALTOR FOR NEARLY 3 DECADES", "PAHRUMP, NEVADA" — specific voice, not "Lorem-quality" generic marketing filler.
6. **Generous whitespace** — clamp(4.5rem, 9vw, 8rem) section rhythm and 65ch measure; density is a template tell.
7. **No icon soup** — one phone glyph, nav chevrons/arrows, compliance marks; that is the entire icon inventory. Zero emoji, anywhere, including alt text and copy.
8. **No gradients except photo scrims** — every surface is a flat token color; gradients exist solely to keep photography legible.
9. **Motion budget** — one reveal curve and one count-up; nothing floats, spins, or autoplays.
10. **Editorial details** — the offset gold frame behind the portrait, Cormorant numerals 01/02/03, the bottom-left location tag, the single centered CTA moment: small authored touches templates never bother with.

---

## Handoff Notes for the Developer

- Build order suggestion: tokens → type → nav/hero → sections in page order → motion layer → responsive QA at 320/560/768/1024/1280 → accessibility pass (keyboard-only walk, contrast audit, reduced-motion check).
- All copy in this doc marked as examples may be refined by the content owner, but structural strings (eyebrow, hero H1, SELL H3, CTA H2, badge chip, location tag) are fixed brand lines.
- Exact photography: hero = pond with mountain backdrop; portrait = Marci in blue blazer; gallery = the 7 provided listing photos. No stock substitutions.
- If any spec here conflicts with WCAG AA or 44px targets, accessibility wins.
