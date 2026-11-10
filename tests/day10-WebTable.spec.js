

import{test,expect} from "@playwright/test"

test('Handling Pagination Webtable',async ({page})=>{

//Brwser launch

await page.goto('https://testautomationpractice.blogspot.com/')

//Scrool

await page.locator('[id="productTable"]').scrollIntoViewIfNeeded()
await page.waitForTimeout(3000)

//Count the column and rows

const tableColumn = page.locator('[id="productTable"] thead tr th')
console.log("Table Column:",await tableColumn.count())

const tableRows = page.locator('[id="productTable"]>tbody>tr')
console.log("Table Rows:",await tableRows.count())

//Select the product

const selectProd = await tableRows.filter({has:page.locator('td'),hasText:"Tablet"})

await selectProd.locator("input").click()
await page.waitForTimeout(3000)


//Select a muliple product

async function selectMultiProd(prodName){
const selectProd = await tableRows.filter({has :page.locator('td'),hasText :prodName})

await selectProd.locator("input").click()
await page.waitForTimeout(3000)

}

await selectMultiProd('Smartphone')
await selectMultiProd('Wireless Earbuds')
await page.waitForTimeout(3000)

//4 get the product list in 1st page

    for(let i=0; i < await tableRows.count() ; i++){   //i=0 ; i<5 ; i++   outerLoop
       const tds = await tableRows.nth(i).locator('td')

    //    console.log(await tds.allTextContents())

    for(let j=0; j < await tds.count() ; j++){     //j=0 ; j<20 ; j++    innerLoop
       const txt = await tds.nth(j).textContent()
       console.log(txt)
    }

    }



   console.log('-------=======---------')



    //5 get the product list in all pages

   const prodPages = page.locator('//ul[@id="pagination"]//li//a')

   for(let k=0 ; k < await prodPages.count() ; k++){  // k=0; k<4; k++

    if(k > 0){
        await prodPages.nth(k).click()
    }

    const prodList = await page.$$('[id="productTable"]>tbody>tr>td')

    for (const element of prodList) {
        const prod = await element.textContent()
        console.log(prod)
    }

   }



})





















































