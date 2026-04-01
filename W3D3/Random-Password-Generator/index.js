function generatePassword(
  length,
  includeLowercase,
  includeUppercase,
  includeNumbers,
  includeSymbols,
) {
    
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()_+{}[]|;:'\",.<>/?";
  let allowedChars = "";
  let password = "";
  allowedChars += includeLowercase ? lowercaseChars : "";
  allowedChars += includeUppercase ? uppercaseChars : "";
  allowedChars += includeNumbers ? numbers : "";
  allowedChars += includeSymbols ? symbols : "";
  if (length <= 0) {
    return "(password length must be at least 1)";
  }
  if (allowedChars.length === 0) {
    return `(At least 1 set of characters needs to be selected)`;
  }
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allowedChars.length);
    password += allowedChars[randomIndex];
  }
  return password;
}
// the parameters that needed to be passed in to the function
const passwordLength = 0;
const includeLowercase = true;
const includeUppercase = true;
const includNumbers = true;
const includeSymbols = false;
// call the function
const password = generatePassword(
  passwordLength,
  includeLowercase,
  includeUppercase,
  includNumbers,
  includeSymbols,
);

const passwordResult = document.getElementById("password-result");
passwordResult.textContent = `The generated password is: ${password}`;
