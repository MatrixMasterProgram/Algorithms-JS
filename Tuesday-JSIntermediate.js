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

