import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class FormsPage extends BasePage {
  readonly fullName = '#userName';
  readonly email = '#userEmail';
  readonly submitBtn = '#submit';

  constructor(page: Page) { super(page); }

  async open() { await this.goto('/automation-practice-form'); }

  async fillContactForm(name: string, email: string) {
    await this.page.fill(this.fullName, name);
    await this.page.fill(this.email, email);
    await this.page.evaluate(() => {
      const ad = document.querySelector('#fixedban');
      if (ad) (ad as HTMLElement).style.display = 'none';
    });
  }

  async submit() {
    await this.page.click(this.submitBtn);
  }
}
