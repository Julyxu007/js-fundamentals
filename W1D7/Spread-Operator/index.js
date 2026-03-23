// spread operator = ...allows an iterable such as an array or string to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected, or an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected.
// (unpack the elements)

// let numbers = [1,2,3,4,5];
// let max = Math.max(...numbers);
// let min = Math.min(...numbers);

// console.log(max);
// console.log(min);

// let username = "July"
// let letters = [...username]; // ["J", "u", "l", "y"]
// let newLetters = [...username].join("-"); // "J-u-l-y"

let fruits = ["apple", "banana", "grapes", "orange"];
let newFruits = [...fruits, "mango"];
console.log(newFruits); // ["apple", "banana", "grapes", "orange", "mango"]
let vegies = ["carrot", "lettuce", "tomato"];
let food = [...fruits, ...vegies];
console.log(food); // ["apple", "banana", "grapes", "orange", "carrot", "lettuce", "tomato"]