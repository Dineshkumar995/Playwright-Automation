 

import{test,expect} from "@playwright/test"

test("validate login function",async function({page}){

await page.goto("https://practicetestautomation.com/practice-test-login/")


await page.locator('[id="username"]').fill('student')

await page.locator('#password').fill('Password123')

await page.locator('.btn').click()

await expect(page.locator('.has-text-align-center.wp-block-paragraph')).toBeVisible


})











































