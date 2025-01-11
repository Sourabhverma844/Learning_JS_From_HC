const accountId = 844
let accountEmail = "Sourabh@blockchaindev.com"
var accountPassword = "123456"
accountCity = "Germany"
console.log(accountId);
// accountId = 2 (is not allowed beacase ham pahle hi const me accountId me ek value store kar chuke he, or const variable me hum value ko reassign nahi kar sakte he.)

accountEmail = "Aniket458@JavaScript.com"
accountPassword = "54321"
accountCity = "Indore"
console.log(accountEmail);
let accountState;
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
// accountState "undefined" output dega because hamne variable to initialize kar dia but value assign nahi ki.

/* Question : Hum let Or var Dono Ki Value Ko Change Kar Pa Rahe He, 
Fir Hame Dono Ki Jaurat Kyo He Hum Kisi Ek Ko Hi Har Jgha Use Kar Lete ?
Answer : initially JavaScript scope ke base par kam hi nahi karti thi, 
JavaScript me scope ka ek problem tha, ye blockScope ko control nahi kar
pati thi, ab ese me koi new programmer aya or usne var me change kia to
jaha bhi var ka refrence dia hoga wo sab jgha change ho jaega.
islia hum let ka use karne lge. */
// "var" is function scoped and "let" is block scoped.
// final note please do not use "var" use "let" insted.

/* Question : accountCity me hamne direct Value di na var likha na let likha fir ye kese chal gya ?
Answer : in JavaScript hum direct bina datatype die variable bna sakte he ya value store kar sakte he. */
