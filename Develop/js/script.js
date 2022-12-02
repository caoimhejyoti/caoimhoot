var startBtn = document.getElementsByClassName("start-btn");
var timeEl = document.getElementsByClassName("time");

console.log(startBtn)

var seconds = "";

var secondsLeft = 100;

function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = "Timer: " + secondsLeft;

        if(secondsLeft === 0) {

        clearInterval(timerInterval)
        timeEl.textContent = "You have run out of time! ";

        }

  }, 1000);
}
startBtn.addEventListener("click", setTime);
// bug within this event listener - (not a function?)