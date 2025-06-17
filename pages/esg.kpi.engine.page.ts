import { type Locator, type Page } from '@playwright/test';
import { BasePage } from './base.page'

export class EsgKPIEnginePage extends BasePage {
  readonly page: Page;
  readonly sectionContent: Locator;

  constructor(page: Page) {
    super()
    this.page = page;
    this.sectionContent = page.locator('#col-1338147952');
  }
}