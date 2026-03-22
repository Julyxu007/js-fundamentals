let fruits = ["apple", "banana", "orange"];
// add mango to the end of the array
fruits.push("mango");
// remove the last element of the array
fruits.pop();
// remove the first element of the array
fruits.shift();
// add grapes to the beginning of the array
fruits.unshift("grapes");


let numOfFruits = fruits.length;
let index = fruits.indexOf("banana");
// check if the array includes "orange"
let includesOrange = fruits.includes("orange");
// if there is no "orange" in the array, add it
if (!includesOrange) {
    fruits.push("orange");
}
// using for...in loop to iterate over the array
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

for (let i = fruits.length - 1; i >= 0; i--) {
    console.log(fruits[i]);
}

//another way of for loop to iterate over the array
for (let item of fruits){
    console.log(item);
}

fruits.sort();
console.log(fruits); // ["apple", "banana", "grapes", "orange"]

fruits.sort().reverse();
console.log(fruits); // ["orange", "grapes", "banana", "apple"]