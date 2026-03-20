const min = 1;
const max = 100;
const instructions = document.getElementById("instructions");
instructions.textContent = `Guess a number between ${min} and ${max}`;
const guessInput = document.getElementById("guessInput");
const guessButton = document.getElementById("guessButton");
let guess;
let attempts = 0;
let result = document.getElementById("result");
let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
guessButton.onclick = function () {
  guess = Number(guessInput.value);
  attempts++;
  if (isNaN(guess)) {
    result.textContent = "Please enter a valid number.";
  } else if (guess < min || guess > max) {
    result.textContent = `Your guess must be between ${min} and ${max}. Try again.`;
  } else {
    if (guess < randomNumber) {
      result.textContent = "Your guess is too low. Try again.";
    } else if (guess > randomNumber) {
      result.textContent = "Your guess is too high. Try again.";
    } else {
      result.textContent = `Congratulations! You guessed the number ${randomNumber} in ${attempts} attempts.`;
    }
  }
};
