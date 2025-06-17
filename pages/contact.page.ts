import { type Locator, type Page, type Frame, FrameLocator } from '@playwright/test';
import { BasePage } from './base.page'

export class ContactPage extends BasePage {
  readonly page: Page;
  readonly email: Locator;
  readonly emailError: Locator;
  readonly contactForm: Locator;
  readonly frame: Frame | null;

  constructor(page: Page) {
    super()
    this.page = page;
    this.frame = page.frame('#hs-form-iframe-0');
    this.email = page.locator('#hs-form-iframe-0').contentFrame().getByPlaceholder('Enter your Work email');
    this.emailError = page.locator('#hs-form-iframe-0').contentFrame().locator('.hs-error-msg');
    this.contactForm = page.locator('#col-1206362933');
  }
}