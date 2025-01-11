// if statement syntax
// if (condition){
//     //code to be  executed if condition is true
// } 

const isUserLoggedIn = false
const isUserNotLoggedIn = true

//this code will not run because the vlue is explicitly set to false , it also not work when you put isUserLogged In There
//because it is also false.
if(false){
    console.log("Hi");
}
if(isUserNotLoggedIn){
    console.log("Hello");
}
if(2 == "2"){
    console.log(` 2 is equal to "2"`)
} // yah sirf value check hui or true aya islia run ho gya
if(2 === "2"){
    console.log(` 2 is equal to "2"`)
} //yaha type bhi check hua or value false ayi islia run ni hua
// single = se hum value assign karte he
// double  == se hum value compare karte he
// triple === se hum value and type compare karte he

const temprature = 41
if(temprature < 50){
    console.log("less than 50");
}
console.log("greater than 50");
// yaha hmesha dono code run ho rahe he , the rason is that ki line no 31 ka code 28 ke code se indipendent he 
// we can use else keyword with if to tackle this type of situation
// if else is a conditional code it onle execute one of the two code blocks

const age = 18
if(age >= 18){
    console.log("You Can Vote");
}
else{
    console.log("You cant vote");
}

const CTC = 8000000
if (CTC > 6000000){
    let profile = "Blockchain Developer"
    console.log(`Sourabh Verma work as a ${profile} in ripple since 2025`)
}
// console.log(`Sourabh Verma work as a ${profile} in ripple since 2025`);
// ye line hme profile is not defined eror degi
// because hamne let use kia he jo ki block scope rule ko follow krega
// or hamne ye code block scope ke bahar likha he

//short hand notation
const balance1 = 1000 
if(balance1>500) console.log("test1");
// ye ek hi line me execute hota he , ise implicit scope kahte he ham , lga ke multiple lines likh sakte he 
// but wo code readablity ko decrese kar deta he.
const balance2 = 2000
if(balance2>750) console.log("test2"),
console.log("test3");

//Now let talk about Nesting 
if (balance2 < 500){
    console.log("Less than 500");
}
else if(balance2 < 750){
    console.log("Less than 750");
}
else if(balance2 < 900){
    console.log("Less than 900");
}
else{
    console.log("less than 2200");
}

// (var1 && var2) yaha par && ki wjha se dono condition true hona chahiye tabhi code run hoga,
// && ise and statement kahte he.
// we can also use (var1 && var2 && var3) or ek bhi galat hua to hum us code ke ander jate hi ni he.
const userLoggedIn = true
const debitCard = true
const LoggedInFromGoogle = false
const LoggedInFromEmail = true

if(userLoggedIn && debitCard){
    console.log("Allowed To Buy Course");
}

// we use || or operator to chech if any one condition is true code will run
if(LoggedInFromEmail || LoggedInFromGoogle){
    console.log("User Sucessfully Logged In"); 
}