import { type Locator, type Page } from '@playwright/test';
import { BasePage } from './base.page'

export class MainMenu extends BasePage {
  readonly page: Page;
  readonly financeAndESG: Locator;
  readonly esgKPIEngine: Locator;

  constructor(page: Page) {
    super()
    this.page = page;
    this.financeAndESG = page.locator('#menu-item-29979');
    this.esgKPIEngine = page.locator('#col-1102385652').getByText('ESG KPI Engine');
  }
}