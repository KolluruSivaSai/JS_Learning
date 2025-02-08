/*Primitive--->Call by value(means changes made are done on copy)

String, Number , Boolean, null (empty), undefined(variable declared but no value is assigned), Symbol(uniqueness),BigInt

const score =100
const scoreValue =100.3
const isLoggedIn =false
const outsideTemp =null
let userEmail

const id = Symbol('123')
console.log(id)-->Symbol(123)
const anotherId = Symbol('123')
console.log(id === anotherId)--->false

const bigNumber = 345678912738457n//BigInt

*/

//JS in dynamically typed or statically typed language--->dynamically typed



/*Reference (Non primitive) 
Arrays, Objects, Functions

const heros = ["Siva","Ram",'Krishna];
let myObj = {
name: "Siva",
age= 25,
}
const myFun=function(){
}

https://262.ecma-international.org/5.1/#sec-11.4.3
*/
//In order to master JS--->master objects and browser events


/**************************************Memory********************************/
//Stack---->Primitive---->Copy
//Heap----->NonPrimitive------>Reference
let myYoutubename = "sivaecesai.com"
let anothername = myYoutubename
anothername = "jingping"

console.log(myYoutubename)
console.log(anothername)

let userOne = {
    email: "siva2gmail.com",
    upi: "user@ybl"
}
let userTwo = userOne
userTwo.email='siva@google.com'

console.log(userOne.email)

console.log(userTwo.email)