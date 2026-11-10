 

import{test,expect} from "@playwright/test"

test("To check the log in", async function({page}){


await page.goto("https://www.saucedemo.com/")

await page.locator('[id="user-name"]').fill('standard_user')

await page.locator('[id="password"]').fill('secret_sauce')

await page.locator('.submit-button.btn_action').click()

await expect(page.locator('.title')).toHaveText('Products')

await page.locator('//div[text()="Sauce Labs Bike Light"]').click()

await expect(page.locator('.shopping_cart_link')).toBeVisible()

await page.locator('#add-to-cart').click()

await page.locator('.shopping_cart_link').click()

await expect(page.locator('#checkout')).toBeVisible()

await page.locator('#checkout').click()

await page.locator('#first-name').fill('Dinesh')

await page.locator('#last-name').fill('Deena')

await page.locator('#postal-code').fill('600056')

await page.locator('#continue').click()

await page.locator('#finish').click()

await expect(page.locator('.complete-header')).toHaveText('//h2[text()="Thank you for your order!"]')


















})
























