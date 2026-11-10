 

import{test,expect} from "@playwright/test"

test("validate Login Functionality",async function({page}){

//Open browser

await page.goto("https://practicetestautomation.com/practice-test-login/")

//Enter username

await page.locator('[id="username"]').fill('student')


//Enter password

await page.locator('[id="password"]').fill('Password123')

//Click on login button

await page.locator('[id="submit"]').click()

//verify dashboard

await expect(page.locator('[class="post-title"]')).toBeVisible

await expect(page.locator('//h1')).toHaveText('Logged In Successfully')


})













































