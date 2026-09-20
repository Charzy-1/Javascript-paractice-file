// This is a comment

let cart_quantity = 0;

// Function that will pick computer move

// First declare the global variable
let computerMove = '';

let result = '';

function pickComputerMove() {
  const randomNumber =  Math.random();
  
  if (randomNumber >= 0 && randomNumber < 1/3) {
    computerMove = 'Rock';
  } else if (randomNumber >= 1/3 && randomNumber < 2/3) {
    computerMove = 'Paper';
  } else if (randomNumber >= 2/3 && randomNumber < 1) {
    computerMove = 'Scissors';
  }
}