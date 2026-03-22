// function happyBirthday(username, years){
//     console.log(`Happy Birthday! ${username}`);
//     console.log(`You are now ${years}year old!`);
// }
// happyBirthday("July", 25);

function add (a, b) {
    return a + b;
}
let answer = add(2, 3);
console.log(answer);

function isEven (num){
    return num % 2 === 0 ? true : false;
}
function isValidEmail(email){
    return email.includes ("@") && email.includes (".");
}
