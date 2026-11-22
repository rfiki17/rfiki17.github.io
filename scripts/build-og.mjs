// Renders the link preview image public/og.jpg (1200 x 630) in the site style.
// Run it again after the portrait or the role changes:  node scripts/build-og.mjs
import fs from 'node:fs';
import path from 'node:path';
import { chromium } from '@playwright/test';

const font = fs.readFileSync(path.resolve('node_modules/@fontsource-variable/archivo/files/archivo-latin-wdth-normal.woff2')).toString('base64');
const photo = fs.readFileSync(path.resolve('public/img/portrait-1000.webp')).toString('base64');

const html = `<!doctype html><html><head><meta charset="utf-8"><style>
@font-face { font-family: Archivo; src: url(data:font/woff2;base64,${font}) format('woff2'); font-weight: 100 900; font-stretch: 62% 125%; }
* { margin: 0; box-sizing: border-box; }
body { width: 1200px; height: 630px; background: #FDFDFD; color: #0A0909; font-family: Archivo, sans-serif; display: grid; grid-template-columns: 1fr 380px; overflow: hidden; }
.text { padding: 64px 0 56px 72px; display: flex; flex-direction: column; }
.avail { display: inline-flex; align-items: center; gap: 12px; font-size: 22px; color: #5E3A30; font-weight: 500; }
.avail i { width: 12px; height: 12px; border-radius: 50%; background: #5E3A30; display: block; }
h1 { margin-top: 36px; font-size: 118px; line-height: 0.9; font-weight: 800; font-stretch: 80%; letter-spacing: -0.04em; }
.role { margin-top: 36px; font-size: 32px; font-weight: 600; font-stretch: 92%; letter-spacing: -0.01em; }
.focus { margin-top: 10px; font-size: 25px; color: #4a4745; }
.url { margin-top: auto; font-size: 24px; color: #5E3A30; font-weight: 600; letter-spacing: 0.01em; border-top: 2px solid #E2DEDB; padding-top: 20px; width: 92%; }
.photo { background: url(data:image/webp;base64,${photo}) center 30% / cover no-repeat; }
</style></head><body>
<div class="text">
  <div class="avail"><i></i>Open to IT GRC, IT audit and QA roles</div>
  <h1>Rifki<br>Hidayatullah</h1>
  <div class="role">QA / Software Test Engineer</div>
  <div class="focus">IT Governance, Risk and Compliance · ISACA Indonesia Chapter</div>
  <div class="url">rfiki17.github.io</div>
</div>
<div class="photo"></div>
</body></html>`;

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
await page.setContent(html, { waitUntil: 'load' });
await page.evaluate(() => document.fonts.ready);
await page.screenshot({ path: 'public/og.jpg', type: 'jpeg', quality: 88 });
await browser.close();
console.log('public/og.jpg', Math.round(fs.statSync('public/og.jpg').size / 1024), 'KB');
