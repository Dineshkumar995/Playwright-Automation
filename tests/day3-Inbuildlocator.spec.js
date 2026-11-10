 

import{test,expect} from "@playwright/test"

test("has title",async function({page}){

await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

//ALT

const orangelogo=page.getByAltText('company-branding')
await expect(orangelogo).toBeVisible()

//Placeholder

await page.getByPlaceholder('Username').fill('Admin')
await page.getByPlaceholder('Password').fill('Password')

//Login
await page.getByRole('button',{name:' Login '}).click()

//Assert username

const username=await page.locator('class="oxd-userdropdown-name"').textContent()

//Text

await expect(page.getByText(username)).toBeVisible()

//Label
await expect(page.getByLabel('Sidepanel')).toBeVisible()

//Title
await page.getByTitle('Help').click()

//Test id
//https://www.playwright.dev





















}
)










































