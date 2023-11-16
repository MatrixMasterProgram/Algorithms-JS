// Bubble Sort

// While the array is not sorted, the code would do the following steps:

//1.Take each pair of 2 adjacent numbers and compare them.
//2.If their order is not correct, switch them.
//The very important step is to keep in mind that these steps are repeated over and over until the array gets to its final sorted state.

//Let's take an example and show how the steps are applied to a specific array. Given is the following array and we need to sort it in ascending order: 5 1 9 4 3 7

//1.Take the first pair of numbers and compare them (5 and 1).
//2.Here, 5 > 1, so we switch them, getting the following array 1 5 9 4 3 7
//3.Move to the next pair of numbers and compare them: 5 and 9 (take care that we are using the modified array)
//4.In this case, 5 < 9; their order is ok and we move further.
//5.The next pair is 9 and 4. Comparing them, we see that 9 > 4, so we switch and get 1 5 4 9 3 7
//6.Moving further, we have 9 and 3. Again, their order is not correct and they are interchanged 1 5 4 3 9 7
//7.The last pair in this round is 9 and 7. We see that again, 9 > 7, and switching them gives the array 1 5 4 3 7 9

// Observe that at the end of this list of steps, the array is not yet sorted (not all of it), so we have to go again and apply the same techniques until it reaches this point 1 3 4 5 7 9

//PseudoCode
//1.Create a function that's take an array as input
//2.Initialize a variable len to store the length of our array
//3.Create first loop, it will iterate throe each element of the array
//4.Create seconde array, it will compare the indexes
//5.Create an if statement, we will take the smallest value from the indexes I'm comparing and resign the temp variable
//6.Return the last result
//7.Call the function

// Code
function bubbleSort(arr) {
  const len = arr.length;

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

console.log(bubbleSort([5, -1, 9, 4, 3, -7]));
