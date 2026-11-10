

import{test,expect} from "@playwright/test"

test('Handling Keyboard Actions',async ({page})=>{

//Browser launch 

await page.goto('https://testautomationpractice.blogspot.com/')

//fill 

await page.getByPlaceholder('Enter Name').fill('Dinesh')
await page.waitForTimeout(2000)

//Control + A

await page.keyboard.press('Control+KeyA')
await page.waitForTimeout(2000)

//Control + C

await page.keyboard.press('Control+KeyC')
await page.waitForTimeout(2000)

//Next TAB

await page.keyboard.down('Tab')
await page.keyboard.up('Tab')
await page.waitForTimeout(2000)

// Control + V

await page.keyboard.press('Control+KeyV')
await page.waitForTimeout(2000)


})

test('Handling mouse hover',async ({page})=>{

//Browser launch

await page.goto('https://testautomationpractice.blogspot.com/')

//scroll

await page.getByTitle('Mouse Hover').scrollIntoViewIfNeeded()
await page.waitForTimeout(2000)

//Hover 

await page.locator('[class="dropbtn"]').hover()
await page.waitForTimeout(2000)

// click

await page.locator("//a[text()='Laptops']").click()
await page.waitForTimeout(2000)


})

test ('Handling Mouse Double',async ({page})=>{

//Browser launch

await page.goto('https://testautomationpractice.blogspot.com/')

//scroll

await page.locator('Copy Text').scrollIntoViewIfNeeded()
await page.waitForTimeout(2000)

//Clear

await page.locator('[id="field1"]').clear()
await page.waitForTimeout(2000)

//Fill

await page.locator('[id="field1"]').fill('Dinesh')
await page.waitForTimeout(2000)

//click

await page.locator('Copy Text').dblclick()
await page.waitForTimeout(2000)


})

test.only ('Handling Mouse Drag and Drop',async ({page})=>{

//Browser launch

await page.goto('https://testautomationpractice.blogspot.com/')

//scroll

await page.locator('[id="droppable"]').scrollIntoViewIfNeeded()
await page.waitForTimeout(2000)

//Source

const src = page.locator('[id="draggable"]')

//Target 

const trg = page.locator('[id="droppable"]')


//Approach 1

//await src.dragTo(trg) // we frequently use this

//Approach 2 

//await page.dragAndDrop('[id="draggable"]','[id="droppable"]')

//Approach 3

await src.hover()
await page.mouse.down()

await trg.hover()
await page.mouse.up()

await page.waitForTimeout(2000)


})













































