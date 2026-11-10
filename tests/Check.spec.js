

import{test,expect} from"@playwright/test"

test.skip('handling radio and check boxes',async ({page})=>{


//Browser launch

await page.goto("https://testautomationpractice.blogspot.com/")




//Selecting multiple checkboxes

const checkboxelocator=["//input[@id='tuesday' and @type='checkbox']",
                   "//input[@id='friday' and @type='checkbox']",
                   "//input[@id='saturday' and @type='checkbox']"
]

for(const locator of checkboxelocator)
{
    await page.locator(locator).check()
}


for(const locator of checkboxelocator)
{
    if(await page.locator(locator).isChecked())
    {
        await page.locator(locator).uncheck()
    }
}

})


test('Handling Dropdown',async ({page})=>{


await page.goto("https://testautomationpractice.blogspot.com/")

await page.locator('#country').selectOption({input :"France"})

await page.waitForTimeout(3000)


//Assertion

const numberof=await page.locator('#country option')
await expect(numberof).toHaveCount(10)

const numberof=await page.$$('#country option')
await expect(numberof).






})

































