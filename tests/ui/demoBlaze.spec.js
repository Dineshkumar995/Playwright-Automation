


import{test,expect} from "@playwright/test"

import { LoginPage } from "../../pages/loginPage"

test("HAndling DemoBlaze E2E",async ({page})=>{

let login=new LoginPage(page)

await login.navigate()
await login.clickLinkTXT()
await login.enterUsername('Raviteja18')
await login.enterPassword("Trend@123")
await login.clickLogin()
await login.verifyDashboard()

})















