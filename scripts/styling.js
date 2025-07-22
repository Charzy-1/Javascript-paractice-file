
const gameButton = document.querySelector('.js-button');
const musicButton = document.querySelector('.js-button1');
const techButton = document.querySelector('.js-button2');

function isToggled () {
  if (!gameButton.classList.contains('is-toggled')) {
    gameButton.classList.add('is-toggled');
  }  else {
    gameButton.classList.remove('is-toggled');
  }
}

function isToggled1 () {
  if (!musicButton.classList.contains('is-toggled')) {
    musicButton.classList.add('is-toggled');
  }  else {
    musicButton.classList.remove('is-toggled');
  }
}

function isToggled2 () {
  if (!techButton.classList.contains('is-toggled')) {
    techButton.classList.add('is-toggled');
  }  else {
    techButton.classList.remove('is-toggled');
  }
}
