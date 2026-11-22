import { test, expect } from '@playwright/test';

// The 4 PDFs (QA and GRC, EN and ID) are built by scripts/build-pdf.mjs during "npm run build".
// These checks do not depend on the viewport, so they run in one project only.
test.beforeEach(({}, testInfo) => {
  test.skip(testInfo.project.name !== 'laptop-1024', 'viewport independent, runs once');
});

const files = ['QA-EN', 'QA-ID', 'GRC-EN', 'GRC-ID'];

for (const f of files) {
  test(`PDF ${f} is served and has at most 2 pages`, async ({ request }) => {
    const res = await request.get(`/cv/Rifki-Hidayatullah-CV-${f}.pdf`);
    expect(res.status()).toBe(200);
    expect(res.headers()['content-type']).toContain('application/pdf');
    const body = (await res.body()).toString('latin1');
    expect(body.startsWith('%PDF-')).toBe(true);
    const pages = (body.match(/\/Type\s*\/Page[^s]/g) ?? []).length;
    expect(pages).toBeGreaterThanOrEqual(1);
    expect(pages).toBeLessThanOrEqual(2);
  });
}

// PDF text streams are compressed, so the content is checked on the source pages the PDFs are printed from.
const routes: Record<string, { first: string[]; headline: string }> = {
  '/cv/print/qa/': { first: ['Professional Summary', 'Core Skills', 'Professional Experience', 'Education', 'Awards and Achievements'], headline: 'QA / Software Test Engineer |' },
  '/id/cv/print/qa/': { first: ['Ringkasan Profesional', 'Keahlian Utama', 'Pengalaman Kerja', 'Pendidikan', 'Penghargaan dan Prestasi'], headline: 'QA / Software Test Engineer |' },
  '/cv/print/grc/': { first: ['Professional Summary', 'Core Competencies', 'IT GRC Projects and Case Studies', 'Professional Experience', 'Education', 'Awards and Achievements'], headline: 'IT Governance, Risk and Compliance (GRC) |' },
  '/id/cv/print/grc/': { first: ['Ringkasan Profesional', 'Kompetensi Utama', 'Proyek dan Studi Kasus IT GRC', 'Pengalaman Kerja', 'Pendidikan', 'Penghargaan dan Prestasi'], headline: 'IT Governance, Risk and Compliance (GRC) |' },
};

for (const [route, spec] of Object.entries(routes)) {
  test(`print page ${route} uses ATS layout and is not indexed`, async ({ page }) => {
    await page.goto(route);
    await expect(page.locator('meta[name="robots"]')).toHaveAttribute('content', 'noindex');
    await expect(page.locator('.headline')).toContainText(spec.headline);
    await expect(page.locator('.contact')).toContainText('+62 858-1771-1143 (WhatsApp)');
    await expect(page.locator('.contact')).toContainText('rifkihidayatullah20@gmail.com');
    // Standard section names, in this order.
    const h2 = (await page.locator('h2').allInnerTexts()).map((s) => s.toLowerCase());
    const positions = spec.first.map((name) => h2.indexOf(name.toLowerCase()));
    expect(positions.every((p) => p >= 0), `missing headings in ${h2.join(', ')}`).toBe(true);
    expect([...positions].sort((a, b) => a - b)).toEqual(positions);
    // One column: no grid, float or multi-column layout anywhere.
    const multi = await page.evaluate(() => [...document.querySelectorAll('body *')].filter((el) => {
      const s = getComputedStyle(el);
      return s.display.includes('grid') || (s.columnCount !== 'auto' && s.columnCount !== '1') || s.float !== 'none';
    }).length);
    expect(multi).toBe(0);
  });
}

test('GRC CV lists all 5 case studies with their bullets', async ({ page }) => {
  await page.goto('/cv/print/grc/');
  await expect(page.locator('.entry')).toHaveCount(5);
  await expect(page.locator('.entry').first()).toContainText('ISO/IEC 27005');
  await expect(page.locator('body')).toContainText('state-owned enterprise (BUMN)');
});

test('website shows the business phone with a WhatsApp link', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('#contact a[href^="https://wa.me/6285817711143"]')).toHaveText('+62 858-1771-1143');
});
