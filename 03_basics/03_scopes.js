let a = 10  //ye global scope he, yaha hum jo bhi likhenge wo value sab jgha available hogi
const b = 20
var c = 30
console.log(a);
console.log(b);
console.log(c);
//sometimes hum soch sakte he ki var kam kar raha he fir ye let or const kyo
//scope {curley braces hi scope he jab ye kisi function ke sath ayega ya if elese ke sath ayega}

if(true){ //ye poora block scope he
    // scope ke ander ki value bahar available nahi hona chahiye
    let d = 10
    const e = 20
    var f = 30
    c = 40
}
//console.log(d); ye error dega ki d is not defined
//console.log(e); ye bhi error dega ki d is not defined
console.log(f); //f scope ke ander define he but fir bhi isne bahar prin kar lia
console.log(c);
/*hum apne browser ke console me jo scope dekhenge wo alag he or jab actually me code environment me node ke through check karte he wo alag he*/


//nested scope
function companey(){
    const compneyName = "Ripple"

    function employe(){ //yaha ye ander ka function employe(), bahar ke function companey() ko acess kar pa raha he, ise closour kaha jata he oe we can say ki child function parent ke variable ko acess kar pa raha he
        const empName = "Sourabh Verma"
        console.log(compneyName);
    }
    employe()
    //console.log(empName); //ya eror ayega empName not defined kyoki wo employee ke block scope me he
}
companey();

if (true){
    const username = "sourabh"
    if (username === "sourabh"){
        const website = "_youtube"
        console.log(username + website);
    }
    //console.log(website);
}
//console.log(username);

//+++++++++++++++++++ interesting +++++++++++++++++++
//this is first type jis trha hamne function define kia he
function addone(num){
    return num + 1
}
console.log(addone(5))
//this is second type jis trha hamne function define kia he
//in js variables are very powerful hum unme json ya objects ya function kuch bhi hold kar sakte he 
//yaha par addTwo ko hum expression bol sakte he
const addTwo = function(num){
    return num + 2
}
console.log(addTwo(5))

//agar hum function call ko function ke declaration se pahle le jae tab.
console.log(addThree(5))
function addThree(num){
    return num + 3
} //ok it will not give any problem run ho ke output me 8 de dia