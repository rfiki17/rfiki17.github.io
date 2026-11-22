# rfiki17.github.io

Personal CV site of Rifki Hidayatullah, QA / Software Test Engineer. English at `/`, Indonesian at `/id/`.

## Stack

- [Astro](https://astro.build) static site, zero client framework. The only script is the theme switch.
- IBM Plex Sans, Serif and Mono, self-hosted through Fontsource (no third-party font requests).
- Light and dark theme. The OS setting decides until the visitor presses the theme button, then the choice is kept in `localStorage`. Print stylesheet for a one-column PDF.
- Photos in `public/img/` are resized WebP files with metadata stripped.

## Edit the content

All text lives in `src/data/cv.ts`. Every string has an `en` and an `id` version. Layout is in `src/components/Cv.astro`, styles in `src/styles/global.css`.

## Run locally

```bash
npm install
npx playwright install chromium firefox webkit
npm run dev           # dev server, the PDF links return 404 in dev mode
npm run build         # site + PDFs in dist/, fails if a PDF is over 2 pages
npm run build:site    # site only, no PDFs
```

## CV PDF

The Download CV button opens a two-step dialog: 1. language (English or Bahasa Indonesia), 2. CV type (QA / Software Test Engineer or IT Governance, Risk and Compliance). It downloads one of four files, `dist/cv/Rifki-Hidayatullah-CV-{QA|GRC}-{EN|ID}.pdf`. Without JavaScript the footer shows the four links.

`scripts/build-pdf.mjs` prints them from `/cv/print/{qa|grc}/` and `/id/cv/print/{qa|grc}/` (noindex) in an ATS-friendly layout: one column, standard section names, dates inline, black on white, real text. QA content: short summary, core skills, 8 key projects. GRC content: GRC summary, core competencies, the 5 GRC case studies with bullets, then experience with 4 relevant projects. Both live in `src/data/cv-print.ts`. The build fails when a PDF goes over 2 pages.

## Tests

`npm test` builds the site and runs Playwright on six profiles (320 px phone, Pixel 7, iPhone 14, iPad Mini portrait, 1024 px laptop, 1440 px Firefox desktop). Checks per page:

- no horizontal scroll
- body text at least 16 px
- every control at least 44 x 44 px
- language attribute, hreflang links and the language switch
- section nav only on wide screens
- print layout hides screen-only controls
- no serious or critical axe violations (WCAG 2.2 A/AA), contrast in both themes, theme switch and its saved choice
- achievement photos load with alt text, GRC focus and ISACA membership in the header
- the 4 PDFs are served and have at most 2 pages, the print pages use the ATS section order with no grid or columns, the business phone appears on the site and in the PDFs (`tests/pdf.spec.ts`)
- the download dialog preselects the page language, every language and CV type pair points to an existing file, the download starts, Escape and Cancel close it, it fits the viewport and passes axe (`tests/download-dialog.spec.ts`)

Playwright is pinned to 1.65.1. With 1.60 on Node 26, worker processes hung for 300 s after the Firefox tests.

## Deploy

`.github/workflows/deploy.yml` runs the tests on every push and pull request and deploys to GitHub Pages from `main` only when they pass. In the repository settings, set Pages source to **GitHub Actions**.
