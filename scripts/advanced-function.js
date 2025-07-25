// 12a Create a variable called add and save a function inside. This function will console.log(2+3); run the function twice.

const add = function () {
  console.log(2+3);
}

add();

// 12b Create a function runTwice(fun) that takes a function as a parameter and rus it runTwice.

const runTwice = (fun) => {
  fun()
}

runTwice(add);

// 12c Create a button when clicking the button, after 3 seconds, the text insede the button cnanges to 'Finished'. 

// Select the button element 
const jsButton = document.querySelector('.finish-button');

// Define the function to update button text
/*
const buttonElement = () => {
  setTimeout(() => {
    jsButton.innerHTML = 'Finished!';
  }, 3000); 
};

// Add click event listener to the button
jsButton.addEventListener('click', buttonElement);
*/

// 12d Modify the button so that wen we click it, the text immediately changes ot Loading... and then after 3 seconds, it changes to Finished.

const buttonElement = () => {
  jsButton.innerHTML = 'Loading...'
  setTimeout(() => {
    jsButton.innerHTML = 'Finished!';
  }, 3000); 
};

jsButton.addEventListener('click', buttonElement);

// 12e Create the 'Add to Cart button' when clicking this button, display the message 'Added' below the button. Then, after 2 seconds, remove the message.

// select button elements.
const addButtonElement = document.querySelector('.add-to-cart-button');
const addedParagraph = document.querySelector('.added');

// Define what happens when button is clicked
const addButtonFunction = () => {
  addedParagraph.innerHTML = 'Added';
  
  // Remove the message after 2 seconds
  setTimeout(() => {
    addedParagraph.innerHTML = '';
  }, 2000);
}

addButtonElement.addEventListener('click', addButtonFunction);


// 12j Create an arrow function called 'multiply' that takes 2 numbers, multiplies them togther, and returns the result.

const multiply = (num1, num2) => {
  return num1 * num2;
};

console.log(multiply(7, 3))

// 12k Continuing from the exericise above, Write the arrow function in one line

const multiply1 = (num3, num4) => num3 * num4;

// 12l Create a function countPositive(nums) that takes an array of numbers and returns how many numbers in the array are greater that 0. Create this funtion using .forEach instead of a loop.

const countPositive = nums => {
  let positiveNumbers = 0;

  nums.forEach((value, index) => {
    if (value > 0 ) {
      positiveNumbers++;
    }
  });
  return positiveNumbers;
}

console.log(countPositive([1, -2, 5]))


/*
const newArray = [1, 2, 3]

const updatedArray = newArray.map((value, index) => {
 return value + 2;
})

console.log(updatedArray) 
*/

// 12m Create a function that takes an array of number and returns an array where each number is increased

const addNum = (newArray) => {
  const updatedArray = newArray.map((value, index) => value + 2);

  console.log(updatedArray) 
};

addNum([1, -2, 3])