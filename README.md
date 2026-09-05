# Marci Metzger Home Page Redesign

Single-page homepage redesign for Marci Metzger / The Ridge Realty Group, created for the Junior Web Builder hiring assignment.

## Overview

The page preserves the meaningful content and original imagery from the source homepage while improving hierarchy, responsive layout, accessibility, and buyer/seller calls to action.

## Stack

- HTML5
- CSS3
- Vanilla JavaScript
- Local JPG, PNG, and WebP assets
- GitHub Pages deployment

## Design approach

The visual direction is restrained desert-modern editorial: warm neutrals, deep green, champagne accents, local photography, generous spacing, and clear real-estate journeys for buying, selling, searching, and contacting Marci.

## Local development

From the project root, run:

```text
python -m http.server 8000
```

Then open `http://127.0.0.1:8000/`.

## Public deployment

Public website: https://sephy57.github.io/marci-metzger-home-redesign/

GitHub repository: https://github.com/Sephy57/marci-metzger-home-redesign

## Assets and source

Original business imagery is downloaded locally from the source site’s GoDaddy media CDN. See `docs/asset-inventory.md` for source URLs, local paths, dimensions, and usage.

## Testing

Local QA covers asset responses, anchor integrity, console output, search validation, inquiry handoff, responsive breakpoints, keyboard-accessible gallery/lightbox behavior, focus restoration, and reduced-motion handling.

## Limitation

The property search is an inquiry workflow that prepares a message for Marci; it is not a live MLS/IDX integration and does not fabricate listing results.
