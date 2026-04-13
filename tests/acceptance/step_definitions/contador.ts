import { Given, Then, When } from "@cucumber/cucumber";
import { CustomWorld } from "./config/hooks";
import { expect } from "playwright/test";

Given('El usuario visita la web del contador', async function (this: CustomWorld) {
    // Write code here that turns the phrase above into concrete actions
    const page = this.page!;
    await page.goto("http://localhost:5173/home");
});

When('el usuario hace click en el boton +', async function (this: CustomWorld) {
    // Write code here that turns the phrase above into concrete actions
    const page = this.page!;
    const boton = await page.locator('[data-testid="increase"]');
    await expect(boton).toBeVisible();
    await boton.click();
});

Then('el usuario ve el contador incrementarse', async function (this: CustomWorld) {
    // Write code here that turns the phrase above into concrete actions
    const page = this.page!
    const contador = await page.locator('[data-testid="counter-text"]');
    await expect(contador).toHaveText('Count: 1');
    const boton = await page.locator('[data-testid="increase"]');
    await expect(boton).toBeVisible();
    await boton.click();
    await expect(contador).toHaveText('Count: 2');
});


When('el usuario hace click en el boton -', async function (this: CustomWorld) {
    // Write code here that turns the phrase above into concrete actions
    const page = this.page!;
    const boton = await page.locator('[data-testid="decrease"]');
    await expect(boton).toBeVisible();
    await boton.click();
});

Then('el usuario ve el contador disminuir en uno', async function () {
    // Write code here that turns the phrase above into concrete actions
    const page = this.page!
    const contador = await page.locator('[data-testid="counter-text"]');
    await expect(contador).toHaveText('Count: 0');
});