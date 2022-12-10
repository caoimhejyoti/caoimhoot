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
const results = document.querySelector(".results");
const titleResults = document.querySelector("#Title3");
const titleHighscore = document.querySelector("#Title4");
const highscorePage = document.querySelector(".highscore-page");
const tryAgain = document.querySelector(".refresh")

// quiz vars
const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice"));
console.log(choices);
let currentQuestion = {}; // what is the currentQuestion
let questionCounter = 0; // what number question is it?
let availableQuestions = []; // how many questions are available?

// storage vars
let finalScore = document.getElementById("final-score");
let initial = document.getElementById("player-inititals");
const submitBtn = document.getElementById("submit-btn");
// let currentScore = localStorage.getItem("currentScore");
let currentScore = "";

// highscore vars
// var highscoreObject = JSON.parse(localStorage.getItem("highscoreArray"));
let sortedScores = [];
let olEl = document.getElementById("highscore");
let scoreArray = JSON.parse(localStorage.getItem("scoreArray")) || [];
let clearBtn = document.querySelector(".clear");


// FINISHED! list of all questions, choices, and answers
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

// COMPLETE! master quiz function.
function quizTime() {
  setTime();
  quiz();
  questionTime();

};

//FINISHED! count down timer function
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

// FINISHED! DISPLAY: hide welcome header and intro, show quiztime header and first question.
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

// FINISHED! tiggering get new questions and connecting it to full question list.
function questionTime () {
  questionCounter=0;
  availableQuestions= [...fullQuestions];
  getNewQuestion();
}



//  function brings questions to user.
function getNewQuestion() {
  if (availableQuestions.length == 0 || secondsLeft ==0){
    resultsPage();
    setTime.endTimer();
    console.log(secondsLeft + " seconds remaining");
    // localStorage.setItem("currentScore", secondsLeft);
    
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

// FINISHED! identifying if answer is correct and changing colours to reflect choice.
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




// COMPLETE! Display: show results post quiz - hide question page.
function resultsPage(){
  if (results.dataset = 'hidden'){
    quizDisplay.style.display = 'none';
    results.style.display = 'flex';
  }
  if (titleWelcome.dataset = 'hidden'){
      titleQuiz.style.display = 'none';
      titleResults.style.display = 'flex';
  } 
  // submitResults();
}

function submitResults(){
  var score= {
    score: secondsLeft, 
    // score: Math.floor(Math.random()*100), 
    initial: initial.value,
  };
  console.log(score);

  scoreArray.push(score);
  localStorage.setItem("scoreArray", JSON.stringify(scoreArray));

  scoreArray.sort((a,b) => b.score - a.score);
  console.log(scoreArray);

  scoreArray.splice(5);

  highscoresPage();
  showHighscores();
};

// FINISHED! Display: show highscores + hide results page
function highscoresPage(){
  if (highscorePage.dataset = 'hidden'){
    results.style.display = 'none';
    highscorePage.style.display = 'flex';
  }
  if (titleHighscore.dataset = 'hidden'){
      titleResults.style.display = 'none';
      titleHighscore.style.display = 'flex';
  } 
}


function showHighscores(){
  for (let i = 0; i <scoreArray.length; i++){
    let scoreDetails = `${scoreArray[i].initial}` + " - " + ` ${scoreArray[i].score}` + " points";
  
    listItem = document.createElement("li");
    olEl.appendChild(listItem);
    listItem.innerHTML = [i+1] + ". " + scoreDetails;
  }
  console.log("append works");
  console.log(listItem);
  }



// Function - user submits inititals (triggered by event listener)

clearBtn.addEventListener('click', function(e){
  e.preventDefault();
  localStorage.clear();
  window.location.reload();

});

tryAgain.addEventListener("click", function(e){
  window.location.reload();
});

submitBtn.addEventListener("click",submitResults);


// COMPLETE! master event listener attached to the start button.
startBtn.addEventListener("click", quizTime);