// Functions in Javascript are a block of code that peforms a specific task

/* A FUNCTION DECLARATION (defining a function)
A simple structure of a function

function name of the function (parameter to pass to the function) {
    function body which can be anything.;
} */

// A use case scenario for a function that adds a number

/* function add (number) {
    return number + number;
}

// A FUNCTION CALL (invoking/caling or executing a function)
const result = add(10);

console.log(result) */


// THREE WAYS OF CREATING A FUNCTION IN JAVASCRIPT

/* 1. A FUNCTION DECLARATION (defining a function)

function name(params) {
    //block of codes or statements here
    // This type of function is basically used to have access to the 'this' keyword
}

// 2. FUNCTION EXPRESSION is a named or anonymous function
// A function without a name is known as anonymous function the structure is like below:

const  name = function(parameters) {
    //block of codes or statements here 
} 

3. AN ARROW FUNCTION is a shorter form of writing function expression

const  name = (parameters) => {
    //block of codes or statements here 
} 
    
A simple example is: */

const greet = (name) => {
    console.log(`Hi, ${name}!`);
}

greet('George');
