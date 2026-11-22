# rfiki17.github.io

Personal CV site of Rifki Hidayatullah in the style of the first version (Archivo, warm brown accent, big type, ruled sections), with the current CV content. English at `/`, Indonesian at `/id/`.

Live at https://rfiki17.github.io since 22 Nov 2026 (v2). Earlier versions are kept as git tags: `v1-legacy` (the first single-file page) and `v1-astro` (the Astro site with a sidebar layout).

Extra v2 content (hero, about, what I do, research, leadership, training, prefilled contact messages) lives in `src/data/v2.ts`. The CV facts stay in `src/data/cv.ts` and the PDF content in `src/data/cv-print.ts`.

## Stack

- [Astro](https://astro.build) static site, zero client framework. Small inline scripts handle the theme switch, the reveal and typing animations (off with reduced motion), the section menu on the right from 1200 px, the back-to-top button below 1200 px, email copy and the download dialog.
- Archivo variable font (width and weight axes) self-hosted through Fontsource for the site, IBM Plex Sans for the ATS PDFs. No third-party font requests.
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
npx astro preview --port 4400   # view the built site with working PDF downloads
```

## CV PDF

The Download CV button opens a two-step dialog: 1. language (English or Bahasa Indonesia), 2. CV type (QA / Software Test Engineer or IT Governance, Risk and Compliance). It downloads one of four files, `dist/cv/Rifki-Hidayatullah-CV-{QA|GRC}-{EN|ID}.pdf`. Without JavaScript the footer shows the four links.

`scripts/build-pdf.mjs` prints them from `/cv/print/{qa|grc}/` and `/id/cv/print/{qa|grc}/` (noindex) in an ATS-friendly layout: one column, standard section names, dates inline, black on white, real text. QA content: short summary, core skills, 8 key projects. GRC content: GRC summary, core competencies, the 5 GRC case studies with bullets, then experience with 4 relevant projects. Both live in `src/data/cv-print.ts`. The build fails when a PDF goes over 2 pages.

## Tests

`npm test` builds the site, serves `dist/` on port 4401 with `scripts/serve.mjs` (so it never clashes with a running preview) and runs Playwright with reduced motion on six profiles (320 px phone, Pixel 7, iPhone 14, iPad Mini portrait, 1024 px laptop, 1440 px Firefox desktop). Checks per page:

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

## Link preview, crawlers and 404

- `public/og.jpg` (1200 x 630) is the image shown when the site is shared on LinkedIn, WhatsApp or email. It is rendered from the portrait and the site font by `node scripts/build-og.mjs`. Run it again after the portrait or the role changes.
- `public/robots.txt` and `public/sitemap.xml` are static. Update `lastmod` in the sitemap after a larger content change.
- `src/pages/404.astro` becomes `dist/404.html`, which GitHub Pages serves for unknown paths. It is not indexed.
- The PDFs carry author, title, subject, keywords and language (set with pdf-lib in `scripts/build-pdf.mjs`).
