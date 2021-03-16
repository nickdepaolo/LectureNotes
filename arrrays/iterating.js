let food =["Pecan Pie", "Shrimp", "Quesadilla", "Cheese Cake", "Hotdog"]

//regular for loop

for (let i = 0; i < food.length; i++){
    console.log(food[i]);}

food.forEach(foodItem/*placeholder*/ => console.log(foodItem));

//The for each method cannot return a value

food.forEach((foodItem, index) => console.log(foodItem, index));

let movies = ["A Clockwork Orange", "The Shining", "Full Metal Jacket"]

for (let x = 0; x < movies.length; x++){
    console.log(movies[x]);}

movies.push("2001: A Space Odyssy")
console.log(movies);

//movies.forEach(moviesItem/*placeholder*/ => console.log(moviesItem));

let moviesSplice = movies.splice(0, 1, "Spartacus")
console.log(movies);

