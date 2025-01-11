/* 
High Order Array loops
we have some loops that are specialised for array.
Because jab hum Database se values fetch krenge ya API se koi value ayegi to wo array ki form me ayegi.


1.) for of loop

sytntax :-
for (const iterator of object) {
    
}
/ Here in syntax object is used for a broder term it is not the object of javascript,
/ here object means koi element jo array obj kuch bhi ho sakta he.


["","",""] array me strings he jise ek ek karke hum iteration me le sakte he.
[{},{},{}] array me objects he jise ek ek karke hum iteration me le sakte he.
object, array, string sab iterable he kisi par bhi loop lga sakte he.
*/
const arr = [1,2,3,4,5]
for (const num of arr){
    console.log(num);
}
// is loop me hme sirf variable declare karna he or , btana he ki kis par loop lagega baki sab kam hmara loop khud kar lega.
// ki os object ki size kya he , kab loop end karna he etc.
const greetings = "Hello Sourabh Welcome in Ripple"
for (const greet of greetings){
    console.log(greet);
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
map.set('USA', "United States")
console.log(map);
//united states 2 bar dia gya he lekin wo ek hi bar ayega kyoki map me duplicate values nahi jati he.

//now lets try to apply loop on map.
for (const key of map){
    console.log(key);
}
// ye hme output me har ek key value ko array ke roop me de dega.
// for examp ['IN', 'India' ] Kuch is trha se.
for (const [key,value] of map){ //here we sucessfully destructured the array
    console.log(`key is : ${key}, and value is : ${value}`);
}

// const employe = {
//     'name':'Sourabh',  / name:'Sourabh',
//     'compnay':'ripple', / compnay:'ripple',
//     'salary':'6000000' / salary:'6000000'
// }
// for ( const key of employe){
//     console.log(`${key}`)
// } it gives us TypeError that employe is not iterable
const employe = new Map()
employe.set('Name', "Sourabh")
employe.set('compney', "Ripple")
employe.set('Salary', "6000000")
employe.set('Place', "New Jersy")

for (const key in employe ){
    console.log(key);
}
// map pe hamne for in loop lagaya, ye runtime pe eror nahi dega but as we know map is not iterable.
// ye run bhi nahi hoga
//jab bhi objects ke uper loop lagan ho hum for in loop use krenge and jab bhi arrays ke uper loop lagana ho hum for of loop use krenge.