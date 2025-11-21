import { test, expect } from "@playwright/test";
import { CatalogPage } from "../pages/catalog.page";
import { CartPage } from "../pages/cart.page";
import dotenv from "dotenv";

dotenv.config();

test("Add an item to the cart from the catalog", async ({ page }) => {
  const catalog = new CatalogPage(page);
  const cart = new CartPage(page);

  await catalog.navigateToUrl("/store");
  await catalog.clickCatalogMenu();
  const initialQuantity = await catalog.getQuantity();
  await catalog.clickAddProduct();
  const finalQuantity = await catalog.getQuantity();
  await catalog.expectItemQuantityDecrease(initialQuantity, finalQuantity);
  await catalog.clickcartMenu();
  await cart.expectCartTitle();
  await cart.expectProductAddedToCart();
});
