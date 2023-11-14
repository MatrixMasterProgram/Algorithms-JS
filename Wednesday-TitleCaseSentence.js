// Title Case Sentence
// Return the provided string with the first letter of each word capitalized.
//  Make sure the rest of the word is in lowercase.

//Note:
//1.For the purpose of this exercise, you should also capitalize on connecting words like "the" and "of".
//2.You can use the split() method.

//PseudoCode
//1.Create a function that's take a string as input
//2.Inside the function convert our string(input) to an array
//3.Create loop to iterate throw our array
//4.Use .charAt(0) method to select the first letter from my word & .toUpperCase() method to Capitalize it
//5.Add .slice(1).toLowerCase() methods to my statement to the rest of my word letters
//6.Use join(" ") to return the array to a string
//7.Return the new string
//8.Call the function

//Code
function titleCase(string) {
  const words = string.split(" ");

  for (let i = 0; i < words.length; i++) {
    words[i] =
      words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
  }
  return words.join(" ");
}

const string = "I'm a little tea pot";
console.log(titleCase(string));
