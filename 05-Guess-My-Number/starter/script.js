'use strict';

//State variables
let secretNumber = Math.trunc(Math.random() * 20) + 1;
const initialScore = 20;
let score = initialScore;
let highScore = 0;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
};

//Click handler for checking
document.querySelector('.check').addEventListener(
    'click',
    function () {
        const guess = Number(document.querySelector('.guess').value);

        if (!guess) {
            displayMessage('⛔ No number!');
        } else if (guess == secretNumber) {
            displayMessage('🎉 Correct number!');
            document.querySelector('body').style.backgroundColor = '#60b347';
            document.querySelector('.number').style.width = '30rem';
            document.querySelector('.number').textContent = secretNumber;
            if (score > highScore) {
                highScore = score;
                document.querySelector('.highscore').textContent = highScore;
            }
        } else if (guess !== secretNumber && score > 1) {
            displayMessage(guess > secretNumber ? '📈 Guess too high' : '📉 Guess too low');
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            displayMessage('💣 You lost');
            document.querySelector('.score').textContent = 0;
        }
    }
);

//Click handler for again button
document.querySelector('.again').addEventListener(
    'click',
    function () {
        score = initialScore;
        secretNumber = Math.trunc(Math.random() * 20) + 1;
        displayMessage('Start guessing...');
        document.querySelector('.number').textContent = '?';
        document.querySelector('.score').textContent = score;
        document.querySelector('.guess').value = '';
        document.querySelector('body').style.backgroundColor = '#222';
        document.querySelector('.number').style.width = '15rem';
    }
);
