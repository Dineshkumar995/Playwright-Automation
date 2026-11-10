

import{test,expect,chromium,firefox,webkit} from "@playwright/test"

test('Handling Multiple Windows',async({})=>{

//Browser 

const browser=await chromium.launch({

headless:false,slowMo : 1500,channel : 'msedge'

})

const context = await browser.newContext({

    permission:[]
})

const page1=await context.newPage()

await page1.goto('https://www.saucedemo.com/')

await page1.getByPlaceholder('Username').fill('standard_user')

await page1.getByPlaceholder('Password').fill('secret_sauce')

await page1.locator('[id="login-button"]').click()

await expect(page1.locator('.title')).toBeVisible()


const page2 = await context.newPage()

await page2.goto('https://www.demoblaze.com/index.html')

await page2.locator('[id="login2"]').click()

await page2.locator('[id="loginusername"]').fill('Raviteja18')

await page2.locator('[id="loginpassword"]').fill('Trend@123')

await page2.getByText('Log in').click()

await expect(page2.locator('[id="nameofuser"]')).toBeVisible()


})
















































