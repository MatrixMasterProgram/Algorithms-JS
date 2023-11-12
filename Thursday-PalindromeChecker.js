//Palindrome Checker
// Declare a function isPalindrome(str) that takes a string as an input.
// Return true if the given string is a palindrome. Otherwise, return false.

// A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

// Pseudocode
//1.Create a function that takes a string(word) as a parameter
//2.Create an empty array, will reverse the word and save it as an array in it
//3.Create for loop to create the reversed array for our word
//4. Use .join("") method so we can convert our reversed array to a string
//5.Create an if statement to comparison between the original word and reversed word.
//A. If that's true return "The word " + str + " is Palindrome"
//B.If that's false return "The word " + str + "isn't Palindrome"
//6.Call it 

//Code
const isPalindromeStr = "kayak";

const result = isPalindrome(isPalindromeStr);
console.log(result);

function isPalindrome(str) {
  const reversedStr = [];
  for (i = 0; i < str.length; i++) {
    reversedStr[i] = str[str.length - 1 - i];
  }
  reversedStr = reversedStr.join("");

  if (reversedStr === str) {
    check = "The word " + str + " is Palindrome";
  } else {
    check = "The word " + str + "isn't Palindrome";
  }
  return check;
}
