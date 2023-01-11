'use strict';

let score = 20;
let highestScore = 0;
let secretNumber = Math.trunc(Math.random() * 20) + 1;

//check button listener
document.querySelector('.check').addEventListener('click', function () {
  let inputNumber = Number(document.querySelector('.guess').value);

  console.log(inputNumber);
  //input is empty
  if (inputNumber === 0) {
    document.querySelector('.message').textContent = 'No Number !';
    document.querySelector('.check').disabled = true;
    setTimeout(function () {
      document.querySelector('.message').textContent = 'Start guessing...';
      document.querySelector('.check').disabled = false;
    }, '3000');
    return;
  }

  //not valid number
  if (inputNumber > 20) {
    document.querySelector('.message').textContent = '(Between 1 and 20)';
    document.querySelector('.check').disabled = true;
    setTimeout(function () {
      document.querySelector('.message').textContent = 'Start guessing...';
      document.querySelector('.check').disabled = false;
    }, '3000');
    return;
  }

  if (inputNumber === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Guess !!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    highestScore = Math.max(highestScore, score);
    document.querySelector('.number').style.width = '20rem';
    document.querySelector('.number').textContent = secretNumber + '🥳';
    document.querySelector('.highscore').textContent = highestScore;
    document.querySelector('.guess').value = '';
    document.querySelector('.again').style.backgroundColor = 'yellow';
    document.querySelector('.check').disabled = true;
    return;
  } else if (inputNumber > secretNumber) {
    document.querySelector('.message').textContent = 'Too High !!';
    score--;
  } else {
    document.querySelector('.message').textContent = 'Too Low !!';
    score--;
  }
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '😔';

  //if score is zero game over
  if (score === 0) {
    document.querySelector('body').style.backgroundColor = '#ff4d4d';
    document.querySelector('.guess').value = '';
    document.querySelector('.check').disabled = true;
    document.querySelector('.again').style.backgroundColor = 'yellow';
    return;
  }
});

document.querySelector('.again').addEventListener('click', function () {
  //reset the page
  score = 20;
  document.querySelector('.again').style.backgroundColor = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.check').disabled = false;
  document.querySelector('.guess').value = '';
});
