import { test, expect } from '@playwright/test';

test('get started link', async ({ page }) => {
  await page.goto('https://katalon-demo-cura.herokuapp.com');
  
  await expect(page).toHaveTitle(/CURA Healthcare Service/);
  // Click the get started link.  
  await page.locator("xpath=//a[text()='Make Appointment']").click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.locator("xpath=//h2[text()='Login']")).toBeVisible();
}); 