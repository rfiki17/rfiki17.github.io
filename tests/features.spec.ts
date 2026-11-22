import { test, expect } from '@playwright/test';

// Share dialog, view switch, featured projects, photo viewer and the vCard.

test.describe('share dialog', () => {
  test('opens from the header, builds share links for this page and returns focus on close', async ({ page }) => {
    await page.goto('/');
    const opener = page.locator('header.top .share-open');
    await opener.click();
    const dlg = page.locator('#share-dialog');
    await expect(dlg).toBeVisible();
    await expect(dlg.getByRole('heading', { name: 'Share to' })).toBeVisible();
    const url = encodeURIComponent('https://rfiki17.github.io/');
    await expect(dlg.locator('a[data-target="whatsapp"]')).toHaveAttribute('href', new RegExp(`^https://wa\\.me/\\?text=.*${url}$`));
    await expect(dlg.locator('a[data-target="linkedin"]')).toHaveAttribute('href', `https://www.linkedin.com/sharing/share-offsite/?url=${url}`);
    await expect(dlg.locator('a[data-target="facebook"]')).toHaveAttribute('href', `https://www.facebook.com/sharer/sharer.php?u=${url}`);
    await expect(dlg.locator('a[data-target="telegram"]')).toHaveAttribute('href', new RegExp(`^https://t\\.me/share/url\\?url=${url}`));
    await expect(dlg.locator('a[data-target="x"]')).toHaveAttribute('href', new RegExp(`^https://x\\.com/intent/tweet\\?text=.*&url=${url}$`));
    await expect(dlg.locator('a[data-target="email"]')).toHaveAttribute('href', new RegExp(`^mailto:\\?subject=.*&body=${url}$`));
    await expect(dlg.locator('input')).toHaveValue('https://rfiki17.github.io/');
    await page.keyboard.press('Escape');
    await expect(dlg).toBeHidden();
    await expect(opener).toBeFocused();
  });

  test('shows a QR code on demand', async ({ page }) => {
    await page.goto('/id/');
    await page.locator('header.top .share-open').click();
    const dlg = page.locator('#share-dialog');
    await expect(dlg.getByRole('heading', { name: 'Bagikan ke' })).toBeVisible();
    const panel = dlg.locator('.share-qr-panel');
    await expect(panel).toBeHidden();
    const qrBtn = dlg.locator('[data-target="qr"]');
    await qrBtn.click();
    await expect(panel).toBeVisible();
    await expect(qrBtn).toHaveAttribute('aria-pressed', 'true');
    await expect(panel.locator('svg')).toBeVisible();
    await expect(dlg.locator('input')).toHaveValue('https://rfiki17.github.io/id/');
  });

  test('copy link puts the page address on the clipboard', async ({ page, context, browserName }) => {
    test.skip(browserName !== 'chromium', 'clipboard permissions are Chromium only in Playwright');
    await context.grantPermissions(['clipboard-read', 'clipboard-write']);
    await page.goto('/');
    await page.locator('header.top .share-open').click();
    const copy = page.locator('#share-dialog [data-target="copy"]');
    await copy.click();
    await expect(copy).toContainText('Copied');
    expect(await page.evaluate(() => navigator.clipboard.readText())).toBe('https://rfiki17.github.io/');
  });

  test('the shared link keeps the chosen view', async ({ page }) => {
    await page.goto('/');
    await page.locator('.view-opt', { hasText: 'IT GRC' }).click();
    await page.locator('header.top .share-open').click();
    await expect(page.locator('#share-dialog input')).toHaveValue('https://rfiki17.github.io/?view=grc');
  });

  test('is also offered in the compact bar and in Contact', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('#contact .share-open')).toHaveCount(1);
    await page.locator('#experience').scrollIntoViewIfNeeded();
    await page.locator('.minibar .share-open').click();
    await expect(page.locator('#share-dialog')).toBeVisible();
  });
});

test.describe('view switch', () => {
  const top = (page: import('@playwright/test').Page, id: string) =>
    page.locator(`#${id}`).evaluate((el) => el.getBoundingClientRect().top + window.scrollY);

  test('QA hides the governance case studies, All brings them back', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('.grc-case').first()).toBeVisible();
    await page.locator('.view-opt', { hasText: 'QA' }).click();
    await expect(page.locator('html')).toHaveAttribute('data-view', 'qa');
    await expect(page.locator('.grc-case')).toHaveCount(5);
    await expect(page.locator('.grc-case').first()).toBeHidden();
    await expect(page).toHaveURL(/\?view=qa$/);
    await page.locator('.view-opt', { hasText: 'All' }).click();
    await expect(page.locator('.grc-case').first()).toBeVisible();
    await expect(page).toHaveURL(/\/$/);
  });

  test('IT GRC puts research and case studies before projects, also in the section menu', async ({ page }) => {
    await page.goto('/');
    expect(await top(page, 'work')).toBeLessThan(await top(page, 'research'));
    await page.locator('.view-opt', { hasText: 'IT GRC' }).click();
    expect(await top(page, 'research')).toBeLessThan(await top(page, 'work'));
    // The section menus follow the same order (CSS order, so it holds while the menus are hidden).
    for (const menu of ['.rail', '#sections-sheet']) {
      const order = (id: string) => page.locator(`${menu} li.nav-${id}`).evaluate((li) => Number(getComputedStyle(li).order));
      expect(await order('research')).toBeLessThan(await order('work'));
    }
  });

  test('a ?view= link opens in that view and the choice is remembered', async ({ page }) => {
    await page.goto('/id/?view=grc');
    await expect(page.locator('html')).toHaveAttribute('data-view', 'grc');
    await expect(page.locator('.view-opt input[value="grc"]')).toBeChecked();
    await page.goto('/id/');
    await expect(page.locator('html')).toHaveAttribute('data-view', 'grc');
  });
});

test.describe('projects', () => {
  test('four featured projects are open, the other 13 sit behind a toggle', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('#work .featured .item.project')).toHaveCount(4);
    const more = page.locator('#work .more-projects');
    await expect(more.locator('summary')).toHaveText('Show 13 more projects');
    await expect(more.locator('.item.project')).toHaveCount(13);
    await expect(more.locator('.item.project').first()).toBeHidden();
    await more.locator('summary').click();
    await expect(more.locator('.item.project').first()).toBeVisible();
  });
});

test.describe('photo viewer', () => {
  test('opens a photo in the page, steps through photos and closes with Escape', async ({ page }) => {
    await page.goto('/');
    const first = page.locator('.shot a').first();
    await first.click();
    const lb = page.locator('#lightbox');
    await expect(lb).toBeVisible();
    const img = lb.locator('img');
    await expect(img).toHaveAttribute('src', /-1600\.webp$/);
    await expect.poll(() => img.evaluate((el: HTMLImageElement) => el.complete && el.naturalWidth > 0)).toBe(true);
    const firstSrc = await img.getAttribute('src');
    await expect(lb.locator('figcaption')).toContainText('(1/4)');
    await page.keyboard.press('ArrowRight');
    await expect(img).not.toHaveAttribute('src', firstSrc!);
    await expect(lb.locator('figcaption')).toContainText('(2/4)');
    await page.keyboard.press('Escape');
    await expect(lb).toBeHidden();
    await expect(first).toBeFocused();
  });
});

test('vCard carries name, title, phone, email and site', async ({ request }, info) => {
  test.skip(info.project.name !== 'laptop-1024', 'viewport independent, runs once');
  const res = await request.get('/rifki-hidayatullah.vcf');
  expect(res.status()).toBe(200);
  expect(res.headers()['content-type']).toContain('text/vcard');
  const text = await res.text();
  expect(text.startsWith('BEGIN:VCARD\r\nVERSION:3.0\r\n')).toBe(true);
  expect(text).toContain('FN:Rifki Hidayatullah\r\n');
  expect(text).toContain('TITLE:QA / Software Test Engineer\r\n');
  expect(text).toContain('TEL;TYPE=CELL,VOICE:+6285817711143\r\n');
  expect(text).toContain('EMAIL;TYPE=INTERNET:rifkihidayatullah20@gmail.com\r\n');
  expect(text).toContain('URL:https://rfiki17.github.io/\r\n');
  expect(text.trimEnd().endsWith('END:VCARD')).toBe(true);
});
