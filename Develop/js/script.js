// timer vars
var startBtn = document.querySelector(".start-btn");
var timeEl = document.querySelector(".time");
var secondsLeft = 100;
// quiz vars
// let questions = [(document.querySelector(".quiz-item1")),(document.querySelector(".quiz-item2")), (document.querySelector(".quiz-item3")), (document.querySelector(".quiz-item4"))];
// console.log(questions);
console.log(startBtn);



// initial js stlyes - FIXME:
// function homeStyle(questions) {
// for (let i = 0; i < questions.length; i++){
// questions[i].style.display = 'none'
// }
// }

// count down timer function
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

// start quiz function - hide welcome header and intro, show quiztime headser and first question.
function quiz() {
  var intro = document.querySelector(".intro");
  var quiz = document.querySelector(".quiz");
  
  
  if (quiz.style.display = 'none');
  intro.style.display = 'none';
  
  
  for (let i = 0; i < questions.length; i++) {
    questions[i].style.display = 'block';
    
  }
  
}
console.log(questions[0]);


//FIXME: master function - all functions combined for single eventListener.
// function quizTime () {
//   setTime ();
//   console.log(setTime());
//   console.log("set time is working");
//   quiz ();
//   console.log(quiz());
//   console.log("quiz is working");
  
// }

// master event listener attached to the start button.

startBtn.addEventListener("click", setTime);

// answer buttons
var rightBtn = document.querySelector("#answer-right");
var wrongBtn = document.querySelector("#answer-wrong");

// right answers colour changed based on validitiy
function rightAnswerReact(){
  if (rightBtn.style.backgroundColor === "#0d324d"){
  
  rightBtn.style.backgroundColor = '#green';
  // rightBtn.setProperty.style.color = '--background-color';
  console.log("reading right answer");
}
}

// FIXME:
rightBtn.addEventListener("click", rightAnswerReact);
console.log("test");
// console.log(rightAnswerReact);


// wrong answers colour changed based on validitiy
function wrongAnswerReact(){
  wrongBtn.setProperty.style.backgroundColor ='--wrong-color';
  wrongBtn.setProperty.style.color = '--background-color';
}

// FIXME:
wrongBtn.addEventListener("click", wrongAnswerReact); 

// local storage - storing end time
function storeTime() {
  localStorage.setItem("time", secondsLeft);
  console.log("store time is working");
}



// using local storage to create a score


// list of all questions, choices, and answers
var questions = [
  {
    title: 'Commonly used data types DO NOT include:',
    choices: ['strings', 'booleans', 'alerts', 'numbers'],
    answer: 'alerts',
  },
  {
    title: 'Camel Case is a:',
    choices: ['water bottle', 'way of naming JavaScript elements', 'a police case involving a camel in 1976'],
    answer: 'way of naming JavaScript elements',
  },
  {
    title: 'How do you call a function?',
    choices: ['function ();', 'function;', 'function[];', 'function{};'],
    answer: 'function ()',
  }
]


// from mod4.20 - needs to be for answers not questions.
function event () {
 
  var element = event.target;
  
  var state = element.getAttribute("data-state");
  
  if (state === "hidden"){
    element.setAttribute("data-state", "visible");
  
    element.textContent = element.getAttribute("data-number") ;
    
  }else {
    element.setAttribute("data-state", "hidden");
    element.textContent = "";
  }
  
  
})

