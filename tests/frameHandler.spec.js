

import{test,expect} from "@playwright/test"

test("handling Frames",async ({page})=>{

//browser
await page.goto('https://ui.vision/demo/webtest/frames/')

//Count of frames

const frameCount=page.frames()
console.log(frameCount.length)


//Handle Frame1
await page.frameLocator('[src="frame_1.html"]').locator('[name="mytext1"]').fill('Javascript')
await page.waitForTimeout(3000)


//Handle Inner frames

const frame3=page.frameLocator('[src="frame_3.html"]').frameLocator('//iframe[contains(@src,"https://docs.google.com/forms/d/e/1FAIpQLSf5WiH3jEQApYku0Rl_nreU6_YMuLKAH5ffHuASyykQSIBjmg/viewform?embedded=true")]')


await frame3.locator('[class="AB7Lab Id5V1"]').nth(1).click()
await page.waitForTimeout(3000)

await frame3.locator('[class="uHMk6b fsHoPb"]').first().scrollIntoViewIfNeeded()
await page.waitForTimeout(3000)

await frame3.locator('[class="uHMk6b fsHoPb"]').first().check()
await page.waitForTimeout(3000)






})
































