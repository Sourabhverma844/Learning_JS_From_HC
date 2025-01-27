// for (var declaration; (condition check yaha se code execute hone jaega); yaha val me increment decrement){
//     yaha hum code likh denge
// }
// for(initialization/condition/increment or condition change)
for (let a = 0; a <= 10; a++){
    const element = a;
    if(element == 5){
        console.log("its my birth day")
    }
    console.log(element);
    // hum element ko bahar acess nahi kar sakte kyoki ye scpe ke ander define kia gya he
}
console.log("--------------------------------------------------------------------");
for(let i = 0; i <= 3; i++){
    console.log(`Outer Loop Value : ${i}`)
    for(let j = 0; j <= 5; j++)
        console.log(`Inner Loop value : ${j}`)
}
console.log("--------------------------------------------------------------------");

for (let a=1;a<=10;a++){
    console.log(`The Value is : ${a}`);
    for(let b=1; b<=10; b++){
        console.log(`${a}*${b} = ${a*b}`);
    }
}

console.log("--------------------------------------------------------------------");

let empName = ['S','O','U','R','A','B','H'] //empName name ka ek array declare kia 
for(let index = 0; index < empName.length; index++){
   console.log(element = empName[index]);
}

console.log("--------------------------------------------------------------------");


let MyHeros = ["MyFather","Flash","Batman","Superman","IronMan","CaptainAmerica"]
for(let index = 0; index < MyHeros.length; index++){
    console.log(MyHeros[index]);
}

/*har Bar ye jaroori nahi ki hamne ek bar loop start kar dia to poora hi print karna he 
kai bar hum chahte ke hi kisi particlar conditon ke ane par hum loop ko end kar de
iske lie hamare pas 2 imp keyword he
break and continue*/

for(let i = 1; i<=20;i++){
    if (i%5==0){
        console.log(`${i} is divisible by 5`);
        break //break keyword me condition match hote hi execution ko wahi par stop kar dia jata he
    }
    console.log(`value of i is : ${i}`);
}
for(let i = 1; i<=20;i++){
    if (i%5==0){
        console.log(`${i} is divisible by 5`);
        continue //continue keyword me condition match hote hi us condition use skip karke next value se execution start kia jata he
    }
    console.log(`value of i is : ${i}`);
}