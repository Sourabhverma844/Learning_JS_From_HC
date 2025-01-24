const name = "Sourabh Verma"
const smartContract = " 100+"
// This syntax is outdated 
console.log(name + smartContract); 
/* 
new syntax , here we use ``(Backticks) to do string interpolation and
we create placeholders here and direct inject values
*/
console.log(`Hello my name is ${name}, I Have developed ${smartContract} smart contracts till now.`)

const gameName = new String('Aniket')
// When a string is created using new String(), it becomes a String object, not a primitive string.
console.log(gameName);
console.log(typeof gameName);
console.log(gameName[0]);
console.log(gameName[1]);
console.log(gameName[2]);
console.log(gameName[3]);
console.log(gameName[4]);
console.log(gameName[5]);
//_ _ proto _ _ isse output me empty object milega {} lekin wo empty nahi he isme bahut sari values he.
console.log(__proto__);
console.log(gameName.length);
//as we know string uses stack memeory where copy of the values is created, thats why changes made on copies not on orignal value.
console.log(gameName.toUpperCase()); //upper case banane ke lie
console.log(gameName.anchor("test")); //anchor tag banane ke lie
console.log(gameName.at(0)); // Kis index no par kya he 
console.log(gameName.at(-1));
console.log(gameName.big()); //ye screen par font sige big kar deta he 
console.log(gameName.blink());
console.log(gameName.bold()); // make text bold
console.log(gameName.charAt(0)); // kis index par kya text he 
console.log(gameName.charAt(5)); // 
console.log(gameName.charCodeAt(0)); // return the unicode of character on specific index.
console.log(gameName.codePointAt(0)); // 65 (Same as charCodeAt for BMP characters)
console.log(gameName.concat(" Verma")); // Aniket Verma
console.log(gameName.constructor); // [Function: String]
console.log(gameName.endsWith("et")); // true
console.log(gameName.endsWith("Ani")); // false
console.log(gameName.fixed()); // <tt>Aniket</tt>
console.log(gameName.fontcolor("red")); // <font color="red">Aniket</font>
console.log(gameName.fontsize(5)); // <font size="5">Aniket</font>
console.log(gameName.includes("Ani")); // true
console.log(gameName.includes("xyz")); // false
console.log(gameName.indexOf("i")); // 3
console.log(gameName.indexOf("z")); // -1


console.log(gameName.italics()); // <i>Aniket</i>
console.log(gameName.lastIndexOf("i")); // 3
console.log(gameName.length); // 6
console.log(gameName.link("https://example.com")); // <a href="https://example.com">Aniket</a>
console.log(gameName.localeCompare("Aniket")); // 0 (Equal)
console.log(gameName.localeCompare("Anil")); // -1 (Lexicographically smaller)
console.log(gameName.match(/A/)); // ['A', index: 0, input: 'Aniket', groups: undefined]
console.log([...gameName.matchAll(/i/g)]); // [{value: 'i', index: 3}]
console.log(gameName.normalize()); // Aniket (no visible change)

const url = "https://ripple.com/sourabh%20gmail.com"
console.log(url.replace('%20','844'))
console.log(url.includes('Aniket'))

const me = "Aniket-Verma-JavaScript"
console.log(me.split('-'));

let TestString = "ABCDEFGHIJ"
console.log(TestString.length);
console.log(TestString.toLowerCase());
console.log(TestString.charAt(3));
console.log(TestString.indexOf('D'));

let TestSubString1 = TestString.substring(0,3)
console.log(TestSubString1); // ABC
// Here Last indexNo. means 3 is excluded and index 0,1,2 are printed.

const TestSubstring2 = TestString.substring(-8, 3)
console.log(TestSubstring2); //ABC
//substrings -ve values accept nahi karti he islia yaha par usne 0 se start kar dia he.

let TestSliceString1 = TestString.slice(0,3)
console.log(TestSliceString1); //ABC
// Here also Last indexNo. means 3 is excluded and index 0,1,2 are get printed

/*
String   =  A   B  C  D  E  F  G  H  I  J
+veindex =  0   1  2  3  4  5  6  7  8  9
-veindex = -10 -9 -8 -7 -6 -5 -4 -3 -2 -1 
*/

let TestSliceString2 = TestString.slice(-1, 3)
console.log(TestSliceString2);
/*
TestString = "ABCDEFGHIJ"
Start index(-1): Negative index -1 is converted to string.length + (-1) = 10 - 1 = 9.
End index(3): Positive index 3 remains as is.
Condition: Since the start index (9) is greater than the end index (3), the method returns an empty string ("").
*/

let TestSliceString3 = TestString.slice(-8, 3)
console.log(TestSliceString3);
/*
TestString = "ABCDEFGHIJ"
Start index(-8): Negative index -8 is converted to string.length + (-8) = 10 - 8 = 2.
End index(3): Positive index 3 remains as is.
Condition: Since the start index is (2) end index (3), the method returns C.
in output it includes first index no and go upto last -1.
*/

const newStringOne = "  Sourabh  "
console.log(newStringOne);

// trim only work on whitespaces and line terminators like \n . 
console.log(newStringOne.trim());
// trim function hamari string ke starting and end space ko remove kar deta he
console.log(newStringOne.trimStart());
console.log(newStringOne.trimEnd());

/*as we know ki browser kisi link me agar - aye to use %20 se replace kar deta he 
to use problem ko hum is trah se tackle kar skate he */
let url1 = "https://ripple.com/sourabhverma%20844"
console.log(url1.replace('%20','-'));
console.log(url1.includes('verma'));

/*
If we want to split text from a perticular place and return as as an array
Syntax:
split(separator)
split(separator, limit)
*/
let Iam = "Aniket-Verma-Blockchain-Developer";
console.log(Iam.split('-'));


