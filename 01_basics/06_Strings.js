const name = "Siva"
const repoCount = 50
//console.log(name + repoCount + " Value");----->Outdated

console.log(`Hello myname is ${name} and my repo count is ${repoCount}`)

// Declaration of string

const gameName = new String('Siva Sai Kolluru') //here String is a constructor
console.log(gameName[0]);//S
console.log(gameName.__proto__);//{}
console.log(gameName.length)//4
console.log(gameName.toUpperCase());//SIVA
console.log(gameName.charAt(2));//v
console.log(gameName.indexOf('a'));//3
console.log(gameName.indexOf('t'));//-1
const newString =gameName.substring(0,3);
console.log(newString)//Siv
let newString2 =gameName.substring(0);
console.log(newString2)//Siva
const newString3 = gameName.slice();//Siva
console.log(newString3)

const newString4 ="    Siva   "
console.log(newString4.trim())//Siva

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20','-'))//https://hitesh.com/hitesh-choudhary
console.log(url.includes('sundar'))//false

console.log(gameName.split(' '));//['Siva','Sai', 'Kolluru']