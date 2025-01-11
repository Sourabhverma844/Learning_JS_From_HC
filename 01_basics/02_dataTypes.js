/*pahle or aaj ki JavaScript me bahut jyada farak he pahle classes, 
arrow functions ye sab nahi Hua karte the Lekin ab He.
JavaScript ki organization nahi chahti thi ki purana code kharab ho Jae
beacuse developers to new version ke hisab se new code use kar rahe he,
to ab poore code ko ek new code ki trha use krna he,Kyoki sara code run to engine se hi hona he. 
thats why we write
"use strict" (jo ki engine ko btata he ki treat all code as newer version).
but abhi JavaScript itna advanced ho chuka he ki hme ye line bhi likhne ki jarurat nahi he.
because ye by default strict mode me he.*/

//alert(3 + 3); we are using node js not browser islia run nahi hoga, agar hum ise browser pe likhe hote to run ho jata or 6 output deta kyoki browser me JavaScript ka engine chupa hota he.

// JavaScript ka orignal jo documantation tc39.es par availale he. ise ecma script kahte he.
/*pahle JavaScript me sabke alag-alag standards the, because of diffrent
browsers, so all members decided to form an organization and decide one
standard that follows by all. to ye organization sirf standards likhti he
JavaScript code nahi. in standards me likha hota he ki
Jese ap loop lga rahe he to kis trha se input lena chaiye, ese output ayega ye sab */

let Name = "Sourabh Verma" // "String" we can also wite this under single''
let age = 24  // "number" isme "integer" or "float" dono hote he iski range 2^53 hoti he
let isLoggedIn = false // "boolean" value
let state; //Hamne variable define kia he lekin value nahi di to undefined output ayega
null 
console.table([age,isLoggedIn,Name,null])
//null = standalone value jab koi bhi value na dena ho empty dena ho tab hum use karte he.
//symbol = Jab bhi hum bat karna he unique ke lie , to hum symbols use kar lete he, iska use react me jyada hota he.
// object 
console.log(typeof age)
console.log(typeof state)
console.log(typeof null)
//typeof se hum kisi ka bhi type jan sakte he.
//undefined khud me hi ek special value he or iska type undefined hi he. 
//null ek object type he. 