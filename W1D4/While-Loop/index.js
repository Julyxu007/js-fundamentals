//let username = "";
// while (username ==="" || username === null){
// username = window.prompt ("Please enter your username:");
// }
// console.log (`Hello, ${username}`);

// do {username = window.prompt ("Please enter your username:");}
// while (username ==="" || username === null);
// console.log (`Hello, ${username}`);

letloggedIn = false;
let username;
let password;

while (!loggedIn) {
  username = window.prompt("Please enter your username:");
  password = window.prompt("Please enter your password:");
  if (username === "julyxu" && password === "0000") {
    console.log("Welcome, July Xu!");
    loggedIn = true;
  } else {
    console.log("Invalid username or password.");
  }
}
