//A ternary basically acts as a shortcut to writing if, if/else, and else/is statements.

let num = 5;

//ternary
(num > 0) ? console.log("yes") : console.log("no");

//Instead of
if (num > 0) {
    console.log("yes");
}else{
    console.log("no");
}

(num == 0) ? console.log("Hello") : (num < 0) ? console.log("Hi") :
console.log("Goodbye");

if (num == 0){
    console.log("Hello");
}else if(num < 0){
    console.log("Hi");
}else {
    console.log("Goodbye");
}

let age = 23;

(age < 18) ? console.log("You're too young to do anything fun.") :
(age < 21) ? console.log("You can vote.") :
(age < 25) ? console.log("You can drink.") :
console.log("You can rent a car.");