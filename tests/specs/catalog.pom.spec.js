import { test } from "@playwright/test";
import { CatalogPage } from "../pages/catalog.page";
import dotenv from "dotenv";

dotenv.config();

test("Add an item to the cart from the catalog", async ({ page }) => {
  const catalog = new CatalogPage(page);

  await catalog.navigateToUrl("/store");
  await catalog.clickCatalogMenu();
  await catalog.clickAddProduct();
  // TODO: assert item quantity decreased
  await catalog.clickcartMenu();
});
