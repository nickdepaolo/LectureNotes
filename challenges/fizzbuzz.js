/*
FIZZBUZZ CHALLENGE (pair coding)
************
    - create a variable named FB that gets initialized with a number
    - write a conditional that:
        - prints out "Fizz" if the number is divisible by 3
        - prints out "Buzz" if the number is divisible by 5
        - prints out "Fizz Buzz" if the number is divisible by BOTH 3 and 5
*/
​
//else if
// let FB = 3;
// ​
// if (FB % 3 == 0 && FB % 5 == 0){
//     console.log("Fizz Buzz");
// } else if (FB % 5 == 0){
//     console.log("Buzz");
// } else if (FB % 3 == 0){
//     console.log("Fizz");
// } else {
//     console.log(FB)
// }
​
//switch
// switch (true){
//     case (FB % 3 == 0 && FB % 5 == 0):
//         console.log("Fizz Buzz");
//         break;
//     case (FB % 3 == 0):
//         console.log("Fizz");
//         break;
//     case (FB % 5 == 0):
//         console.log("Buzz");
//         break;
//     default:
//         console.log(FB);
// }
// ​
//ternary
// (FB % 5 == 0) ? (FB % 3 == 0) ? 
// console.log("Fizz Buzz") : 
// console.log("Buzz") : 
// (FB % 3 == 0) ? 
// console.log("Fizz") :
// console.log(FB)
// Collapse



function fb (){
    for (x=1; x< 101; x++){
        if (x % 15 == 0) console.log("fizz buzz");
        else if ( x % 5 == 0) console.log("buzz");
        else if ( x % 3 == 0) console.log("fizz");
        else console.log(x);
    }
}

fb()
