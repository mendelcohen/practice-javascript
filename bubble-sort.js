function bubbleSort(numbersArray) {
  var i = 0;
  var j = 1;
  var k = 1;
  while (k <= numbersArray.length) {
    while (j < numbersArray.length) {
      var a = numbersArray[i];
      var b = numbersArray[j];
      if (numbersArray[i] > numbersArray[j]) {
        numbersArray[i] = b;
        numbersArray[j] = a;
      }
      i++;
      j++;
    }
    i = 0;
    j = 1;
    k++;
  }
  return numbersArray;
}
console.log(bubbleSort([6, 9, 7, 8]));
console.log(bubbleSort([6, 9, 7, 8, 11, 5]));
console.log(bubbleSort([6, 9, 7, 8, 11, 5, 4, 78, 91, 1, 3, 67, 23, 90]));