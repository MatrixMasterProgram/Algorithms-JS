// 1. Addition
// Add all the values between 200 and 2700 (inclusively) that are divisible by 3 or 5,
// but not both 3 and 5.

//Pseudocode
//1.Create a variable to save our result
//2.Create for loop starts from 200 & ends at 2700 
//Inside loop we have to check if the index is accept dividing at 3 OR 5
//and NOT accepting on them BOTH 
//3.If that's true then we add the index to our result value
//Call it 

//Code
let sum =0; 

for (let i = 200; i < 2700; i++) {
  if (!(i % 3 === 0 && i % 5 === 0) && (i % 3 === 0 || i % 5 === 0)) {
   sum+=i;
  }
}
console.log(sum);

// 2. Shift the Values
// Given any array X, for example [2,1,6,4,-7],
// create an algorithm that shifts each number by one to the front.
// When your program is done the output for array [2,1,6,4,-7] should be [-7,4,6,1,2].

//Pseudocode
//1.Create an empty array to save our result in
//2.Create a variable to get the index for every element inside my original array
//3.Create a for loop 
//4.shift the index for my shifted array from the original array every time the loop goes
//5.Call it 

//Code
const originalArray = [1, -3, 6, -9, 10, 27, -6, 17];
const shiftedArray = [];

const limit = originalArray.length - 1;

for (let i = 0; i < Array1.length; i = i + 1) {
  shiftedArray[limit - i] = originalArray[i];
}
console.log(shiftedArray);

console.log(Array1);

// 3. FizzBuzz
// Create an algorithm that inserts the numbers from 1 to 135 into an array, while replacing the values that are divisible by 3 with the word "Fizz", the numbers that are divisible by 5 with the word "Buzz", 
// and the numbers that are divisible with 3 and 5 with the word "FizzBuzz".
// Note: (Draw T-Diagram)

//Pseudocode
//1.Create an empty array
//2.Create a for loop starts from 1 & ends at 135
// 3.Create four different statement 

//A.If the result of  index(number) /3 === 0 then new index should be Fizz
//B.If the result of  index(number) /5 === 0 then new index should be Buzz
//C.If the result of  index(number) /3 === 0 index(number) /5 === 0 and then new index should be FizzBuzz
//D.Else than that the index should stay the same 

//4.Call it

//Code
fizzBuzzArray = [];

for (let i = 1; i <= 135; i++) {

  if (i % 5 === 0 && i % 3 === 0) {
    fizzBuzzArray[i - 1] = "Fizz Buzz";

  } else if (i % 3 === 0) {
    fizzBuzzArray[i - 1] = "Fizz";

  } else if (i % 5 === 0) {
    fizzBuzzArray[i - 1] = "Buzz";

  } else {
    fizzBuzzArray[i - 1] = i;
  }
}
console.log(fizzBuzzArray);



// 4. Fibonacci
// For a Fibonacci sequence starting at 0 and 1 add up all the values below 1,000,000.
// A Fibonacci sequence is an infinite series of numbers that is created by adding the last two numbers in the series. A series would start with the numbers 0 and 1 in place,
//  followed by 1 (0+1), 2 (1+1), 3 (1+2), 5 (3+2), etc.

// Pseudocode
// 1.Create three variables 
//2.Create a while loop ends at 1000000
//3.The variables values will change every time the loop goes

//Code
let value1 = 0;
let value2 = 1;
let value3= 0;
while (value1 <= 1000000) {
  value1 = value3 + value2 ;
  value3 = value2 ;
  value2  = value1;

  console.log(z);
}


// 5. Remove the Negative
// Given any array X, for example [1,-2,4,1], remove the negative numbers, 
// so that the output becomes: [1,4,1].
// Note: (Draw T-Diagram)

// Pseudocode
//1.Create for loop to iterate throw the array 
//2.check if the index value smaller than 0 then we will use splice method to delete the index
//3.Call it 

//Code
const negArray = [1,-2,4,1]

for (let i = 0; i < negArray.length; i++) {
  if (negArray[i] < 0) {
    negArray.splice(i, 1);
  }
}
console.log(negArray);


// 6. Communist Censorship
// Given the array of strings X = ['Man', 'I','Love','The','Matrix','Program'], replace every letter of the word Program with *, so the output would be ['Man', 'I','Love','The','Matrix','*******']. 
// Then make your algorithm work for any word of your choice

// Pseudocode
//1.Create variable that countian the length of the word that I want to change to *
//2.Use splice method to delete the word that I want to change 
//3.Convert the index value to an empty string 
//4.Create a for loop to iterate throw our word and change every letter to *
//5.Call it 

//Code
const censorshipArray= ["Man", "I", "Love", "The", "Matrix", "Program"];

const censorshipLength = censorshipArray[5].length;
censorshipArray.splice(5, 1);
censorshipArray[5] = "";

for (i = 0; i <censorshipLength ; i = i + 1) {
  censorshipArray[5] = censorshipArray[5] + "*";
}

console.log(censorshipArray);
