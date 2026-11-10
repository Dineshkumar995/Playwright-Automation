


import {test,expect} from "@playwright/test"

test("Handle Saucedemo", async function({page}){

//Browser

await page.goto("https://www.saucedemo.com/")

//Username & Password

await page.locator('[id="user-name"]').fill("standard_user")

await page.locator('[id="password"]').fill('secret_sauce')


//login 

await page.locator('[id="login-button"]').click()

//verify dashboard

await expect(page.locator('.title')).toHaveText('Products')

//print products

const products= await page.$$('//div//a//div')

for(const element of products){

    const txt=await element.textContent()

    console.log(txt)
}

//select a product

await page.locator('//div[text()="Sauce Labs Bolt T-Shirt"]').click()

//add to cart

await expect(page.locator('[id="add-to-cart"]')).toBeVisible()

await page.locator('[id="add-to-cart"]').click()


//cart icon
await page.locator('[data-test="shopping-cart-link"]').click()

//checkout

await expect(page.locator('[class="btn btn_action btn_medium checkout_button "]')).toBeVisible()

await page.locator('[class="btn btn_action btn_medium checkout_button "]').click()

//Fill details

await page.locator('[id="first-name"]').fill('Dinesh')
await page.locator('[id="last-name"]').fill('kumar')
await page.locator('[id="postal-code"]').fill('600056')

//continue

await page.locator('[id="continue"]').click()

//Finish
await page.locator('[id="finish"]').click()

//Assert

await expect(page.locator('[class="complete-header"]')).toHaveText('Thank you for your order!')





























})





























