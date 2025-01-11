const MyNumbers = [5, 10, 15, 20, 25, 30]

const newno1 = MyNumbers.map( (num) => num+2);
console.log(newno1);
// map value ko automatically returm kar skata he.

const newno2 = MyNumbers.map( (num) => {
    return num = num+15
})
console.log(newno2);

// how chainning works
// In chaining, we can use two or three methods together.
const newno3 = MyNumbers
                        .map( (num) => num * 2 )
                        .map( (num) => num + 1 )
                        .filter( (num) => num >= 40 )
console.log(newno3)
