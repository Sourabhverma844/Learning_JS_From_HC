/*
jese hum koi project me shoping cart banaenge to wha user cart me cheeje ad karte hi jata he to hme ni pta hota ki kitne no of items waha ayenge, hme bus sabki price add karna hoti he,
hame nahi pta ki kitne arguments ane wale he , hme kis hisab se unke parameters tiyaar krna he.
...(rest operator) to ise tacle karne ke lie hum rest operator ka use karte he. ha ye dikne me same hi spred operator ke but hum kaha use kar rahe he ye ispe depend karta he 
*/
function calculateCartPrice(...num1){
    return num1
}
console.log(calculateCartPrice(200,300,400,500,600));
/*
Que :- let (val1,val2,...num1) kar dia to ab ...num1 me kya value jaegi
*/
function calccartprice(val1,val2,...num1){
    return num1
}
console.log(calccartprice(200,400,500,600))
// Yaha par val1 or val2 me 200 or 400 chala gya or rest poora array me gya

//object's ko hum kese function me pas kar sakte he
const user = {
    username: "Sourabh Verma",
    salary: 6000000
}
function handleObject(anyobject){
    console.log(`${anyobject.username} is working as a blockchain developer in ripple and his CTC is ${anyobject.salary} rs only.`);
}
handleObject(user)
// hum direct objects bhi pas kar sakte the
handleObject({
    username:"Aniket Verma",
    salary:"5000000"
})

//array's ko hum kese function me pas kar sakte he
//let jo hme array dia rahega hme uski 2nd value ko print karna he matlub index no 1 ko
const myNewArray = [200,400,100,600]
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray))
// hum yaha direct array bhi pas kar sakte the
console.log(returnSecondValue([200,300,100,600]))
