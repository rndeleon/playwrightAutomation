
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://katalon-demo-cura.herokuapp.com');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/CURA Healthcare Service/);
});

test.only('make appointment', async ({ page }) => {
  await page.goto('https://katalon-demo-cura.herokuapp.com');

  // Click the get started link.
    // Click the get started link.
  await page.locator("xpath=//a[text()='Make Appointment']").click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.locator("xpath=//h2[text()='Login']")).toBeVisible();
}); 