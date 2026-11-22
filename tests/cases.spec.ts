import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

// Case study pages, the availability card and the certificate proof links.

const cases = [
  { slug: 'booking-middleware-regression', project: 'B2B Agent Platform' },
  { slug: 'procurement-approval-chain', project: 'E-Procurement' },
];

for (const c of cases) {
  for (const [lang, prefix] of [['en', ''], ['id', '/id']] as const) {
    test(`case study ${lang} ${c.slug} renders with language links and no serious a11y issues`, async ({ page }) => {
      const res = await page.goto(`${prefix}/case-studies/${c.slug}/`);
      expect(res!.status()).toBe(200);
      await expect(page.locator('html')).toHaveAttribute('lang', lang);
      await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
      await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', `https://rfiki17.github.io${prefix}/case-studies/${c.slug}/`);
      await expect(page.locator('link[rel="alternate"][hreflang="en"]')).toHaveAttribute('href', `https://rfiki17.github.io/case-studies/${c.slug}/`);
      await expect(page.locator('link[rel="alternate"][hreflang="id"]')).toHaveAttribute('href', `https://rfiki17.github.io/id/case-studies/${c.slug}/`);
      await expect(page.locator('.case-results .stat')).toHaveCount(4);
      const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
      expect(overflow).toBeLessThanOrEqual(0);
      const axe = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa', 'wcag22aa']).analyze();
      expect(axe.violations.filter((v) => v.impact === 'serious' || v.impact === 'critical').map((v) => v.id)).toEqual([]);
    });
  }

  test(`the ${c.project} project links to its case study and the case study shares its own URL`, async ({ page }) => {
    await page.goto('/');
    const link = page.locator('#work .featured .case-link').filter({ has: page.locator(`xpath=ancestor::article[.//h3[text()="${c.project}"]]`) });
    await expect(link).toHaveCount(1);
    await link.click();
    await expect(page).toHaveURL(new RegExp(`/case-studies/${c.slug}/$`));
    await page.locator('header.top .share-open').click();
    await expect(page.locator('#share-dialog input')).toHaveValue(`https://rfiki17.github.io/case-studies/${c.slug}/`);
  });
}

test('availability card lists roles, work mode, relocation and notice period, and the hero line links to it', async ({ page }) => {
  await page.goto('/');
  const card = page.locator('#availability');
  await expect(card.locator('dt')).toHaveText(['Roles', 'Work mode', 'Relocation', 'Notice period', 'Based in']);
  await expect(card).toContainText('IT GRC Analyst, IT Auditor, QA / Software Test Engineer, QA Automation / SDET');
  await expect(card).toContainText('1 month');
  await page.locator('.hero .avail a').click();
  await expect(page).toHaveURL(/#availability$/);
  await expect(card).toBeInViewport();
});

test('certificates show their numbers, the issuer check link and the certificate images', async ({ page }) => {
  await page.goto('/');
  const certs = page.locator('#certs .cert');
  await expect(certs.filter({ hasText: 'TC-092026-03K13IS-42191' })).toHaveCount(1);
  await expect(page.getByRole('link', { name: 'Verify with issuer' })).toHaveAttribute('href', 'https://thinkcloudly.com/cert-verification/?cert=TC-092026-03K13IS-42191');
  // Taalenta: two certificates in one gallery.
  const taalenta = certs.filter({ hasText: 'Taalenta' }).getByRole('link', { name: 'View certificates (2)' });
  await taalenta.click();
  const lb = page.locator('#lightbox');
  await expect(lb).toBeVisible();
  await expect(lb.locator('figcaption')).toContainText('(1/2)');
  await expect.poll(() => lb.locator('img').evaluate((el: HTMLImageElement) => el.complete && el.naturalWidth > 0)).toBe(true);
  await page.keyboard.press('ArrowRight');
  await expect(lb.locator('figcaption')).toContainText('(2/2)');
  await page.keyboard.press('Escape');
  // A single certificate has no previous or next buttons.
  await certs.filter({ hasText: 'TOEIC' }).getByRole('link', { name: 'View certificate' }).click();
  await expect(lb.locator('.lb-next')).toBeHidden();
  await expect(lb.locator('figcaption')).toContainText('date of birth hidden');
});
