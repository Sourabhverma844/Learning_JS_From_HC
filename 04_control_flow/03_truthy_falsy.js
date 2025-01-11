/* 
truthsy and falsy value's :-
There is a intresting concept in JavaScript Called truthy Value and falsy Value.
as we know true and false are always remain strict true and false. 
but kuch value esi hoti he jinhe assume kar lia jata ki ki ha ye truth hi hongi ye false hi hongi.
*/
const empEmail = "sourabhverma844@ripple.com"
// yaha hamne koi comparision nahi kia bus man lia ki string true value he to agar waha koi bhi value ayi to hmesa true rahega
if (empEmail){
    console.log(`Hello ${empEmail} welcome in ripple as a smart contract developer`)
}
else{
    console.log("Your Interview date is 15-June-2025");
}

const Email = ""
//empty string ki value false ki trha behave kar rahi he.
//string me koi bhi data nahi tha islia else part run hua, agar koi bhi value string me hoti to true ho jati or if run hota.
if (Email){
    console.log(`Hello ${Email} welcome in ripple as a smart contract developer`)
}
else{
    console.log("Your Interview date is 15-June-2025");
}

const salary = []
// [] empty array ki value true ki trha behave karti he. 
if (salary){
    console.log(`Hello Sourabh welcome in ripple as a smart contract developer your CTC is 6000000`)
}
else{
    console.log("Your Interview date is 15-June-2025");
}

const array = []
if (array.length === 0){
    console.log("array is empty")
}
//Kabhi object empty aya tab kese check krenge
const emptyObj = {}
//as we know Object.keys(objectname) hme keys ka ek array return kar deta he 
if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}

/*
falsy values :- esi values jinhe false assume kiya ja sakta he 
false, 0, -0, BigInt 0n, "", null, undefined, NaN

truthy values :- esi values jinhe truth assume kiya ja sakta he 
single quotes '' me ho ya double quotes "", string ke ander agar koi bhi value a gai to wo truthy value he
"0", '0', "false", 'false', " "yaha string me ander space he, []empty array, {}empty Object, function(){}empty function.

some points to be remember
false == 0
true

false == ''
true

0 == ''
true
*/

//Nullish Coalescing Operator (??): null undefined

let val1;
val1 = 5 ?? 10  //hamne val1 ko assign kia he ki ya to value jaegi 5 ya 10
console.log(val1);

let val2;
val2 = null ?? 10
console.log(val2);

let val3;
val3 = undefined ?? 15
console.log(val3);

let val4;
val4 = null ?? 10 ?? 20 
console.log(val4);

/*
null coalescing operator ko null or undefined ko handle karne me use kar sakte he.
ab question a sakta he ki nullish coalescing operator lga ke 5 or 10, 2 value dene ka kya matlub
hua jab output me first value jo 5 he wahi ana tha, but kai bar kya hota he jab database se call krenge
ya specially firebase wagera use krenge ya appwrite ka use krenge. to apko directly response nahi milta he.
apko 2 values milti he, chances he ki hme null response mile ya kuch aye hi na undefined mile.
to is case me hamara poora ka poora code structure kharab ho sakta he, islia us cases ke lie 
specially nullish coalescing operator banya gya he. ki values ko apko treat karna he ki acha null ho to uske 
ander null assign karlo taki me us hisab se case ko adjust kar lu, undefined ho to theak he warna koi
value a rahi ho to value assign kar do.
val 2 me null or 10 me se 10 a gai, ye operator isi hisab se design kia gya he 
ki null ayi he to ho sakta he ki koi program safety check ki wjha se run na ho islia doosri value ko run kar do
null && 10 && 20 jab ese 3 values ayengi to yaha par jo first value ayegi use output me return krega.
*/ 

// Ternary Operator
// condition ? true : false

const smartcontractdev = 8000000
smartcontractdev >= 6000000 ? console.log("Hi Sourabh You are hired in ripple") : console.log("interview date 5-june-1998")