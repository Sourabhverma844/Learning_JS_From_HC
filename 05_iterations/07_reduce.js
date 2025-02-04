/* 
reduce :-
the reduce () method executes a user-supplied "reducer" callback function on each element of the array, 
in order, passing in the return value from the calculation on the preceding element. 
the final result of running the reducer acros  all elements of the array is a single value.
*/

const myNums = [1, 2, 3]

const myTotal1 = myNums.reduce(function (value_in_accumulator, currentValue) {
    console.log(`acc: ${value_in_accumulator} and curval: ${currentValue}`);
    return value_in_accumulator + currentValue // yaha jo value return hui he 0 + 1 = 1 ab ye jaegi accumulator me 
}, 0) // yaha jo 0 he wo accumulaor ki initial value he.
console.log(myTotal1);

const myTotal2 = myNums.reduce( (accm,curVal) => accm+curVal,10)
console.log(myTotal2)

const shoppingCart = [
    {
        itemName : "DermaCo_Sunscreen",
        Price : 750
    },
    {
        itemName : "Salicylic_Acid_Facewash",
        Price : 400
    },
    {
        itemName : "Ratinol_Nightcream",
        Price : 500
    },
    {
        itemName : "Undereyecream",
        Price : 350
    },
]
const TotalPrice = shoppingCart.reduce( (acc, item) => (acc + item.Price), 0)
console.log(`Your Total is ${TotalPrice} and Tax is ${((TotalPrice*18.5)/100)}`)
console.log(`Your Have To Pay ${TotalPrice+((TotalPrice*18.5)/100)} rs Only.`)
