 

import {test,expect} from "@playwright/test"

test("TC___001 Verify browser title & URL",async function({page}){  //Fixture


    //Browser
    await page.goto("https://www.amazon.in/")

    //Title & URL
    const pageTitle=await page.title()
    const pageURL=await page.url()


    console.log("page URL:",pageURL)
    console.log("page Title:",pageTitle)

    //Assertions | validation | verify

    await expect(page).toHaveTitle("Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in")
    
    await expect(page).toHaveURL("https://www.amazon.in/")








})





// Orange attribute name
//Pink tag name
//black Text contant
//Blue attributes value













