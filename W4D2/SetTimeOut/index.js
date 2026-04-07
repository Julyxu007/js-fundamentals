let timeoutId;
function startTimer() {
  timeoutId = setTimeout(() => {
    window.alert("hello");
  }, 3000);
}
function clearTimeer() {
  clearTimeout(timeoutId);
}
