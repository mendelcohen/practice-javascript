// Return the sum of all numbers in a given array.

const { constant } = require("async");
const { DH_CHECK_P_NOT_SAFE_PRIME } = require("constants");
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
// console.log(fibonacci(13));




// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Find the sum of all the multiples of 3 or 5 below 1000.

function addMultiples(num) {
  var sum = 0;
  for (var i = 1; i <= 1000; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    } 
  }
  return sum;
}
// console.log(addMultiples(1000));



// The Collatz Conjecture or 3x+1 problem can be summarized as follows:

// Take any positive integer n. If n is even, divide n by 2 to get n / 2. If n is odd, multiply n by 3 and add 1 to get 3n + 1. Repeat the process indefinitely. The conjecture states that no matter which number you start with, you will always reach 1 eventually.

// Given a number n, return the number of steps required to reach 1.

// Examples
// Starting with n = 12, the steps would be as follows:

// 12
// 6
// 3
// 10
// 5
// 16
// 8
// 4
// 2
// 1

// Resulting in 9 steps. So for input n = 12, the return value would be 9.

function collatzConjecture(n) {
  var numSteps = 0;
  while (n > 1) {
    if (n % 2 === 0) {
      n = n / 2;
    } else {
      n = 3 * n + 1;
    }
    numSteps++;
  }
  return numSteps;
}
// console.log(collatzConjecture(19));



// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

// Find the largest palindrome made from the product of two 3-digit numbers.

var largestPalindrome = 0;
var numberOne = 101;
while (numberOne < 1000) {
  var numberTwo = 100;
  while (numberTwo < 1000) {
    var product = numberOne * numberTwo;
    if (product === parseInt(product.toString().split('').reverse().join(''))) {
      largestPalindrome = product;
    }
    numberTwo++;
  }
  numberOne++;

}
// console.log(largestPalindrome);



// Given two arrays of strings, return a new string that contains every combination of a string from the first array concatenated with a string from the second array.

// Input: ["a", "b", "c"], ["d", "e", "f", "g"]
// Output: ["ad", "ae", "af", "ag", "bd", "be", "bf", "bg", "cd", "ce", "cf", "cg"]

function joinStrings(array1, array2) {
  var stringArray = [];
  var i = 0;
  while (i < array1.length) {
    var j = 0;
    while (j < array2.length) {
      stringArray.push(array1[i] + array2[j]);
      j++;
    }
    i++;
  }
  return stringArray;
}
// console.log(joinStrings(["a", "b", "c"], ["d", "e", "f", "g"]));



// Given ONE array of strings, return a new array that contains every combination of each string with every other string in the array.

// Input: ["a", "b", "c", "d"]
// Output: ["ab", "ac", "ad", "ba", "bc", "bd", "ca", "cb", "cd", "da", "db", "dc"]

function combinedStrings(array) {
  var stringsArray = [];
  var i = 0;
  while (i < array.length) {
    var j = 0;
    while (j < array.length) {
      if (array[i] !== array[j]) {
        stringsArray.push(array[i] + array[j]);
      }
      j++;
    }
    i++;
  }
  return stringsArray;
}
// console.log(combinedStrings(["a", "b", "c", "d"]));



// Find the largest product of any two numbers within a given array.

// Input: [5, -2, 1, -9, -7, 2, 6]
// Output: 63 (-9 * -7)

function findLargestProduct(array) {
  var largestProduct = array[0] * array[1];
  var i = 0;
  while (i < array.length) {
    var j = i + 1;
    while (j < array.length) {
      var product = array[i] * array[j];
      if (product > largestProduct) {
        largestProduct = product;
      }
      j++;
    }
    i++;
  }
  return largestProduct;
}
// console.log(findLargestProduct([5, -2, 1, -9, -7, 2, 6, 14]));



// Given an array of numbers, return a new array containing just two numbers (from the original array) that add up to the number 10. If there are no two numbers that add up to 10, return false.

// Specifically use nested loops to solve this exercise even though there are other approaches as well.

// Input: [2, 5, 3, 1, 0, 7, 11]
// Output: [3, 7]

// Input: [1, 2, 3, 4, 5]
// Output: false (While 1, 2, 3, and 4 altogether add up to 10, we're seeking just one pair of numbers.)

function sumTen(array) {
  var arraySum = [];
  var index = 0;
  while (index < array.length) {
    var index2 = index + 1;
    while (index2 < array.length) {
      if (array[index] + array[index2] === 10) {
        arraySum.push(array[index]);
        arraySum.push(array[index2]);
        return arraySum;
      } else {
        index2++;
      }
    }
    index++;
  }
  return false;
}
// console.log(sumTen([2, 5, 3, 1, 0, 7, 11]));
// console.log(sumTen([1, 5, 3, 4, 5]));
// console.log(sumTen([2, 5, -1, 1, 0, 7, 11]));
// console.log(sumTen([1, 2, 3, 4, 5]));



// Given two sorted arrays, merge the second array into the first array while ensuring that the first array remains sorted. Do not use any built-in sort methods.

// Input :
// A : [1 5 8]
// B : [6 9]

// Modified A : [1 5 6 8 9]

function mergeArrays(array1, array2) {
  var index = 0;
  while (index < array2.length) {
    var index1 = 0;
    while (index1 < array1.length) {
      if (array2[index] > array1[index1] && index1 === array1.length - 1) {
        array1.push(array2[index]);
      } else if (array2[index] > array1[index1] && array2[index] < array1[index1 + 1]) {
        array1.splice(index1 + 1, 0, array2[index]);
      } else {
        index1++;
      }
    }
    index++;
  }
  return array1;
}
// console.log(mergeArrays([1, 5, 6], [6, 9]));
// console.log(mergeArrays([1, 5, 7, 8], [6, 9]));



// Given an array of numbers, return true if the array is a "100 Coolio Array", or false if it is not.

// A "100 Coolio Array" meets the following criteria:

// Its first and last numbers add up to 100,
// Its second and second-to-last numbers add up to 100,
// Its third and third-to-last numbers add up to 100,
// and so on and so forth.

// Here are examples of 100 Coolio Arrays:

// [1, 2, 3, 97, 98, 99]
// [90, 20, 70, 100, 30, 80, 10]

function isHundredCoolioArray(array) {
  var index = 0;
  var oppositeIndex = array.length - 1;
  if (array.length % 2 === 0) {
    while (index < array.length / 2) {
      if (array[index] + array[oppositeIndex] === 100) {
        index++;
        oppositeIndex--;
      } else {
        return false;
      }
    }
    return true;
  } else {
    while (index < (array.length - 1) / 2) {
      if (array[(array.length - 1) / 2] === 100 && array[index] + array[oppositeIndex] === 100) {
        index++;
        oppositeIndex--;
      } else {
        return false;
      }
    }
    return true;
  }
}
// console.log(isHundredCoolioArray([1, 2, 3, 97, 98, 99]));
// console.log(isHundredCoolioArray([90, 20, 70, 100, 30, 80, 10]));
// console.log(isHundredCoolioArray([90, 20, 70, 100, 50, 30, 80, 10]));



// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
// Note:

// All given inputs are in lowercase letters a-z.

function commonPrefix(array) {
  var prefix = "";
  var i = 0;
  var j = 0;
  while (i < array[j].length) {
    var letter = array[j][i];
    while (j < array.length) {
      if (array[j][i] === letter) {
        j++;
      } else {
        break;
      }
      if (j === array.length - 1 && array[j][i] === letter) {
        prefix += letter;
      }
    }
    i++;
    j = 0;
  }
  return prefix;
}
// console.log(commonPrefix(["flower","flow","flight"]));
// console.log(commonPrefix(["dog","racecar","car"]));
// console.log(commonPrefix(["dag","dacecar","da"]));
// console.log(commonPrefix(["dag","dacecar","da", "dn", "dash", "dare"]));
// console.log(commonPrefix(["flower","flowers","flowery"]));



// Given a string, find the most commonly occurring letter.

// Input: “peter piper picked a peck of pickled peppers”
// Output: “p”

const commonLetter = string => {
  let mostCommonLetter = "";
  let letterCount = {};
  [...string].forEach(letter => {
    if (!letterCount[letter]) {
      letterCount[letter] = 1;
    } else {
      letterCount[letter] += 1;
    }
  });
  delete letterCount[" "];
  let highestNumber = letterCount[string[0]];
  Object.entries(letterCount).forEach(entry => {
    const [key, value] = entry;
    if (entry[1] >= highestNumber) {
      highestNumber = entry[1];
      mostCommonLetter = entry[0];
    }
  });
  return mostCommonLetter;
};
console.log(commonLetter("peter piper picked a peck of pickled peppers"));