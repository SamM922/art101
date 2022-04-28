// Author: Samuel Maturo
// Created: April 27th, 2022

//Create a function to sort a word
function sortWord() {
  //Prompt user for their word
  var word = prompt("Enter your word to be sorted.");
  //Use toUpperCase() to create a new word for alphabetical sorting that ignores the letter's case
  var upWord = word.toUpperCase();
  //Split the words into arrays
  var wordSplit = word.split('');
  var upWordSplit = upWord.split('');
  //Sort the arrays
  var sortedSplitWord = wordSplit.sort();
  var upSortedWord = upWordSplit.sort();
  //Turn the arrays back into strings
  var newWord = sortedSplitWord.join('');
  var newUpWord = upSortedWord.join('');
  //Return the values
  return (newWord + " " + newUpWord);
}

//Print out the results in the HTML
document.writeln("Here's your sorted word after using the unmodified sort method and by alphabetical order: ",
  sortWord(), "<br>");
