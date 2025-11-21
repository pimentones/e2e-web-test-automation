import { test } from "@playwright/test";
import { BasePage } from "./base.page";

export class InventoryPage extends BasePage {
  constructor(page) {
    super(page);

    this.inventoryButton = page.getByTestId("store-tab-inventory");
    this.productNameInput = page.getByTestId("inventory-input-name");
    this.productPriceInput = page.getByTestId("inventory-input-price");
    this.productQuantityInput = page.getByTestId("inventory-input-quantity");
    this.addProductButton = page.getByTestId("inventory-submit-button");
    this.productName = page.getByText("Moon rocket");
    this.productPrice = page.getByText("1000000.00");
    this.productQuantity = page.getByText("100");

    //   await page.getByTestId("inventory-product-0").click();
    //   await page.getByTestId("inventory-product-name-0").click();
    //   await page.getByTestId("inventory-product-price-label-0").click();
    //   await page.getByTestId("inventory-product-price-value-0").click();
    //   await page.getByTestId("inventory-product-quantity-0").click();
  }

  async navigateToUrl(url) {
    await test.step(`Navigate to URL: ${url}`, async () => {
      await this.page.goto(url);
    });
  }

  async clickInventoryMenu(value) {
    await test.step(`Click inventory tab`, async () => {
      await this.click(this.inventoryButton, value);
    });
  }

  async fillProductName(value) {
    await test.step(`Fill product ${value}`, async () => {
      await this.fill(this.productNameInput, value);
    });
  }

  async fillProductPrice(value) {
    await test.step(`Fill product price ${value}`, async () => {
      await this.fill(this.productPriceInput, value);
    });
  }

  async fillProductQuantity(value) {
    await test.step(`Fill product quantity ${value}`, async () => {
      await this.fill(this.productQuantityInput, value);
    });
  }

  async clickAddProduct(value) {
    await test.step(`Click add product`, async () => {
      await this.click(this.addProductButton, value);
    });
  }

  async expectProductAdded() {
    await test.step("Check product was added to inventory", async () => {
      await this.expectToBeVisible(this.productName);
      await this.expectToBeVisible(this.productPrice);
      await this.expectToBeVisible(this.productQuantity);
    });
  }
}
