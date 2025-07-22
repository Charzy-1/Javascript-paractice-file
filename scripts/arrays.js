const numbers = [10, 20, 30];
// console.log(numbers);

numbers[numbers.length - 1] = 99;
// console.log(numbers);

function getLastValue(array) {
  const num = array;
  const lastNumber = num[num.length - 1];

  // console.log(lastNumber)
  
}

getLastValue(['hi', 'hello', 'fine'])

function arraySwap(myArray) {
  firstValue = myArray[0]
  // console.log(firstValue)

  myArray[0] = myArray[myArray.length -1];
  myArray[myArray.length -1] = firstValue;

  // console.log(myArray)
}

arraySwap(['hi', 'hello', 'fine'])

// For loop that counts up from 0 - 10

for (let i = 0; i < 11; i += 2) {
  // console.log(i);
}

// For loop that counts down from 5 - 0
for (let i = 5; i >= 0; i--) {
  // console.log(i);
}

// Using while loop to do the two exercise above

let i = 0;

while (i <= 11) {
  // console.log(i);
  i += 2;
}

// For loop that counts down from 5 - 0
let index = 5;

while (index >= 0) {
  console.log(index);
  index--;
}

// 11g: A loop that takes an array and return and increase of the array in 1
const numArray =  [1,2,3];
const newArray = [];

for (let num = 0; num < numArray.length; num++) {
   const num1 = numArray[num] + 1;
   newArray.push(num1);
}

// console.log(newArray);

// 11h: Whrite a function that takes an array of numbers and returns an array where each number is increased by 1

function addOne(numArray1) {
  const increamented = [];

  for (let num2 = 0; num2 < numArray1.length; num2++) {
    const num3 = numArray1[num2] + 1;
    increamented.push(num3);
  }
  return increamented;
}

// console.log(addOne([-2, -1, 0, 99]));

// number 11i 

function addNum(array1, number4) {
  let finalArray = [];

  for (let numarr = 0; numarr < array1.length; numarr++) {
    const finalArray1 = array1[numarr] + number4;
    finalArray.push(finalArray1);
  }
  return finalArray;
}

// console.log(addNum([1,2,3], 2))

// 11j Create a function that takes two arrays of numbers and adds each number in the arrays together. 

function addArrays(array2, array3) {
  const arraySum = [];

  for (let numInArr = 0; numInArr < array2.length; numInArr++) {
    const output = array2[numInArr] + array3[numInArr];
    arraySum.push(output);
  }
  return arraySum;
}

// console.log(addArrays([1,2,6], [2,3,4]))


// 11k: Create a function that takes an array of numbers and returns how many positive numbers in the array 
function countPositive(positive) {
  let newArray1 = [];

  for (let posInt = 0; posInt < positive.length; posInt++) {
    if (positive[posInt] >= 0) {
      newArray1.push(positive[posInt]);
    }
  }
  return newArray1.length;
}

console.log(countPositive([-2,3,-3,2,10]))
