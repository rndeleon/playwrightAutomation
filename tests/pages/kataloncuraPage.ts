import { expect, type Locator, type Page } from '@playwright/test';

export class katalonPage {
    readonly page: Page;
    readonly makeAppointment: Locator;
    readonly menu: Locator;
    readonly loginBUtton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.makeAppointment = page.locator('a', { hasText: 'Make Appointment'});
        this.menu = page.locator('a',{hasText: 'menu-toggle'});
        this.loginBUtton = page.locator('button',{hasText: 'Login'});
      }
    
    async gotoAppointment(){
        await this.page.goto('https://katalon-demo-cura.herokuapp.com');
        await this.makeAppointment.click();
        await expect(this.loginBUtton).toBeVisible();
    }
}

