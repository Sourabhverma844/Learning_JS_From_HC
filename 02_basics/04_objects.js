const aniket = new Object() //This is a Singleton object
const sourabh = {} // This is a non-singleton object literal, key value 
console.log(aniket);  //{}
console.log(sourabh);  //{}
console.log(typeof aniket);
console.log(typeof sourabh);

const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

console.log(tinderUser);

const regularUser ={
    email: "sourabhverma@ripple.com",
    fullname:{
        userfullname:{
            firstname: "sourabh",
            lastname: "verma"
        }
    }
}
const Heros = {
    email: "Sourabhverma@ripple.com",
    marvelheros:{
        avengers:{
            TeamCap: "Winter Soldier",
            TeamIronman: "Spiderman"
        }
    }
}
console.log(regularUser.fullname.userfullname.lastname)
console.log(Heros.marvelheros.avengers.TeamCap)

const obj1 = {
    1: "a",
    2: "b",
}
const obj2 = {3:"a",4:"b"}
const obj5 = {5:"a",6:"b"}

const obj3 = {obj1,obj2} //wahi hua jo array me hua tha ek object ke ander 2 object a gae
console.log(obj3);

const obj4 = Object.assign({}, obj1, obj2, obj5); 
           //Object.assign(target, source);
console.log(obj4);

const obj6 = {...obj1,...obj2,...obj5} //Spread operator
console.log(obj6);

//database se jab bhi data ayega let suppose users aye to , array of objects ki form me ayega.
const user = [
    {
        id: 1,
        email: "A@ripple.com"
    },
    {
        id: 2,
        email: "N@ripple.com"
    },
    {
        id: 3,
        email: "I@ripple.com"
    }
]
console.log(user);
console.log(user[2].id);
console.log(user[2].email); //array ke ander objects he to . se acess kar lia yaha par indexing 0,1,2 he 

console.log(tinderUser);
console.log(Object.keys(tinderUser)); //ye hame sari keys ka ek array bna ke de dega ab hum ispe loop lga sakte he
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));//ek array ke ander key values ke aaray bna die.
//kai bar hum objects ke ander ek poora loop through kar rahe he or ek value nikal rahe he, to kai bar value nikalte waqt ho sakta wo value exits hi na karti he to crash hone ke cahnce he 
// ab yaha isse bachne ke lie ya to hum use manually value de de ya simply usse pooch le object se.
console.log(tinderUser.hasOwnProperty('isLoggedIn')); // isse hme pta chalega ki koi particular property us object me exist karti he ya nahi.
console.log(tinderUser.hasOwnProperty('isLoggedOut'));

//destructuring of objects in JavaScript

const emp = {
    empname: "Sourabh Verma",
    salary: 6000000,
    profile: "smart contract dev"
}
console.log(emp)
//console.log(emp.empname); is code me koi dikkat ni he lekin kai bar isi ko 3 bar print krna he to fir hum doosra syantax use krenge.
const {empname} = emp
//var {key} = Jis Object Se Hme Key Lena He.
console.log(empname);

const {profile:job} = emp //yaha object ko destructure kar dia,profile ko job name de dia ab jab bhi acess krna ho direct job  type kar denge
//var {key : newkey} = ObjectName
console.log(job)
console.log(emp.profile)

/*What is API
let assume ke hotel me gae or menu me se koi dish order kar di, ab ye apki chinta nahi he kii wo ata tel kaha se lae kese bnae wo sab chef ki prblem, so API documentation is just like that menu ki apko kya chahiye data me baki API ke backend pe sab kese ho raha he wo janne ki hme abhi jarurat nahi 
API me hme backend se values ati he pahle xml structure me ati thi abhi Json me ati he.
Json bacially object hi he bus isme key or value dono string me hoti he 
ek esa object jiska koi name nahi he
examp: https://api.github.com/users/hiteshchoudhary
hum fetch method se is url ko call krunge to response me hme data mil jaega
as we know how objects work to me data ko object me convert kar lunga or ek ek value nikal lunga.
*/
// {
//    "name":"Sourabh",
//    "profile":"BlockchainDeveloper",
//    "salary":"7Digitsperannum"
// }
//Jaroori Nahi he ki har bar hme API object me hi mile, kai bar wo array ke formate me bhi mil sakti he, like array of objects
//to hum array ke uper loop lga ke objects ko ek ek karke le sakte he
// [
//     {},
//     {},
//     {}
// ]
//Example api : https://randomuser.me/ copy
//Json Formater me ja ke formate and beautify