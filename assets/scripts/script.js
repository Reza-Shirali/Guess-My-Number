"use strict";

const checkBtn = document.querySelector(".check");
const againBtn = document.querySelector(".again");
const guessInput = document.querySelector(".guess");
const message = document.querySelector(".message");
const number = document.querySelector(".number");
const score = document.querySelector(".score");
const highScore = document.querySelector(".highscore");
const body = document.querySelector("body");

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let scoreNumber = Number(score.textContent);
let highScoreValue = 0


let displayMessage = (text) => {
    message.textContent = text
}

const checkHandler = () => {
  const guess = Number(guessInput.value);
  if (!guess) {
    displayMessage("⛔ No number!");
  } else if (guess === secretNumber) {
    displayMessage("🎉 Correct Number!");
    number.textContent = secretNumber;
    body.style.backgroundColor = "#60b347";
    highScore.textContent = scoreNumber;
    number.style.width = "30rem";
    scoreNumber > highScoreValue ? highScore.textContent = scoreNumber : highScore.textContent = highScoreValue;
  } else if (guess < secretNumber) {
    if (scoreNumber > 1) {
      displayMessage("📉 Too low!");
      scoreNumber--;
      score.textContent = scoreNumber;
    } else {
      displayMessage("You lost the game! 😢");
    }
  } else if (guess > secretNumber) {
    if (scoreNumber > 1) {
      displayMessage("📈 Too high!");
      scoreNumber--;
      score.textContent = scoreNumber;
    } else {
      displayMessage("You lost the game! 😢");
    }
  }
};

const againHandler = () => {
  guessInput.value = "";
  number.style.width = "15rem";
  displayMessage("Start guessing...");
  number.textContent = "?";
  body.style.backgroundColor = "#222";
  scoreNumber = 20;
  score.textContent = scoreNumber;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
};

checkBtn.addEventListener("click", checkHandler);
againBtn.addEventListener("click", againHandler);
