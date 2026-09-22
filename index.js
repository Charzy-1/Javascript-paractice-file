// This is a comment
let cart_quantity = 0;

/*
GETTING WHAT IS STORED ON LOCAL STORAGE AND SAVING IT AS THE NEW SCORE
CONVERT TO JAVASCRIPT OBJECT FIRST BY USING JSON.PARSE METHOD
*/
let score = JSON.parse(localStorage.getItem('score'));

/* 
if we remove value stored on localStorage as we did in the reset button function at the bottom, the score will be null so we need to add a defult value to score so the reset button can be active in seeing what to use.
*/

if (score === null) {
  score = {
    wins: 0,
    losses: 0,
    ties: 0
  }
}

// Function PLAYER MOVE
function playGame(myMove) {
  let computerMove = pickComputerMove();

  let result = '';

  if (myMove === 'Rock') {
    if (computerMove === 'Rock') {
      result = 'It is a tie';
    } else if (computerMove === 'Paper') {
      result = 'You lose.';
    } else if (computerMove === 'Scissors') {
      result = 'You won.';
    }

  } else if (myMove === 'Paper') {
    if (computerMove === 'Rock') {
      result = 'You won.';
    } else if (computerMove === 'Paper') {
      result = 'It is a tie';
    } else if (computerMove === 'Scissors') {
      result = 'You lose.';
    }

  } else if (myMove === 'Scissors') {
    if (computerMove === 'Rock') {
      result = 'You lose.';
    } else if (computerMove === 'Paper') {
      result = 'You won.';
    } else if (computerMove === 'Scissors') {
      result = 'It is a tie';
    }
  }

  if (result === 'You won.') {
    score.wins += 1;
  } else if (result === 'You lose.') {
    score.losses += 1;
  } else if (result === 'It is a tie') {
    score.ties += 1;
  } 

  // STORING THE SCORE ON LOCAL STORAGE
  localStorage.setItem('score', JSON.stringify(score));

  alert(`You picked ${myMove}, Computer picked ${computerMove}. ${result}.
Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}.`);
}

// FUNCTION FOR THE COMPUTERMOVE
function pickComputerMove() {
  const randomNumber =  Math.random();
  
  let computerMove = '';

  if (randomNumber >= 0 && randomNumber < 1/3) {
    computerMove = 'Rock';
  } else if (randomNumber >= 1/3 && randomNumber < 2/3) {
    computerMove = 'Paper';
  } else if (randomNumber >= 2/3 && randomNumber < 1) {
    computerMove = 'Scissors';
  }
  
  return computerMove;
}

// FUNCTION TO RESET THE BUTTON
function resetScore() {
  score.wins = 0
  score.losses = 0
  score.ties = 0
  /*
  REMOVE THE STORED VALUE ON THE LOCAL STORAGE SO THIS RESET CAN WORL
  */
  localStorage.removeItem('score');
  
  alert(`Scores have been reset
Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}.`)
}

// DOM PROJECT BEGINS HERE
// FUNTION TO CHANGE THE SUBSCRIBE TO SUBSCRIBED WHEN CLICKED
function subscribeButton() {
  const buttonElement = document.querySelector('.js-subscribe-button');

  buttonElement.innerHTML = 'Subscribed';
}

// FUNCTION THAT CALCULATES WHEN THE CALCULATE BOTTON IS CLICKED
function calculate() {
  let inputElement = Number(document.querySelector('.js-cost-input').value);

  if (inputElement < 40) {
    inputElement += 10;
  }else if (inputElement >= 40) {
    inputElement;
  }

  document.querySelector('.output-value').textContent = `$${inputElement}`;
}