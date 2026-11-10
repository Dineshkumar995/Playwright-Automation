


import{test,expect} from "@playwright/test"

test("Handling single Upload File",async ({page})=>{

//Browser Launch

await page.goto('https://testautomationpractice.blogspot.com/')

//Scroll 

await page.locator('text=Upload Files').scrollIntoViewIfNeeded()

//Hardwait

await page.waitForTimeout(3000)

//Single upload 

await page.locator('[id="singleFileInput"]').setInputFiles('C:/Users/Dinesh Kumar/OneDrive/Pictures/jpeg new.jpg')

//Hardwait

await page.waitForTimeout(3000)



//Muliple upload 

await page.locator('[id="multipleFilesInput"]')
.setInputFiles(["C:/Users/Dinesh Kumar/OneDrive/Pictures/image_0.jpg",
    "C:/Users/Dinesh Kumar/OneDrive/Pictures/king size is missing.jpg"])


//Hardwait

await page.waitForTimeout(3000)


})































