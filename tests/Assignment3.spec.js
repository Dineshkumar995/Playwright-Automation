

import{test,expect} from "@playwright/test"

test('Handling Saucedemo',async({page})=>{

//Browser launch 

await page.goto('https://www.saucedemo.com/')
await page.waitForTimeout(2000)

//Assertion
await expect(page.locator('[class="login_logo"]')).toBeVisible()

//User details

await page.getByPlaceholder('Username').fill('standard_user')
await page.waitForTimeout(2000)

await page.locator('[id="password"]').fill('secret_sauce')
await page.waitForTimeout(2000)

await page.locator('[id="login-button"]').click()
await page.waitForTimeout(2000)

await expect(page.locator('[class="app_logo"]')).toBeVisible()

//Dropdown

await page.locator('[class="product_sort_container"]').selectOption('Price (high to low)')

//Print all the product list 

const products=await page.$$('[class="inventory_item_name "]')

for (const element of products) {


    const txt=await element.textContent()
    console.log(txt)
    
}

//Adding two products

await page.locator('[id="add-to-cart-sauce-labs-bolt-t-shirt"]').click()
await page.waitForTimeout(2000)

await page.locator('[id="add-to-cart-sauce-labs-backpack"]').click()
await page.waitForTimeout(2000)

//Cart icon

await page.locator('[class="shopping_cart_link"]').click()
await page.waitForTimeout(2000)

//Checkout

await page.locator('[id="checkout"]').click()
await page.waitForTimeout(2000)

//Address details

await page.locator('[id="first-name"]').fill('Dinesh')
await page.waitForTimeout(2000)

await page.locator('[id="last-name"]').fill('Kumar')
await page.waitForTimeout(2000)

await page.locator('[id="postal-code"]').fill('600122')
await page.waitForTimeout(2000)

//Click on continue button

await page.locator('[id="continue"]').click()
await page.waitForTimeout(2000)

//Screenshot 

await page.screenshot({path : 'images/'+'newpage.jpg'})
await page.waitForTimeout(2000)

await page.locator('[id="finish"]').click()
await page.waitForTimeout(2000)

await expect(page.getByText('Thank you for your order!')).toBeVisible()
await page.waitForTimeout(2000)

await page.locator('[id="react-burger-menu-btn"]').click()
await page.waitForTimeout(2000)

await page.locator('[id="logout_sidebar_link"]').click()








})



























































