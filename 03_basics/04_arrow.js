// arrow function comes in 2015 when es6 launched. 
// this function is referring to current context.
const employe = {
    username: "Sourabh",
    salary: 6000000,
    welcomeMessage : function(){
        console.log(`Hi ${this.username} welcome in ripple family, your CTC is ${this.salary} per annum`);
        console.log(this);
    }
}
employe.welcomeMessage()
employe.username = "Sourabh Verma"
employe.welcomeMessage() //username islia change ho paya kyoki jo value wo le raha he wo current context ke hisab se le raha.
console.log(this); //yaha hum node environment me he to ye empyt {} object ko refer kar raha h 
// jab hum node environment me matlub ki chrome me inspect me ja ke console.log(this); ko run krenge to window dikhai dega, reson ye he ki pahle js ko execute karne ka ek hi treeka tha wo bhi browser ke ander or js ka engine browser ke ander hi hota tha islia waha jo global object he wo window objct he, tabhi to hum windows ke object catch kar pate he jese click ya form submit wagera.
//hamne isi engine ko bahar nikal ke ek standalone engine ki trha develop karke kisi ne "deno" nam dia to kisi ne "node".


function blockchain1(){
    console.log(this);
}
blockchain1()
// yaha output me bahut sara data aya it means it holds so many values
function blockchain2(){
    let username = "AniketVerma"
    console.log(this);
}
blockchain2()
// yaha bhi output me bahut si values ayi 
function blockchain3(){
    let username = "AniketVerma"
    console.log(this.username); //yaha hum this.username ko acess karna chah rahe he function ke ander ye output me undefined dega
}
blockchain3()
// to hamne ye seekha ki hamara jo context he wo object ke ander hi kam kar raha he, hum function ke ander a ke this use nahi kar pa rahe he
const emp = function(){
    let email = "sourabh@ripple.com"
    console.log(this.email);
}
emp() //agar hum is trha se bhi function ke ander this ko acess krenge to bhi undeined hi ayega.

//ab dekhte he ki hum function ko arrow function ke through kese declare kar sakte he.
//ye ek arrow function he 
const ripple1 = () => {
    let asset1 = "sourabh@ripple.com"
    console.log(this.asset1);
}
ripple1() //it will also give output as undefined because we cant use this in functions
const ripple2 = () => {
    let asset2 = "Aniket@ripple.com"
    console.log(this);
}
ripple2()// yaha hame ek empty object outpurt me milega.

/*
Basic Syntax of Arrow function
() => {}
*/
//ise hum explicit return function bhi bol sakte he kyoki retun ko explicitly likha he humne yaha
const addTwo = (num1,num2) => {
    return num1 + num2
}
console.log(addTwo(3,4))
//other type of arrow function 
//implicit return arrow function me hum man lete he or return keyword ko likhne ki jarurat nahi hoti he 
const addThree = (num1,num2) => num1 + num2
console.log(addThree(7,3))
// ek or trha se hum implicit return arrow function ko likh sakte he
const addFour = (num1,num2) => ( num1 + num2 ) //agar hum curley braces use krenge to hme return likhna pdega, or parentheses me hum object bhi retun kar sakte he
console.log(addFour(8,4))



