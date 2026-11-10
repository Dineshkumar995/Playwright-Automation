

import{test,expect} from "@playwright/test"

test("Login upto End",async ({page})=>{

// Browser launch

await page.goto('https://www.demoblaze.com/')

// Get title & URL 

await expect(page.locator('[id="nava"]')).toBeVisible()

await page.waitForTimeout(2000)

//Click on Log in 

await page.locator('[id="login2"]').click()

await page.waitForTimeout(2000)

//User name and password

await page.locator('[id="loginusername"]').fill('Raviteja18')

await page.waitForTimeout(2000)

await page.locator('[id="loginpassword"]').fill('Trend@123')

await page.waitForTimeout(2000)

await page.locator('(//button[@class="btn btn-primary"])[3]').click()

//Assertion for logout

await expect(page.locator('[id="logout2"]')).toBeVisible()

//Choose laptop 

await page.getByText('Laptops').click()

await page.waitForTimeout(2000)

await page.getByText('MacBook air').click()

await page.waitForTimeout(2000)

//Add to cart

await expect(page.locator('[class="btn btn-success btn-lg"]')).toBeVisible()

await page.waitForTimeout(2000)

await page.locator('[class="btn btn-success btn-lg"]').click()

await page.waitForTimeout(2000)

//Handle dialogue

page.on('dialog',async text=>{

await text.accept()

//remove the product from cart
 
 await page.locator('[id="cartur"]').click()
 await page.waitForTimeout(2000)

 await expect(page.locator('Delete')).toHaveText('Delete')

 await page.locator('Delete').click()
  await page.waitForTimeout(2000)
 //Log out

 await page.locator('[id="logout2"]').click()




})










})



















































