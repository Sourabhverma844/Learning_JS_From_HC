const name = "Sourabh Verma"
const smartContract = " 100+"
// This syntax is outdated 
console.log(name + smartContract); 
/* new syntax , here we use ``(Backticks) to do string interpolation and
we create placeholders here and direct inject values*/
console.log(`Hello my name is ${name}, I Have developed ${smartContract} smart contracts till now.`)

const gameName = new String('Aniket')
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

const url = "https://gmail.com/sourabh%20gmail.com"
console.log(url.replace('%20','844'))
console.log(url.includes('Aniket'))

const me = "Aniket-Verma-JavaScript"
console.log(me.split('-'));