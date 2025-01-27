// kuch loops ararys ke ander direct hi properties me add kar die jate he.
// jese hum is array ko console me ja ke print karte he to we can see in prototype.
// there is foreach loop available in prototype and map also.
// for each loop ka hi ek parametar he jise by default hi inject karke rakha gya he and ye ek higher order function he. 
// forEach(callbackfn): callback function ka matlub he ki muje ek function de do ki muje kya karna he.
// yaha par bhi function ko sab pta he kya length he kya he hme bus function dena hota he.
// callback function me kabhibhi function ka name nahi hota he 
// arrayname.forEach( function (varnam) {

// } )
const coding = ["js", "ruby", "java", "solidity", "python"]
coding.forEach( function (langName){
    console.log(langName);
})

// hum arrow function ka use bhi yaha kar sakte he

const car = ["Pagani Zonda", "Aventador", "Maclaren P1"]
car.forEach( (item) => {
    console.log(item);
} )

// coding.forEach(printMe)
coding.forEach( (item, index, arr) => {
    console.log(item, index, arr);
})

const myCoding = [
    {
        langName : "JavaScript",
        langFileName : "js"
    },
    {
        langName : "Python",
        langFileName : "py"
    },
    {
        langName : "C++",
        langFileName : "cpp"
    }
]
myCoding.forEach( (item) => {
    console.log(item.langName);
} )

console.log("----------------------------------------------------------------------------------------------")

// "for each" hme koi bhi value return nahi karta he 
const bike = ["M15", "Apache", "Pulsar", "Hunk", "Xtream"]

// kya ho agar me "for each" se return ayi value ko variable me store karna chahu.
const bikename = bike.forEach((bname) => {
    console.log(bname); 
    // agar me console.log(bname); ko bhi comment karke // return bname likhu tab bhi undefined ayega
    //return bname // yaha manually return likhne par bhi value undefined hi ayi he
} )
//lets check ki jo hamne var bikename declare kia usme for each ne kya values return ki he
console.log(bikename);
// fir hamne dekha ki isne kuch retun nahi kia he undefined aya.

/* in the end we find out ki for each jo he wo value return hi nahi karta chahe ap chahe ya nahi ye value to 
retun nahi karne wala he. */

/*
Hamesha ye jaroori nahi he na ki hum array se jo value lenge wo hme print hi karana he kai bar ho sakta he 
ki hme koi condition check karna he, ki value ka name java ho to use retun kriye nahi to nahi. 
then fir me ese case me kya krunga, fir to hamara for each loop fail ho jaega.
so  for doing this we have diffrent approch.
*/
myNum = ["1", "2", "3", "4", "5", "6", "7", "8"]
//vartype varname = arrayname.filter ( (callbackfunction) => condition)
// jo bhi value condition ko satisfy kregi or condition true hogi only un values ko return kara jaega 
const newNums = myNum.filter( (num) => num > 4)
console.log(newNums);
//yaha hamne ((num) => num > 4) parenthesis use kiya hua he to hame explicitly return nahi likhna pdega

myNo = ["11", "12", "13", "14", "15", "16"] 
const newNo = myNo.filter( (ank) => {
    return ank>=12
}
)
console.log(newNo);

// Now try to use for each loop here
const Salary = [ 3000000, 4000000, 5000000, 6000000 ]
const mySalary = [];
Salary.forEach( (Money) => {
    if (Money >= 4500000) {
        mySalary.push(Money)
    }
} );
console.log(mySalary);

const allBooks = [
    { title:'Book One', genre: 'fiction', publish:'1981', edition:2010},
    { title:'Book Two', genre: 'non-fiction', publish:'1982', edition:2011},
    { title:'Book Three', genre: 'Drama', publish:'1983', edition:2012},
    { title:'Book Four', genre: 'Science', publish:'1984', edition:2013},
    { title:'Book Five', genre: 'Philosophy', publish:'1985', edition:2014},
    { title:'Book Six', genre: 'Phycology', publish:'1986', edition:2015},
    { title:'Book Seven', genre: 'Sociology', publish:'1987', edition:2016},
    { title:'Book Eight', genre: 'Technical', publish:'1988', edition:2017},
    { title:'Book Nine', genre: 'Trading', publish:'1989', edition:2018},
    { title:'Book Ten', genre: 'Sales', publish:'1990', edition:2019},
];
let myBooks = allBooks.filter( (UserBooks) => UserBooks.genre === 'Sales' )
console.log(myBooks);
myBooks = allBooks.filter( (UserBooks) => UserBooks.genre === 'Technical' )
console.log(myBooks);
myBooks = allBooks.filter ((UserBook) => UserBook.title === 'Book Five' )
console.log(myBooks)
myBooks = allBooks.filter ( (NonExit) => NonExit.genre === 'Science' )
console.log(myBooks)
myBooks = allBooks.filter ( (UserBook) => UserBook.genre === 'Heroism')
// if jo data humne manga he wo available nahi hua to ye hme ek empty array de dega output me 
console.log(myBooks)
myBooks = allBooks.filter ( (UserBook) => { return UserBook.edition >= 2017 && UserBook.genre === 'Technical'})
console.log(myBooks)
myBooks = allBooks.filter ( (UserBook) => { return UserBook.edition >= 2019 || UserBook.genre === 'Technical'})
console.log(myBooks)
myBooks = allBooks.filter ((UserBook) => UserBook.genre === 'Technical')
console.log(myBooks)