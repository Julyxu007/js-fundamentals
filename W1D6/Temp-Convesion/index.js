const tempInput = document.getElementById("tempInput");
const convertBtn = document.getElementById("convertBtn");
const result = document.getElementById("result");
const celsius = document.getElementById("celsius");
const fahrenheit = document.getElementById("fahrenheit");

function convert() {
  const temp = Number(tempInput.value);
  if (isNaN(temp)) {
    result.textContent = "Please enter a valid number.";
  } else {
    if (celsius.checked) {
      let celsiusToFahrenheit = (temp * 9) / 5 + 32;
      result.textContent = `${temp} Celsius is equal to ${celsiusToFahrenheit.toFixed(2)} Fahrenheit.`;
    } else if (fahrenheit.checked) {
      let fahrenheitTocelsius = ((temp - 32) * 5) / 9;
      result.textContent = `${temp} Fahrenheit is equal to ${fahrenheitTocelsius.toFixed(2)} Celsius.`;
    } else {
      result.textContent = "Please select a temperature scale.";
    }
  }
}
