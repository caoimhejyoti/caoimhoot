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
    question: 'Commonly used data types DO NOT include:',
    choice1:'strings',
    choice2:'booleans',
    choice3:'alerts',
    answer: 3,
  },
  {
    question: 'Camel Case is a:',
    choice1: 'water bottle',
    choice2: 'way of naming JavaScript elements',
    choice3: 'a police case involving a camel in 1976',
    answer: 2,
  },
  {
    question: 'How do you call a function?',
    choice1: 'function ();',
    choice2: 'function [];',
    choice3: 'function {};',
    answer: 1,
  }
];
// Incorrect answer results in loss of time - 5s
const incorrectPenalty = 5;


// looks at DISPLAY. start quiz function - hide welcome header and intro, show quiztime headser and first question.
function quiz() {
  var intro = document.querySelector(".intro");
  var quiz = document.querySelector(".quiz");
  var titleWelcome = document.querySelector("#Title1");
  var titleQuiz = document.querySelector("#Title2");
  
  if (quiz.dataset = 'hidden'){
  intro.style.display = 'none';
  quiz.style.display = 'flex';
  }

  if (titleWelcome.dataset = 'hidden'){
  titleWelcome.style.display = 'none';
  titleQuiz.style.display = 'flex';
  } 
  
    
};

function questionTime () {
  questionCounter=0;
  availableQuestions= [...fullQuestions];
  getNewQuestion();
}

function getNewQuestion() {
  // add question
  questionCounter++;
  const questionIndex = Math.floor(Math.random() *availableQuestions.length);
  currentQuestion= availableQuestions[questionIndex];
  question.innerText = currentQuestion.question;

  choices.forEach (choice => {
    const answerNumber=choice.dataset['number'];
    choice.innerText=currentQuestion["choice" + answerNumber];
  })
  
  availableQuestions.splice(questionIndex, 1);
}  

  choices.forEach (choice => {
    choice.addEventListener('click', (e) => {
      console.log(e.target);

      


      getNewQuestion();
    })

  })  
  


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



// var questionTitle = fullQuestions[0]["title"];
// var questionOptions1 = Array.from(document.getElementsByClassName["choice"]);
// var questionAnswer = fullQuestions[0]["answer"];
//FIXME: from mod4.20 - needs to be for answers not questions.







// master function - all functions combined for single eventListener.
function quizTime() {
  setTime();
  console.log(setTime());
  console.log("set time is working");
  quiz();
  console.log(quiz());
  console.log("quiz is working");
  questionTime();
  console.log(questionTime());
  console.log("questionTime is working");
};



// using local storage to create a score


// master event listener attached to the start button.


startBtn.addEventListener("click", quizTime);


