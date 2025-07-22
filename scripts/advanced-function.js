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
const buttonElement = () => {
  setTimeout(() => {
    jsButton.innerHTML = 'Finished!';
  }, 3000); 
};

jsButton.addEventListener('click', buttonElement);
