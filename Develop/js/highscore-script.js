// let finishTime = localStorage.getItem("time");
// let score = document.querySelector("score")

// let player = ""
// let firstPlace = document.getElementById("first-score");
// let secondPlace = document.getElementById("second-score");
// let thirdPlace = document.getElementById("third-score");
// let fourthPlace = document.getElementById("fourth-score");

// let firstInitialEl= document.getElementById("player-inititals-1");
// let secondInitialEl= document.getElementById("player-inititals-2");
// let thirdInitialEl= document.getElementById("player-inititals-3");
// let fourthInitialEl= document.getElementById("player-inititals-4");

let olEl = document.getElementById("highscores");

var highscoreObject = JSON.parse(localStorage.getItem("highscoreArray"));
console.log(highscoreObject);
let sortedScores = [];

for (var initital in highscoreObject) {
  sortedScores.push([initital,highscoreObject[initital]]);
}

sortedScores.sort((a,b) => {
  return b[1] - a[1];
});

for (let i=0; i<sortedScores.length-1; i++) {
  liEL = document.createElement("li");
  olEl.appendChild(liEL);
  liEL.innerHTML = secondsLeft;
}