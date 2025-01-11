// Data ko kis trha se memory me rakha jata he or acess kia jata he.
// us hisab se datatypes ko 2 categories me divide kia gya he.
/* (1.) Primitive - This datatypes are call by value, it means jab bhi hum inhe kahi call karte he to hme orignal data nahi dia jata , hame value copy krke di jati he, to jo bhi hum changes karte he wo copy me changes hote he */
// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

/* (2.) Non primitive (Refrence Type) - in this type of datatype we do not make copies of data , we simply give refrence of the memory where that data is stored. */
// 3 types : Array, Objects, Functions

/*Que : Is JavaScript Dynamically Typed or Statically Typed ?
Ans : */
const score = 100
const scoreValue = 100.3
const isOut = false
const outsideTemp = null
let userEmail
const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id);
console.log(anotherId);
console.log(id === anotherId);

const bigNumber1 = 918109964556
console.log(bigNumber1);
console.log(typeof bigNumber1);
const bigNumber2 = 918109964556n
console.log(bigNumber2);
console.log(typeof bigNumber2);

//Array
const heros = ["Bhagat Sing","ChandraSekhar Azad"]
console.log(heros)
console.log(typeof heros)

// object 
let myObj = {
    name: "Sourabh Verma",
    age: 26,
    profile: "Blockchain Developer"
}
console.log(myObj);

// function
const myfunction = function(){
    console.log("Hello Sourabh")
}
console.log(myfunction)

// when we check typeof of null it will give object in answer.

