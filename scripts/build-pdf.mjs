// Builds the ATS-friendly CV PDFs from the print pages in dist/:
//   dist/cv/Rifki-Hidayatullah-CV-{QA|GRC}-{EN|ID}.pdf (4 files)
// Fails when a PDF has more than MAX_PAGES pages.
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { chromium } from '@playwright/test';
import { PDFDocument } from 'pdf-lib';

const MAX_PAGES = 2;
const root = path.resolve('dist');

if (!fs.existsSync(path.join(root, 'cv', 'print', 'qa', 'index.html'))) {
  console.error('dist/cv/print/qa/index.html not found. Run "astro build" first.');
  process.exit(1);
}

const types = { '.html': 'text/html', '.css': 'text/css', '.js': 'text/javascript', '.woff2': 'font/woff2', '.woff': 'font/woff', '.svg': 'image/svg+xml', '.webp': 'image/webp' };
const server = http.createServer((req, res) => {
  let p = decodeURIComponent(new URL(req.url, 'http://x').pathname);
  if (p.endsWith('/')) p += 'index.html';
  const file = path.join(root, p);
  if (!file.startsWith(root) || !fs.existsSync(file)) { res.writeHead(404); return res.end(); }
  res.writeHead(200, { 'content-type': types[path.extname(file)] ?? 'application/octet-stream' });
  fs.createReadStream(file).pipe(res);
});
await new Promise((r) => server.listen(0, '127.0.0.1', r));
const base = `http://127.0.0.1:${server.address().port}`;

const outDir = path.join(root, 'cv');
fs.mkdirSync(outDir, { recursive: true });

const browser = await chromium.launch();
let failed = false;
try {
  const jobs = [];
  for (const track of ['qa', 'grc']) for (const [lang, prefix] of [['EN', ''], ['ID', '/id']]) jobs.push([track, lang, `${prefix}/cv/print/${track}/`]);
  for (const [track, lang, route] of jobs) {
    const page = await browser.newPage();
    await page.goto(base + route, { waitUntil: 'load' });
    await page.evaluate(() => document.fonts.ready);
    const name = `Rifki-Hidayatullah-CV-${track.toUpperCase()}-${lang}.pdf`;
    const file = path.join(outDir, name);
    const raw = await page.pdf({ preferCSSPageSize: true, printBackground: false, tagged: true, outline: false });
    // Document properties read by ATS parsers and file managers. Saved without object streams so the
    // page objects stay readable for the page count below and in tests/pdf.spec.ts.
    const doc = await PDFDocument.load(raw, { updateMetadata: false });
    const isId = lang === 'ID';
    const trackName = track === 'qa'
      ? 'QA / Software Test Engineer'
      : (isId ? 'Tata Kelola, Risiko, dan Kepatuhan TI (GRC)' : 'IT Governance, Risk and Compliance (GRC)');
    doc.setTitle(`Rifki Hidayatullah, CV ${trackName}`, { showInWindowTitleBar: true });
    doc.setAuthor('Rifki Hidayatullah');
    doc.setSubject(`Curriculum vitae, ${trackName}`);
    doc.setKeywords(track === 'qa'
      ? ['QA', 'Software Test Engineer', 'Playwright', 'API testing', 'Performance testing', 'Garuda Indonesia Group']
      : ['IT GRC', 'IT audit', 'COBIT 2019', 'ISO/IEC 27001', 'ISO/IEC 27005', 'Risk management', 'ISACA']);
    doc.setCreator('rfiki17.github.io');
    doc.setLanguage(isId ? 'id-ID' : 'en-US');
    fs.writeFileSync(file, await doc.save({ useObjectStreams: false }));
    const pages = doc.getPageCount();
    const kb = Math.round(fs.statSync(file).size / 1024);
    console.log(`${name}: ${pages} page(s), ${kb} KB`);
    if (pages > MAX_PAGES) { console.error(`  over the ${MAX_PAGES}-page limit`); failed = true; }
    await page.close();
  }
} finally {
  await browser.close();
  server.close();
}
if (failed) process.exit(1);
