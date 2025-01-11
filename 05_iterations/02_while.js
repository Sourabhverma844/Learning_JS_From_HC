/*Syntax for while loop*/
// while(condition){
//     code to be execute;
// }
/*
while loop me pahle condition check hoti he uske bad decide hota he ki loop run hoga ya nahi.
kyoki hum while loop me sirf condition likhte he check karne ke lie,
islia hme initialisation, execution or incrememnt sab khudse likhna hoga.
*/
let index = 0
while (index <= 10){
    console.log(`Value of index is ${index}`);
    index = index + 2 // condition jo loop ko terminate karne me help kre
}
let myHeros = ["MyFather","Flash","IronMan","SuperMan"]
let arr = 0
while(arr < myHeros.length){
    console.log(`${myHeros[arr]}`);
    arr = arr + 1
}

/*Syntax for do while loop*/
// do {

// } while (condition);
// do while loop me pahle loop ek bar run hoga uske bad condition check hogi
let score = 1
do {
    console.log(`Score is : ${score}`);
    score++
} while (score <= 10);

let run = 11
do {
    console.log(`Run is : ${run}`);
    run++
} while (run <= 10);


/* "What is Diff Btw while and do while loop" */