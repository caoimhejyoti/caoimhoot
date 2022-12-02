var startBtn = document.querySelector(".start-btn");
var timeEl = document.querySelector(".time");

console.log(startBtn);

var secondsLeft = 100;

function setTime() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = "Timer: " + secondsLeft;

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      timeEl.textContent = "You have run out of time!";
    }
  }, 1000);
}

startBtn.addEventListener("click", setTime);

