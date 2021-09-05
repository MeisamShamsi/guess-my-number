"use strict";

// creat a random number
let randNum = Math.floor(Math.random() * 20 + 1);
let i = 20;
let highestScore = [];

// Defining the default values for the Again button
const startMessage = document.querySelector(".result p").textContent;
const inputValue = document.querySelector(".input").value;
const box = document.querySelector(".square p").textContent;

// Defining the Again button
document.querySelector(".again-btn").addEventListener("click", function () {
  randNum = Math.floor(Math.random() * 20 + 1);
  i = 20;
  document.querySelector(".limit").textContent = i;
  document.querySelector(".result p").textContent = startMessage;
  document.querySelector(".input").value = inputValue;
  document.querySelector(".square p").textContent = box;
});

// determine what should happen when the click button is clicked
document.querySelector(".check-btn").addEventListener("click", function () {
  // Get the number of inout feild
  let guess = Number(document.querySelector(".input").value);
  console.log(guess, typeof guess);

  // compare the guess with the generated random number
  if (guess === randNum) {
    document.querySelector(".result p").textContent = "Well done, you won!";
    document.querySelector(".square p").textContent = guess;
    highestScore.push(i);
    document.querySelector(".hScore").textContent = Math.max(...highestScore);
  } else if (guess < randNum) {
    document.querySelector(".result p").textContent = "Too low";
    // reduce the score if the guess is lower than the random number
    i = i - 1;
    document.querySelector(".limit").textContent = i;
    // losing condition
    if (i <= 0) {
      document.querySelector(".result p").textContent = "You lost";
      document.querySelector(".limit").textContent = "you reached the limit";
    }
  } else if (guess > randNum) {
    document.querySelector(".result p").textContent = "Too high";
    // reduce the score if the guess is lower than the random number
    i = i - 1;
    document.querySelector(".limit").textContent = i;
    // losing consitions
    if (i <= 0) {
      document.querySelector(".result p").textContent = "You lost";
      document.querySelector(".limit").textContent = "you reached the limit";
    }
  }
});
