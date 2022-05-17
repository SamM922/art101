// Author: Samuel Maturo
// Created: May 16th, 2022

//Create a function for the Sorting Hat
function sortingHat(x) {
  //Get the length of the given string
  var length = x.length;
  //Find the remainder of the length/4 as a sorting method
  var mod = length % 4;
  //Depending on the result, return a house
  if (mod == 0){
    return "Slytherin";
  }
  else if (mod == 1){
    return "Ravenclaw";
  }
  else if (mod == 2){
    return "Gryffindor";
  }
  else if (mod == 3){
    return "Hufflepuff";
  }
  else {
    return "How curious.. something has gone wrong. Please try again."
  }
}

//Find the button used to submit
var button = document.getElementById("submitButton");
//When the button is clicked, get the input and run the function
button.addEventListener("click", function() {
  //Get input
  var name = document.getElementById("enterName").value;
  //Run function with input
  var house = sortingHat(name);
  //Create result text
  var sorted = "<p>Hmmm... " + name + "... you belong in... " + house + "!</p>";
  document.getElementById("output").innerHTML = sorted;
})
