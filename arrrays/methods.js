let food =["Pecan Pie", "Shrimp", "Quesadilla", "Cheese Cake", "Hotdog"]

for (foodItem /*placeholder*/ of food){
    console.log(foodItem);
}

food.push("Pizza")
console.log("Push:", food);

let foodSplice = food.splice(1, 2, "Banana")
console.log(foodSplice);
console.log(food);

let foodPop = food.pop()
console.log(foodPop);
console.log(food);

let foodShift = food.shift()
console.log(foodShift);
console.log(food);

let foodUnshift = food.unshift("Popcorn", "Steak")
console.log(foodUnshift);
console.log(food);

