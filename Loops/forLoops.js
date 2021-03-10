/*
-Loops offer us a quick and easy way to do something repeatedly, or loop over something.
-There are many kinds of loops, but they all do roughly do the same thing.
    -It will repeat until a specifiied condition evaluates to true
        -For statement
        -Do while statement
        -While statement
        -Labeled statement
        -Break statement
        -For in statement
        -For of statement

Note: there is a danger of infinite loops.
There are three main parts of a loop:
    -Intial expression
    -Condition
    -Increment expression
*/

let i = 7;

for (i = 0; i < 10; i++) {//++ increases by one like + 1
    console.log(i); //i is locally scooped, let can be used inside loop ex: (let i = 0), this is best practice, prevents grabbing global variable
}

console.log("Global i variable", i);

for (let x = 0; x < 21; x = x + 2){
    console.log(x);
}

for (let a = 0; a > -25; a -= 2){
    console.log(a);
}

//Display each letter individually
let friendName = "Kenn"
let count = friendName.length

for (let l = 0; l < count; l++){
        console.log(friendName[l]);
}

