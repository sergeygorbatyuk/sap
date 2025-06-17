import { test, expect } from '@playwright/test';
import { pageProvider } from '../pages';

test.describe('SAP Fioneer ESG', async () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  })

  test('Test 1', async ({ page }) => {
    const { mainPage } = pageProvider(page);
    await mainPage.scrollToElement({ keyFactsSection: null })
    const { keyFactsSection } = await mainPage.isVisible({ keyFactsSection: null })
    expect(keyFactsSection).toEqual(true);
  });

  test('Test 2', async ({ page }) => {
    const { mainMenu, esgKPIEnginePage } = pageProvider(page);
    await mainMenu.hover({ financeAndESG: null });
    await mainMenu.click({ esgKPIEngine: null });
    const { sectionContent } = await esgKPIEnginePage.isVisible({ sectionContent: null })
    const currentUrl = page.url();
    expect(currentUrl).toContain('esg-kpi-engine');
    expect(sectionContent).toEqual(true);
  });

  test('Test 3', async ({ page }) => {
    const { mainPage, contactPage } = pageProvider(page);
    await mainPage.click({ getInTouchButton: null });
    await contactPage.scrollToElement({ contactForm: null });
    await contactPage.sendKeys({ email: '1234' });
    const { emailError } = await contactPage.getText({ emailError: null });
    expect(emailError).toEqual('Email must be formatted correctly.');
  });
});

