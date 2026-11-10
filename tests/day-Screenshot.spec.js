

import{test,expect} from '@playwright/test'

test('Take a screenshot',async ({page})=>{

//Browser launch 

await page.goto('https://www.amazon.in/')

//wait 
await page.waitForTimeout(5000)

//screenshot 

await page.screenshot({path : 'images/'+'Visiblepage.png'})
})



test('Take a full screenshot',async ({page})=>{

//Browser launch 

await page.goto('https://www.amazon.in/')

//wait 
await page.waitForTimeout(5000)

//screenshot 

await page.screenshot({path : 'images/'+'Entirepage.jpg',fullPage:true})


})

test.only('Take a partial screenshot',async ({page})=>{

//Browser launch 

await page.goto('https://www.amazon.in/')

//wait 
await page.waitForTimeout(10000)

//screenshot 

await page.getByText('Privacy Notice').screenshot({path : 'images/'+'partialpage.jpg'})



})
























































