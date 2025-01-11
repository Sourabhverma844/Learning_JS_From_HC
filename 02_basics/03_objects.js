/*
Objects ko define karne ke 2 treeke he , ek he litral ki trha or ek he constructor ki trha.
singleton object :- jab kbhi hum constructor ka use krke bnaenge to singleton object banta he. matlub ye apni trha ka ek hi object he. 
objects that are not singleton :- jab bhi hum literals ka use karke banaenge to singaleton nahi banta he, uske multiple instances ban jate he.
*/

//object literals
const mySym = Symbol("key1")
/*Most of The Time interviewer asked
He Says :- ek symbol lo use object ki keys me enter kro or muje print karke dikha do ?
Then :- */
//1st method yaha print to hoga par sahi treeka nahi he
const JsUser = {
    name: "Sourabh",
    "full name": "Sourabh Verma", //ise . se acess nahi kia ja sakta he
    age: 26,
    mySym: "myKey1",//isse hum sym print kra lenge but type string ayega (ye sahi treeka nahi he)
    [mySym]: "myKey2",//yaha actually me hum symbol ko refer kar rahe he
    location: "Bhopal",
    email: "Sourabh@Blockchain.com",
    isLoggedIn: true,
    LastLoginDays:["Monday","Thrusday","Today"]
}
//yaha jo hamene name: likha he by default system ise "name:" is trha string me process karta he 
console.log(JsUser.email);//yaha . he islia string ki trha email nahi dia
console.log(JsUser["email"]);//yaha string ki trha "email" dena pdega
console.log(JsUser["full name"]); //"full name" ko hum .se acess nahi kar sakte chahe kuch ho jae 
console.log(JsUser.mySym); //Ye print to ho gya but jab typeof check krenge to pta lagega ki string he , islia ye  treeka galat he
console.log(typeof JsUser.mySym);
console.log(JsUser[mySym]); //This is correct syntax and correct way
console.log(typeof JsUser[mySym]);

// hum object ki values ko . notation acess or change karte he 
console.log(JsUser.email);
JsUser.email = "SourabhVerma@solidity.com"
console.log(JsUser.email);
//Object.freeze(JsUser) //Yaha hamne object ko freeze kar dia he so ab changes nahi ho paenge
JsUser.email = "Aniketverma@gmail.com" //ye change ni ho paega kyoki object freeze he
console.log(JsUser);

// remember javascript me jo bhi function hite he hum unhe variable ki trha treat kar sakte he.
JsUser.greeting = function(){
    console.log("Hello Js User");
}
console.log(JsUser.greeting); //output me [Finction(anonymous)] yaha function return back hua, matlub function execute nahi hua sirf function ka refrence aya he.
//console.log(JsUser.greeting()); TypeError: JsUser.greeting is not a function kyoki hamne JsUser ko Freeze kar rakha tha, abhi freeze wali code line ko comment out kar dia he.
console.log(JsUser.greeting());

//ek new function ban rahe he greetingsTwo name se isme hum JsUser object me jo name he use refrence krenge
//jab bhi hme same object ko refrence karna he t to this.key
JsUser.greetingTwo = function(){
    console.log(`Hello JsUser, ${this.name}`);
}
console.log(JsUser.greetingTwo());