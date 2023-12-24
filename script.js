'use strict';
const documentScore0 = document.querySelector('#score--0');
const documentScore1 = document.querySelector('#score--1');
const documentCurrent0 = document.querySelector('#current--0');
const documentCurrent1 = document.querySelector('#current--1');
const documentDice = document.querySelector('.dice');
const documentBtnNew = document.querySelector('.btn--new');
const documentBtnRoll = document.querySelector('.btn--roll');
const documentBtnHold = document.querySelector('.btn--hold');
const documentPlayer0 = document.querySelector('.player--0');
const documentPlayer1 = document.querySelector('.player--1');

let playing = true;
const playersScore = [0, 0];
let currentPlayer = 0;
let currentScore = 0;
const playerSwitch = function () {
  document.getElementById(`current--${currentPlayer}`).textContent = 0;
  currentPlayer = currentPlayer === 0 ? 1 : 0;
  documentPlayer1.classList.toggle('player--active');
  documentPlayer0.classList.toggle('player--active');
};
const checkWiner = function () {};

documentScore0.textContent = 0;
documentScore1.textContent = 0;
documentDice.classList.add('hidden');

documentBtnRoll.addEventListener('click', function () {
  if (playing) {
    const rollNum = Math.trunc(Math.random() * 6) + 1;
    documentDice.classList.remove('hidden');
    documentDice.src = `dice-${rollNum}.png`;
    if (rollNum > 1) {
      currentScore += rollNum;
      document.getElementById(`current--${currentPlayer}`).textContent =
        currentScore;
    } else {
      document.getElementById(`current--${currentPlayer}`).textContent = 0;
      currentScore = 0;
      playerSwitch();
    }
  }
});

documentBtnHold.addEventListener('click', function () {
  if (playing) {
    playersScore[currentPlayer] += currentScore;
    currentScore = 0;
    document.getElementById(`score--${currentPlayer}`).textContent =
      playersScore[currentPlayer];
    if (playersScore[currentPlayer] >= 100) {
      document
        .querySelector(`.player--${currentPlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${currentPlayer}`)
        .classList.remove('player--active');
      documentDice.classList.add('hidden');
      playing = false;
    } else {
      playerSwitch();
    }
  }
});

documentBtnNew.addEventListener('click', function () {
documentDice.classList.add('hidden');
document
        .querySelector(`.player--${currentPlayer}`)
        .classList.remove('player--active');
  document
    .querySelector(`.player--${currentPlayer}`)
    .classList.remove('player--winner');
  document.getElementById(`current--${currentPlayer}`).textContent = 0;
  documentScore1.textContent = 0;
  documentScore0.textContent = 0;
  documentPlayer0.classList.add('player--active');
  playing = true;
  currentScore = 0;
  playersScore[0] = 0;
  playersScore[1] = 0;
  console.log(playersScore);
});
