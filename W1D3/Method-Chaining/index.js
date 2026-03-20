// Method Chaining = calling one method after another one;
let userName = window.prompt ("Please enter your username:");
// userName = userName.trim();
// let firstLetter = userName.charAt(0);
// let extraLetters = userName.slice(1)
// userName = firstLetter.toUpperCase() + extraLetters.toLowerCase;
// console.log(username);


userName = userName.trim().charAt(0).toUpperCase() + userName.trim().slice(1).toLowerCase();
