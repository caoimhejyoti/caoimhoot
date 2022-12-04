// timer vars
var startBtn = document.querySelector(".start-btn");
var timeEl = document.querySelector(".time");
var secondsLeft = 10; //FIXME: change time to 100
const incorrectPenalty = 5; // Incorrect answer results in loss of time - 5s

// dispaly vars
var intro = document.querySelector(".intro");
var quizDisplay = document.querySelector(".quiz");
var titleWelcome = document.querySelector("#Title1");
var titleQuiz = document.querySelector("#Title2");
const results = document.querySelector("#results");
const titleResults = document.querySelector("#Title3");

// quiz vars
const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice"));
console.log(choices);
let currentQuestion = {}; // what is the currentQuestion
let questionCounter = 0; // what number question is it?
let availableQuestions = []; // how many questions are available?

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

// storage vars


// looks at DISPLAY. start quiz function - hide welcome header and intro, show quiztime headser and first question.
function quiz() { 
  if (quizDisplay.dataset = 'hidden'){
  intro.style.display = 'none';
  quizDisplay.style.display = 'flex';
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
  if (availableQuestions.length == 0 || secondsLeft ==0){
    resultsPage();
  }
  // add question
  questionCounter++;
  const questionIndex = Math.floor(Math.random() *availableQuestions.length);
  currentQuestion= availableQuestions[questionIndex];
  question.innerText = currentQuestion.question;
  choices.forEach (choice => {
    const chosenAnswerNumber=choice.dataset['number'];
    choice.innerText=currentQuestion["choice" + chosenAnswerNumber];
  })
    availableQuestions.splice(questionIndex, 1);
}  

// identifying if answe is correct and changing colours to reflect choice.
choices.forEach (choice => {
  choice.addEventListener('click', (e) => {
    console.log(e.target);
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset["number"];
    
    // always make correct answer green and only show red when selectedAnswer =incorrect
    var result = "incorrect";
      if (selectedAnswer == currentQuestion.answer) {
      result = "correct";
    }

    selectedChoice.classList.add(result);

    setTimeout(() => {
      selectedChoice.classList.remove(result);
      getNewQuestion();
    }, 1000)
  });
})  

// count down timer function
function setTime() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = "Timer: " + secondsLeft;
    
    if (secondsLeft === 0) {

      timeEl.textContent = "You have run out of time!";
      clearInterval(timerInterval);
    }   
  }, 1000);

  setTime.endTimer= endTimer;

  function endTimer() {
    clearInterval(timerInterval);
  }
};


// master function.
function quizTime() {
  setTime();
  console.log("set time is working");
  quiz();
  console.log(quiz());
  console.log("quiz is working");
  questionTime();
  console.log(questionTime());
  console.log("questionTime is working");
  // endQuestions();
  // console.log(endQuestions());
};

// display for results post quiz
function resultsPage(){
  if (results.dataset = 'hidden'){
    quizDisplay.style.display = 'none';
    results.style.display = 'flex';
  }
  if (titleWelcome.dataset = 'hidden'){
      titleQuiz.style.display = 'none';
      titleResults.style.display = 'flex';
  } 
}

function endQuiz(){
  
}

const finalScore = document.getElementById("#final-score");
const initial = document.getElementById("initials");

function submitresult(){
  addEventListener("click",(e) =>{
    localStorage.setItem("finalScore", finalScore.value);
    localStorage.setItem("initials", initial.value);
    

  })
}

// master event listener attached to the start button.
startBtn.addEventListener("click", quizTime);

