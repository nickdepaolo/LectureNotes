//*****
//Types
//***** 


/*
BOOLEANS

-Are ONLY true or false values
-Booleans are like light switches
*/

let on = true
console.log(on);

let off = false
console.log(off);


/*
NULL 
-Null is like an empty bucket, it has the capacity to be filled, but it is currently not.
-Intentional empty value = Null; accidental empty value = undifined
*/

let emptyBucket = null
//emptyBucket = 'water'
console.log(emptyBucket);

/*
UNDEFINED
-Currently has no value assigned
-Acts as the means (Plastic/Metal) to create the bucket
*/

let metal; //correct way to assign undefined
//variable
//let metal=undefined;//wrong way to assign, it is redundant


console.log(metal);



//NULL VS. UNDEFINED
//******************** 
//NULL is like an empty bucket, hte bucket is there, but there is nothing in it.
//UNDEFINED is like the materials we will us e to create the bucket

//We can also think of these two variables as pizza boxes 
//-NULL is like the empty pizza box, just waiting for the pizza
//UNDEFINED is like the unassembled pizza box

let emptyBox = null
let unassembledBox;


/*
Numbers
-In JS numbers are literally numbers
-You can add sub mult divide
-You can use decimals
-Rounds numbers after 15 places, rounds up
*/

let degrees = 90;
console.log(degrees);

let precise = 999999999999999
console.log(precise);

let rounded = 99999999999999999
console.log(rounded);

//will console.log() as 0.300000000000004
let notQuite = 0.2 + 0.1
console.log(notQuite);

 //Function to convert a string to numbers IF that that string is a number
 let a = Number(123)
 console.log(a);
 
 
 /*
 STRINGS
 -A string is value in between  a set of quotes or back ticks
 -A string can be denoted by '',"",``
 */

 let stringOne = "double quotes"
 let stringTwo = 'single quotes'
 console.log(stringOne, stringTwo)
 
 //Numbers vs Strings;
 let addition = 1050 + 100
 console.log(addition);
 let concatenation = '1050' + '100'
 console.log(concatenation);

 console.log(typeof addition);
 console.log(typeof concatenation);

 /* 
 OBJECTS
 -Can be denoted {}
 -Objects store 2 things, a key and a value
 -We can access these values by digging into the object with dot notation- object.value
 */

 //say we want to create an app like spotify
 //We want tot ake in an artists name, amount of albums they've produced, all members still alive?

 /*
 ARRAYS

 let list = [ 'item1', 'item2', 'item3']
                (0)      (1)       (2)
-Denote by []
-You can access the value by digging into the array with array[0]
-All arrays are objects
*/

let burritos = ['large', 4, true]

console.log(typeof burritos);

//ADDITION VS CONCATENATION
//Addition is adding numbers together
//Concatenation is adding string together

let add = 100 + 100
console.log(add);

let concat = ('Nick' + 'Depaolo' )
console.log(concat);

let stillConcat = '1050' + 100
console.log(stillConcat);

let firstName = 'Nick'
let lastName = 'Depaolo'
let houseNumber = '2827'
let street = 'W 500 N'
let city= 'Anderson'
let state = 'Indiana'
let zipCode = '46011'

console.log(firstName, lastName, houseNumber, street, city, state, zipCode);

