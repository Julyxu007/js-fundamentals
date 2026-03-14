let count = 0;
const incrementBtn = document.getElementById("increment");
const resetBtn = document.getElementById("reset");
const decrementBtn = document.getElementById("decrement");
const countLable = document.getElementById("countLable");

incrementBtn.onclick = function () {
  count++;
  countLable.textContent = count;
};
resetBtn.onclick = function () {
  count = 0;
  countLable.textContent = count;
};

decrementBtn.onclick = function () {
  count--;
  countLable.textContent = count;
};
