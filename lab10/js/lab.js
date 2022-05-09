// Author: Samuel Maturo
// Created: May 9th, 2022

var outputEl = document.getElementById("output");
var username = document.getElementById("user-name");
var button = document.getElementById("my-button");
button.addEventListener("click", function() {
  var word = username.value;
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
  outputEl.innerHTML = "<p>" + newWord + " " + newUpWord + "</p>";
});
