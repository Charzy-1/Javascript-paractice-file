// This is a comment

let cart_quantity = 0;

// Function PLAYER MOVE

function playGame(myMove) {
  let computerMove = pickComputerMove();

  let result = '';

  if (myMove === 'Rock') {
    if (computerMove === 'Rock') {
      result = 'You won.';
    } else if (computerMove === 'Paper') {
      result = 'It is a tie';
    } else if (computerMove === 'Scissors') {
      result = 'You lose';
    } else if (myMove === 'Paper') {
      if (computerMove === 'Rock') {
        result = 'You won.';
      } else if (computerMove === 'Paper') {
        result = 'It is a tie';
      } else if (computerMove === 'Scissors') {
        result = 'You lose';
      }
    } else if (myMove === 'Scissors') {
      if (computerMove === 'Rock') {
      result = 'You lose.';
      } else if (computerMove === 'Paper') {
        result = 'You won.';
      } else if (computerMove === 'Scissors') {
        result = 'it is a tie.';
      }
    }
  }

  alert(`You picked ${myMove}, Computer picked ${computerMove}. ${result}.`);
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