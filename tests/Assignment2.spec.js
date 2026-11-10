

import{test,expect} from "@playwright/test"

test('Full Login to Logout',async({page})=>{


//Browser launch

await page.goto('https://www.saucedemo.com/')
await page.waitForTimeout(2000)

await expect(page.locator('[class="login_logo"]')).toHaveText('Swag Labs')
await page.waitForTimeout(2000)

await page.locator('[id="user-name"]').fill('standard_user')
await page.waitForTimeout(2000)

await page.locator('[id="password"]').fill('secret_sauce')
await page.waitForTimeout(2000)

await page.locator('[id="login-button"]').click()
await page.waitForTimeout(2000)

await page.locator('[class="product_sort_container"]').click()
await page.waitForTimeout(2000)

const dropdown=page.getByText('Price (high to low)')
dropdown.click()
await page.waitForTimeout(2000)

await page.locator('[id="add-to-cart-sauce-labs-bolt-t-shirt"]').click()
await page.waitForTimeout(2000)

await page.locator('[id="add-to-cart-sauce-labs-backpack"]').click()
await page.waitForTimeout(2000)

await page.locator('[class="shopping_cart_link"]').click()
await page.waitForTimeout(2000)

await page.locator('[id="checkout"]').click()
await page.waitForTimeout(2000)

await page.locator('[id="first-name"]').fill('Dinesh')
await page.waitForTimeout(2000)

await page.locator('[id="last-name"]').fill('Kumar')
await page.waitForTimeout(2000)

await page.locator('[id="postal-code"]').fill('600122')
await page.waitForTimeout(2000)

await page.locator('[id="continue"]').click()
await page.waitForTimeout(2000)

await page.screenshot({path : 'images/'+'fullpage.png'})
await page.waitForTimeout(2000)

await page.locator('[id="finish"]').click()
await page.waitForTimeout(2000)

await expect(page.getByText('Thank you for your order!')).toBeVisible()
await page.waitForTimeout(2000)

await page.locator('[id="react-burger-menu-btn"]').click()
await page.waitForTimeout(2000)

await page.locator('[id="logout_sidebar_link"]').click()






})























































