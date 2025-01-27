/* 
for in loops 
syntax for "for in" loop :-
for (const key in object) {

}
*/
const emp = {
    name : 'Sourabh',
    company : 'ripple',
    salary: '6000000'
}
for (const key in emp){
    console.log(key);
}

console.log("-------------------------------------------------------------------------")

for (const key in emp){
    console.log(emp[key]);
}

console.log("-------------------------------------------------------------------------")


for (const key in emp){
    console.log(`${key} is ${emp[key]}`);
}


console.log("-------------------------------------------------------------------------")


//Let's find out can we use "for in loop" on arrays

const myHeros = ["myFather","Superman","Deadpool","Goku","Vegeeta","Zoro"]
for (const name in myHeros){ // yaha jo mene name likha he waha koi bhi var name dia ja sakta he
    console.log(name); 
}
/*
Output me Hme IndexNo.(key) milengi Jabki "for of loop" me hme direct values mil jati thi.

kyoki array me by default jo uski index hoti jo 0 se start he wahi key he or wo by default numbers he, 
thats why objects ka use hona suru hua jaha hum apni marji se key dal sakte he.
*/

for (const key in myHeros){
    console.log(myHeros[key]);
}

