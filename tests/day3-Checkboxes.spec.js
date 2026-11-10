
import{test,expect} from"@playwright/test"
test.only("Handle Radio & CheckBox" , async ({page}) => {

  //browser
  await page.goto('https://testautomationpractice.blogspot.com/')

  //wait
  await page.waitForLoadState()

  //wait 
  await page.waitForSelector('.post-title.entry-title')

  //fill
  await page.locator('#name').fill("Raviteja")
  await page.waitForTimeout(1500)

  //pressSequence
  await page.locator('[placeholder="Enter EMail"]').pressSequentially('raviteja786@gmail.com')
  await page.waitForTimeout(1500)


  //radio 
  await page.locator('//input[@id="male"]').check()
  await page.waitForTimeout(1500)


  //assert
  await expect(page.locator('//label[text()="Male"]')).toBeChecked()

  //check
  await page.locator('(//input[@class="form-check-input"])[3]').check()
  await page.waitForTimeout(1500)


  //assert
  await expect(page.locator('//label[contains(text() , "Sun")]')).toBeChecked()


  //Multiple checkboxes

  const multipleCheckBoxes = await page.$$('//label[contains( @class , "check-label")]')

  //Select
  for (const element of multipleCheckBoxes) {
     const text = await element.textContent()

     if(text == 'Tuesday' || text == 'Thursday' || text == 'Saturday'){
      await element.check()
      await page.waitForTimeout(1500)

     }
  }

    //Unselect 
    for (const element of multipleCheckBoxes) {
     const text = await element.textContent()

     if(text == 'Tuesday' || text == 'Thursday' || text == 'Saturday'){
      await element.uncheck()
      await page.waitForTimeout(1500)

     }
  }
})













