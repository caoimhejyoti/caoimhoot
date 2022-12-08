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
  },
    {
    rank: "Fourth Place",
    score: 0,
    initial: "",
  }
];

currentResult = localStorage.getItem ("currentScore");
currentPlayer = localStorage.getItem ("player");

// function highScoreBase(){
//   firstPlace.innerHTML=highscoreArray[0].score;
//   firstPlace.innerHTML=highscoreArray[0].initial;
//   secondPlace.innerHTML=highscoreArray[1].score;
//   secondPlace.innerHTML=highscoreArray[1].initial;
//   thirdPlace.innerHTML=highscoreArray[2].score;
//   thirdPlace.innerHTML=highscoreArray[2].initial;
//   fourthPlace.innerHTML=highscoreArray[3].score;
//   fourthPlace.innerHTML=highscoreArray[3].initial;

// }


currentGame = [
  {
    rank: "",
    score: currentResult,
    initial: currentPlayer,
  }
]

function setHighScore(){
  console.log("set high score worked");
  if (currentGame[0].score>=highscoreArray[0].score && currentGame[0].score>highscoreArray[1].score && currentGame[0].score>highscoreArray[2].score){
    let tempScore=highscoreArray[0].score;
    highscoreArray[2].score=highscoreArray[1].score;
    highscoreArray[2].initial=highscoreArray[1].initial;
    highscoreArray[1].score=highscoreArray[0].score;
    highscoreArray[1].initital=highscoreArray[0].initital;
    highscoreArray[0].score=currentGame[0].score;
    highscoreArray[0].initial=currentGame[0].initial;
    console.log("if statement reached");
    firstPlace.innerHTML=currentResult;
    firstInitialEl.innerHTML=currentPlayer;
    secondPlace.innerHTML



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

