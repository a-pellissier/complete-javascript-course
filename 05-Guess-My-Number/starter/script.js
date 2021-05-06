'use strict';

//State variables
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let initialScore = 20;
let score = initialScore;
let highScore = 0;

//Click handler for checking
document.querySelector('.check').addEventListener(
    'click',
    function () {
        const guess = Number(document.querySelector('.guess').value);

        if (!guess) {
            document.querySelector('.message').textContent = '⛔ No number!';
        } else if (guess == secretNumber) {
            document.querySelector('.message').textContent = '🎉 Correct number!';
            document.querySelector('body').style.backgroundColor = '#60b347';
            document.querySelector('.number').style.width = '30rem';
            document.querySelector('.number').textContent = secretNumber;
            if (score > highScore) {
                highScore = score;
                document.querySelector('.highscore').textContent = highScore;
            }
        } else if (guess > secretNumber && score > 1) {
            document.querySelector('.message').textContent = '📈  Guess too high';
            score--;
            document.querySelector('.score').textContent = score;
        } else if (guess < secretNumber && score > 1) {
            document.querySelector('.message').textContent = '📉  Guess too low';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = '💣  You lost';
            score--;
            document.querySelector('.score').textContent = score;
        }
    }
);

//Click handler for again button$
document.querySelector('.again').addEventListener(
    'click',
    function () {
        let score = initialScore;
        secretNumber = Math.trunc(Math.random() * 20) + 1;
        document.querySelector('.message').textContent = 'Start guessing...';
        document.querySelector('.number').textContent = '?';
        document.querySelector('.score').textContent = score;
        document.querySelector('.guess').value = '';
        document.querySelector('body').style.backgroundColor = '#222';
        document.querySelector('.number').style.width = '15rem';
    }
);
