import { test, expect } from "@playwright/test";
import dotenv from "dotenv";
import { BasePage } from "../pages/base.page.js";

dotenv.config();

test("has title", async ({ page }) => {
  const basePage = new BasePage(page);
  await basePage.naviagteToUrl("/");
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playground page/);
});
