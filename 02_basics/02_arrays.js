const marvel_heros = ["Thor","Ironman","Spiderman"]
const dc_heros = ["Superman","Batman","Flash"]

//as we know array me sabhi trha ka data a sakta he to jese hi hum ek array ko doosre array me push krenge to output me array ke ander array a jaega
marvel_heros.push(dc_heros)
console.log(marvel_heros);
console.log(marvel_heros.at(3)); // index no 3 par jo element he
console.log(marvel_heros[3]); // index no 3 par jo element he
console.log(marvel_heros[3][1]); // index no 3 ke 1 par jo element he

arr1 = [1,2,3]
arr2 = [4,5]
const arr3 = arr1.concat(arr2) // ye array ke ander array nahi dega balki new array bna dega
console.log(arr3);

TeamIron = ['WarMachine','Vision','BlackPanther']
TeamCap = ['WinterSoldier','AntMan','Falcon']
const all_new_heros = [...TeamIron,...TeamCap] //yaha hamne spread operator use kia he , actually concat me limitation he ki 2 array lie jate he par spread operator me hum 2 se jyada array le sakte he.
console.log(all_new_heros);

const Mixarray = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
console.log(Mixarray);
const Simplify1 = Mixarray.flat(1); //flat hme poora array simply krke de deta he , we can also give depth ki hme kis depth tak simplify kare
console.log(Simplify1);
const Simplify2 = Mixarray.flat(Infinity);
console.log(Simplify2);

console.log(Array.isArray("Hitesh")) //yaha check kia ki value array he ya ni
console.log(Array.from("Hitesh")) //yaha value ko array me convert kia 
console.log(Array.from({name:"hitesh"})) //yaha btana pdega ki key ka array bnau ya values ka, kyoki ye direct ni bana paega or empty array dega

/*Jab Hamare Pas Multiple variable or values ho or unhe array me convert karna he */
let score1 = 100 
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3)); //Array.of returns a new array from set of element 