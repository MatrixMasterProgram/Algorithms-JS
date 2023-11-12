// Factorialize
// Declare a function factorialize(n) that takes an integer n as input 
// and returns the factorial of the provided integer.
// For example: 5! = 5 * 4 * 3 * 2 * 1 = 120

// Pseudocode
//1.Create a function that take an integer as a parameter
//2.Create an if statement to check if the number is equal to 0 or 1 then we should return 1
//3.Create a for loop, it will start from our given number-1
//and the loop will go inversely
//4.Inside the loop we have to do the multiplication

//Code

console.log(Factorialize(5));

function Factorialize(n) {
if (n === 0 || n === 1) return 1;
  for (let i = n - 1; i >= 1; i--) {
    n *= i;
  }
  return n;
}