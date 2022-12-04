// timer vars
var startBtn = document.querySelector(".start-btn");
var timeEl = document.querySelector(".time");
var secondsLeft = 100;
// quiz vars
// let questions = [(document.querySelector(".quiz-item1")),(document.querySelector(".quiz-item2")), (document.querySelector(".quiz-item3")), (document.querySelector(".quiz-item4"))];
// console.log(questions);




// initial js stlyes - FIXME:
// function homeStyle(questions) {
// for (let i = 0; i < questions.length; i++){
// questions[i].style.display = 'none'
// }
// }

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

// list of all questions, choices, and answers
var fullQuestions = [
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

var questionTitle = fullQuestions[0]["title"];
var questionOptions1 = Array.from(document.getElementsByClassName["choice"]);
var questionAnswer = fullQuestions[0]["answer"];
//FIXME: from mod4.20 - needs to be for answers not questions.
function questions() {
 

  var element = document.querySelector("#question");
  var element2 = document.querySelector(".choice-container");
  
  var state = element.getAttribute("data-state");
  var state2 = element2.getAttribute("data-state");

  if (state === "hidden"){
    element.setAttribute("data-state", "visible");
    element.textContent = questionTitle;
    element2.setAttribute("data-state", "visible");
    element2.textContent = questionOptions1;
   
  }else {
    element.setAttribute("data-state", "hidden");
    element.textContent = "";
  };


  const title = document.createElement();
  const options = document.createElement();
  const answer = document.createElement();

 var button = document.createElement("BUTTON");


 button.appendChild(text);
  // const node = document.createElement(questionTitle);

  // title.appendChild(node);
  // element.appendChild(title);
// add for loop - 



  
};

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


