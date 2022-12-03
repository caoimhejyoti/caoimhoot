// timer vars
var startBtn = document.querySelector(".start-btn");
var timeEl = document.querySelector(".time");
var secondsLeft = 100;
// quiz vars
let questions = [(document.querySelector(".quiz-item1")),(document.querySelector(".quiz-item2")), (document.querySelector(".quiz-item3")), (document.querySelector(".quiz-item4"))];

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


function quiz() {
  var intro = document.querySelector(".intro");
  var quiz = document.querySelector(".quiz");


  if (quiz.style.display = 'none');
    intro.style.display = 'none';
    quiz.style.display = 'block';


}


function quizTime () {
  setTime ();
  console.log(setTime());
  console.log("set time is working");
  quiz ();
  console.log(quiz());
  console.log("quiz is working");

}

// this function will develop, adding more functions to include all effects.
startBtn.addEventListener("click", quizTime);
