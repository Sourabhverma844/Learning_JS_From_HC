/*
JavaScript Execution Context:-
it means ki hamne jo bhi file banai he use js run kes kregi ya execute kese kregi.
javascript files o execute karne ke lie use do phase me run karti he.
*/
let val1 = 10;
let val2 = 5;
function addNum(num1,num2){
    let total = num1 + num2;
    return total;
}
console.log(result = addNum(val1,val2));
console.log(result2 = addNum(10,20));

function companey(){
    console.log("Sourabh Welcome in ripple");
    salary()
}
function salary() {
    console.log("Your salary is 60LPA");
    profile()
}
function profile(){
    console.log("You are a smart contract developer");
}
companey()
salary()
profile()