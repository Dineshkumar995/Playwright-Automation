

import{test,expect} from "@playwright/test"

test('handling Single dropdown ',async function({page}){

//Browser

await page.goto('https://testautomationpractice.blogspot.com/')

//Scroll

await page.locator('[id="country"]').scrollIntoViewIfNeeded()
await page.waitForTimeout(2000)

//Dropdown

const Dropdown =page.locator('[id="country"]')
Dropdown.click()
await page.waitForTimeout(2000)

//1 visible text

await Dropdown.selectOption('India')
await page.waitForTimeout(2000)

//2 Label

await Dropdown.selectOption({label:'China'})
await page.waitForTimeout(2000)

//3 value

await Dropdown.selectOption({value:'australia'})
await page.waitForTimeout(2000)

//4 Index

await Dropdown.selectOption({index:2})
await page.waitForTimeout(2000)


})

test("Handling Multiple Dropdown",async function({page}){

//Browser 

await page.goto('https://testautomationpractice.blogspot.com/')

//Select multiple options

const multiDropdown=page.locator('[id="colors"]')

//Scroll

await multiDropdown.scrollIntoViewIfNeeded()
await page.waitForTimeout(3000)

await multiDropdown.selectOption(['Red','Green','Yellow','Red','Green'])
await page.waitForTimeout(3000)

//Unselect

await multiDropdown.selectOption([])
await page.waitForTimeout(4000)

await multiDropdown.selectOption([{label:'Red'},{value:'green'},{value:'yellow'},{index:4},{index:6}])
await page.waitForTimeout(4000)





})

test.only("handle dynamic dropdown",async function({page}){

//Browser
await page.goto('https://www.google.com/')

//waitfor
await page.locator('//textarea[@placeholder]').waitFor({state:'visible'})

//Search
await page.locator('[id="ti6dpd"]').pressSequentially('amazon')
await page.waitForTimeout(3000)


//wait for selector
await page.waitForSelector('//div[@class="wM6W7d"]//span')

//get the result and select a targeted option
const getResult=await page.$$('//div[@class="wM6W7d"]//span')


for (const element of getResult) {

const text =await element.textContent()

if(text.includes('amazon prime')){

    await element.click()
   break
}

}

//wait loadstate
await page.waitForLoadState()

//Select first option
await page.locator('#_6tC7ap-qK8ikhvcP3-7HmQw_61').click()

//hardwait
await page.waitForTimeout(3000)







}

)





































