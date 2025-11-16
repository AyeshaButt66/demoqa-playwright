import { test, expect } from '@playwright/test';
import { FormsPage } from '../../src/pages/FormsPage';

test('Submit practice form shows confirmation modal', async ({ page }) => {
  const forms = new FormsPage(page);
  await forms.open();

  const name = 'Ayesha QA';
  const email = `ayesha+${Date.now()}@test.com`;

  await forms.fillContactForm(name, email);
  await forms.submit();

  const modal = page.locator('.modal-content');
  await expect(modal).toBeVisible();
  await expect(modal).toContainText(name);
  await expect(modal).toContainText(email);
});
