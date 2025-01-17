const accounId = 144553
let accountEmail = "hitesh@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"

// accountId = 5 //not allowed because accountId is const
accountEmail = "aniket.google"
accountPassword = "212121"
accountCity = "Bengluru"

console.log(accounId);
console.table([accountEmail,accountPassword,accountCity]);

"use strict"; // treat all JS code as newer version
// but already hamara poora code newer version me hi run hota he

// alert(3+3) here we cant run this because we use nodejs, not browser

let name = "Sourabh"
let age = 24
let isLoggedIn1 = false 
console.log(typeof null); // null gives us object in output
console.log(typeof undefined); // undefined gives us undefined in output
console.log(typeof "Sourabh") // string

let score1 = 33
console.log(typeof score1);
let score2 = "33"
console.log(typeof score2);

let valueInNumber = Number(score2)
console.log(typeof score2);
console.log(typeof valueInNumber);

/*
"33" => 33
"33abc" => NaN
true => 1
false => 0
*/

let isLoggedIn2 = undefined
let Inboolean = Boolean(isLoggedIn2)
console.log(Inboolean);
console.log(isLoggedIn2);

let isLoggedIn3 = null
let Inboolean2 = Boolean(isLoggedIn3)
console.log(typeof Inboolean2)
console.log(Inboolean2)
console.log(typeof isLoggedIn3)

console.log(1 + "2" + "2")

console.log(+true);
console.log(+"");

let gamecounter = 100
gamecounter++
console.log(gamecounter)
console.log(null > 0);
console.log(null == 0);
console.log(null >= 0)

console.log(undefined = 0)
console.log(undefined == 0)
console.log(undefined > 0)
console.log(undefined < 0)
console.log(undefined === 0) 

let userEmail;
console.log(userEmail);
console.log(typeof userEmail);

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)

const bigNumber = 456574337592795368675n

const heros = ["shaktiman", "nagraj", "doga"]
let myObje = {
    name: "hitesh",
    age: 22,
}
const myfunction = function(){
    console.log("Hello World")
}