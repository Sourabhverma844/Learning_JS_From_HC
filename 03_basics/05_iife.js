/*
JavaScript have a unique concept iife(immideatly invoked function expression) 
kai bar hum chchte he ki jese hi hamne function likha use turant execute karwana he

but why we need such function jo immediately execute ho jae
reson is that ki kai bar hum ek file likhte he jisme sirf databse connection he to hum chahte he 
jese hi hamari application start ho wese hi us file me hamara database connection start ho jae,

kai bar esa bhi hota he ki hamare global scope me kuch variable declare hote he 
or jo function hum likh rahe he hum nahi chchte ki hamare function ke ander global variable kuch problem kre, 
kyoki child ke lie matlub hamare function ke lie to global variable available he pahle se, 
to ese me hum function me kuch declare kre to wo global scope se pollute ho jata he.

to yah 2 main reson he 
gloal scope se hme polution ni chaiye bilkul bhi to hum apna alag ek poora scope bna lete he kyoki
function me to scope ban hi jata he,
or hum ye bhi chahte he ki wo wahi par immediately execute ho jae.

*/

//agar hum normal bhi likhe to bhi function immediately execute to ho jaega
(function ripple(){
    console.log(`DB CONNECTED`);
})(); //hmara concern ye he ki global scope se function pollute na ho.
//syntax of iife ()() or (functiondefination)(execution)

/*
Que :- What is iife and why we use it ?
Ans :- ese function jo immediately execute ho jae, we use iife to tackle the 
problem of polution caused by global variable in our function.
"We use IIFE to avoid the problem of global variable pollution by encapsulating variables and functions within a local scope."
*/
//Try karte he ki kya hum iife ko arrow function ki trha likh paenge
// ( () => {
//     console.log("DB2 Connected");
// } )()  // hamne ise run karke dekha but ye run nahi hua isne eroro dia 
//esa ni ki arrow function iife me use nahi ho sakte 
// reason ye he ki hanme ripple ko iife functtion bnaya he ya invoke kia he to use bnatana pdega ki context rokna kaha he 
// iske lie hum last line me () ke bad ; parenthesis lagaenge, jisse ki ise pta chal ji context kaha par khtm 
( () => {
    console.log("DB2 Connected");
} )();

( function add(){
    // here we give a name it means it is a named iife
      console.log(5+5)
})();

//yaha par iska koi name nahi he to ye simpe iife he
( (empname) => {
    console.log(`Welocme in ripple ${empname} your CTC is 6000000 per annum.`);
})("Sourabh");