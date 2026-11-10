


import{test,expect} from "@playwright/test"

test("Test 1",async ({})=>{

console.log("ONLY")

})

test.skip("Test 2",async ({})=>{

    console.log("SKIP")
})

test.fail("Test 3",async ({})=>{

expect(2).toBe(1)
})

test.fixme("Test 4",async ({})=>{

    console.log("FIX ME")
})

test.slow("Test 5",async ({})=>{

    console.log("SLOW")
})

test("Test 6",async({})=>{

    test.setTimeout(12 * 10000)
    console.log("SET TIMEOUT")
})










































