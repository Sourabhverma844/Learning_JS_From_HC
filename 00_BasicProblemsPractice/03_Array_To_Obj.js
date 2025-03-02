/*
Count the Elements
Write a function countElements that takes in an array and returns an object a count of each element in the array.
const elements = ["e", "k", "e", "z", "i", "z"];
countElements(elements); // returns {e: 2, k: 1, z: 2, i: 1}
*/
function countElement(elements){
    let elementCount = {};
    for(let i = 0; i < elements.length; i++) {
        if(!elementCount[elements[i]]) {
            elementCount[elements[i]] = 1;
        } else {
            elementCount[elements[i]] += 1;
        }
    }

    return console.log(elementCount);
}
countElement(["a", "b", "c", "c", "d", "d"]);