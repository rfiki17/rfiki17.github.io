import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

// v2 layout checks. Most tests run with reduced motion (set in playwright.config.ts) so the
// reveal and typing animations do not hide content. One test checks the animated path.
const pages = [
  { path: '/', lang: 'en', other: '/id/', otherLabel: 'Baca dalam Bahasa Indonesia' },
  { path: '/id/', lang: 'id', other: '/', otherLabel: 'Read in English' },
];

for (const p of pages) {
  test.describe(`page ${p.path}`, () => {
    test.beforeEach(async ({ page }) => {
      await page.goto(p.path);
    });

    test('has correct language, name and hreflang links', async ({ page }) => {
      await expect(page.locator('html')).toHaveAttribute('lang', p.lang);
      await expect(page.getByRole('heading', { level: 1 })).toHaveText(/Rifki\s*Hidayatullah/);
      await expect(page.locator('link[rel="alternate"][hreflang="en"]')).toHaveCount(1);
      await expect(page.locator('link[rel="alternate"][hreflang="id"]')).toHaveCount(1);
    });

    test('has no horizontal scroll', async ({ page }) => {
      const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
      expect(overflow, 'page is wider than the viewport').toBeLessThanOrEqual(0);
    });

    test('body text is at least 16 px', async ({ page }) => {
      for (const sel of ['.intro', '#about .cols p', '#work .item p']) {
        const size = await page.locator(sel).first().evaluate((el) => parseFloat(getComputedStyle(el).fontSize));
        expect(size, sel).toBeGreaterThanOrEqual(16);
      }
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

    test('lists 17 projects, 5 GRC case studies, 2 research items, 2 leadership roles and 4 achievements', async ({ page }) => {
      await expect(page.locator('#work .item.project')).toHaveCount(17);
      await expect(page.locator('#research .grc-case')).toHaveCount(5);
      await expect(page.locator('#research .item:not(.grc-case)')).toHaveCount(2);
      await expect(page.locator('#leadership .item')).toHaveCount(2);
      await expect(page.locator('#achievements .item.award')).toHaveCount(4);
    });

    test('hero shows role, GRC focus and ISACA membership', async ({ page }) => {
      const tags = page.locator('.hero-tags');
      await expect(tags).toContainText('QA / Software Test Engineer');
      await expect(tags).toContainText('GRC');
      await expect(tags).toContainText('ISACA Indonesia Chapter');
    });

    test('achievement photos load, have alt text and fit the viewport', async ({ page }) => {
      const imgs = page.locator('#achievements .shot img');
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

    test('contact links carry a prefilled message and the business phone', async ({ page }) => {
      await expect(page.locator('#contact a[href^="mailto:rifkihidayatullah20@gmail.com?subject="]')).toHaveCount(1);
      const wa = page.locator('#contact a[href^="https://wa.me/6285817711143?text="]');
      await expect(wa).toHaveText('+62 858-1771-1143');
    });

    test('language switch opens the other language', async ({ page }) => {
      await page.getByRole('link', { name: p.otherLabel }).click();
      await expect(page).toHaveURL(new RegExp(`${p.other.replace(/\//g, '\\/')}$`));
      await expect(page.locator('html')).not.toHaveAttribute('lang', p.lang);
    });

    test('main nav shows only on wide screens', async ({ page }) => {
      const width = page.viewportSize()!.width;
      const nav = page.locator('header.top nav');
      if (width >= 900) await expect(nav).toBeVisible();
      else await expect(nav).toBeHidden();
    });

    test('section menu on the right shows from 1200 px and marks the active section', async ({ page }) => {
      const width = page.viewportSize()!.width;
      const rail = page.locator('nav.rail');
      if (width < 1200) { await expect(rail).toBeHidden(); return; }
      await expect(rail).toBeVisible();
      await expect(rail.locator('a')).toHaveCount(10);
      // The menu never covers the page column.
      const railBox = (await rail.boundingBox())!;
      const mainBox = (await page.locator('main').boundingBox())!;
      expect(mainBox.x + mainBox.width).toBeLessThanOrEqual(railBox.x);
      const skills = rail.locator('a[href="#skills"]');
      await skills.click();
      await expect(skills).toHaveAttribute('aria-current', 'location');
      await expect(rail.locator('a[aria-current]')).toHaveCount(1);
      // Scrolling again releases the clicked link and follows the section on screen.
      await page.mouse.move(400, 400);
      await page.evaluate(() => {
        const top = document.getElementById('experience')!.getBoundingClientRect().top + window.scrollY;
        window.scrollTo(0, top - 20);
      });
      await page.mouse.wheel(0, 1);
      await expect(rail.locator('a[href="#experience"]')).toHaveAttribute('aria-current', 'location');
      await expect(skills).not.toHaveAttribute('aria-current', /./);
    });

    test('back-to-top button appears after the hero below 1200 px and returns to the top', async ({ page }) => {
      const width = page.viewportSize()!.width;
      const btn = page.locator('.to-top');
      if (width >= 1200) { await expect(btn).toBeHidden(); return; }
      await expect(btn).toBeHidden();
      await page.locator('#education').scrollIntoViewIfNeeded();
      await expect(btn).toBeVisible();
      const box = (await btn.boundingBox())!;
      expect(box.x + box.width).toBeLessThanOrEqual(width);
      await btn.click();
      await expect.poll(() => page.evaluate(() => window.scrollY)).toBeLessThan(5);
      await expect(page.locator('header.top .brand')).toBeFocused();
      await expect(btn).toBeHidden();
    });

    test('theme button switches theme and remembers it', async ({ page }) => {
      const html = page.locator('html');
      await expect(html).not.toHaveAttribute('data-theme', /./);
      await page.locator('.theme-toggle').click();
      await expect(html).toHaveAttribute('data-theme', 'dark');
      const bgDark = await page.evaluate(() => getComputedStyle(document.body).backgroundColor);
      await page.reload();
      await expect(html).toHaveAttribute('data-theme', 'dark');
      await page.locator('.theme-toggle').click();
      await expect(html).toHaveAttribute('data-theme', 'light');
      const bgLight = await page.evaluate(() => getComputedStyle(document.body).backgroundColor);
      expect(bgLight).not.toBe(bgDark);
    });

    test('print layout hides screen-only controls', async ({ page }) => {
      await page.emulateMedia({ media: 'print' });
      await expect(page.locator('.tools')).toBeHidden();
      await expect(page.locator('.rail')).toBeHidden();
      await expect(page.locator('.to-top')).toBeHidden();
      await expect(page.locator('.shots').first()).toBeHidden();
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

test('dark theme keeps text readable', async ({ page }) => {
  await page.emulateMedia({ colorScheme: 'dark' });
  await page.goto('/');
  const result = await new AxeBuilder({ page }).withRules(['color-contrast']).analyze();
  expect(result.violations.map((v) => `${v.id}: ${v.nodes.length}`)).toEqual([]);
});

test('light theme chosen with the button overrides a dark OS', async ({ page }) => {
  await page.emulateMedia({ colorScheme: 'dark' });
  await page.goto('/');
  await page.locator('.theme-toggle').click();
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'light');
  const bg = await page.evaluate(() => getComputedStyle(document.body).backgroundColor);
  expect(bg).toBe('rgb(253, 253, 253)');
});

test.describe('with motion', () => {
  test.use({ reducedMotion: 'no-preference' });

  test('sections fade in when scrolled into view and the typing line changes', async ({ page }) => {
    await page.goto('/');
    const contact = page.locator('#contact .reveal').first();
    await contact.scrollIntoViewIfNeeded();
    await expect.poll(() => contact.evaluate((el) => getComputedStyle(el).opacity)).toBe('1');
    const typed = page.locator('#typedText');
    const first = await typed.innerText();
    await expect.poll(() => typed.innerText(), { timeout: 8000 }).not.toBe(first);
  });
});
