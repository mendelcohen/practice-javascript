// # 1. Write a while loop to print the numbers 1 through 10.
var num = 1;
while (num <= 10) {
  console.log(num);
  num += 1;
}

// # 2. Write a while loop that prints the word "hello" 5 times.
var greet = 0;
while (greet < 5) {
  console.log("hello");
  greet += 1;
}

// # 3. Write a while loop that asks the user to enter a word and will run forever until the user enters the word "stop".


// var x = 1;
// while (x > 0) {
//   var word = prompt("Enter a word");
//   if (word === "stop") {
//     break; 
//   } else {
//     x += 1;
//   }
// }

// # 4. Write a while loop that prints the numbers 0 through 100, increasing by 5 each time.

var number = 0;
while (number <= 100) {
  console.log(number);
  number += 5;
}

// # 5. Write a while loop that prints the number 9000 ten times.
var y = 1;
while (y <= 5) {
  console.log(9000);
  y += 1;
}

// # 6. Write a while loop that asks the user to enter a number and will run forever until the user enters a number greater than 10.

var i = 0;
while (i >= 0) {
  var numberEntry = prompt("Enter a number");
  if (numberEntry > 10) {
    break;
  } else {
    i += 1;
  }
}

// # 7. Write a while loop that prints the numbers 50 to 70.

var numberUp = 50;
while (numberUp <= 70) {
  console.log(numberUp);
  numberUp += 1;
}

// # 8. Write a while loop that prints the phrase "Around the world" 144 times.
var phrase = 0;
while (phrase < 144) {
  console.log("Around the world");
  phrase += 1;
}

// # 9. Write a while loop that asks the user to enter a word and will run forever until the user enters a word with more than 5 letters.

var n = 0;
while (n >= 0) {
  var wordInput = prompt("Enter a word");
  if (wordInput.length > 5) {
    break;
  } else {
    n += 1;
  }
}

// # 10. Write a while loop that prints the even numbers from 2 to 40.
var evenNum = 2;
while (evenNum <= 40) {
  console.log(evenNum);
  evenNum += 2;
}