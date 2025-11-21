import { test } from "@playwright/test";
import { BasePage } from "./base.page";

export class CartPage extends BasePage {
  constructor(page) {
    super(page);

    this.cartTitle = page.getByTestId("cart-title");
    this.itemName = page.getByTestId("cart-item-name-0");
    this.itemPrice = page.getByTestId("cart-item-price-value-0");
    this.itemQuantity = page.getByTestId("cart-item-quantity-0");
    this.itemTotalValue = page.getByTestId("cart-item-total-value-0");

    // this.productNameInput = page.getByTestId("inventory-input-name");
    // this.productPriceInput = page.getByTestId("inventory-input-price");

    // this.addProductButton = page.getByTestId("inventory-submit-button");
    // this.productName = page.getByText("Moon rocket");
    // this.productPrice = page.getByText("1000000.00");
    // this.productQuantity = page.getByText("100");

    // await page.getByTestId('store-tab-catalog').click();
    // await page.getByTestId('catalog-title').click();
    // await page.getByTestId('catalog-item-name-0').click();
    // await page.getByTestId('catalog-item-quantity-0').click();
    // await page.getByTestId('catalog-item-add-button-0').click();
    // await page.getByTestId('store-tab-cart').click();
    // await page.getByTestId('cart-item-name-0').click();
    // await page.getByTestId('cart-item-quantity-0').click();
    // await page.getByTestId('cart-item-price-value-0').click();
    // await page.getByTestId('cart-item-total-value-0').click();
    // await page.getByTestId('cart-title').click();
    // await page.getByTestId('cart-go-to-payment').click();
  }

  async navigateToUrl(url) {
    await test.step(`Navigate to URL: ${url}`, async () => {
      await this.page.goto(url);
    });
  }

  async expectCartTitle() {
    await test.step("Check cart title is visible", async () => {
      await this.expectToBeVisible(this.cartTitle);
    });
  }

  async expectProductAddedToCart() {
    await test.step("Check product was added to cart", async () => {
      await this.expectToBeVisible(this.itemName);
      await this.expectToBeVisible(this.itemPrice);
      await this.expectToBeVisible(this.itemQuantity);
      await this.expectToBeVisible(this.itemTotalValue);
    });
  }
}
