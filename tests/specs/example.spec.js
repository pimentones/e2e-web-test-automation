import { test, expect } from "@playwright/test";
import dotenv from "dotenv";

dotenv.config();

test("has title", async ({ page }) => {
  await page.goto("/");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playground page/);
});

test("get started link", async ({ page }) => {
  await page.goto("https://playwright.dev/");

  // Click the get started link.
  await page.getByRole("link", { name: "Get started" }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(
    page.getByRole("heading", { name: "Installation" })
  ).toBeVisible();
});
// Tests aren't being found because the CLI was misspelled: you ran "npx playwrihgt test".
// Run the correct command: "npx playwright test".
// Also verify:
// - The file is under the configured testDir (default "tests") and matches *.spec.js
// - There are no accidental spaces in your project path (e.g. "e2e-web-test-automation /tests")
// - Playwright is installed: run "npx playwright --version"
