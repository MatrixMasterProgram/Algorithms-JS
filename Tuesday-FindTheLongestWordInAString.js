//Find the longest Word in a String
// Return the length of the longest word in the provided sentence.
// Your response should be a number.

//Note: For these algorithms, you are allowed to use the split() method.

//PseudoCode
//1.Create a function that's take string as an input
//2.Use split(" ") method to convert out string to an array of words
//3.Create a variable for longest length
//4. Create a loop to iterate throw the array
//5.Create an if statement to check the length for every word
//6.Resign the value of longest length
//7.Return it
//8.Call the function

//Code

const longestWord = "May the force be with you";

const findLongestWord = (longestWord) => {
  let splitWord = longestWord.split(" ");

  let longest = 0;

  for (let i = 0; i < splitWord.length; i++) {
    if (splitWord[i].length > longest) {
      longest = splitWord[i].length;
    }
  }
  return longest;
};

console.log(findLongestWord(longestWord));
