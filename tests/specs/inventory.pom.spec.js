import { test } from "@playwright/test";
import { InventoryPage } from "../pages/inventory.page";
import dotenv from "dotenv";

dotenv.config();

test("Add a new product to inventory", async ({ page }) => {
  const inventory = new InventoryPage(page);

  await inventory.navigateToUrl("/store");
  await inventory.clickInventoryMenu();
  await inventory.fillProductName("Moon rocket");
  await inventory.fillProductPrice("1000000");
  await inventory.fillProductQuantity("5");
  await inventory.clickAddProduct();
  await inventory.expectProductAdded();
});
