/*
-For in loops are great for iterating over values in an object. Properties in objects are what's called enemerable.

-For in loop iterate over an object's enumerable properties
*/

let student = {
    name: "Peter",
    awesome: true,
    degree: "Javascript",
    week: 1
}

for (item in student) {//item could be anything, just a place holder
    console.log(item);//With this active variable printed, name, awesome, etc.
    console.log(student[item]);//"Peter" true, etc printed
}

let catArray = ["tabby","shorthair","burmese","Maine coon","rag doll"];

for (cat in catArray){
    console.log(cat);//Prints array number
    console.log(catArray[cat]);//Prints array strings
}

//Fix Capitalization
let myName = "nIcK";
let capName = "";

for (let i in myName) {
    if (i == 0){
        capName = myName[i].toUpperCase();
    }else{
        capName += myName[i].toLowerCase();//+= is catanation
    }

}

console.log(capName);