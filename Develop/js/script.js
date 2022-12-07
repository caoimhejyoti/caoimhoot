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
const results = document.querySelector("form");
const titleResults = document.querySelector("#Title3");

// quiz vars
const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice"));
console.log(choices);
let currentQuestion = {}; // what is the currentQuestion
let questionCounter = 0; // what number question is it?
let availableQuestions = []; // how many questions are available?

// storage vars
let finalScore = document.getElementById("final-score");
let initial = document.getElementById("player");
const submitBtn = document.getElementById("submit");
const currentScore = localStorage.getItem("currentScore");

// COMPLETE! list of all questions, choices, and answers
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

//COMPLETE! count down timer function
function setTime() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = "Timer: " + secondsLeft;
    
    if (secondsLeft <= 0) {

      timeEl.textContent = "You have run out of time!";
      clearInterval(timerInterval);
      endTimer();
    }   
  }, 1000);

  setTime.endTimer= endTimer;
  
  function endTimer() {
    clearInterval(timerInterval);
    timeEl.textContent = "Quiz has ended!"
    resultsPage(); 
  }
};

// COMPLETE! looks at DISPLAY. start quiz function - hide welcome header and intro, show quiztime headser and first question.
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

// COMPLETE! tiggering get new questions and connecting it to full question list.
function questionTime () {
  questionCounter=0;
  availableQuestions= [...fullQuestions];
  getNewQuestion();
}

// COMPLETE! function brings questions to user.
function getNewQuestion() {
  if (availableQuestions.length == 0 || secondsLeft ==0){
    resultsPage();
    setTime.endTimer();
    console.log(secondsLeft + " seconds remaining");
    localStorage.setItem("currentScore", secondsLeft);
    // displaying results on results page
    finalScore.textContent = secondsLeft;
    

  }else{
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

}  

// COMPLETE! identifying if answer is correct and changing colours to reflect choice.
choices.forEach (choice => {
  choice.addEventListener('click', (e) => {
    console.log(e.target);
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset["number"];
    
    // always make correct answer green and only show red when selectedAnswer =incorrect
    var result = "incorrect";
    if (selectedAnswer == currentQuestion.answer) {
      result = "correct";
    } else {
    secondsLeft = secondsLeft - 5; 

    }
    selectedChoice.classList.add(result);

    setTimeout(() => {
      selectedChoice.classList.remove(result);
      getNewQuestion();
    }, 1000)
  });
})  

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
 
};

// COMPLETE! Display for results post quiz
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

function submitresult(){
  submitBtn.disabled == ""; //FIXME: not working for some reason
  
  submitBtn.addEventListener("click",(e) =>{
    // localStorage.setItem("finalScore", finalScore.value);
    localStorage.setItem("player", initial.value);
    currentScore.textContent= secondsLeft.value;
    document.locatiion.href = "highscores.html";
  })
}

// let highscore = ""
let player = ""
let firstPlace = document.getElementById("first-score");
let secondPlace = document.getElementById("second-score");
let thirdPlace = document.getElementById("third-score");
let fourthPlace = document.getElementById("fourth-score");

let highscoreArray = [
  
  {
    rank: "First Place",
    score: "",
    initial: "",
  },
  {
    rank: "Second Place",
    score: "",
    initial: "",
  },
  {
    rank: "Third Place",
    score: "",
    initial: "",
  }
];

currentResult = localStorage.getItem ("secondsLeft");
currentPlayer = localStorage.getItem ("initial");

currentGame = [
  {
    rank: "",
    score: currentResult,
    initial: currentPlayer,
  }
]

function setHighScore(){

  if (currentGame[1]>=highscoreArray[0][1]){
    highscoreArray[0][1].value=currentGame[1].value;
    highscoreArray[0][2].value=currentGame[2].value;
  }else if (currentGame[1]>=highscoreArray[1][1]){
    highscoreArray[1][1].value=currentGame[1].value;
    highscoreArray[1][2].value=currentGame[2].value;
  }else if (currentGame[1]>=highscoreArray[2][1]){
    highscoreArray[2][1].value=currentGame[1].value;
    highscoreArray[2][2].value=currentGame[2].value;
  }else if (currentGame[1]>=highscoreArray[3][1]){
    highscoreArray[3][1]=currentGame[1].value;
    highscoreArray[3][2]=currentGame[2].value;
  }else
  document.getElementsByClassName(better-luck).textContent= "Try again to make it onto the Leaderboard!";
    
}
// const gitBtn = document.getElementsByClassName('github');

// function changeImgSrc(){
  //   gitBtn.src = 'Develop/assets/img/GitHub-Mark-120px-plus.png';
  // }
  
  // gitBtn.addEventListener('mouseover', changeImgSrc);
  
// COMPLETE! master event listener attached to the start button.
startBtn.addEventListener("click", quizTime);