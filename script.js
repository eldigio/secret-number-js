'use strict';
const MAX = 20;
const guessInput = document.querySelector('.guess');
const numberToGuess = document.querySelector('.number');
const message = document.querySelector('.message');
const score = document.querySelector('.score');
const btnCheck = document.querySelector('.check');

const randNum = Math.floor(Math.random() * MAX + 1);
console.log(randNum);

btnCheck.addEventListener('click', () => {
  if (guessInput.value <= 0) guessInput.value = 1;
  if (guessInput.value > randNum) {
    message.textContent = 'Numero troppo alto';
    score.textContent--;
  }
  if (guessInput.value < randNum) {
    message.textContent = 'Numero troppo basso';
    score.textContent--;
  }
  message.textContent = 'Esatto';
});
