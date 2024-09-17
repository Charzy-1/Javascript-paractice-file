function headButton () {
    const headButtonEl = document.querySelector('.js-parapgh').innerHTML
    = 'You chose: heads';

}

function tailButton () {
    const tailButtonEl = document.querySelector('.js-parapgh').innerHTML
    = 'You chose: tails';

}


//function to handle submit button
function getYourName () {
    const inputEl = document.querySelector('.js-input');
    const name = inputEl.value;

    const submitButtonEl = document.querySelector('.js-name-paragraph').innerHTML
    = `Your name is: ${name}`;

    inputEl.value = '';

};

//function to handle submit when enter button is hit on the keyboard
function enterKey (event) {
    if (event.key === 'Enter') {
        getYourName ();
    };
};
