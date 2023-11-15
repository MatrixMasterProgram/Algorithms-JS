// Sum All Numbers in a Range
// We'll pass you an array of two numbers.
// Return the sum of those two numbers and all numbers between them.
//Note: The lowest number will not always come first.

//PseudoCode
//1.Create a function that's take an array as input
//2.Find the maxIndex,minIndex  using if statement
//3.Create a variable to save the result of summing, as default it will be sumResult =0
//4.Create a loop will start from minIndex, ends at maxIndex  (<=)
//5.Do the operation
//6.Return the result
//7.Call the function

//Code
function sumAll(arr) {
  let minIndex = arr[0] < arr[1] ? arr[0] : arr[1];
  let maxIndex = arr[0] > arr[1] ? arr[0] : arr[1];

  let sumResult = 0;

  for (let i = minIndex; i <= maxIndex; i++) {
    sumResult += i;
  }
  return sumResult;
}

const arr = [4, 1];
console.log(sumAll(arr));
