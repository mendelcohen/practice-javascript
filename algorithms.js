// Return the sum of all numbers in a given array.

const { constant, forEachSeries } = require("async");
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



// Given an array of strings, return a hash that provides of a count of how many times each string occurs.

// Input: ["Dewey", "Truman", "Dewey", "Dewey", "Truman", "Truman", "Dewey", "Truman", "Truman", "Dewey", "Dewey"]

// Output: {"Dewey" => 6, "Truman" => 5}

// Explanation: "Dewey" occurs 6 times in the array, while "Truman" occurs 5 times.

function voteCount(array) {
  var votes = {};
  array.forEach(name => {
    if (votes[name]) {
      votes[name] += 1;
    } else {
      votes[name] = 1;
    }
  });
  return votes;
}
// console.log(voteCount(["Dewey", "Truman", "Dewey", "Dewey", "Truman", "Truman", "Dewey", "Truman", "Truman", "Dewey", "Dewey"]));



// Given a hash, where the keys are strings representing food items, and the values are numbers representing the price of each food, return the amount someone would pay if they'd order one of each food from the entire menu.

// Input: {"hot dog" => 2, "hamburger" => 3, "steak sandwich" => 5, "fries" => 1, "cole slaw" => 1, "soda" => 2}

// Output: 14

// Explanation: If someone would order one of everything on the menu, they'd pay a total of 14 (the sum of all the hash's values).

const orderPrice = object => {
  let totalPrice = 0;
  Object.entries(object).forEach(entry => {
    const [key, value] = entry;
    totalPrice += entry[1];
  });
  return totalPrice;
};
// console.log(orderPrice({"hot dog": 2, "hamburger":3, "steak sandwich": 5, "fries": 1, "cole slaw": 1, "soda": 2, "grilled vegetables": 4}));



// Given a DNA strand, return its RNA complement (per RNA transcription).

// Both DNA and RNA strands are a sequence of nucleotides. Here we're representing the sequences with single-letter characters (e.g. a sample strand may look like: "AGCA".)

// Given a string representing a DNA strand, provide its transcribed RNA strand, according to the following pattern:

// G becomes C
// C becomes G
// T becomes A
// A becomes U

// So based on all this, here's a sample input/output:

// Input: 'ACGTGGTCTTAA'
// Output: 'UGCACCAGAAUU'

const dnaToRna = string => {
  let rna = "";
  string.split("").forEach(letter => {
    if (letter === "G") {
      rna += "C";
    } else if (letter === "C") {
      rna += "G";
    } else if (letter === "T") {
      rna += "A";
    } else if (letter === "A") {
      rna += "U";
    } else {
      rna = "ERROR: LETTER " + letter + " FOUND IN DNA CODE";
    }
  });
  return rna;
};
// console.log(dnaToRna("ACGTGGTCTTAA"));
// console.log(dnaToRna("ACGTGGTCTTAAB"));



// Given an array of hashes that represent a list of social media posts, return a new array that only contains the posts that have at least 1000 likes.

// Input: [
// {title: 'Me Eating Pizza', submitted_by: "Joelle P.", likes: 1549},
// {title: 'i never knew how cool i was until now', submitted_by: "Lyndon Johnson", likes: 3},
// {title: 'best selfie evar!!!', submitted_by: "Patti Q.", likes: 1092},
// {title: 'Mondays are the worst', submitted_by: "Aunty Em", likes: 644}
// ]

// Output: [
// {title: 'Me Eating Pizza', submitted_by: "Joelle P.", likes: 1549},
// {title: 'best selfie evar!!!', submitted_by: "Patti Q.", likes: 1092},
// ]

function thousandLikes(array) {
  var newArray = [];
  array.forEach(post => {
    if (post["likes"] >= 1000) {
      newArray.push(post);
    }
  });
  return newArray;
}
// console.log(thousandLikes([
//   {title: 'Me Eating Pizza', submitted_by: "Joelle P.", likes: 1549},
//   {title: 'i never knew how cool i was until now', submitted_by: "Lyndon Johnson", likes: 3},
//   {title: 'best selfie evar!!!', submitted_by: "Patti Q.", likes: 1092},
//   {title: 'Mondays are the worst', submitted_by: "Aunty Em", likes: 644}
// ]));


const oneThousandLikes = array => {
  let index = 0;
  while (index < array.length) {
    if (array[index]["likes"] < 1000) {
      array.splice(index, 1);
    }
    index++;
  }
  return array;
};
// console.log(oneThousandLikes([
//   {title: 'Me Eating Pizza', submitted_by: "Joelle P.", likes: 1549},
//   {title: 'i never knew how cool i was until now', submitted_by: "Lyndon Johnson", likes: 3},
//   {title: 'best selfie evar!!!', submitted_by: "Patti Q.", likes: 1092},
//   {title: 'Mondays are the worst', submitted_by: "Aunty Em", likes: 644}
// ]));



// Given an array of social media posts and a hash of users, return a list of posts (as an array of hashes) that replaces the submitted_by id number as the person's actual name.

// For example, given this array of posts (note that the submitted_by is an id number):

// [
// {title: 'Me Eating Pizza', submitted_by: 231, likes: 1549},
// {title: 'i never knew how cool i was until now', submitted_by: 989, likes: 3},
// {title: 'best selfie evar!!!', submitted_by: 111, likes: 1092},
// {title: 'Mondays are the worst', submitted_by: 403, likes: 644}
// ]

// And this hash of users (the key is the id number and the value is the user's real name):

// users = {403 => "Aunty Em", 231 => "Joelle P.", 989 => "Lyndon Johnson", 111 => "Patti Q."}

// Return the array of posts as follows:

// [
// {title: 'Me Eating Pizza', submitted_by: "Joelle P.", likes: 1549},
// {title: 'i never knew how cool i was until now', submitted_by: "Lyndon Johnson", likes: 3},
// {title: 'best selfie evar!!!', submitted_by: "Patti Q.", likes: 1092},
// {title: 'Mondays are the worst', submitted_by: "Aunty Em", likes: 644}
// ]

function idForName(array, object) {
  array.forEach(post => {
    Object.entries(object).forEach(entry => {
      var [id, name] = entry;
      if (id === post["submitted_by"].toString()) {
        post["submitted_by"] = name;
      }
    });
  });
  return array;
}
// console.log(idForName([
//   {title: 'Me Eating Pizza', submitted_by: 231, likes: 1549},
//   {title: 'i never knew how cool i was until now', submitted_by: 989, likes: 3},
//   {title: 'best selfie evar!!!', submitted_by: 111, likes: 1092},
//   {title: 'Mondays are the worst', submitted_by: 403, likes: 644}
// ], {403: "Aunty Em", 231: "Joelle P.", 989: "Lyndon Johnson", 111: "Patti Q."}));



// Given two strings, return true if they are anagrams of each other, and false if they are not. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

// Do not use any built-in sort methods.

// Input: “silent”, “listen”
// Output: true

// Input: “frog”, “bear”
// Output: false

const anagrams = (string1, string2) => {
  if (string1.length === string2.length) {
    let string3 = "";
    let i = 0;
    while (i < string1.length) {
      let j = 0;
      while (j < string2.length) {
        if (string1[i] === string2[j]) {
          string3 += string1[i];
        }
        j++;
      }
      i++;
    }
    return string1 === string3;
  }
  return false;
};
// console.log(anagrams("silent", "listen"));
// console.log(anagrams("frog", "bear"));
// console.log(anagrams("frogs", "bear"));



// You are given two parameters, an array and a number. Return a hash whose keys are each of the values from the array parameter, and whose values are the number parameter.

// Input:

// First argument: ["a", "e", "i", "o", "u"]
// Second argument: 1

// Output:

// {
// 'a' => 1,
// 'e' => 1,
// 'i' => 1,
// 'o' => 1,
// 'u' => 1
// }

const keyValue = (array, number) => {
  let object = {};
  for (let i = 0; i < array.length; i++) {
    object[array[i]] = number;
  }
  return object;
};
// console.log(keyValue(["a", "e", "i", "o", "u"], 1));



// Given a hash, return a flat array containing all the hash’s keys and values.

// Input: {“a” => 1, “b” => 2, “c” => 3, “d” => 4}
// Output: [“a”, 1, “b”, 2, “c”, 3, “d”, 4]

const convertObject = object => {
  let array = [];
  Object.entries(object).forEach(entry => {
    array.push(entry[0]);
    array.push(entry[1]);
  });
  return array;
};
// console.log(convertObject({a: 1, b: 2, c: 3, d: 4}));



// Given a hash, create a new hash that has the keys and values switched.

// Input: {"a" => 1, "b" => 2, "c" => 3}
// Output: {1 => "a", 2 => "b", 3 => "c"}

const reverseObject = object => {
  let reversedObject = {};
  Object.entries(object).forEach(array => {
    let [k, v] = array;
    reversedObject[v] = k;
  });
  return reversedObject;
};
// console.log(reverseObject({"a": 1, "b": 2, "c": 3}));



// You are given a hash in format #A, and you are to return the same data as a hash using format #B, as specified below:

// Input:

// {
// 1 => ["A", "E", "I", "O", "U"]
// }

// Output:

// {
// 'a' => 1,
// 'e' => 1,
// 'i' => 1,
// 'o' => 1,
// 'u' => 1
// }
// Input:

// {
// 1 => ["A", "E"],
// 2 => ["D", "G"]
// }

// Output:

// {
// 'a' => 1,
// 'd' => 2,
// 'e' => 1,
// 'g' => 2
// }

// Input:

// 1 => ["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"],
// 2 => ["D", "G"],
// 3 => ["B", "C", "M", "P"],
// 4 => ["F", "H", "V", "W", "Y"],
// 5 => ["K"],
// 8 => ["J", "X"],
// 10 => ["Q", "Z"]
// }

// Output:

// {
// 'a' => 1,
// 'b' => 3,
// 'c' => 3,
// 'd' => 2,
// 'e' => 1,
// 'f' => 4,
// 'g' => 2,
// 'h' => 4,
// 'i' => 1,
// 'j' => 8,
// 'k' => 5,
// 'l' => 1,
// 'm' => 3,
// 'n' => 1,
// 'o' => 1,
// 'p' => 3,
// 'q' => 10,
// 'r' => 1,
// 's' => 1,
// 't' => 1,
// 'u' => 1,
// 'v' => 4,
// 'w' => 4,
// 'x' => 8,
// 'y' => 4,
// 'z' => 10
// }

function valuesToKeys(object) {
  var newObject = {};
  Object.entries(object).forEach(array => {
    var [k, v] = array;
    for (let i = 0; i < v.length; i++) {
      newObject[v[i]] = k;
    }
  });
  newObject = Object.keys(newObject).sort().reduce(
    (obj, key) => {
      obj[key] = newObject[key];
      return obj;
    },
    {}
  );
  return newObject;
}
// console.log(valuesToKeys({1: ["A", "E", "I", "O", "U"]}));
// console.log(valuesToKeys({1: ["A", "E"], 2: ["D", "G"]}));
// console.log(valuesToKeys({1: ["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"], 2: ["D", "G"], 3: ["B", "C", "M", "P"], 4: ["F", "H", "V", "W", "Y"], 5: ["K"], 8: ["J", "X"], 10: ["Q", "Z"]}));

var object = [{1: ["A", "E", "I", "O", "U"]}, {2: "T"}];
var newObject = {};
var news = Object.entries(object);
// console.log(news);
// .forEach(array => {
//   var [k, v] = array;
//   for (let i = 0; i < v.length; i++) {
//     newObject[v[i]] = k;
//   }
// });
// newObject = Object.keys(newObject).sort().reduce(
//   (obj, key) => {
//     obj[key] = newObject[key];
//     return obj;
//   },
//   {}
// );
// console.log(newObject);



// Given an array of social media posts and an array of users, return a list of posts (as an array of hashes) that replaces the submitted_by id number as the person's actual name.

// For example, given this array of posts (note that the submitted_by is an id number):

// [
// {title: 'Me Eating Pizza', submitted_by: 231, likes: 1549},
// {title: 'i never knew how cool i was until now', submitted_by: 989, likes: 3},
// {title: 'best selfie evar!!!', submitted_by: 111, likes: 1092},
// {title: 'Mondays are the worst', submitted_by: 403, likes: 644}
// ]

// And this array of users:

// [
// {user_id: 403, name: "Aunty Em"},
// {user_id: 231, name: "Joelle P."},
// {user_id: 989, name: "Lyndon Johnson"},
// {user_id: 111, name: "Patti Q."},
// ]

// Return the array of posts as follows:

// [
// {title: 'Me Eating Pizza', submitted_by: "Joelle P.", likes: 1549},
// {title: 'i never knew how cool i was until now', submitted_by: "Lyndon Johnson", likes: 3},
// {title: 'best selfie evar!!!', submitted_by: "Patti Q.", likes: 1092},
// {title: 'Mondays are the worst', submitted_by: "Aunty Em", likes: 644}
// ]

const idsForNames = (postArray, userArray) => {
  postArray.forEach(post => {
    userArray.forEach(user => {
      user["user_id"] === post["submitted_by"] ? post["submitted_by"] = user["name"] : post["submitted_by"];
    });
  });
  return postArray;
};
// console.log(idsForNames([
//   {title: 'Me Eating Pizza', submitted_by: 231, likes: 1549},
//   {title: 'i never knew how cool i was until now', submitted_by: 989, likes: 3},
//   {title: 'best selfie evar!!!', submitted_by: 111, likes: 1092},
//   {title: 'Mondays are the worst', submitted_by: 403, likes: 644}
// ], [
//   {user_id: 403, name: "Aunty Em"},
//   {user_id: 231, name: "Joelle P."},
//   {user_id: 989, name: "Lyndon Johnson"},
//   {user_id: 111, name: "Patti Q."},
// ]));



// Given a list of books provided in this format:

// [
// {title: "The Lord of the Rings", author: "J. R. R. Tolkien", year: 1954 },
// {title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
// {title: "1984", author: "George Orwell", year: 1949 },
// {title: "Go Set a Watchman", author: "Harper Lee", year: 2015 },
// {title: "The Hobbit", author: "J. R. R. Tolkien", year: 1937 },
// {title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
// {title: "The Two Towers", author: "J. R. R. Tolkien", year: 1954 }
// ]

// return the data in this new author-centric format:

// { "J. R. R. Tolkien" => [
// {title: "The Lord of the Rings", year: 1954 },
// {title: "The Hobbit", year: 1937 },
// {title: "The Two Towers", year: 1954 }
// ],
// "Harper Lee" => [
// {title: "To Kill a Mockingbird", year: 1960 },
// {title: "Go Set a Watchman", year: 2015 }
// ],
// "George Orwell" => [
// {title: "1984", year: 1949 }
// ],
// "F. Scott Fitzgerald" => [
// {title: "The Great Gatsby", year: 1925 }
// ]
// }

function newAuthorFormat(array) {
  var newFormat = {};
  for (var index = 0; index < array.length; index++) {
    newFormat[array[index]["author"]] ? newFormat[array[index]["author"]].push({title: array[index]["title"], year: array[index]["year"]}) : newFormat[array[index]["author"]] = [{title: array[index]["title"], year: array[index]["year"]}];
  }
  return newFormat;
}
// console.log(newAuthorFormat([
//   {title: "The Lord of the Rings", author: "J. R. R. Tolkien", year: 1954 },
//   {title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
//   {title: "1984", author: "George Orwell", year: 1949 },
//   {title: "Go Set a Watchman", author: "Harper Lee", year: 2015 },
//   {title: "The Hobbit", author: "J. R. R. Tolkien", year: 1937 },
//   {title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
//   {title: "The Two Towers", author: "J. R. R. Tolkien", year: 1954 }
// ]));



// Given an array of Youtube videos, for example:

// [
// {title: 'How to Make Wood', author_id: 4, views: 6},
// {title: 'How to Seem Perfect', author_id: 4, views: 111},
// {title: 'Review of the New "Unbreakable Mug"', author_id: 2, views: 202},
// {title: 'Why Pigs Stink', author_id: 1, views: 12}
// ]

// and an array of authors, for example:

// [
// {id: 1, first_name: 'Jazz', last_name: 'Callahan'},
// {id: 2, first_name: 'Ichabod', last_name: 'Loadbearer'},
// {id: 3, first_name: 'Saron', last_name: 'Kim'},
// {id: 4, first_name: 'Teena', last_name: 'Burgess'},
// ]

// Return a new array of videos in the following format, and only include videos that have at least 100 views:

// [
// {title: 'How to Seem Perfect', views: 111, author_name: 'Teena Burgess' }
// {title: 'Review of the New "Unbreakable Mug"', views: 202, author_name: 'Ichabod Loadbearer' },
// ]

const hundredViews = (array1, array2) => {
  let newArray = [];
  for (let i = 0; i < array1.length; i++) {
    if (array1[i].views > 99) {
      for (let j = 0; j < array2.length; j++) {
        if (array1[i].author_id === array2[j].id) {
          delete array1[i]["author_id"];
          array1[i].author_name = `${array2[j].first_name} ${array2[j].last_name}`;
          newArray.push(array1[i]);
        }
      }
    }
  }
  return newArray;
};
// console.log(hundredViews([
//   {title: 'How to Make Wood', author_id: 4, views: 6},
//   {title: 'How to Seem Perfect', author_id: 4, views: 111},
//   {title: 'Review of the New "Unbreakable Mug"', author_id: 2, views: 202},
//   {title: 'Why Pigs Stink', author_id: 1, views: 12}
// ], [
//   {id: 1, first_name: 'Jazz', last_name: 'Callahan'},
//   {id: 2, first_name: 'Ichabod', last_name: 'Loadbearer'},
//   {id: 3, first_name: 'Saron', last_name: 'Kim'},
//   {id: 4, first_name: 'Teena', last_name: 'Burgess'},
// ]));



// Given two arrays, return a new array that contains the intersection of the two arrays. The intersection means the values that are contained in both of the arrays. Do not use the "&", or any built-in intersection methods.

// NOTE: You must accomplish this in O(n) time. This is also known as linear time.

// Input: [1, 2, 3, 4, 5], [1, 3, 5, 7, 9]
// Output: [1, 3, 5]

function intersection(array1, array2) {
  var newArray = [];
  var object = {};
  for (var i = 0; i < array1.length; i++) {
    object[array1[i]] = 0;
  }
  console.log(object);
  for (var j = 0; j < array2.length; j++) {
    if (object.hasOwnProperty(array2[j])) {
      newArray.push(array2[j]);
    }
  }
  return newArray;
}
// console.log(intersection([1, 2, 3, 4, 5], [1, 3, 5, 7, 9]));


function intersection2(array1, array2) {
  var newArray = [];
  var object = {};
  for (var i = 0; i < array1.length; i++) {
    object[array1[i]] = 0;
  }
  console.log(object);
  for (var j = 0; j < array2.length; j++) {
    if (array2[j] in object) {
      newArray.push(array2[j]);
    }
  }
  return newArray;
}
// console.log(intersection2([1, 2, 3, 4, 5], [1, 3, 5, 7, 9]));



// Given two arrays, determine whether one is a subset of the other. It is considered a subset if all the values in one array are contained within the other.

// NOTE: You must accomplish this in O(n) time. This is also known as linear time.

// Input: [1, 2, 3, 4, 5, 6], [6, 3, 2]
// Output: true

// Input: [1, 2, 3, 4, 5, 6], [6, 3, 7]
// Output: false

function subset(array1, array2) {
  var object = {};
  for (var i = 0; i < array1.length; i++) {
    object[array1[i]] = 0;
  }
  for (var j = 0; j < array2.length; j++) {
    if (!object.hasOwnProperty(array2[j])) {
      return false;
    } 
  }
  return true;
}
console.log(subset([1, 2, 3, 4, 5, 6], [6, 3, 2]));
console.log(subset([1, 2, 3, 4, 5, 6], [6, 3, 7]));