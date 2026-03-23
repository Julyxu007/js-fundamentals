// rest parameters:
// allow a function work with a variable number of arguments
// by bundling them into an array;
// spread = expands an array into separate elements
// rest = bundles seperate elements into an array

function openFridge(...foods) {
  console.log(foods); // ["apple", "banana", "grapes", "orange", "mango"]
  console.log(...foods); // apple banana grapes orange mango
}


function getFood (...foods){
   return foods; 
}

const food1 = "apple";
const food2 = "banana";
const food3 = "grapes";
const food4 = "orange";
const food5 = "mango";

//openFridge(food1, food2, food3, food4, food5);

const foods = getFood(food1, food2, food3, food4, food5);
console.log(foods); // ["apple", "banana", "grapes", "orange", "mango"]

// function sum(...numbers){
//     let total = 0;
//     for (let element of numbers){
//         total += element;
//     }
//     return total;
// }

// const total = sum(1,2,3,4,5);
// console.log(total); // 15



// function getAverage (...numbers){
//     let total = sum(...numbers);
//     return total / numbers.length;
// }
// const average = getAverage(1,2,3,4,5);
// console.log(average); // 3

function combineStrings(...strings){
    return strings.join("-");
}
const fullName = combineStrings("July", "Xu");
console.log(fullName); // "July-Xu"
