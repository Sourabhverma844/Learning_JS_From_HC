const MyNumbers = [3, 8, 13, 18, 23, 28, 33, 38, 43, 48]

const newno1 = MyNumbers.map( (num) => num+2);
console.log(newno1);
// map value ko automatically returm kar skata he.

const newno2 = MyNumbers.map( (num) => {
    return num = num+12
})
console.log(newno2);

console.log('"------------------------------------------------------------------"')
// how chainning works.
// In chaining, we can use two or three methods together.
const newno3 = MyNumbers
                        .map( (num) => num * 2 )
                        .map( (num) => num + 1 )
                        .filter( (num) => num >= 40 )
console.log(newno3)
