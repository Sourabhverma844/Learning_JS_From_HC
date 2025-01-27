/* 
reduce :-
the reduce () method executes a user-supplied "reducer" callback function on each element of the array, 
in order, passing in the return value from the calculation on the preceding element. 
the final result of running the reducer acros  all elements of the array is a single value.
*/

const myNums = [1, 2, 3]

const myTotal1 = myNums.reduce(function (accumulator, currentValue) {
    console.log(`acc: ${accumulator} and curval: ${currentValue}`);
    return accumulator + currentValue // yaha jo value return hui he 0 + 1 = 1 ab ye jaegi accumulator me 
}, 0) // yaha jo 0 he wo accumulaor ki initial value he.
console.log(myTotal1);

const myTotal2 = myNums.reduce( (accumulator,currentValue) => accumulator+currentValue,10)
console.log(myTotal2)

const shoppingCart = [
    {
        itemName : "Sunscreen",
        Price : 500
    },
    {
        itemName : "Facewash",
        Price : 250
    },
    {
        itemName : "Nightcream",
        Price : 400
    },
    {
        itemName : "Undereyecream",
        Price : 350
    },
]
const TotalPrice = shoppingCart.reduce( (acc, item) => (acc + item.Price), 0)
console.log(TotalPrice)