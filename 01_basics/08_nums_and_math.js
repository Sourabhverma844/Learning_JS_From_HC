console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);

const score = 400.50
console.log(score);

const balance = new Number (100000000)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber = 23.8966
console.log(otherNumber.toPrecision(3));
console.log(otherNumber.toPrecision(2));

//toLocaleString :- ye by default us standards ke hisab se output deta he 
let hundreds = 1000000
console.log(hundreds.toLocaleString());
console.log(hundreds.toLocaleString('en-In')); //Indian standards me value dega

/* toPrecision :- Number of significant digits. Must be in the range 1-21,inclusive. it restruns a string containing a number represented either in exponential or fixed-point notation with a specified numbrt of digits*/
console.log(balance.toPrecision(3)); //output 1.00e+6
/*The value 1.00e+6 is written in scientific notation. 

The "1.00" is the base number.
The "e+6" means "multiply by 10 raised to the power of 6.
So, 
   1.00e+6 = 1.00 × 10⁶ = 1,000,000.
In short, 1.00e+6 represents 1 million.*/

/*---------------+++++ Maths +++++---------------*/
console.log(Math)
console.log(Math.abs(-0.4));
console.log(Math.round(4.4)); // Give round-off value .5 se kam he islia 4
console.log(Math.ceil(4.4)); // Give ceil value 4 se thoda bhi jyada to 5
console.log(Math.round(4.6)); // Give round-off value .5 se jyada he islia 5
console.log(Math.floor(4.6)); // Give floar value jabtak 4 ke points me he 4
console.log(Math.min(0,1,2,3,4,5)); // Give min from array
console.log(Math.max(0,1,2,3,4,5)); // Give max from array
console.log(Math.random()); //Generates a random number between 0 (inclusive) and 1 (exclusive). means 0 a sakta he 1 kabhi nahi ayega

const YourDigit = Math.floor(Math.random()*6+1)
console.log(YourDigit);

const MyDigit = Math.floor((Math.random()*10)+10);
console.log(MyDigit);

const min = 10
const max = 20
console.log(Math.random*(max-min+1));