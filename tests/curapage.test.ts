import { test, expect } from '@playwright/test';
import { katalonPage } from './pages/kataloncuraPage';


test('Test', async ({page}) => {
    const curaPage = new katalonPage(page);
    await curaPage.gotoAppointment();
})