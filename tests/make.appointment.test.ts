import { test, expect } from '@playwright/test';

async function login(page:any, username: 'John Doe', password: "ThisIsNotAPassword") {
  // Fill in the username and password fields

  await page.getByLabel('Username').fill(username);
  await page.getByLabel('password').fill(password);
  // Click the login button
  await page.getByRole('button', { name: 'Login' }).click();
}


test.beforeEach(async ({ page }) => {
  await page.goto('https://katalon-demo-cura.herokuapp.com');
  
  await expect(page).toHaveTitle(/CURA Healthcare Service/);

  await page.locator("xpath=//a[text()='Make Appointment']").click();

  await expect(page.locator("xpath=//h2[text()='Login']")).toBeVisible();
});

test('Make Appointment', async ({ page }) => {
  await login(page, 'John Doe', 'ThisIsNotAPassword');

  await expect(page.locator("xpath=//h2[text()='Make Appointment']")).toBeVisible();
}); 