/* 
for in loops
syntax for for in loop :-
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
for (const key in emp){
    console.log(emp[key]);
}
for (const key in emp){
    console.log(`${key} is ${emp[key]}`);
}

//kya hum is for in loop ko arrays par use kar sakte he, lets do the practicle and see

const myHeros = ["myFather","Superman","Deadpool","Goku","Vegeeta","Zoro"]
for (const name in myHeros){ // yaha jo mene name likha he waha koi bhi var name dia ja sakta he
    console.log(name); 
}
for (const key in myHeros){
    console.log(myHeros[key]);
}
// output me hme index no milenge jabki for of loop me hme direct values mil jati thi
// kyoki array me array ki index jo 0 sestart hoti he wo by default key hoti he 
// thats why objects ka use hona suru hua jaha hum apni marji se key dal sakte he
