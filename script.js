'use strict';

let score = 20;
let highestScore = 0;
let secretNumber = Math.trunc(Math.random() * 20) + 1;

document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  let inputNumber = document.querySelector('.guess').value;

  if (inputNumber === '' || inputNumber === '0') {
    document.querySelector('.message').textContent = 'No Number !';
    document.querySelector('.check').disabled = true;
    setTimeout(function () {
      document.querySelector('.message').textContent = 'Start guessing...';
      document.querySelector('.check').disabled = false;
    }, '3000');
  }

  if (inputNumber === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Guess !!';
    document.querySelector('body').style.backgroundColor = '#60b347';
  }
});
