const checkBtn = document.getElementById("checkBtn");
const ageInput = document.getElementById("ageInput");
const result = document.getElementById("result");
let age;
checkBtn.onclick = function () {
  age = Number(ageInput.value);
  if (age >= 18) {
    result.textContent = "You are an adult";
  } else {
    result.textContent = "You are not an adult";
  }
};
