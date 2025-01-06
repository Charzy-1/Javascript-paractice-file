// String properties:
// length property

// e.g 
 const myName = 'Chukwuma';

console.log(myName.length);

// Acessing a position of letter in string with the above example 

const firstLetter = myName[0]
console.log(firstLetter);


const lastLetter = myName.length -1;
console.log(`The last letter on the string is: ${myName[lastLetter]}`);

// Changing case as a sting method

const lowerCase = myName.toLowerCase();
console.log(lowerCase);

const upperCase = myName.toUpperCase();
console.log(upperCase);

// There are multiple ways to look for a substring within a string.

str.indexOf()
// The first method is str.indexOf(substr, pos).

// It looks for the substr in str, starting from the given position pos, and returns the position where the match was found or -1 if nothing can be found.

// For instance:

const exampleString = "I love ducks, he said, ducks are great!";

exampleString.indexOf("ducks"); // 7
exampleString.indexOf("Ducks"); // -1

// The optional second parameter allows us to search starting from the given position.

// For instance, the first occurrence of 'ducks' is at position 7. To look for the next occurrence, let’s start the search frome position 8:

exampleString.indexOf("ducks", 8); // 23

// str.lastIndexOf()
// str.lastIndexOf(substr, position)

// There is also a similar method str.lastIndexOf(substr, position) that searches from the end of a string to its beginning.

exampleString.lastIndexOf("ducks"); // 23

// Great! Now you can use indexOf methods if you need to find the exact position of some substrings in a string.

// includes()
// But much more often, you're just interested if a string contains something, and you're not concerned where is it in the string.

// For these cases you can use string.includes()

// It simply returns true or false.

// It’s the right choice if we need to test for the match, but don’t need its position:

const exampleString = "I love ducks, he said, ducks are great!";

exampleString.includes("ducks"); // true

// As with the indexOf method, he optional second argument of str.includes is the position to start searching from.

// str.startsWith() and str.endsWith()
// The methods str.startsWith and str.endsWith do exactly what they say:

exampleString.startsWith("I"); // true
exampleString.endsWith("ducks"); // false

// Getting for a substring

// We use the slice method slice() for example get the dog printed
const subString = 'hotdog'

console.log(subString.slice(3, 6));

// Splitting a string

const splitString = subString.split('');

console.log(splitString);

// Splitting a sentence to words. This is done by splitting by space character.

// For example

const sentence = 'My debts are paid in the name of Jesus';

const splitedString = sentence.split(' ');

console.log(splitedString);

// trim method trim() is used to remove empty spaces in a string

const str = "       Hello World!        ";

console.log(str.trim());


// We have .reverse() which works on arrays to reverse strings. Note the string must be splitted before the reverse method should be called and joined afterwards like so:


const exampleString1 = "test";

str.split("").reverse().join(""); // tset


// Repeat method still exist for string 

const dogSays = "woof";

console.log(dogSays.repeat(5)); // woofwoofwoofwoofwoof
