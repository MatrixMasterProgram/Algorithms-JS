//Largest Number in Arrays
// Return an array consisting of the largest number from each provided sub-array. For simplicity,
// the provided array will contain exactly 4 sub-arrays.


//PseudoCode
//1.Create a function that's take nested array as an input
//2.Declare a new empty array to save the result (largest value for every sup array)
//3.Create for loop to iterate inside the nested array
//4.Declare a variable, it will be the largest num in every sup array
//As a default it will be the first index in our sup arrays 
//5.Create a new loop throw sup-arrays
//6.Create an if statement to check if the num(index) is the largest value
//If it's true then we resign the largest num to the new index 
//7.Return the result
//8.Call it 

//Code
function largestOfFour(nestArr) {
  const maxValuesArray = [];

  for (let i = 0; i < nestArr.length; i++) {
    let largestNum = nestArr[i][0];

    for (let j = 1; j < nestArr[i].length; j++) {
      if (nestArr[i][j] > largestNum) {
        largestNum = nestArr[i][j];
      }
    }
    maxValuesArray[i] = largestNum;
  }
  return maxValuesArray;
}

console.log(largestOfFour([
  [13, 27, 18, 26],
  [32, 35, 37, 39],
   [1000, 1001, 857, 1]]))