/*
function ka seedha mean ye he ki jo bhi humne code likha he bda se use ek package me band kar dena.
function Keyword functionName()
{
functionScope means Defination
}
*/
function print()
{
console.log("S");
console.log("O");
console.log("U");
console.log("R");
console.log("A");
console.log("B");
console.log("H");
}
print()

//jab hum function ki defination bnate he us waqt (number1,number2) parametars hote he.
//Jab hum function call karte he tab ye arguments hote he addTwoNumbers(3,4)
function addTwoNumbers(number1,number2){
    console.log(number1+number2);
}
addTwoNumbers()
addTwoNumbers(3,4)
addTwoNumbers(3,"4")
addTwoNumbers(3,"a")
addTwoNumbers(3,"null")

const res = addTwoNumbers(5,3)
console.log("result is:",res);
console.log(`Result is : ${res}`);
/*
Result ki value undefined ayi he, yahi sabse important concept he ki function se apne kya wapas bheja, 
kai log sochte he ki console log kia he to yahi value wapas gai hogi,nahi yahi sabse bdi galti he. 
console print karne ka matlub ye nahi ki function wo value return bhi kar raha he, 
return apne ap me ek concept he or console sirf console print karta he.
*/
function multTwoNumbers(number1,number2){
    let result = number1*number2
    return result
    //function defination ka ek rule he ki return line ke bad kuch bhi likhoge wo print nahi hoga
    //console.log("Hello") :- ye print nahi hoga
}
const result = multTwoNumbers(4,5)
console.log("Result:",result);

function subTwoNumbers(number1,number2){
    return number1-number2
}
const ans = subTwoNumbers(3,5)
console.log("ans:",ans);

function loginUserMessage(username){
    return `${username} just logged in`
}
loginUserMessage("sourabh@ripple.com")//value return ho gai but print nahi kyoki hamne kaha hi nahi print ke lie
console.log(loginUserMessage("sourabh844@ripple"));
// if agar hum koi value pass hi na kre to undefined a jaega
console.log(loginUserMessage());

function empRipple(username){
    if(username === undefined){
        console.log("Please enter a username");
        return
    }
    return`${username} is a valuable employe of ripple`
}
console.log(empRipple());
console.log(empRipple("SourabhVerma"));

//ek treeke se or likhte he.
// ! = ye exclamatory symbol he jo true ko false or false ko true me convert kar deta he.
function loginStudentName(studentname){
    if(!studentname){
        console.log("Please Enter a studentname");
        return
    }
    return `${studentname} just logged in`
}
console.log(loginStudentName("Sourabh"));
console.log(loginStudentName());

function job(profile="Blockchain dev"){
    if(!profile){
        console.log("please enter profile");
        return
    }
    return `I am a ${profile} in ripple`
}
console.log(job()) // kyokihamne already ek value de di he
console.log(job("Smart Contract Dev")) // yaha par purani value overwrite kar di gai he.
