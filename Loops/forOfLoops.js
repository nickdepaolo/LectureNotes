/*
-For of loops and for in loops both do the same thing whicj is loop over data structures, there is one key difference, what they iterate over
    -For in loops iterate over the enumerable properties in an object
    -For of loops iterate the values of an iterable object
*/

let catArray = ["tabby","shorthair","burmese","Maine coon","rag doll"];

for (cat of catArray){
    console.log(cat);
}
//Cannot use for of loops on objects without indicies
let student = {
    name: "Peter",
    awesome: true,
    degree: "Javascript",
    week: 1
}

for (stud of student){
    console.log(stud);
}

//For of loops are best used on arrays
//for in loops are best used on objects