 

import{test,expect} from "@playwright/test"

test('Handling Simple Alert',async function({page}){

//Browser launch
await page.goto('https://testautomationpractice...com/')

//Scroll
await page.locator('[id="confirmBtn"]').scrollIntoViewIfNeeded()
await page.waitForTimeout(3000)


//EventListner

page.on('dialog',async (a) =>{

expect(a.type()).toEqual('alert')
expect(a.message()).toContain('I am an alert box!')

await page.waitForTimeout(1500)
await a.accept()

})

//Click
await page.locator('[id="alertBtn"]').click()
await page.waitForTimeout(3000)


})




test('Handling Cofirm Alert',async function({page}){

//Browser launch
await page.goto('https://testautomationpractice/')

//Scroll
await page.locator('[id="confirmBtn"]').scrollIntoViewIfNeeded()
await page.waitForTimeout(3000)


//EventListner

page.on('dialog',async (a) =>{

expect(a.type()).toEqual('confirm')
expect(a.message()).toContain('Press a button')

await page.waitForTimeout(1500)
await a.dismiss()

})

//Click
await page.locator('[id="confirmBtn"]').click()
await page.waitForTimeout(3000)


})



test('Handling Prompt Alert',async function({page}){

//Browser launch
await page.goto('https://testautomationpractice.blogspot.com/')

//Scroll
await page.locator('[id="confirmBtn"]').scrollIntoViewIfNeeded()
await page.waitForTimeout(3000)


//EventListner

page.once('dialog',async (a) =>{

expect(a.type()).toEqual('confirm')
expect(a.message()).toContain('Press a button')

await page.waitForTimeout(1500)
await a.dismiss()

})

//Click
await page.locator('[id="confirmBtn"]').click()
await page.waitForTimeout(3000)

//Click
await page.locator('[id="confirmBtn"]').click()
await page.waitForTimeout(3000)

//Click
await page.locator('[id="confirmBtn"]').click()
await page.waitForTimeout(3000)

})



test('Handling Prompts Alert',async function({page}){

//Browser launch
await page.goto('https://testautomationpractice.blogspot.com/')

//Scroll
await page.locator('[id="confirmBtn"]').scrollIntoViewIfNeeded()
await page.waitForTimeout(3000)


//EventListner

page.on('dialog',async (a) =>{

expect(a.type()).toEqual('prompt')
expect(a.message()).toContain('Please enter your name:')
expect(a.defaultValue()).toContain('Harry Potter')
await page.waitForTimeout(1500)
await a.accept('Dinesh Deena')

})

//Click
await page.locator('[id="promptBtn"]').click()
await page.waitForTimeout(3000)






})


















































