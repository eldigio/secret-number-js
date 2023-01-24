'use strict';

const initColor = '#222';
const winColor = '#60b347';
let highScore = 0;
let score = 20;

const button = document.querySelector('.check');
const again = document.querySelector('.again');
const input = document.querySelector('.guess');
const message = document.querySelector('.message');
const number = document.querySelector('.number');
const scoreValue = document.querySelector('.score');
const highScoreValue = document.querySelector('.highscore');

let secretNumber = Math.trunc(Math.random() * 20 + 1);
console.log(secretNumber);

const win = mex => {
  message.textContent = mex;
  number.textContent = secretNumber;
  document.body.style = `background-color: ${winColor}`;
  if (highScore < score) highScore = score;
};

const errorOrLost = (errorMex, lostMex = 'Hai perso') => {
  if (score > 1) {
    score--;
    message.textContent = `Numero troppo ${errorMex}`;
    scoreValue.textContent = score;
  } else {
    message.textContent = lostMex;
    scoreValue.textContent = 0;
  }
};

button.addEventListener('click', () => {
  const guess = Number(input.value);
  if (!guess) message.textContent = 'Nessun numero inserito';
  else if (guess === secretNumber) {
    win('Numero corretto');
  } else if (guess > secretNumber) {
    errorOrLost('alto');
  } else if (guess < secretNumber) {
    errorOrLost('basso');
  }
});

// reset score = 20, guessNumber, message, bg-color
// generate new secretNumber
// clear input

const resetInterface = () => {
  score = 20;
  scoreValue.textContent = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  console.log(secretNumber);
  number.textContent = '?';
  input.value = '';
  message.textContent = 'Inizia ad indovinare...';
  document.body.style = `background-color: ${initColor}`;
  highScoreValue.textContent = highScore;
};

again.addEventListener('click', resetInterface);
