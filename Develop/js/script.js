// timer vars
var startBtn = document.querySelector(".start-btn");
var timeEl = document.querySelector(".time");
var secondsLeft = 100;
// quiz vars
const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice"));
console.log(choices);
// what is the currentQuestion
let currentQuestion = {};
// what number question is it?
let questionCounter = 0;
// how many questions are available?
let availableQuestions = [];
// list of all questions, choices, and answers
let fullQuestions = [
  {
    title: 'Commonly used data types DO NOT include:',
    choice:'strings',
    choice:'booleans',
    choice:'alerts',
    answer: 3,
  },
  {
    title: 'Camel Case is a:',
    choices: ['water bottle', 'way of naming JavaScript elements', 'a police case involving a camel in 1976'],
    answer: 'way of naming JavaScript elements',
  },
  {
    title: 'How do you call a function?',
    choices: ['function ();', 'function[];', 'function{};'],
    answer: 'function ()',
  }
];
// Incorrect answer results in loss of time - 5s
const incorrectPenalty = 5;

function question () {
  questionCounter=0;
  availableQuestions= [...fullQuestions];
  getNewQuestion();
}

function getNewQuestion() {
  // add question
  questionCounter++;
  const questionIndex = Math.floor(Math.random() *availableQuestions.length);
  currentQuestion= availableQuestions[questionIndex];
  question.innerText=currentQuestion.question;




// FIXME: bug casuing it to continue counting after 0. count down timer function
function setTime() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = "Timer: " + secondsLeft;
    
    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      timeEl.textContent = "You have run out of time!";
    }
  }, 1000);
};

// start quiz function - hide welcome header and intro, show quiztime headser and first question.
function quiz() {
  var intro = document.querySelector(".intro");
  var quiz = document.querySelector(".quiz");
  var titleWelcome = document.querySelector("#Title1");
  var titleQuiz = document.querySelector("#Title2");
   
  if (quiz.style.display = 'hidden'){
  intro.style.display = 'none';
  }
  // if (titleWelcome.style.display = 'hidden') {
  // titleQuiz.style.display = 'none';
  // }
   
};


var questionTitle = fullQuestions[0]["title"];
var questionOptions1 = Array.from(document.getElementsByClassName["choice"]);
var questionAnswer = fullQuestions[0]["answer"];
//FIXME: from mod4.20 - needs to be for answers not questions.







// master function - all functions combined for single eventListener.
function quizTime() {
  setTime();
  console.log(setTime());
  console.log("set time is working");
  quiz();
  console.log(quiz());
  console.log("quiz is working");
  questions();
  console.log(questions());
  console.log("questions is working");
};



// using local storage to create a score


// master event listener attached to the start button.


startBtn.addEventListener("click", quizTime);


