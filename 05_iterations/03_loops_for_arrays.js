/* 
High Order Array loops
we have some loops that are specialised for array.
Because jab hum Database se values fetch krenge ya API se koi value ayegi to wo array ki form me ayegi.


1.) for of loop

sytntax :-
for (const iterator of object) {
    
}
1. Here in syntax object is used for a broder term it is not the objects{} of javascript.
2. Here object means koi element jo array[] ya object{} kuch bhi ho sakte he.


["","",""] array me strings he jise ek ek karke hum iteration me le sakte he.
[{},{},{}] array me objects he jise ek ek karke hum iteration me le sakte he.
object, array, string sab iterable he kisi par bhi loop lga sakte he.
*/
const arr = [1,2,3,4,5]
for (const num of arr){
    console.log(num);
}
// is loop me hme sirf variable declare karna he or , btana he ki kis par loop lagega, 
// baki sab kam hmara loop khud kar lega. ki object ki size kya he , kab loop end karna he etc.
const greetings = "Hello_Sourabh_Welcome_in_Ripple"
for (const greet of greetings){
    console.log(`each character is ${greet}`);
}

/* 
Map :- the Map object holds key-value pairs and remember the orignal insertion order of the keys.
any value (both objects and primitive values) may be used as either a key or a value.
*/
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States")
map.set('UK', "United Kingdom")
map.set('UAE', "United Arab Emirates")
map.set('USA', "United States of America")
console.log(map);
//united states 2 bar dia gya he lekin wo ek hi bar ayega kyoki map me duplicate values nahi jati he.

/* Now lets try to apply for of loop on map to see it works or not */
for (const key of map){
    console.log(key);
}
// ye hme output me har ek key value ko array ke roop me de dega.
// for examp ['IN', 'India' ] Kuch is trha se.
for (const [key,value] of map){ //here we sucessfully destructured the array
    console.log(`key is : ${key}, and value is : ${value}`);
    console.log(`Key is : ${key}`);
}

/* Now lets try to apply for of loop on Objects to see it works or not */
// const employe = {
//     'name':'Sourabh',  / name:'Sourabh',
//     'compnay':'ripple', / compnay:'ripple',
//     'salary':'6000000' / salary:'6000000'
// }
// for ( const [key,value] of employe){
//     console.log(`${key}`)
// } 
// it gives us TypeError that employe(object) is not iterable.

/*[ we can iterate on Map using for of loop but we can not iterate on objects using for loop ]*/

//[ Lets try to apply "for in loop" on Map() ]
const employe = new Map()
employe.set('Name', "Sourabh")
employe.set('compney', "Ripple")
employe.set('Salary', "6000000")
employe.set('Place', "New Jersy")

for (const key in employe ){
    console.log(key);
}
// Map pe hamne "for in loop" lagaya, ye runtime pe Error nahi dega, but ye run bhi nahi hoga hence no output.
// Map is not iterable
/* Jab bhi objects ke uper loop lagana ho hum "for in loop" use krenge.
Jab bhi arrays ke uper loop lagana ho hum "for of loop" use krenge. */