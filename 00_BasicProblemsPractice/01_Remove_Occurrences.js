/* Remove the Occurrences :-
Given an array of integers and a number, num, find all the occurrences of the number and remove it from the array.
Modify the array directly and do not return anything from this function.

Example:
const array = [1, 2, 3, 1];
removeOccurrences(array, 1);
console.log( array ); // [2, 3]
*/
function removeOccurrences(array, num) {
    for (let i = array.length - 1; i >= 0; i--) {
        if (array[i] === num) {
            array.splice(i,1);
        }
    }
    return console.log(array);
}
removeOccurrences([1,2,3],1);