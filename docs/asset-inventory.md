# Asset Inventory — Marci Metzger Home Page Rebuild

**Source CDN:** GoDaddy Website Builder media host `img1.wsimg.com`, isteam folder `067a4d42-19e8-46d9-9bed-578bf62dd44e`
**Retrieved:** 2026-09-05; source homepage rechecked 2026-09-06 — all shipped page imagery is stored locally and the page references only local copies.
**URL format:** Source URLs below are the base file URLs, shown without the CDN's `/rs=` render parameters (the original CDN appends e.g. `/rs=w1024` to request a resized rendition).

---

## 1. Retrieved & Optimized Assets

| Image | Source URL | Original dimensions | Local filename | Where used | Optimization format |
| --- | --- | --- | --- | --- | --- |
| Logo wordmark | `https://img1.wsimg.com/isteam/ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/blob-6c0c2e0.png` | 1071 × 334 | `assets/icons/logo.png` | Header brand, footer | PNG (colormap, ~15 KB) |
| Marci portrait | `https://img1.wsimg.com/isteam/067a4d42-19e8-46d9-9bed-578bf62dd44e/photo-5db79f9.jpg` | 1095 × 1643 uncropped (site displays a 1095 × 1095 crop) | `assets/images/marci-portrait.webp` | About section | WebP q84 |
| Mountain Falls community pond (hero) | `https://img1.wsimg.com/isteam/067a4d42-19e8-46d9-9bed-578bf62dd44e/mtn%20falls%20pond.jpg` | 2560 × 1700 (Nikon camera original) | `assets/images/hero-pond.webp` (2304w) + `assets/images/hero-pond-1280.webp` (mobile) + `assets/images/og-image.jpg` (1200 × 630) | Hero background; Open Graph preview | WebP q78 (2304w) + WebP mobile variant + JPEG for OG |
| Circular badge | `https://img1.wsimg.com/isteam/067a4d42-19e8-46d9-9bed-578bf62dd44e/BIG%20CIRCLE%202.png` | 300 × 300 | `assets/icons/badge-bigcircle.png` | Retained in repo; usage under review | PNG |
| Equal Housing logo | `https://img1.wsimg.com/isteam/067a4d42-19e8-46d9-9bed-578bf62dd44e/Equal%20Housing%20Logo.png` | 299 × 300 | `assets/icons/logo-equal-housing.png` | Footer compliance badge | PNG |
| Realtor pin | `https://img1.wsimg.com/isteam/067a4d42-19e8-46d9-9bed-578bf62dd44e/Realtor%20Pin.jpg` | 335 × 300 | `assets/icons/realtor-pin.jpg` | Footer compliance badge | JPEG |
| Chamber badge | `https://img1.wsimg.com/isteam/067a4d42-19e8-46d9-9bed-578bf62dd44e/Chamber.jpg` | 300 × 300 | `assets/icons/chamber.jpg` | Footer (chamber membership) | JPEG |
| Gallery 1 — 4460 Roseworthy-52 | `https://img1.wsimg.com/isteam/067a4d42-19e8-46d9-9bed-578bf62dd44e/4460%20Roseworthy-52.jpg` | 1024 × 682–683 | `assets/images/gallery-01.webp` | Photo Gallery, position 1 | WebP q80 |
| Gallery 2 — 5570 Ailanto-14 | `https://img1.wsimg.com/isteam/067a4d42-19e8-46d9-9bed-578bf62dd44e/5570%20Ailanto-14.jpg` | 1024 × 682–683 | `assets/images/gallery-02.webp` | Photo Gallery, position 2 | WebP q80 |
| Gallery 3 — 5570 Ailanto-45 | `https://img1.wsimg.com/isteam/067a4d42-19e8-46d9-9bed-578bf62dd44e/5570%20Ailanto-45.jpg` | 1024 × 682–683 | `assets/images/gallery-03.webp` | Photo Gallery, position 3 | WebP q80 |
| Gallery 4 — 5570 Ailanto-50 | `https://img1.wsimg.com/isteam/067a4d42-19e8-46d9-9bed-578bf62dd44e/5570%20Ailanto-50.jpg` | 1024 × 682–683 | `assets/images/gallery-04.webp` | Photo Gallery, position 4 | WebP q80 |
| Gallery 5 — 4787 E Beacon Ridge-54 | `https://img1.wsimg.com/isteam/067a4d42-19e8-46d9-9bed-578bf62dd44e/4787%20E%20Beacon%20Ridge-54.jpg` | 1024 × 682–683 | `assets/images/gallery-05.webp` | Photo Gallery, position 5 | WebP q80 |
| Gallery 6 — 4787 E Beacon Ridge-53 | `https://img1.wsimg.com/isteam/067a4d42-19e8-46d9-9bed-578bf62dd44e/4787%20E%20Beacon%20Ridge-53.jpg` | 1024 × 682–683 | `assets/images/gallery-06.webp` | Photo Gallery, position 6 | WebP q80 |
| Gallery 7 — 4787 E Beacon Ridge-41 | `https://img1.wsimg.com/isteam/067a4d42-19e8-46d9-9bed-578bf62dd44e/4787%20E%20Beacon%20Ridge-41.jpg` | 1024 × 682–683 | `assets/images/gallery-07.webp` | Photo Gallery, position 7 | WebP q80 |

Gallery order above matches the live site's display order exactly.

## 2. Generated Assets (no CDN source)

| Asset | Local filename(s) | Where used | Notes |
| --- | --- | --- | --- |
| Favicon set — gold serif "M" monogram on charcoal | `favicon-512.png`, `favicon-48.png`, `favicon-32.png`, `favicon-16.png`, `apple-touch-icon.png` | Browser tab, home-screen icon | Generated for this project; no source asset existed |
| Open Graph image | `assets/images/og-image.jpg` (1200 × 630) | Social/link previews | Derived from the hero pond photo |

## 3. Skipped by Design

| Source | Reason for exclusion | Replacement |
| --- | --- | --- |
| `isteam/stock/3395` | GoDaddy CDN stock photography — not business-owned | Business-owned photography (hero pond, portrait, gallery) |
| `isteam/stock/107927` | GoDaddy CDN stock photography — not business-owned | Business-owned photography |
| `isteam/getty/2223376026` | Getty embed — licensed for embed under the GoDaddy platform, not transferable to an independent site | Business-owned photography |

**Licensing notes.** The stock images on the wsimg CDN are licensed to the GoDaddy Website Builder subscription, and the Getty asset is served under an embed licence tied to that platform — neither may be copied onto an independently hosted site. Everything shipped in this rebuild is the business's own published content: logo, portrait, listing photography, and membership/compliance badges that already appear on the original site.

## 4. Weight Budget

- **Total optimized image weight shipped: ~2.4 MB**, including `og-image.jpg` (which regular visitors never download — see loading strategy).
- Largest single asset: `hero-pond.webp` at 2304w; mobile devices receive `hero-pond-1280.webp` via `srcset`/`<picture>`.
- Icons and badges remain lightweight PNG/JPEG (source files were already small); the logo ships as a ~15 KB colormap PNG.

## 5. Hotlinking Policy

**No hotlinks.** Every image reference in the HTML/CSS points to a local file under the project's `assets/` directory. The shipped site makes zero requests to `img1.wsimg.com` (or any third-party image host), removing a runtime dependency on the former platform and keeping the page fully self-contained.

## 6. Image-Loading Strategy

- **Hero — eager + preload.** `hero-pond.webp` is preloaded (`<link rel="preload" as="image">`) and eager-loaded with `fetchpriority="high"` so the LCP element paints immediately; the 1280w variant is served to small/mobile viewports via `srcset`.
- **Everything else — lazy.** Portrait, gallery images, and footer badges use `loading="lazy"` + `decoding="async"`, with explicit `width`/`height` attributes to prevent layout shift.
- **Lightbox reuses the same files.** The gallery lightbox opens the exact same `gallery-*.webp` files already loaded by the grid — no second set of high-resolution copies is stored or fetched.
- **OG image is crawler-only.** `og-image.jpg` is referenced solely in `<head>` meta tags for social/link previews and is not part of the visitor-facing page weight.
