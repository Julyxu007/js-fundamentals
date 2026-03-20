const myCheckbox = document.getElementById("myCheckbox");
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("masterCardBtn");
const paypalBtn = document.getElementById("paypalBtn");
const submitBtn = document.getElementById("submitBtn");
const result = document.getElementById("result");
const paymentMethod = document.getElementById("paymentMethod");

submitBtn.onclick = function () {
  if (myCheckbox.checked) {
    result.textContent = `You are subscribed`;
  } else {
    result.textContent = `You are Not subscribed`;
  }

  if (visaBtn.checked) {
    paymentMethod.textContent = `You are using Visa`;
  } else if (masterCardBtn.checked) {
    paymentMethod.textContent = `You are using MasterCard`;
  } else if (paypalBtn.checked) {
    paymentMethod.textContent = `You are using PayPal`;
  } else {
    paymentMethod.textContent = `Please select a payment method`;
  }
};
