// This is a comment
let cart_quantity = 0;


// Creating an object to add a score by updating the result.
const score = {
  wins: 0,
  losses: 0,
  ties: 0
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

  alert(`Scores have been reset
Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}.`)
}