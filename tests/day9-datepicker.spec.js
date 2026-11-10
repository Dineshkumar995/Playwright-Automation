

import{test,expect} from "@playwright/test"

test('Handling date picker',async ({page})=>{

//Browser

await page.goto('https://testautomationpractice.blogspot.com/')

//Click
const datepicker=page.locator('[id="datepicker"]')

//await datepicker.fill('09/23/2027')


await datepicker.click()
await page.waitForTimeout(3000)


//Targets
let date='15'
let month='August'
let year='2027'

//loops 
while(true){

const cmonth=await page.locator('[class="ui-datepicker-month"]').textContent()
const cyear=await page.locator('[class="ui-datepicker-year"]').textContent()

if(cmonth==month && cyear==year){

    break
}

await page.locator('[class="ui-icon ui-icon-circle-triangle-e"]').click()


}


//Dates 
await page.locator(`[data-date="${date}"]`).click()

await page.waitForTimeout(3000)





})























