let number = Math.floor(Math.random() * 100) + 1;

const userInput = document.querySelector('#guessField');
const submit = document.querySelector('#subt');
const remaining = document.querySelector('.lastResult');
const lowOrHigh = document.querySelector('.lowOrHi');
const guessSlot = document.querySelector('.guesses');
const startOver = document.querySelector(".resultParas");

let previousGuesses = [];
let attemptsLeft = 10;
let gameActive = true;

submit.addEventListener('click', (e) => {
  e.preventDefault();
  if (!gameActive) return;

  const guess = Number(userInput.value.trim());

  // Input Validation
  if (!guess && guess !== 0) {
    alert('Please enter a valid number');
    userInput.value = '';
    return;
  }

  if (guess < 1 || guess > 100) {
    alert('Number must be between 1 and 100');
    userInput.value = '';
    return;
  }

  // Valid guess
  handleGuess(guess);
});

function handleGuess(guess) {
  previousGuesses.push(guess);
  guessSlot.textContent = previousGuesses.join(', ');
  attemptsLeft--;

  if (guess === number) {
    endGame(true);
  } else if (attemptsLeft === 0) {
    endGame(false);
  } else {
    userInput.value = '';
    remaining.textContent = attemptsLeft;
    lowOrHigh.textContent = guess < number ? 'Too low!' : 'Too high!';
  }
}

function endGame(won) {
  gameActive = false;
  userInput.disabled = true;
  submit.disabled = true;

  if (won) {
    lowOrHigh.textContent = `🎉 You win! The correct number was ${number}`;
    lowOrHigh.style.color = 'green';
  } else {
    lowOrHigh.textContent = `💥 Game over! The number was ${number}`;
    lowOrHigh.style.color = 'red';
  }

  // Create Reset Button
  const resetBtn = document.createElement('button');
  resetBtn.textContent = 'Play Again';
  startOver.appendChild(resetBtn);

  resetBtn.addEventListener('click', resetGame);
}

function resetGame() {
  number = Math.floor(Math.random() * 100) + 1;
  attemptsLeft = 10;
  previousGuesses = [];
  gameActive = true;

  userInput.disabled = false;
  submit.disabled = false;
  userInput.value = '';
  guessSlot.textContent = '';
  lowOrHigh.textContent = '';
  lowOrHigh.style.color = '';
  remaining.textContent = '10';
  startOver.innerHTML = ''; // Remove reset button
}
