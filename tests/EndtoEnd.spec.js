 


import{test,expect} from "@playwright/test"

test('End to End',async function({page}){

//Launch
 await page.goto('https://testautomationpractice.blogspot.com/')

//Fill
await page.getByPlaceholder('Enter Name').fill('Dinesh Kummar')
await page.waitForTimeout(4000)
await page.locator('[id="email"]').fill('dineshdeena028@gmail.com')
await page.waitForTimeout(4000)
await page.locator('[id="phone"]').fill('6383651472')
await page.waitForTimeout(4000)


await page.locator('#textarea').fill('No 17 JCN Street Poonamallee Chennai-56')
await page.waitForTimeout(4000)

await expect(page.locator("//label[@for='gender']")).toBeVisible()

await page.locator('//input[@id="male"]').check()
await page.waitForTimeout(4000)








})













































