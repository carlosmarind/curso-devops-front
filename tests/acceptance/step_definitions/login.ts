import { Given, Then, When } from '@cucumber/cucumber'
import { CustomWorld } from './config/hooks';
import { expect } from 'playwright/test';

Given('El usuario navega a la pagina de login', async function (this: CustomWorld) {
    // Write code here that turns the phrase above into concrete actions
    const page = this.page!;
    await page.goto("https://www.saucedemo.com/");
});

Given('Ingresa el nombre de usuario {string}', async function (this: CustomWorld, username: string) {
    // Write code here that turns the phrase above into concrete actions
    const page = this.page!;
    await page.fill('#user-name', username);
});

Given('Ingresa el password de usuario {string}', async function (this: CustomWorld, password: string) {
    // Write code here that turns the phrase above into concrete actions
    const page = this.page!;
    await page.fill('#password', password);
});

When('Hace click en el boton login', async function (this: CustomWorld) {
    // Write code here that turns the phrase above into concrete actions
    const page = this.page!;
    await page.locator("#login-button").click();
});

Then('Se me permite navegar a la pagina de productos', async function (this: CustomWorld) {
    // Write code here that turns the phrase above into concrete actions
    const page = this.page!;
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    await expect(page).toHaveTitle('Swag Labs');
});