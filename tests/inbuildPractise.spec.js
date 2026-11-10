 

import{test,expect} from "@playwright/test"

test('By using Inbuild Locators',async ({page})=>{
    
  //Launch  
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

//Logo check

const Orangehrm=page.getByAltText('company-branding')
await expect(Orangehrm).toBeVisible()

//Check the Username visible

await expect(page.locator('(//label[@class="oxd-label"])[1]')).toBeVisible()

//Fill

await page.getByPlaceholder('Username').fill('Admin')
await page.waitForTimeout(4000)
await page.getByPlaceholder('Password').fill('admin123')
await page.waitForTimeout(4000)
//Click on login button

await page.getByRole('button',{name:'Login'}).click()

//Username verification

const Username=page.locator('[class="oxd-userdropdown-name"]').textContent()

//Text
await page.getByText(Username).toBeVisible()
 //Label
await page.getByLabel('Sidepanel').toBeVisible()


//Title
await page.getByTitle('Help').click()

})



test.only('Vera website',async ({page})=>{


await page.goto('https://testautomationpractice.blogspot.com/')

await page.getByPlaceholder('Enter Name').fill('Dinesh kumar')
await page.waitForTimeout(3000)
await page.getByPlaceholder('Enter EMail').fill('dineshkumar123@gmail.com')
await page.waitForTimeout(3000)
await page.locator('#phone').fill('6383651472')
await page.waitForTimeout(3000)
await expect(page.getByText('Address:')).toBeVisible()
await page.waitForTimeout(3000)
await page.locator('#textarea').fill('No 17 Jcn street poonamallee Chennai 56')
await page.waitForTimeout(3000)



//radio
await page.locator('[id="male"]').check()
await page.waitForTimeout(3000)
await expect(page.locator('[id="male"]')).toBeChecked()
await page.waitForTimeout(3000)


await page.locator('')




})












































































