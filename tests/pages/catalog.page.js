import { test } from "@playwright/test";
import { BasePage } from "./base.page";

export class CatalogPage extends BasePage {
  constructor(page) {
    super(page);

    this.catalogButton = page.getByTestId("store-tab-catalog");
    this.productQuantityAvailable = page.getByTestId("catalog-item-quantity-0");
    this.addProductButton = page.getByTestId("catalog-item-add-button-0");
    this.cartButton = page.getByTestId("store-tab-cart");
    this.cartTitle = page.getByTestId("cart-title");
    this.productName = page.getByTestId("cart-item-name-0");
    this.productPrice = page.getByTestId("cart-item-price-value-0");
    this.productQuantity = page.getByTestId("cart-item-quantity-0");
    this.productTotalValue = page.getByTestId("cart-item-total-value-0");

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

  async clickCatalogMenu(value) {
    await test.step(`Click catalog tab`, async () => {
      await this.click(this.catalogButton, value);
    });
  }

  async fillProductName(value) {
    await test.step(`Fill product ${value}`, async () => {
      await this.fill(this.productNameInput, value);
    });
  }

  // TODO: improve function by going throught the list of products and checking stock
  async clickAddProduct(value) {
    await test.step(`Click add product`, async () => {
      if ((await this.calculateQuantity()) > 0) {
        await this.click(this.addProductButton, value);
      }
    });
  }

  async calculateQuantity() {
    const itemQuantity = await this.productQuantityAvailable.innerText();
    console.log("Available item quantity:", itemQuantity);
    const stock = parseInt(itemQuantity);
    console.log("Available item quantity:", stock);

    return stock;
  }

  async clickcartMenu(value) {
    await test.step(`Click cart tab`, async () => {
      await this.click(this.cartButton, value);
    });
  }

  async expectItemQuantityDecrease() {
    await test.step("Check quantity decreased", async () => {
      const itemQuantity = this.calculateQuantity();

      await this.expectToBeVisible(this.productQuantity);
    });
  }

  async expectProductAddedToCart() {
    await test.step("Check product was added to cart", async () => {
      await this.expectToBeVisible(this.productName);
      await this.expectToBeVisible(this.productPrice);
      await this.expectToBeVisible(this.productQuantity);
    });
  }

  async expectcartTitle() {
    await test.step("Check cart title is visible", async () => {
      await this.expectToBeVisible(this.cartTitle);
    });
  }
}
