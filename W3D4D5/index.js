// forEach = loop through each element in the array
// array.forEach(callback)
// callback = function that is passed as an argument to the function
// element, index, array are provided;
// let numbers = [1, 2, 3, 4, 5];
// function display(element){
//     console.log(element);
// }
// numbers.forEach(display);

// function double(element, index, array){
//     array[index] = element * 2;
// }

// function triple (element, index, array){
//     array[index] = element * 3;
// }

// numbers.forEach(double);
// numbers.forEach(triple);
// numbers.forEach(display);

// let fruits = ["apple", "banana", "orange", "peach"];
// function displayFruit(element) {
//   console.log(element);
// }

// function uppercase(element, index, array) {
//   array[index] = element.toUpperCase();
// }

// // display the elements with the first letter capitalized
// function capitalize(element, index, array) {
//   array[index] = element.charAt(0).toUpperCase() + element.slice(1);
// }

// //fruits.forEach(uppercase);
// fruits.forEach(capitalize);
// fruits.forEach(displayFruit);

// .map() = accept a callback function and applies that function to each element of an array
// then return a new array with the results.
// map() method is very similar to forEach(), it returns a new array, and
// but does not change the original array
//const numbers = [1, 2, 3, 4, 5];

// function square(element, index, array){
//     array[index]= Math.pow(element, 2);
// }
// function square(element) {
//   return Math.pow(element, 2);
// }
// const squaredNumbers = numbers.map(square);
// console.log(squaredNumbers);

// const students = ["julyx", "july", "julie"];
// function uppercase(element) {
//   return element.toUpperCase();
// }
// const uppercaseStudents = students.map(uppercase);
// console.log(uppercaseStudents);
// function lowercase(element) {
//   return element.toLowerCase();
// }
// const lowercaseStudents = students.map(lowercase);
// console.log(lowercaseStudents);

//const dates = ["2024-01-01", "2024-01-02", "2024-01-03"];
// function formateDates(element) {
//   return element.replaceAll("-", "/");
// }
// // replace("-", "/") 只会替换第一个 -，不会全部替换！

// const formattedDates = dates.map(formateDates);
// console.log(formattedDates);

// function formateDates(element) {
//   const parts = element.split("-");
//   return `${parts[1]}/${parts[2]}/${parts[0]}`;
// }
// const newFormattedDates = dates.map(formateDates);
// console.log(newFormattedDates);

//.filter() = accept a callback function and returns a new array with the elements that pass the test.
// let numbers = [1, 2, 3, 4, 5];
// function isEven(element) {
//   return element % 2 === 0;
// }
// const evenNumbers = numbers.filter(isEven);
// console.log(evenNumbers);

// function isOdd(element) {
//   return element % 2 !== 0;
// }
// const oddNumbers = numbers.filter(isOdd);
// console.log(oddNumbers);

// const ages = [16, 17, 30, 60, 40];
// function isAdult(age) {
//   return age >= 18;
// }
// const adultsAges = ages.filter(isAdult);
// console.log(adultsAges);

// const words = ["hello", "numbers", "even", "odd", "morning"];
// function shortWords(element) {
//   return element.length < 5;
// }
// const shortWordsArray = words.filter(shortWords);
// console.log(shortWordsArray);

//reduce() = the array accepts a callback function
// and returns a single value.

// const prices = [4, 6, 89, 65, 23, 8];
// const totalPrice = prices.reduce(total);

// function total(accumulator, curValue, curIndex, array) {
//   return accumulator + curValue;
// }
// console.log(totalPrice);

// const grades = [80, 75, 89, 92, 88];

// const maximum = grades.reduce(maxNum);
// console.log(maximum);
// function maxNum(accumulator, element) {
//   return Math.max(accumulator, element);
// }

//
// const numbers = [1, 2, 3, 4, 5, 6];
// const squaredNumbers = numbers.map(square);
// function square (element){
//     return Math.pow (element,2)
// }

// use reduce to square the numbers in the array numbers
// const squaredNumbers = numbers.reduce(square, []);
// console.log(squaredNumbers);

// function square(acc, ele) {
//   acc.push(Math.pow(ele, 2));
//   return acc;
// }

// const evenNumbers = numbers.filter(isEven);
// console.log(evenNumbers);
// function isEven(element) {
//   return element % 2 === 0;
// }

// use reduce to do this filter
// const evenNumbers = numbers.reduce(isEven, []);
// console.log(evenNumbers);
// function isEven(acc, ele) {
//   if (ele % 2 === 0) {
//     acc.push(ele);
//   }
//   return acc;
// }

// function declaration = define a resusable block of code that peforms special task
// function hello() {
//   console.log("Hello World!");
// }

// function expression = define a function as a variable
// const goodbye = function () {
//   console.log("Goodbye World!");
// };

// hello();
// goodbye();

// passing a function as an value;
//ussing function declaration as a callback function
//setTimeout(goodbye, 3000);// call the function goodbye after 3 seconds

// using the entire function expression as an argument

// setTimeout(function(){console.log("Hello World!");}, 3000)

// const numbers = [1, 2, 3, 4, 5, 6];
// function square (element){
//   return Math.pow(element,2)
// }
// numbers.map(square);

//use function as an argument, because only need to use the function once,
// and then throw it away, so it is called an anonymous function.
// don't need a name.
// const squaredNumbers = numbers.map(function (element) {
//   return Math.pow(element, 2);
// });
// console.log(squaredNumbers);

// const evenNumbers = numbers.filter(function (element) {
//   return element % 2 === 0;
// });
// console.log(evenNumbers);

// const addNumbers = numbers.reduce(function (acc, ele) {
//   return acc + ele;
// });
// console.log(addNumbers);

// arrow function = a function that is defined with the arrow keyword.
// a consise way to write a function expression
// it is a single line function that does not have a name function.
// (parameters) => code

// function hello(){
//   console.log("Hello World!");
// }
// const hello = function(){
//   console.log("Hello World!");
// }
// const hello = () => console.log("Hello World!");
// hello()

//  const hello = (username,age) => {console.log(`hello, ${username}`)
//  console.log(`you are ${age} years old`)
// }
//  hello("julyx", 35)

// setTimeout(()=>console.log("Hello World!"), 4000)

const numbers = [1, 2, 3, 4, 5, 6];
const squaredNumbers = numbers.map((element) => Math.pow(element, 2));
// don't need a return keyword and {} if the arrow function has only one line of code.
console.log(squaredNumbers);

const evenNumbers = numbers.filter((element) => element % 2 === 0);
console.log(evenNumbers);

const totalnumbers = numbers.reduce((acc, ele) => {
  return acc + ele;
});
console.log(totalnumbers);
