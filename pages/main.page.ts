import { type Locator, type Page } from '@playwright/test';
import { BasePage } from './base.page'

export class MainPage extends BasePage {
  readonly page: Page;
  readonly keyFactsSection: Locator;
  readonly getInTouchButton: Locator;

  constructor(page: Page) {
    super()
    this.page = page;
    this.keyFactsSection = page.locator('#row-2004597740');
    this.getInTouchButton = page.locator('#masthead').getByRole('link', { name: 'Get in touch' });
  }
}