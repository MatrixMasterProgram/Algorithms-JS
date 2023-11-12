// 3rd Highest Number in Array
// Having an array of numbers, write an algorithm that will return the 3rd highest number in the array.
//Note: Your algorithm should do only one iteration of the array (just one for/while loop).

// Pseudocode
//1.Create a function that takes an array as a parameter
//2.Create three variables 
//3.Create a for loop 
//4.Create three if statement to check the value of the indexes we have 
//until we reach the third highest num 
//5.Return the third value 
//6.Call it 

//Code
function thirdHighest(array) {
  let first = 0;
  let second = 0;
  let third = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] > first) {
      third = second;
      second = first;
      first = array[i];

    } else if (array[i] > second) {
      third = second;
      second = array[i];

    } else if (array[i] > third) {
      third = array[i];
    }
  }
  return third;
}
console.log(thirdHighest([2, 5, 3, 1, 4]));
