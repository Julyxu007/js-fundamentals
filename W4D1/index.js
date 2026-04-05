//destructuring = extract values from arrays or objects
// then assigns them to variables in a convenient way
// [] = to perform array destructuring
//{} = to perform object destructuring
// ---example1---
//swap the value of two variables
// let a = 1;
// let b = 2;
// [a, b] = [b, a];
// console.log(a, b); //2 1
// // ---example2---
// //swap the value of two variables in an array
// const colours = ["red", "green", "blue", "yellow"];
// [colours[0], colours[3]] = [colours[3], colours[0]];
// console.log(colours); //["yellow", "green", "blue", "red"]

//example3
//assign array elements to variables
// const colours = ["red", "green", "blue", "yellow","orange"];
// const [firstcolor, secondcolor, thirdcolor,...restColors] = colours;
// console.log(firstcolor, secondcolor, thirdcolor,restColors);
// //red green blue yellow
// console.log(restColors);
// //["yellow", "orange"]

// example4
// extract values from objects
const person1={
    firstname: "July",
    lastname:"Xu",
    email:"julyx@example.com"
}
const person2 = {
    firstname:"Winter",
    lastname:"Tong",
    //email:"winter@example.com"
}

const {firstname1,lastname1,email1} = person1;
console.log(firstname1,lastname1,email1);
//July Xu julyx@example.com
const{firstname2, lastname2, email2="default@example.com"} = person2;
//Winter Tong default@example.com

// ---example5---
//destructure in function parameters
function displayPerson({firstname,lastname,email}){
    console.log(`name: ${firstname} ${lastname}`);
    console.log(`email:${email}`)
}

displayPerson(person1);
//name: July Xu
//email: julyx@example.com


