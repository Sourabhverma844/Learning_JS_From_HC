/*JavaScript Date objects represent a single moment in time in a plateform-independent format. 
Date objects encapsulate an integral number that represents milliseconds since 
the midnight at the beginning of January 1, 1970,UTC(the epoch)*/
// https://tc39.es/proposal-temporal/docs/index.html

//Date
let myDate = new Date()
console.log(myDate);
console.log(myDate.toString())
console.log(myDate.getMonth()+1); //Because in JS January 0 ki trha treat hota he 
console.log(myDate.getDate());
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleTimeString());
console.log(myDate.toTimeString());
console.log(myDate.toUTCString());
console.log(myDate.getTimezoneOffset());
console.log(myDate.getHours());
console.log(myDate.getMonth());
console.log(typeof myDate);
/* Que :- What is typeof Date()
Ans :- object */

let myCreatedDate1 = new Date(2023, 0, 23)
console.log(myCreatedDate1.toDateString());
//JavaScrit me Month 0 se Start Hote he 
let myCreatedDate2 = new Date(2023, 1, 23)
console.log(myCreatedDate2.toDateString());
let myCreatedDate3 = new Date(2023, 1, 23, 5, 3)
console.log(myCreatedDate3.toLocaleString());

//When You Need Date in YYYY/MM/DD
let myCreatedDate4 = new Date("2023-01-14")
console.log(myCreatedDate4.toLocaleString()); //Sat Jan 14 2023

//When You Need Date in DD/MM/YYYY
let myCreatedDate5 = new Date("02-01-1970")
console.log(myCreatedDate5.toLocaleString()); //Sat Jan 14 2023
console.log(myCreatedDate5.getTime());
console.log("hi")
//First Jan 1970 se abhi tak ka value dega miliseconds me
let myTimeStamp = Date.now()
console.log(myTimeStamp);
//agar ise seconds me convert karna he to 
console.log(Math.floor(Date.now()/1000));

// we can customize what we want under LocaleString
console.log(myDate.toLocaleString('default',{
    weekday: "long"
}));

let myCreatedDate6 = new Date(2023, 0, 26)
console.log(myCreatedDate6);
console.log(myCreatedDate6.getMonth());
console.log(myCreatedDate6.getDay());

