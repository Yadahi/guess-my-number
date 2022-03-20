'use strict';

//TODO change background color when the game is over
//TODO add some easy animation. something in the background

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (classSelector, message) {
  document.querySelector(classSelector).textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    displayMessage('.message', '⛔️ No number!');

    // When player wins
  } else if (guess === secretNumber) {
    displayMessage('.message', '🎉 Correct Number!');
    displayMessage('.number', secretNumber);
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      displayMessage('.highscore', highscore);
    }

    // When guess is wrong
    // When guess is too high
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        '.message',
        guess > secretNumber ? '📈 Too high!' : '📉 Too low!'
      );
      score--;
      displayMessage('.score', score);
    } else {
      displayMessage('.message', '💥 You lost the game!');
      displayMessage('.score', 0);

      document.querySelector('.check').disabled = true;
    }
  }
});

//Push the button Again
document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  displayMessage('.number', '?');
  displayMessage('.message', 'Start guessing...');
  displayMessage('.score', score);

  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.check').disabled = false;
});
