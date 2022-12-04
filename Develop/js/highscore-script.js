let finishTime = localStorage.getItem("time");
let score = document.querySelector("score")

let highScoreOne = document.querySelector("#first-score");
let highScoreTwo = document.querySelector("#second-score");
let highScoreThree = document.querySelector("#third-score");
let highScoreFour = document.querySelector("#fourth-score");

highScoreOne==0;
highScoreTwo==0;
highScoreThree==0;
highScoreFour==0;



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