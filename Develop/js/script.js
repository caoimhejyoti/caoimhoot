// timer vars
var startBtn = document.querySelector(".start-btn");
var timeEl = document.querySelector(".time");
var secondsLeft = 100;
// quiz vars
const question1El = document.querySelector(".quiz-item1");
const question2El = document.querySelector(".quiz-item2");
const question3El = document.querySelector(".quiz-item3");
const question4El = document.querySelector(".quiz-item4");
let quiz = [question1El, question2El, question3El, question4El];

console.log(startBtn);

// timer function
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


// this function will develop, adding more functions to include all effects.
startBtn.addEventListener("click", setTime);

