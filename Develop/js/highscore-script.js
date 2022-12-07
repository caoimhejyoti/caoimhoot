let finishTime = localStorage.getItem("time");
let score = document.querySelector("score")



let player = ""
let firstPlace = document.getElementById("first-score");
let secondPlace = document.getElementById("second-score");
let thirdPlace = document.getElementById("third-score");
let fourthPlace = document.getElementById("fourth-score");

let firstInitialEl= document.getElementById("player-inititals-1");
let secondInitialEl= document.getElementById("player-inititals-2");
let thirdInitialEl= document.getElementById("player-inititals-3");
let fourthInitialEl= document.getElementById("player-inititals-4");

let highscoreArray = [
  
  {
    rank: "First Place",
    score: 0,
    initial: "",
  },
  {
    rank: "Second Place",
    score: 0,
    initial: "",
  },
  {
    rank: "Third Place",
    score: 0,
    initial: "",
  }
];

currentResult = localStorage.getItem ("currentScore");
currentPlayer = localStorage.getItem ("player");

currentGame = [
  {
    rank: "",
    score: currentResult,
    initial: currentPlayer,
  }
]

function setHighScore(){
  console.log("set high score worked");
  if (currentGame[0].score>=highscoreArray[0].score){
    let tempScore=highscoreArray[0].score;
    highscoreArray[0].score=currentGame[0].score;
    highscoreArray[0].initial=currentGame[0].initial;
    console.log("if statement reached");
    firstPlace.innerHTML=currentResult;
    firstInitialEl.innerHTML=currentPlayer;


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


setHighScore();


function createScore() {
    score.textContent = finishTime.textContent;
  
    if (score > document.querySelector("#fourth-score")){
    replace(document.querySelector("#fourth-score"))
  
    }else if (score > document.querySelector("#third-score")){
    replace(document.querySelector("#third.score"))
  
    }else if (score > document.querySelector("#second-score")){
    replace(document.querySelector("#second.score"))
  
    }else if (score > document.querySelector("#first-score")){
    replace(document.querySelector("#first-score"))
  
    }
  }

  // use JSON