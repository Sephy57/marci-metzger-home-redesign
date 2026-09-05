# Content Audit — marcimetzger.com Homepage

**Project:** Marci Metzger home page rebuild — single-page redesign
**Source of truth:** The rendered live home page at `https://marcimetzger.com/` (verified 2026-09-06). All meaningful copy in this audit is mapped to the redesign.
**Purpose:** Map every element of the original homepage to its destination in the redesign so that nothing factual is lost — and nothing factual is invented.

**Status legend**

| Status | Meaning |
| --- | --- |
| PRESENT | Carried over verbatim (wording unchanged; placement may relocate within the page) |
| MODIFIED FOR PRESENTATION | Same facts and copy, re-laid-out or lightly edited for the new design; no factual change |
| NOT APPLICABLE | Intentionally not carried into the redesign (platform artifact or out of scope); reason given |

---

## 1. Branding & Navigation

| Original content | Where it appears in redesign | Status |
| --- | --- | --- |
| Title tag: `Marci Metzger Homes - Real Estate Agent, Real Estate, Realtor` | Page `<title>` / browser tab; retained for SEO continuity | PRESENT |
| Brand lockup: `MARCI METZGER - THE RIDGE REALTY GROUP` | Header brand block and footer credit | PRESENT |
| Nav: `HOME, LISTINGS, LET'S MOVE, ABOUT US` | Anchor nav: `HOME, BUY, SELL, ABOUT, SERVICES, CONTACT` | MODIFIED FOR PRESENTATION |
| — (original nav has no persistent phone CTA) | Sticky `CALL MARCI (206) 919-6886` header CTA + mobile hamburger menu | MODIFIED FOR PRESENTATION |

**Navigation note.** The original nav points to separate site-builder pages: LISTINGS opens the live listing search, LET'S MOVE is the buyer/seller hub, ABOUT US is the team page. Per the assignment brief, the redesign collapses the site into a single page: LISTINGS and LET'S MOVE content is redistributed into the Property Search section and the BUY/SELL panels, and ABOUT US becomes the in-page "About Marci" section. Deep links become in-page anchors. This is an accepted structural change, not a content change.

## 2. Hero

| Original content | Where it appears in redesign | Status |
| --- | --- | --- |
| H1: `Pahrump Realtor` | Hero headline `FIND YOUR PLACE IN PAHRUMP` with support line `Experience. Local Knowledge. Results.` | MODIFIED FOR PRESENTATION |
| Hero panel: `MARCI METZGER` / `REALTOR FOR NEARLY 3 DECADES` / `206-919-6886` with `CALL NOW` button | `REALTOR FOR NEARLY 3 DECADES` badge in hero; `PAHRUMP, NEVADA` location tag; CALL NOW becomes the sticky header CTA and the hero `LET'S TALK` button; `EXPLORE HOMES` scrolls to Property Search | MODIFIED FOR PRESENTATION |

All hero identity facts — name, tenure claim, phone number, market town — are unchanged; only the headline phrasing and layout are new.

## 3. GET IT SOLD section → Stats band + SELL panel

| Original content | Where it appears in redesign | Status |
| --- | --- | --- |
| H2: `GET IT SOLD` | SELL panel heading | MODIFIED FOR PRESENTATION |
| H4: `Top Residential Sales Last 5 Years` | Stats band, stat 4 (verbatim) | PRESENT |
| Quote: `We helped nearly 90 clients in 2021, and closed 28.5 million in sales!` | Stats band, stats 2–3: `90+ Clients Helped in 2021` / `$28.5M Sales in 2021` | MODIFIED FOR PRESENTATION |
| `REALTOR FOR NEARLY 3 DECADES` (hero panel claim) | Stats band, stat 1: `Nearly 3 Decades of Experience` | PRESENT |
| Seller copy: `Our team works hard everyday to grow and learn, so that we may continue to excel in our market. Our clients deserve our best, & we want to make sure our best is better every year.` | SELL panel body copy | PRESENT |
| Seller copy: `Don't Just List it... Get it SOLD! We exhaust every avenue to ensure our listings are at the fingertips of every possible buyer, getting you top dollar for your home.` | SELL panel body copy | PRESENT |

## 4. Buyer column → BUY panel

| Original content | Where it appears in redesign | Status |
| --- | --- | --- |
| H4: `Guide to Buyers` | BUY panel heading | PRESENT |
| `Nobody knows the market like we do. Enjoy having a pro at your service. Market analysis, upgrades lists, contractors on speed dial, & more!` | BUY panel body copy | PRESENT |

## 5. Property Search

| Original content | Where it appears in redesign | Status |
| --- | --- | --- |
| H2: `Find Your Dream Home` | Property Search section heading | PRESENT |
| H4: `Search Listings` | Property Search sub-heading | PRESENT |
| Location field: `Any` + 43-entry option list (see below) | Location select, identical option list and order | PRESENT |
| Type field: `Any, Land, Residential Lease, High Rise, Residential` | Type select, identical options | PRESENT |
| Sort By: `Newest, Oldest, Least Expensive to Most, Most Expensive to Least, Bedrooms Low to High, Bedrooms High to Low, Bathrooms Low to High, Bathrooms High to Low` | Sort By select, identical options | PRESENT |
| Bedrooms: `Any Number, Studio, 1+ … 6+` | Bedrooms select, identical options | PRESENT |
| Baths: `Any Number, 1+ … 6+` | Baths select, identical options | PRESENT |
| Min Price / Max Price fields | Min/Max Price inputs | PRESENT |
| `SEARCH NOW` button | `SEARCH NOW` button — form validates, then offers a mailto/tel handoff to Marci | MODIFIED FOR PRESENTATION |

**Full Location option list (verbatim, for exact reproduction):**

`Any` — then: Alamo, Alton, Amargosa Valley, Beatty, Beryl, Blue Diamond, Boulder City, Brian Head, Cal Nev Ari, Caliente, Cold Creek, Crystal, Duck Creek Village, Dyer, Elko, Ely, Goldfield, Goodsprings, Hatch, Henderson, Indian Springs, Jean, Las Vegas, Laughlin, Logandale, Manhattan, Mc Gill, Mesquite, Moapa, Mount Charleston, Mountain Springs, North Las Vegas, Other (x5), Overton, Pahrump, Palm Gardens, Panaca, Parowan, Pioche, Round Mountain, Sandy Valley, Searchlight, Tonopah.

**Search behavior note.** The original embeds a live MLS/GLVAR listing search via the site builder. The redesign keeps the complete field UI but fakes nothing: on submit, the form validates the selections and offers a mailto/tel pathway. The result panel now explicitly describes search preferences and matching-property assistance; it does not claim to show live MLS results.

## 6. Photo Gallery

| Original content | Where it appears in redesign | Status |
| --- | --- | --- |
| H2: `Photo Gallery` | Gallery section heading | PRESENT |
| 7 photos in site order: 4460 Roseworthy-52; 5570 Ailanto-14; 5570 Ailanto-45; 5570 Ailanto-50; 4787 E Beacon Ridge-54; 4787 E Beacon Ridge-53; 4787 E Beacon Ridge-41 | Same 7 photos, same order, in a grid with lightbox | PRESENT |

The original gallery carries no captions; the redesign keeps it caption-free. Street addresses exist only in the source filenames as internal reference — they are the real listings' addresses, not invented content.

## 7. Our Services

| Original content | Where it appears in redesign | Status |
| --- | --- | --- |
| H2: `Our Services` | Services section heading | PRESENT |
| Block 1: `Real Estate Done Right` — `Nervous about your property adventure? Don't be. Whether you're getting ready to buy or sell your residence, looking at investment properties, or just curious about the markets, our team ensures you get the best experience possible!` | Services editorial row 1 | PRESENT |
| Block 2: `Commercial & Residential` — `Large or small, condo or mansion, we can find it and get at the price that's right. Fixer-uppers? Luxury? We can help with all of it! We live, work, and play in this community. Happy to help you find where to put you hard-earned dollars.` | Services editorial row 2 | PRESENT |
| Block 3: `Rely on Expertise` — `If you have questions about affordability, credit, and loan options, trust us to connect you with the right people to get the answers you need in a timely fashion. We make sure you feel confident and educated every step of the way.` | Services editorial row 3 | PRESENT |
| — (no CTA band on original) | `READY FOR YOUR NEXT MOVE?` CTA band (new presentation element; reuses existing contact pathways) | MODIFIED FOR PRESENTATION |

## 8. Contact

| Original content | Where it appears in redesign | Status |
| --- | --- | --- |
| H2: `Call or Visit` | Contact section heading | PRESENT |
| H4: `Send Message` — form: Name, Email*, `SEND` button | Contact form: Name, Email, Phone, Message — validated, delivered via mailto | MODIFIED FOR PRESENTATION |
| `This form is protected by reCAPTCHA` notice | Dropped — see behavior notes | NOT APPLICABLE |
| `Marci Metzger - THE RIDGE REALTY GROUP` | Contact identity block | PRESENT |
| Address: `3190 HW-160, Suite F, Pahrump, Nevada 89048, United States` | Contact address block (reproduced exactly; see Factual Integrity note) | PRESENT |
| Phone: `(206) 919-6886` | `tel:` links — sticky header CTA, hero LET'S TALK, contact block | PRESENT |
| Hours: `Open daily 8:00 am - 7:00 pm` + `Appointments outside office hours available upon request. Just call!` | Contact hours block | PRESENT |
| Embedded Google Map + `GET DIRECTIONS` | Replaced by the address block; no map embed (see behavior notes) | NOT APPLICABLE |

## 9. Footer & platform chrome

| Original content | Where it appears in redesign | Status |
| --- | --- | --- |
| `COPYRIGHT © 2026 MARCI METZGER - ALL RIGHTS RESERVED` | Footer (year kept current) | PRESENT |
| Footer nav links | Footer nav mirrors the redesigned anchor nav | MODIFIED FOR PRESENTATION |
| — (original has no compliance badges in a defined footer badge row) | Footer badge row: Equal Housing logo, Realtor pin, Chamber badge — all from the site's own existing imagery | MODIFIED FOR PRESENTATION |
| Cookie notice banner | Dropped | NOT APPLICABLE |
| GLVAR/MLS disclaimer attached to the listing-search embed | Dropped together with the embed | NOT APPLICABLE |

---

## Behavior & Platform Notes

1. **Navigation.** Original: multi-page site-builder nav (LISTINGS, LET'S MOVE, ABOUT US). Redesign: single-page anchor nav (HOME, BUY, SELL, ABOUT, SERVICES, CONTACT) with a persistent `CALL MARCI (206) 919-6886` sticky CTA and a mobile hamburger. All original nav destinations still have a home in the page (see section 1 note).
2. **Search behavior.** The original embeds a live GLVAR/MLS listing search (iframe via the site builder). The static redesign preserves the entire field UI — Location (43 entries), Type, Sort By, Bedrooms, Baths, Min/Max Price — but performs no fake search: submission validates and routes the visitor to Marci via a mailto/tel handoff. No mocked results.
3. **reCAPTCHA.** The original form relies on Google reCAPTCHA, which requires Google scripts and a site secret tied to the original domain. The redesign uses client-side validation (required Name, valid Email, etc.) with mailto delivery — no third-party form service, no reCAPTCHA. NOT APPLICABLE.
4. **Cookie banner.** The banner on the original is injected by the GoDaddy site-builder platform. The static rebuild sets no non-essential cookies, so no banner is shown. NOT APPLICABLE.
5. **Map.** The redesign replaces the embedded map with the full address block plus a direct `GET DIRECTIONS` Google Maps link, avoiding an iframe while retaining wayfinding.
6. **GLVAR disclaimer.** The original listing search carries the Greater Las Vegas Association of REALTORS® MLS disclaimer. Because the redesign embeds no MLS feed and displays no listing data, the disclaimer is not required and is not carried over. Should a live IDX feed be added later, the GLVAR/MLS rules and disclaimer must be reinstated with it.

---

## Factual Integrity

- **No fabricated statistics.** Every number in the redesign traces to the business's own published claims: "Nearly 3 Decades" (hero panel), "nearly 90 clients in 2021" and "28.5 million in sales" (GET IT SOLD quote), "Top Residential Sales Last 5 Years" (section H4, verbatim).
- **Wording precision flag.** The stats card reads `90+ Clients Helped in 2021` per the assignment brief; the source sentence says *nearly 90*. To stay strictly verbatim, prefer "Nearly 90 Clients Helped in 2021". Flagged for the build; not a factual invention either way, but "nearly 90" is the defensible phrasing.
- **No invented testimonials, awards, designations, or team members.** The original homepage contains none, and none were added. Compliance/membership badges shown in the footer (Equal Housing, Realtor pin, Chamber) are the site's own existing images.
- **No invented listings.** Gallery photos are the business's own listing photography from the source site; addresses in filenames belong to the real photographed listings. The search form shows zero results rather than fake ones.
- **Address reproduced exactly.** `3190 HW-160, Suite F` matches the original site character-for-character. "HW-160" is likely intended as "HWY-160" (State Route 160); this is flagged for the business owner to confirm rather than silently corrected.
- **Copyright year.** `© 2026` is reproduced as on the live site; implementers should render the year dynamically so it stays current.

## Final QA reconciliation — 2026-09-06

| Check | Result | Evidence |
| --- | --- | --- |
| Meaningful source homepage copy mapped | PASS | Branding, hero, performance claims, seller/buyer copy, search controls, services, contact facts, hours, CTA, and gallery are present above. |
| Search wording truthful | PASS | Static result panel says “Your search preferences are ready” and offers inquiry handoff language; it does not claim live MLS results. |
| Single-page structure | PASS | One `index.html`; navigation uses in-page anchors. |
| Original page imagery represented | PASS | Seven gallery images plus source branding, portrait, pond, and footer badges are listed in `docs/asset-inventory.md`. |
