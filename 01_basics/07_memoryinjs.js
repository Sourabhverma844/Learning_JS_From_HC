//There is two type of memory in JavaScript Stack(), Heap()
/* Jitne bhi primitive data types he wo Stack Memory ka use karte he and
non-primitive datatype he wo Heap memory ka use karte he */
/*jab Bhi stack memory define hoti he to hme variable ka copy milta he, or jab bhi heap ke ander define hoti he to hme orignal value ka refrence milta he*/

let myYoutubename = "SourabhVermaweb3.0"
let anothername = myYoutubename
anothername = "AniketVermaweb3.0"
console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email:"user@google.com",
    upi:"user@ybl"
}
let userTwo = userOne
userTwo.email = "sourabh@blockchain.com"
console.log(userOne.email);
console.log(userTwo.email);