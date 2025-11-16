import { test, expect } from '@playwright/test';

test.setTimeout(90000); // 90 seconds

test('Home page loads correctly', async ({ page }) => {
  await page.goto('https://demoqa.com/', { timeout: 60000, waitUntil: 'domcontentloaded' });

  // Check page title
  await expect(page).toHaveTitle(/DEMOQA/);

  // Optional: check main header or visible element instead
  await expect(page.locator('div.home-banner')).toBeVisible();
});


