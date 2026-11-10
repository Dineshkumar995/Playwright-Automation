


import{test} from "@playwright/test"

test("Test 1",{tag:'@smoke'},async({})=>{


    console.log("Smoke")
})

test("Test 2",{tag :'@sanity'},async ({})=>{

console.log("sanity")

})

test("Test 3 @reg",async ({})=>{

    console.log("Regression")
})

test("Test 4",{tag: '@smokesanity'},async({})=>{

    console.log("smoke with sanity")

})

test("Test 5",{tag :'@smoke@reg'},async({})=>{

    console.log("Smoke with Regression")
})

test("Test 6 @reg@sanity",async({})=>{

    console.log("Regression with sanity")
})



/**
 * npx playwright test tag.spec.js --grep "@smoke"
 * npx playwright test tag.spec.js --grep "Test 3"
 * 
 * Skip
 * npx playwright test tag.spec.js --grep "@smoke" --grep-invert "@sanity"
 * npx playwright test tag.spec.js --grep "@smoke" --grep-invert "@sanity|@reg"
 * 
 * 
 * execute smoke with sanity and reg
 * npx playwright test tag.spec.js --grep "@smoke" --grep-invert "@sanity&@reg"
 * 
 */



















































