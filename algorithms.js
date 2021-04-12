// Return the sum of all numbers in a given array.

const { networkInterfaces } = require("os");

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
// console.log(selectNumbers([2, 1, 3, 2, 5, 1, 2, 6, 2, 7, 1, 5, 6, 3, 2, 6, 2, 1, 2]));



// Return the reverse of a given string.

// Input: “abcde”
// Output: “edcba”

const stringReverse = string => {
  let reversedString = "";
  for (let letter of string) {
    reversedString = letter + reversedString;
  }
  return reversedString;
};
// console.log(stringReverse("abcde"));

const stringReversed = string => {
  let reversedString = "";
  for (let i = 0; i < string.length; i++) {
    reversedString = string[i] + reversedString;
  }
  return reversedString;
};
// console.log(stringReversed("abcde"));

const stringReversing = string => {
  let reversedString = "";
  for (let i = string.length - 1; i >= 0; i--) {
    reversedString += string[i];
  }
  return reversedString;
};
// console.log(stringReversing("abcde"));



// Given a string, return true if the “$” character is contained within the string or false if it is not.

// Input: “i hate $ but i love money i know i know im crazy”
// Output: true

// Input: “abcdefghijklmnopqrstuvwxyz”
// Output: false

const dollarPresent = string => {
  for (let letter of string) {
    if (letter === "$") {
      return true;
    } 
  }
  return false;
};
// console.log(dollarPresent("i hate $ but i love money i know i know im crazy"));
// console.log(dollarPresent("abcdefghijklmnopqrstuvwxyz"));



// Given a string, return a copy of the original string that has every other character capitalized. (Capitalization should begin with the second character.)

// Input: “hello, how are your porcupines today?”
// Output: “hElLo, HoW ArE YoUr pOrCuPiNeS ToDaY?”

function uppercaseLetters(string) {
  let newString = "";
  for (var letter = 0; letter < string.length; letter++) {
    if (letter % 2 !== 0) {
      newString += string[letter].toUpperCase();
    } else {
      newString += string[letter];
    }
  }
  return newString;
}
// console.log(uppercaseLetters("hello, how are your porcupines today?"));



// Given a string, find the first occurence of two duplicate characters in a row, and return the duplicated character.

// Input: “abcdefghhijkkloooop”
// Output: “h”

function firstDuplicate(string) {
  var duplicate = "";
  var index = 0;
  while (index < string.length) {
    var index2 = index + 1;
    while (index2 < string.length) {
      if (string[index] === string[index2]) {
        duplicate = string[index];
        return duplicate;
      } else {
        index2++;
      }
    }
    index++;
  }
}
// console.log(firstDuplicate("abcddefghhijkklooooppa"));



// Given a string of words, return a new string that contains the words in reverse order.

// Input: “popcorn is so cool isn’t it yeah i thought so”
// Output: “so thought i yeah it isn’t cool so is popcorn”

function reverseSentence(string) {
  var newSentence = "";
  var stringArray = string.split(" ");
  stringArray.forEach(function(word) {
    if (newSentence === "") {
      newSentence += word;
    } else {
      newSentence = word + " " + newSentence;
    }
  });
  return newSentence;
}
// console.log(reverseSentence("popcorn is so cool isn’t it yeah i thought so"));



// Given a string, return true if it is a palindrome, and false if it is not. (A palindrome is a word that reads the same both forward and backward.)

// Input: “racecar”
// Output: true

// Input: “baloney”
// Output: false

const palindrome = string => {
  console.log(string.split("").reverse().join(""));
  return string === string.split("").reverse().join("") ? true : false;
  
};
// console.log(palindrome("racecar"));
// console.log(palindrome("baloney"));



// Given two strings of equal length, return the number of characters that are different between the two strings.

// Input: "ABCDEFG", "ABCXEOG"
// Output: 2

// Explanation: While the A, B, C, E, and G are in the same place for both strings, they have different characters in the other spaces. Since there are 2 such spaces that are different (the D and F in the first string), we return 2.

// Input: "ABCDEFG", "ABCDEFG",
// Output: 0

function differences(string1, string2) {
  var num = 0;
  var index = 0; 
  var index2 = 0;
  while (index < string1.length) {
    while (index2 === index) {
      if (string1[index] !== string2[index2]) {
        console.log(string1[index]);
        num++;
      } 
      index2++;
    }
    index++;
  }
  return num;
}
// console.log(differences("ABCDEFG", "ABCXEOG"));



// Write a function that returns whether a given number is a prime number.

function isPrime(number) {
  var notPrime = `${number} is NOT a prime number`;
  if (number < 2) {
    return notPrime;
  } else {
    var index = 2;
    while (index < number) {
      if (number % index === 0) {
        return notPrime;
      } else {
        index++;
      }
    }
  }
  return `${number} is a prime number`;
}
// console.log(isPrime(13));
// console.log(isPrime(15));
// console.log(isPrime(0));



// Write a function that prints out every number from 1 to N, with the following exceptions:

// If the number is divisible by 3, print out "FIZZ".
// If the number is divisible by 5, print out "BUZZ".
// If the number is divisible by both 3 and 5, print out "FIZZBUZZ".

const fizzBuzz = num => {
  let i = 1;
  while (i <= num) {
    if (i % 15 === 0) {
      console.log("FIZZBUZZ");
    } else if (i % 3 === 0) {
      console.log("FIZZ");
    } else if (i % 5 === 0) {
      console.log("BUZZ");
    } else {
      console.log(i);
    }
    i++;
  }
};
// console.log(fizzBuzz(30));



// Given a year, report if it is a leap year.

// The tricky thing here is that a leap year in the Gregorian calendar occurs:

// on every year that is evenly divisible by 4
// except every year that is evenly divisible by 100
// unless the year is also evenly divisible by 400
// For example, 1997 is not a leap year, but 1996 is. 1900 is not a leap year, but 2000 is.

// If your language provides a method in the standard library that does this look-up, pretend it doesn't exist and implement it yourself.

const leapYear = year => {
  if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
    return "a leap year";
  } else {
    return "NOT a leap year";
  }
};
// console.log(leapYear(2000));
// console.log(leapYear(2007));
// console.log(leapYear(1900));
// console.log(leapYear(500));
// console.log(leapYear(1007));
// console.log(leapYear(1000));
// console.log(leapYear(1996));
// console.log(leapYear(1904));



// Write a function that gives the Nth number of the Fibonacci Sequence. The Fibonacci sequence begins with 0 and 1, and every number thereafter is the sum of the previous two numbers. So the sequence goes like this:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, and so on until infinity...

// Input: 9
// Output: 21 (as this is the 9th number of the Fibonacci Sequence)

const fibonacci = num => {
  let array = [0, 1];
  let newNum = 0;
  while (array.length <= num) {
    newNum = array[array.length - 1] + array[array.length - 2];
    array.push(newNum);
  }
  return array[num - 1];
};
console.log(fibonacci(13));