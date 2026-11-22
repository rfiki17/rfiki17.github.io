import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

// Download CV dialog: step 1 language, step 2 CV type. Runs on every device profile.
for (const page0 of [{ path: '/', lang: 'EN' }, { path: '/id/', lang: 'ID' }]) {
  test.describe(`download dialog on ${page0.path}`, () => {
    test.beforeEach(async ({ page }) => {
      await page.goto(page0.path);
      await page.locator('header.top .cv-open').click();
    });

    test('opens as a modal with the page language preselected', async ({ page }) => {
      const dlg = page.getByRole('dialog');
      await expect(dlg).toBeVisible();
      await expect(dlg.locator(`input[name="cv-lang"][value="${page0.lang.toLowerCase()}"]`)).toBeChecked();
      await expect(dlg.locator('input[name="cv-track"][value="qa"]')).toBeChecked();
      await expect(dlg.locator('.cvd-download')).toHaveAttribute('href', `/cv/Rifki-Hidayatullah-CV-QA-${page0.lang}.pdf`);
    });

    test('each choice of language and CV type points to the right file', async ({ page, request }) => {
      const dlg = page.getByRole('dialog');
      for (const lang of ['en', 'id']) {
        for (const track of ['qa', 'grc']) {
          await dlg.locator(`label:has(input[name="cv-lang"][value="${lang}"])`).click();
          await dlg.locator(`label:has(input[name="cv-track"][value="${track}"])`).click();
          const file = `Rifki-Hidayatullah-CV-${track.toUpperCase()}-${lang.toUpperCase()}.pdf`;
          await expect(dlg.locator('.cvd-download')).toHaveAttribute('href', `/cv/${file}`);
          await expect(dlg.locator('.cvd-name')).toHaveText(file);
          expect((await request.get(`/cv/${file}`)).status()).toBe(200);
        }
      }
    });

    test('download link starts a PDF download and closes the dialog', async ({ page }) => {
      const dlg = page.getByRole('dialog');
      await dlg.locator('label:has(input[name="cv-track"][value="grc"])').click();
      const [download] = await Promise.all([page.waitForEvent('download'), dlg.locator('.cvd-download').click()]);
      expect(download.suggestedFilename()).toBe(`Rifki-Hidayatullah-CV-GRC-${page0.lang}.pdf`);
      await expect(dlg).toBeHidden();
    });

    test('Escape and Cancel close it and return focus to the button', async ({ page }) => {
      const dlg = page.getByRole('dialog');
      await page.keyboard.press('Escape');
      await expect(dlg).toBeHidden();
      await expect(page.locator('header.top .cv-open')).toBeFocused();
      await page.locator('header.top .cv-open').click();
      await dlg.locator('.cvd-actions button').click();
      await expect(dlg).toBeHidden();
    });

    test('fits the viewport and every control is at least 44 x 44 px', async ({ page }) => {
      const vw = page.viewportSize()!.width;
      const box = await page.getByRole('dialog').boundingBox();
      expect(box!.x).toBeGreaterThanOrEqual(0);
      expect(box!.x + box!.width).toBeLessThanOrEqual(vw);
      const taps = page.locator('.cv-dialog .tap:visible');
      for (let i = 0; i < (await taps.count()); i++) {
        const b = await taps.nth(i).boundingBox();
        expect(b!.height, await taps.nth(i).innerText()).toBeGreaterThanOrEqual(44 - 0.01);
        expect(b!.width).toBeGreaterThanOrEqual(44 - 0.01);
      }
    });

    test('has no serious accessibility violations while open', async ({ page }) => {
      const result = await new AxeBuilder({ page }).include('.cv-dialog').withTags(['wcag2a', 'wcag2aa', 'wcag21aa', 'wcag22aa']).analyze();
      const serious = result.violations.filter((v) => v.impact === 'serious' || v.impact === 'critical');
      expect(serious.map((v) => `${v.id}: ${v.nodes.length}`)).toEqual([]);
    });
  });
}
