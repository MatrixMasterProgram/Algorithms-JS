//Selection Sort
// This is very simple. Go through the array, find the index of the lowest element swap the lowest element with the first element. Hence first element is the lowest element in the array.
// Now go through the rest of the array (excluding the first element) and find the index of the lowest and swap it with the second element.

// thats how it continues to select (find out) the lowest element of the array and putting it on the left until it hits the last element.

//PseudoCode
//1.Create function that's take array as input 
//2.Create for loop, it goes through the array
//3.Create two variable lowestValue arr[i], indexOfTheValue [i]
//4.Create second loop, it takes the current index and through the rest of the  array and find the index of the lowest and swap it
//5.Create an if statement => check if the index's value from my first loop > or < 
//6.if it 's < we have to swap the values 
//7.Return our array 


// Code
const selectionSort= (arr) =>{
    for (let i=0; i<arr.length; i++){
      let lowestValue =arr[i];
      let indexOfLowestValue = i;
  
      for(let j=i ; j<arr.length; j++){
        if(arr[j]< lowestValue){
          lowestValue = arr[j];
          indexOfLowestValue = j
        }
      }
      let temp = arr[i];
      arr[i] = arr[indexOfLowestValue] 
      arr[indexOfLowestValue] = temp
    }
    return arr
  }
  
  console.log(selectionSort([5, -1 ,9, 4, 3, -7]))
