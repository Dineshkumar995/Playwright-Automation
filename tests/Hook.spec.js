

//Hook 
/**
 * Before All - Execute all test script before one time
 * Before Each - Execute each test script before every time
 * 
 * After Each - Execute each test script after exery time
 * After All - Execute all test script after one time
 */



import{test} from "@playwright/test"
import { afterEach } from "node:test"

test("Search",async()=>{

console.log('Test 1')
})

test("Cart",async()=>{

console.log('Test 2')

})

test("Price Validation",async()=>{

console.log('Test 3')
})

test("Checkout",async()=>{

console.log('Test 4')
})

test.beforeAll(async({})=>{

console.log("Before All")

})

test.afterAll(async({})=>{

console.log("After All")

})

test.beforeEach(async({})=>{

console.log("Before each")

})

test.afterEach(async({})=>{

console.log("After each")

})







































