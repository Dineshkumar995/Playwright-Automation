

import{test,expect} from "@playwright/test"

test('Handling Amazon page',async ({page})=>{

//Browser launch

await page.goto('https://www.amazon.com/')

//assertion 

await expect(page.locator('[id="nav-logo-sprites"]')).toBeVisible()

await page.locator('[class="nav-line-2 "]').click()
await page.waitForTimeout(2000)
//Login 

await page.locator('[class="a-input-text"]').fill('dinaadee+usprod@amazon.com')
await page.waitForTimeout(2000)
await page.locator('[id="continue-announce"]').click()
await page.waitForTimeout(2000)
await page.locator('[id="ap_password"]').fill('qwerty')
await page.waitForTimeout(2000)
await page.locator('[id="auth-signin-button"]').click()






})














































