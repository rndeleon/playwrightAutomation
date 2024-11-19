import { test, expect } from '@playwright/test';
import { katalonPage } from './pages/kataloncuraPage.ts';


test('Test', async ({page}) => {
    const curaPage = new katalonPage(page);
    await curaPage.gotoAppointment();
})