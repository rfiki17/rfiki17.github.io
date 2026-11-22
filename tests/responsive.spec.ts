import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

const pages = [
  { path: '/', lang: 'en', other: '/id/', otherLabel: 'Bahasa Indonesia' },
  { path: '/id/', lang: 'id', other: '/', otherLabel: 'English' },
];

for (const p of pages) {
  test.describe(`page ${p.path}`, () => {
    test.beforeEach(async ({ page }) => {
      await page.goto(p.path);
    });

    test('has correct language, title and hreflang links', async ({ page }) => {
      await expect(page.locator('html')).toHaveAttribute('lang', p.lang);
      await expect(page.getByRole('heading', { level: 1 })).toHaveText('Rifki Hidayatullah');
      await expect(page.locator('link[rel="alternate"][hreflang="en"]')).toHaveCount(1);
      await expect(page.locator('link[rel="alternate"][hreflang="id"]')).toHaveCount(1);
    });

    test('has no horizontal scroll', async ({ page }) => {
      const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
      expect(overflow, 'page is wider than the viewport').toBeLessThanOrEqual(0);
    });

    test('body text is at least 16 px', async ({ page }) => {
      const size = await page.locator('.lead').first().evaluate((el) => parseFloat(getComputedStyle(el).fontSize));
      expect(size).toBeGreaterThanOrEqual(16);
    });

    test('every control is at least 44 x 44 px', async ({ page }) => {
      const taps = page.locator('.tap:visible');
      const count = await taps.count();
      expect(count).toBeGreaterThan(0);
      for (let i = 0; i < count; i++) {
        const box = await taps.nth(i).boundingBox();
        const label = await taps.nth(i).innerText();
        expect(box, label).not.toBeNull();
        // 0.01 px tolerance: Firefox reports subpixel values such as 43.99998 for a 44 px box.
        expect(box!.height, `height of "${label}"`).toBeGreaterThanOrEqual(44 - 0.01);
        expect(box!.width, `width of "${label}"`).toBeGreaterThanOrEqual(44 - 0.01);
      }
    });

    test('lists all 17 projects', async ({ page }) => {
      await expect(page.locator('#projects .row')).toHaveCount(17);
    });

    test('lists 5 achievements and 5 GRC case studies', async ({ page }) => {
      await expect(page.locator('#achievements .awards > li')).toHaveCount(5);
      await expect(page.locator('#grc .row')).toHaveCount(5);
    });

    test('shows GRC focus and ISACA membership in the header', async ({ page }) => {
      await expect(page.locator('.aside .focus')).toContainText('GRC');
      await expect(page.locator('.aside .member')).toContainText('ISACA Indonesia Chapter');
    });

    test('achievement photos load, have alt text and fit the viewport', async ({ page }) => {
      const imgs = page.locator('#achievements .photos img');
      await expect(imgs).toHaveCount(3);
      const width = page.viewportSize()!.width;
      for (let i = 0; i < 3; i++) {
        const img = imgs.nth(i);
        await img.scrollIntoViewIfNeeded();
        await expect(img).toHaveAttribute('alt', /.{20,}/);
        await expect.poll(() => img.evaluate((el: HTMLImageElement) => el.complete && el.naturalWidth > 0)).toBe(true);
        const box = await img.boundingBox();
        expect(box!.x + box!.width).toBeLessThanOrEqual(width);
      }
    });

    test('theme button switches theme and remembers it', async ({ page }) => {
      const html = page.locator('html');
      const toggle = page.locator('.theme-toggle');
      await expect(html).not.toHaveAttribute('data-theme', /./);
      await toggle.click();
      await expect(html).toHaveAttribute('data-theme', 'dark');
      const bgDark = await page.evaluate(() => getComputedStyle(document.body).backgroundColor);
      await page.reload();
      await expect(html).toHaveAttribute('data-theme', 'dark');
      await page.locator('.theme-toggle').click();
      await expect(html).toHaveAttribute('data-theme', 'light');
      const bgLight = await page.evaluate(() => getComputedStyle(document.body).backgroundColor);
      expect(bgLight).not.toBe(bgDark);
    });

    test('language switch opens the other language', async ({ page }) => {
      await page.getByRole('link', { name: p.otherLabel }).click();
      await expect(page).toHaveURL(new RegExp(`${p.other.replace(/\//g, '\\/')}$`));
      await expect(page.locator('html')).not.toHaveAttribute('lang', p.lang);
    });

    test('section nav shows only on wide screens', async ({ page }) => {
      const width = page.viewportSize()!.width;
      const toc = page.locator('nav.toc');
      if (width >= 960) await expect(toc).toBeVisible();
      else await expect(toc).toBeHidden();
    });

    test('section nav marks the clicked and the scrolled-to section', async ({ page }) => {
      test.skip(page.viewportSize()!.width < 960, 'section nav is hidden below 960 px');
      const toc = page.locator('.toc');
      const skills = toc.locator('a[href="#skills"]');
      await skills.click();
      await expect(skills).toHaveAttribute('aria-current', 'location');
      await expect(toc.locator('a[aria-current]')).toHaveCount(1);
      // Scrolling again releases the clicked link and follows the section on screen.
      await page.mouse.move(700, 400);
      await page.evaluate(() => {
        const top = document.getElementById('experience')!.getBoundingClientRect().top + window.scrollY;
        window.scrollTo(0, top - 20);
      });
      await page.mouse.wheel(0, 1);
      await expect(toc.locator('a[href="#experience"]')).toHaveAttribute('aria-current', 'location');
      await expect(skills).not.toHaveAttribute('aria-current', /./);
    });

    test('print layout hides screen-only controls', async ({ page }) => {
      await page.emulateMedia({ media: 'print' });
      await expect(page.locator('.actions')).toBeHidden();
      await expect(page.locator('nav.toc')).toBeHidden();
      await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
    });

    test('has no serious accessibility violations (WCAG 2.2 A/AA)', async ({ page }) => {
      const result = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'])
        .analyze();
      const serious = result.violations.filter((v) => v.impact === 'serious' || v.impact === 'critical');
      expect(serious.map((v) => `${v.id}: ${v.nodes.length} node(s)`)).toEqual([]);
    });
  });
}

test('dark mode from the OS keeps text readable', async ({ page }) => {
  await page.emulateMedia({ colorScheme: 'dark' });
  await page.goto('/');
  const result = await new AxeBuilder({ page }).withRules(['color-contrast']).analyze();
  expect(result.violations.map((v) => v.id)).toEqual([]);
});

test('dark theme chosen with the button keeps text readable', async ({ page }) => {
  await page.emulateMedia({ colorScheme: 'light' });
  await page.goto('/');
  await page.locator('.theme-toggle').click();
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
  const result = await new AxeBuilder({ page }).withRules(['color-contrast']).analyze();
  expect(result.violations.map((v) => v.id)).toEqual([]);
});

test('light theme chosen with the button overrides a dark OS', async ({ page }) => {
  await page.emulateMedia({ colorScheme: 'dark' });
  await page.goto('/');
  await page.locator('.theme-toggle').click();
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'light');
  const bg = await page.evaluate(() => getComputedStyle(document.body).backgroundColor);
  expect(bg).toBe('rgb(245, 243, 238)');
});
