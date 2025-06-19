
/* 
let cartQuantity = 0;

let name = 'Charzy';

console.log(`My name is: ${name}`);

let oneCoffee = 5;
let baggel = 3; 
let soup = 9;

let cost = oneCoffee + (baggel*2) + soup;
console.log(`cost of food is: $${cost}`);

let tax = 0.1;

let Tax = cost * tax;
console.log(`Tax(10%) of ${cost} is: $${Tax}`);

let totalCost = cost + Tax;
console.log(`Total cost is: $${totalCost}`);

let calculation = ''; 

let hour = 21

let name = 'Charles';

if (hour >= 6 && hour < 12) {
  console.log(`Good morning! ${name}`);
} else if (hour >= 13 && hour < 17) {
  console.log(`Good afternoon! ${name}`);
} else {
  console.log(`Good night ${name}`);
}

let age = 30;

const isHoliday = true;

((age < 6 || age > 65) && !isHoliday) ? console.log('discount') : console.log('No discount');


let randNumber =  Math.random();

let guess = 'heads' || 'tails';

// if (randNumber < 0.5) {
//   result = 'heads';
// } else {
//   result = 'tails';
// }

randNumber < 0.5 ? result = 'heads' : result = 'tails';

// if (result === guess) {
//   console.log('You win');
// } else {
//   console.log('You lose')
// }

result === guess ? console.log('You win') : console.log('You lose');


let cartMaxQuantity = 10;


function greet(name) {
  if (!name) return;
  return `Hello ${name}!`;
};

const greeting = greet();

greeting === undefined ? console.log('Hi there') : console.log(greeting);

*/

function convertToFarenheight(celsius) {
  const farenheight = (celsius * 9/5) + 32;
  return farenheight;
};


console.log(convertToFarenheight(25));

function convertToCelsius(farenheight) {
  const celsius = (farenheight - 32) * 5/9 
  return celsius;
}

console.log(convertToCelsius(86))