let username = "julyx";
username.charAt(1);
username.indexOf("j");
username.lastIndexOf();
username.startsWith("j"); // true
username.trim();
username.toUpperCase();
username.toLowerCase();


let phoneNumber = "123-456-7890";
phoneNumber.replace("-", "");// 1234567890
phoneNumber.replaceAll("-", "");// 1234567890
phoneNumber.padStart(14, "0");// 0001234567890
phoneNumber.padEnd(14, "0");// 12345678900000



const fullName = "July Xu";
// let firstName = fullName.slice(0,4);
// console.log (firstName);// July

let firstName = fullName.slice (0, fullName.indexOf(""));



const email = "julyx@example.com";
let usename = email.slice (0, email.indexOf ("@"))

let domain = email.slice (email.indexOf ("@")+ 1); // example.com





