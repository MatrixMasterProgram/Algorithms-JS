// Fibonacci Sequence
//The  sequence looks like this: 1 1 2 3 5 8 13 21 34 ...
//he pattern: setting the first two terms to be 1, any other term is the sum of the two previous terms. 1+1=2, 1+2=3, 2+3=5, 3+5=8, 5+8=13
//and so on.In this way, if n would be equal to 4 your result should be 3; but if n is 7, then the result is 13.

//PseudoCode
//1.Create a function that's take a number as an input
//2.Check if the num <= 0  if true return "Please Enter an valid input"
//3.Check if the num =1 OR =2 if true return 1
//4.Else than that => Crete tow variable to save previous num and current num as a default they are = 1
//5.Create a for loop starts from 3, ends at n(input) value
//6.Calculate the sum = previousNum + currentNum
//7.Update the variables
//8.Return currentNum(sum)

//Code
const fibonacci = (n) => {
  if (n <= 0) {
    return "Please Enter an valid input";
  } else if (n === 1 || n === 2) {
    return 1;
  } else {
    let previousNum = 1;
    let currentNum = 1;
    for (let i = 3; i <= n; i++) {
      let sum = previousNum + currentNum;

      previousNum = currentNum;
      currentNum = sum;
    }
    return currentNum;
  }
};
console.log(fibonacci(7));
