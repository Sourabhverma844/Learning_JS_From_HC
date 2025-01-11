//syntax for switch case statements
// switch(key){
//     case value:

//         break;

//     default:
//         break;
// }

//Code Select karne ke bad alt + Shift + down arrow se ham copy paste kar sakte he.
// const month = "Jan"
// switch(month){
//     case "Jan":
//         console.log("January");
//         break;
// }
/*Jo bhi data type hum const me key me le rahe he , wahi hame case value me lena hoga match karne ke lie*/
const month = 3
switch(month){
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("June");
        break;
    case 7:
        console.log("July");
        break;
    case 8:
        console.log("August");
        break;
    case 9:
        console.log("September");
        break;
    case 10:
        console.log("October");
        break;
    case 11:
        console.log("November");
        break;
    case 12:
        console.log("December");
        break;
    default:
        console.log("Please enter a valid month number");
        break;
}
/*Do you observe that we write break in each case, if we do not write break.
then it will execute all the cases below the case which is true exept default.
abhi jo new language he for exaple swift usme ye problem nahi he */