//array
/* 
1.) Jab bhi hum array banate he to hum [] square brackets ka use karte he.
2.) arrary ke ander sab elements he ye string bhi ho sakte he number bhi or mix bhi.
3.) javascript me array resizable he matlub ki bad me inme elements badae ya ghatae ja sakte he.
4.) javascript arrays are not associative arrays, so array elements cannot be accessed using arbitrary strings as indexes. means let = [a,b,c] he to b ko acess karne ke lie index no dena hoga na ki b.
5.) arrays has 0 based indexng.
6.) Javascript array-copy operation create shallow copies."A shallow copy of an object is a copy whose properties share the same references (point to the same underlying values, jo change hoga wo orignal array me bhi hoga)"
*/
const myArr1 = [0,1,2,3,4,5,true,"hitesh"]
const myHeros = ["Ironman","Spiderman"]
const myArr2 = new Array(1,2,3,4) //Yaha hum direct value de sakte he 
console.log(myArr1.length)
//Array methods
myHeros.push("Thor") // values ko add karne ke lie
console.log(myHeros);
myHeros.pop()
console.log(myHeros); // array me jo bhi last index ki value he use remove karn ke lie.
myHeros.unshift("HawkEye")
console.log(myHeros); // its add new value on 0th index existing values shifted by +1
console.log(myHeros.includes("Black Widow")); //includes check karke true or false me output dega ki wo array me he ya nahi.
console.log(myHeros.includes("Ironman"));
console.log(myHeros.indexOf("Hulk"));//hulk array me nahi he islia -1
console.log(myHeros.indexOf("Spiderman"));//Spiderman index 2 par rhe 

console.log(myArr1)
console.log(typeof myArr1);
const newArr = myArr1.join() //join operation sabko bind karke string me deta he.
console.log(myArr1);
console.log(newArr);
console.log(typeof newArr);

/* slice, splice
Slice :- returns a copy of a section of a array 
splice :- The zero-based location in the array from which to start removing elements. Removes elements from an array and, if necessary inserts new elements in their place, returning the deleted elements.
*/
console.log("A",myArr1);
const myn1 = myArr1.slice(1,4)//yaha slice ne sare elements me se wo output dia jo hmne manga tha , ya index no 1 include he but 4 exclude he
console.log(myn1);
console.log("9",myArr1); //slice origanal array ko cahnge nahi karna

console.log(myArr2);
console.log("A",myArr2);
const myn2 = myArr2.splice(1,3) //ye operation index 1 2 3 ka element hta dega
console.log(myn2);
console.log("B",myArr2); //splice origanal array ko change kar deta he