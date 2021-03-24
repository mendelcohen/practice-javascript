// Return the sum of all numbers in a given array.

// NOTE: Do not use any built-in language functions that do this automatically for you.

// Input: [1, 2, 3, 4]
// Output: 10

// Explanation: (1 + 2 + 3 + 4) = 10

//function numbersSum(array) {
//   var sum = 0;
//   for (var i = 0; i < array.length; i++) {
//     sum += array[i];
//   } 
//   return sum;
// }
// console.log(numbersSum([1, 2, 3, 4, 5]));

const numbersSum = array => {
  var sum = 0;
  for (var i = 0; i < array.length; i++) {
    sum += array[i];
  } 
  return sum;
}
// console.log(numbersSum([1, 2, 3, 4, 5]));

// Given an array of numbers, return a new array that contains all numbers from the original array that are less than 100.

// Input: [99, 101, 88, 4, 2000, 50]
// Output: [99, 88, 4, 50]

// function lessThanHundred(array) {
//   var newArray = [];
//   array.forEach(function(number) {
//     if (number < 100) {
//       newArray.push(number);
//     }
//   });
//   return newArray;
// }
// console.log(lessThanHundred([99, 101, 88, 4, 2000, 50]));

function lessThanHundred(array) {
  var newArray = [];
  array.forEach(number => {
    if (number < 100) {
      newArray.push(number);
    }
  });
  return newArray;
}
// console.log(lessThanHundred([99, 101, 88, 4, 2000, 50]));



// Given an array of numbers, return a new array whose values are the original array’s value doubled.

// Input: [4, 2, 5, 99, -4]
// Output: [8, 4, 10, 198, -8]

function doubledInts(array) {
  var doubled = array.map(int => int * 2);
  return doubled;
}
// console.log(doubledInts([4, 2, 5, 99, -4]));

// const doubledInts = array => {
//   let doubled = array.map(int => int * 2);
//   return doubled;
// };
// console.log(doubledInts([4, 2, 5, 99, -4]));



// Return the greatest value from an array of numbers.

// Input: [5, 17, -4, 20, 12]
// Output: 20

const greatestValue = array => {
  let greatestNumber = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > greatestNumber) {
      greatestNumber = array[i];
    } 
  }
  return greatestNumber;
};
// console.log(greatestValue([-5, -17, -4, -20, -12, 0]));



// Given an array of numbers, return the product of all the numbers.

// Input: [1, 2, 3, 4]
// Output: 24

// Explanation: (1 x 2 x 3 x 4) = 24

function productNums(array) {
  var product = 1;
  array.forEach(function(int) {
    product *= int;
  });
  return product;
}
// console.log(productNums([1, 2, 3, 4, 10]));



// Given an array, return a new array that contains the original array’s values in reverse.

// Input: [1, 2, 3, 4, 5]
// Output: [5, 4, 3, 2, 1]

function reverseArray(array) {
  var arrayReversed = [];
  array.forEach(function(int) {
    arrayReversed.unshift(int);
  });
  return arrayReversed;
}
// console.log(reverseArray([1, 2, 3, 4, 5]));

const reversedArray = array => {
  let arrayReversed = [];
  for (let i = 0; i < array.length; i++) {
    arrayReversed.unshift(array[i]);
  }
  return arrayReversed;
};
// console.log(reversedArray([1, 2, 3, 4, 5]));

const reversingArray = array => {
  let arrayReversed = [];
  for (let i = array.length - 1; i >= 0; i--) {
    arrayReversed.push(array[i]);
  }
  return arrayReversed;
};
// console.log(reversingArray([1, 2, 3, 4, 5]));



// Given an array of numbers, return a new array in which only select numbers from the original array are included, based on the following details:

// The new array should always start with the first number from the original array. The next number that should be included depends on what the first number is. The first number dictates how many spaces to the right the computer should move to pick the next number. For example, if the first number is 2, then the next number that the computer should select would be two spaces to the right. This number gets added to the new array. If this next number happens to be a 4, then the next number after that is the one four spaces to the right. And so on and so forth until the end of the array is reached.

// Input:
// [2, 1, 3, 2, 5, 1, 2, 6, 2, 7, 1, 5, 6, 3, 2, 6, 2, 1, 2]

// Output:
// [2, 3, 1, 2, 2, 1, 5, 2, 2]

const selectNumbers = array => {
  let arraySelection = [];
  let index = 0;
  while (index < array.length) {
    arraySelection.push(array[index]);
    index += array[index];
  }
  return arraySelection;
};
console.log(selectNumbers([2, 1, 3, 2, 5, 1, 2, 6, 2, 7, 1, 5, 6, 3, 2, 6, 2, 1, 2]));