// let randomNumber = Math.floor(Math.random() *100) +1;
// console.log(randomNumver);

// let min = 50;
// let max = 100;
// let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
// console.log(randomNum);

const rollBtn = document.getElementById("rollBtn");
const myLabel1 = document.getElementById("myLabel1");
const myLabel2 = document.getElementById("myLabel2");
const myLabel3 = document.getElementById("myLabel3");
let min = 1;
let max = 6;
let randomNum1;
let randomNum2;
let randomNum3;

rollBtn.onclick = function () {
  randomNum1 = Math.floor(Math.random() * max) + 1;
  randomNum2 = Math.floor(Math.random() * max) + 1;
  randomNum3 = Math.floor(Math.random() * max) + 1;
  myLabel1.textContent = randomNum1;
  myLabel2.textContent = randomNum2;
  myLabel3.textContent = randomNum3;
};
