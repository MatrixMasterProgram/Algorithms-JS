//1. Print 1 - 135
//Write a program using JavaScript that will print all the numbers from 1 to 135.

//Pseudocode
//1.Create a For Loop starts from 1 ends at 135 (including)
//2. Call it inside the for loop to get all values

//Code
for (let t = 1; t <= 135; t = t + 1) {
    console.log(t);
  }
  
  // 2. Print Odd Numbers 1 - 135
  // Write a program using JavaScript that will print all the odd numbers from 1 to 135.
  
  //Pseudocode
  //1.Create a For Loop starts from 1 ends at 135 (including)
  //To get an ood number our loop go by 2  (h=h+2)
  //3. Call it inside the for loop to get all values
  
  //Code
  for (let h = 1; h <= 135; h = h + 2) {
    console.log(h);
  }
  
  //3. Sum of Printed Numbers
  //Write a program that will print all the numbers from 0 to 135 AND the sum of the numbers that have been printed so far. Your output should look similar to this:
  
  // Number is: 0 Sum: 0
  // Number is: 1 Sum: 1
  // Number is: 2 Sum: 3
  // Number is: 3 Sum: 6
  
  //Pseudocode
  //1.Create a new variable to save the result or summing inside it
  //2.Create a For Loop starts from 0 ends at 135 (including)
  //3.do the operation inside the loop to get the result for every time loop go
  //4.create a variable to save my output statement
  //5.call it inside the loop
  
  //Code
  let sumResult = 0;
  for (let i = 0; i <= 135; i = i + 1) {
    sumResult = sumResult + i;
    output = " Number is " + i + " sum : " + sumResult;
    console.log(output);
  }
  
  // 4. Print the elements of an array
  //Given an array X = [1,4,2,12],
  //write a program that will iterate through the array and print all numbers on the screen.
  //Your program should work with arrays of all sizes.
  
  //Pseudocode
  //1.Will use ForEach method to iterate throw the array and reach every index to print
  //2.Call it
  
  //Code
  Array.forEach((index) => console.log(index));
  
  // 5. Find Max
  // Given an array X, write a program that would find the maximum value of the array. Your program should work also work
  // with negative values (eg. X = [2,-3,-1]) and zero.
  
  //Pseudocode
  //1.Create variable to save our max number inside it.
  //2.Create a for loop to reach every element in the given array.
  //3.Inside the for loop we have to check if the index that we are in is bigger than our variable.
  //4.If yes we have to reassign our variable.
  //5.Call it. 
  
  //Code
  const maxValueArray = [2, -3, -1, 6, 9, 19, 80];
  let maxValue;
  for (let index of maxValueArray) {
    if (index > maxValue) maxValue = index;
  }
  console.log("Minimum element is : " + maxValue);
  
  
  //6. Get Average
  //Given an array X, write a program that will return the average value of all elements in the array. 
  //For example, for array X = [2,1,3] your output should be 2.
  
  //Pseudocode
  //Code1