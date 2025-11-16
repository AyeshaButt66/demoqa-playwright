import { test, expect } from '@playwright/test';

test.setTimeout(90000); // 90s timeout

test('Submit practice form shows confirmation modal', async ({ page }) => {
  // Navigate to the form page with extended timeout
  await page.goto('https://demoqa.com/text-box', { timeout: 60000, waitUntil: 'domcontentloaded' });

  // Remove any fixed banners or ads that might block inputs
  await page.evaluate(() => {
    const ad = document.querySelector('#fixedban');
    if (ad) ad.remove();
  });

  // Fill the form
  await page.fill('#userName', 'Ayesha Tauheed');
  await page.fill('#userEmail', 'ayesha@example.com');
  await page.fill('#currentAddress', '123 Demo Street');
  await page.fill('#permanentAddress', '456 Test Avenue');

  // Click the submit button
  await page.click('#submit');

  // Wait for the output modal to appear
  const output = page.locator('#output');
  await output.waitFor({ state: 'visible', timeout: 10000 });

  // Verify submitted data
  await expect(output).toContainText('Ayesha Tauheed');
  await expect(output).toContainText('ayesha@example.com');
});
