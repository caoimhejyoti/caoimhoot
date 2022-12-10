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
const currentScore = localStorage.getItem("currentScore");

// highscore vars
var highscoreObject = JSON.parse(localStorage.getItem("highscoreArray"));
let sortedScores = [];



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

// FINISHED! looks at DISPLAY. start quiz function - hide welcome header and intro, show quiztime headser and first question.
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


// FIXME: array scores - global - store score to global array which is stored in local stora
//  function brings questions to user.
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

// array/object linking iniital and seconds left. 
function arrayScores () {
  let highscoreArray = [initial, secondsLeft];
  console.log(highscoreArray);
  // const nameStr = document.getElementById("initital");
  // const nameStrValue = nameStr.value;
  // highscores[nameStrValue] = secondsLeft;
  let highscoreObject = JSON.stringify(highscoreArray);
  localStorage.setItem("highscoreArray", highscoreObject);
  console.log(highscoreObject);
}

// FINISHED! Display for highscores.
function highscoresPage(){
  if (highscorePage.dataset = 'hidden'){
    results.style.display = 'none';
    highscorePage.style.display = 'flex';
  }
  if (titleWelcome.dataset = 'hidden'){
      titleQuiz.style.display = 'none';
      titleResults.style.display = 'flex';
  } 
}

// Function - user submits inititals (triggered by event listener)
function submitResults(){
  // call funtion - submitted score and initials create object and stored in local storage (JSON).
  arrayScores();

  // call function - bring us highscores page
  highscoresPage();

  // get scores from local storage
  console.log(highscoreObject);
  
  
  // scores get added to highscore array
  for (var initital in highscoreObject) {
    sortedScores.push([initital,highscoreObject[initital]]);
  }

  // highscore array is sorted
  sortedScores.sort((a,b) => {
    return b[1] - a[1];
  });

  // highscores are displayed
  for (let i=0; i<sortedScores.length-1; i++) {
    let olEl = document.getElementById("highscores");
    let liEl = document.createElement("li");
    console.log(liEl, olEl, secondsLeft);
    olEl.appendChild(liEL);
    liEL.innerHTML = secondsLeft;

  }
  // if score is in top 3 - message reads congratualtions

  // COMPLETE! ask user if they want to play again? - part of HTML

};


submitBtn.addEventListener("click",submitResults);


// FIXME: cannot read properties of null - reading appendChild on line 254. submiting results and connecting to Highscore HTML page.
// submitBtn.addEventListener("click",(e) =>{
//   e.preventDefault();
//   console.log("submit button works");
//   localStorage.setItem("player", initial.value);
//   currentScore.textContent= secondsLeft;
//   // document.location.href = "highscores.html";
//   arrayScores();
//   console.log("array scores works");
// })



// const gitBtn = document.getElementsByClassName('github');

// function changeImgSrc(){
  //   gitBtn.src = 'Develop/assets/img/GitHub-Mark-120px-plus.png';
  // }
  
  // gitBtn.addEventListener('mouseover', changeImgSrc);
  




 






// COMPLETE! master event listener attached to the start button.
startBtn.addEventListener("click", quizTime);