import { expect, test } from "@playwright/test";

export class BasePage {
  constructor(page) {
    this.page = page;
  }

  async naviagteToUrl(url) {
    await test.step(`Navigate to URL: ${url}`, async () => {
      await this.page.goto(url);
    });
  }

  async click(locator, value = 1) {
    await locator.click({ clickCount: value });
  }

  async fill(locator, text) {
    await locator.fill(text);
  }

  async expectToBeVisible(locator) {
    await expect(locator).toBeVisible();
  }
}
