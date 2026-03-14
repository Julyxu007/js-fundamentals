// let name1 = "july";
// console.log(name1);
// //window.alert(`today is a good day`);
// document.getElementById("myH1").textContent = "Hello";
// document.getElementById("myP").textContent = "I like pizza";

// variables
// let x = 100;
// console.log(x);
// let age = 25;
// console.log(age);
// let price = 99;
// console.log(price);
// let gpa = 8;
// console.log(typeof age);

// template literal; placeholder
// console.log(`my age is ${age}`);
// console.log(`my gpa is ${gpa}`);
// cosole.log(`This item is $ ${price}`);
// strings
// let firstName = "July";
//console.log (`Your name is ${firstName}`);

// booleans
// let isStudent = true;
// console.log (`I am a stduent: ${isStudent}`);

// let fullName = "July Xu";
// let age = 30;
// let isStudent = true;

// document.getElementById("p1").textContent = fullName;
// document.getElementById("p1").textContent = `Your name is ${fullName}`;
// document.getElementById("p2").textContent = age;
// document.getElementById("p2").textContent = `Your age is ${age}`;
// document.getElementById("p3").textContent = isStudent;
// document.getElementById("p3").textContent = `You are a student: ${isStudent}`;

//arithmatic operators
// let students = 30;
// students = students + 2;
// // power
// students = students ** 2

// // modulus operator
// let extralStudents;
//  extralStudents = students % 2;

//  // augment operator;
//  students += 2;
//  students ++;

// how to accept user input
// easy way = window prompt
// professional way = html textbox

// let userName;
// userName = window.prompt ("what's your username?");

// let userName;
// document.getElementById("myBtn").onclick = function () {
//   userName = document.getElementById("myInput").value;
//   document.getElementById("myH1").textContent = `Welcome, ${userName}`;
// };

// type conversion
// age = "25";
// age = Number(age);
// age += 1;

const PI = 3.14159;
let radius;
document.getElementById("myBtn").onclick = function () {
  radius = document.getElementById("radiusInput").value;
  radius = Number(radius);
  let circumference = 2 * PI * radius;
  document.getElementById("resultH2").textContent =
    `The circumference of the circle is ${circumference} cm`;
};
