import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { PDFDocument } from 'pdf-lib';

// Link previews, crawler files, the 404 page and PDF document properties. Viewport independent
// except the 404 layout, so most checks run in one project only.
const once = (name: string) => test.skip(name !== 'laptop-1024', 'viewport independent, runs once');

for (const path of ['/', '/id/']) {
  test(`${path} has Open Graph and Twitter card tags with a working 1200 x 630 image`, async ({ page, request }, info) => {
    once(info.project.name);
    await page.goto(path);
    const meta = (sel: string) => page.locator(sel).getAttribute('content');
    const image = await meta('meta[property="og:image"]');
    expect(image).toBe('https://rfiki17.github.io/og.jpg');
    expect(await meta('meta[property="og:image:width"]')).toBe('1200');
    expect(await meta('meta[property="og:image:height"]')).toBe('630');
    expect(await meta('meta[property="og:image:alt"]')).toMatch(/Rifki Hidayatullah/);
    expect(await meta('meta[name="twitter:card"]')).toBe('summary_large_image');
    expect(await meta('meta[property="og:url"]')).toBe(`https://rfiki17.github.io${path}`);
    const res = await request.get('/og.jpg');
    expect(res.status()).toBe(200);
    expect(res.headers()['content-type']).toContain('image/jpeg');
    const body = await res.body();
    expect(body.length).toBeGreaterThan(20_000);
    expect(body.length).toBeLessThan(300_000); // WhatsApp drops previews from large images
  });
}

test('robots.txt allows crawling and points to the sitemap', async ({ request }, info) => {
  once(info.project.name);
  const res = await request.get('/robots.txt');
  expect(res.status()).toBe(200);
  const text = await res.text();
  expect(text).toContain('Allow: /');
  expect(text).toContain('Sitemap: https://rfiki17.github.io/sitemap.xml');
});

test('sitemap.xml lists both languages with hreflang alternates', async ({ request }, info) => {
  once(info.project.name);
  const res = await request.get('/sitemap.xml');
  expect(res.status()).toBe(200);
  const xml = await res.text();
  expect(xml).toContain('<loc>https://rfiki17.github.io/</loc>');
  expect(xml).toContain('<loc>https://rfiki17.github.io/id/</loc>');
  expect(xml.match(/hreflang="id"/g)).toHaveLength(2);
});

test('unknown paths show the 404 page with links back to the CV', async ({ page }) => {
  const res = await page.goto('/this-page-does-not-exist');
  expect(res!.status()).toBe(404);
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute('content', 'noindex');
  await expect(page.locator('link[rel="canonical"]')).toHaveCount(0);
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('This page does not exist.');
  await expect(page.getByRole('link', { name: 'Go to the CV' })).toHaveAttribute('href', '/');
  await expect(page.getByRole('link', { name: 'Buka CV (Bahasa Indonesia)' })).toHaveAttribute('href', '/id/');
  const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
  expect(overflow).toBeLessThanOrEqual(0);
  const axe = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa', 'wcag22aa']).analyze();
  expect(axe.violations.map((v) => v.id)).toEqual([]);
});

for (const f of ['QA-EN', 'QA-ID', 'GRC-EN', 'GRC-ID']) {
  test(`PDF ${f} carries author, title, subject and keywords`, async ({ request }, info) => {
    once(info.project.name);
    const res = await request.get(`/cv/Rifki-Hidayatullah-CV-${f}.pdf`);
    const doc = await PDFDocument.load(await res.body(), { updateMetadata: false });
    expect(doc.getAuthor()).toBe('Rifki Hidayatullah');
    expect(doc.getTitle()).toMatch(/^Rifki Hidayatullah, CV /);
    expect(doc.getSubject()).toMatch(/^Curriculum vitae, /);
    expect(doc.getKeywords()).toMatch(f.startsWith('QA') ? /Playwright/ : /COBIT 2019/);
  });
}

test('favicon and touch icon are served', async ({ request }, info) => {
  once(info.project.name);
  expect((await request.get('/favicon.svg')).status()).toBe(200);
  const touch = await request.get('/apple-touch-icon.png');
  expect(touch.status()).toBe(200);
  expect(touch.headers()['content-type']).toContain('image/png');
});

test('Google Search Console verification file is served unchanged', async ({ request }, info) => {
  once(info.project.name);
  // Google re-checks this file. Removing it drops the Search Console verification.
  const res = await request.get('/googlec319535b3240bed4.html');
  expect(res.status()).toBe(200);
  expect((await res.text()).trim()).toBe('google-site-verification: googlec319535b3240bed4.html');
});
