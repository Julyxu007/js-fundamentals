// callback = function that is passed as an argument to another function
// used to handle asynchronous operations
//1 reading a file
//2 network request
//3 interacting with database

// function hello(callback){
//     console.log("Hello World!");
//     callback();
// }
// function goodbye(){
//     console.log("Goodbye World!");
// }

// function leave(){
//     console.log("Leave");
// }

//hello(goodbye); // callhello function first, then goodbye
// hello(leave);

function add(callback, x, y) {
  let result = x + y;
  callback(result);
}

function displayConsole(result) {
  console.log(result);
}
add(displayPage, 1, 2); // make sure the callback function has no parentheses

function displayPage(result) {
  document.getElementById("result").textContent = result;
}
