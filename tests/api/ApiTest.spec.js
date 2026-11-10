

import{test,expect,request} from "@playwright/test"
import{apiEndPoints} from "../../utils/endpoints.json"


test ("GET-REQ Getalluser",async()=>{

const apiRequest = await request.newContext()

const response = await apiRequest.get(process.env.API_BASE+'/users')

const body =await response.json()
console.log(body)

expect(response.status()).toBe(200)

})
let token

test('POST - REQ LoginUser',async()=>{

const apiRequest=await request.newContext()

const response=await apiRequest.post(process.env.API_BASEURL +'/user/login',

{
headers:{'content-Type':"application/json"},
data :{

    username : process.env.API_USERNAME,
    password : process.env.API_PASSWORD
}

}

)

const body=await response.json()
console.log(body)
 expect(response.status()).toBe(200)

})


test('GET - REQ GetAuthUser',async()=>{

const apiRequest=await request.newContext()

const response=await apiRequest.post(process.env.API_BASEURL +apiEndPoints.authUser,

{
headers:{"Authorization": 'Bearer' + token},

}

)

const body=await response.json()
console.log(body)
 expect(response.status()).toBe(200)

})

test.only('Update - REQ UpdateUser',async()=>{

const apiRequest=await request.newContext()

const response=await apiRequest.post(process.env.API_BASEURL +apiEndPoints.updateUser,

{
headers:{'content-Type':"application/json"},
data:{
    "firstName" : "Ravi",
    "lastName" : "Teja"
}
}

)

const body=await response.json()
console.log(body)
 expect(response.status()).toBe(200)

})

test.only('POST - REQ AddUser',async()=>{

const apiRequest=await request.newContext()

const response=await apiRequest.post(process.env.API_BASEURL +apiEndPoints.updateUser,

{
headers:{'content-Type':"application/json"},
data:{
    "firstName" : "Ravi",
    "lastName" : "Teja",
    "gender" : "male",
    "age" : 46
}
}

)

const body=await response.json()
console.log(body)
 expect(response.status()).toBe(200)

})

test.('Delete - REQ DeleteUser',async()=>{

const apiRequest=await request.newContext()

const response=await apiRequest.post(process.env.API_BASEURL +apiEndPoints.deleteUser)



const body=await response.json()
console.log(body)
 expect(response.status()).toBe(200)

})



















