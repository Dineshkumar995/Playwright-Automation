 

import{test,expect} from "@playwright/test"

test("To select the song", async function({page}){


await page.goto("https://www.youtube.com/")

await page.locator('.ytSearchboxComponentInput.yt-searchbox-input.title').fill('yuvan songs')

await page.locator('.ytSearchboxComponentSearchButton').click()

await page.locator('.yt-simple-endpoint.style-scope.ytd-video-renderer').click()


})















































