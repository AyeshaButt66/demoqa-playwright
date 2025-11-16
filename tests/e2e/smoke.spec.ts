import { test, expect } from '@playwright/test';

test('Home page loads correctly', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/ToolsQA/);
});
