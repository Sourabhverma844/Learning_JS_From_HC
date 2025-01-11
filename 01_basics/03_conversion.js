let Name = "SourabhVerma"
let salary1 = 133000
let salary2 = '133000' //double" ya single' me output string ayega. 
console.log(typeof Name); //typeof se hum type ka pta kar sakte he.
console.log(typeof (Name)) //here i passed Name as a method
console.log(typeof salary1);
console.log(typeof salary2);
let salary2InNumber = Number(salary2)
console.log(typeof salary2InNumber); //output me number aya.
console.log(salary2InNumber); //yaha output me 133000 aya.

accountId = "BD205"
console.log(typeof accountId);
accountIdInNumber = Number(accountId)
console.log(typeof accountIdInNumber);
console.log(accountIdInNumber); //NaN is a special type. 

let mistakes = null
console.log(typeof mistakes); //output object
mistakesInNumber = Number(mistakes)
console.log(typeof mistakesInNumber); //output number
console.log(mistakesInNumber);//output 0

let noticePeriod // sirf initiallised kia value assign nahi ki 
console.log(typeof noticePeriod); //output undefined
noticePeriodInNumber = Number(noticePeriod)
console.log(typeof noticePeriodInNumber); //output number
console.log(noticePeriodInNumber);//output NaN

let expertDeveloper = true 
console.log(typeof expertDeveloper); // boolean
expertDeveloperInNumber = Number(expertDeveloper)
console.log(typeof expertDeveloperInNumber); //number
console.log(expertDeveloperInNumber); // true is 1, false is 0

let isLoggedIn = 1
let notLoggedIn = 0
let myStatus = ""
let emp = "Sourabh"
let booleanisLoggedIn = Boolean(isLoggedIn);
let booleannotLoggedIn = Boolean(notLoggedIn);
let booleanmyStatus = Boolean(myStatus);
let booleanemp = Boolean(emp);
console.log(booleanisLoggedIn);
console.log(booleannotLoggedIn);
console.log(booleanmyStatus);
console.log(booleanemp);

let empnumber = 111
let numberInString = String(empnumber)
console.log(typeof empnumber)
console.log(typeof numberInString)
console.log(numberInString)