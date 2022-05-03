// Author: Samuel Maturo
// Created: May 2nd, 2022

//Declare numbers
var numbers = [8, 45, 0, -4, 0.7, -12.8];
console.log("These are the numbers my functions will work with: " + numbers);

//Create function to get a quarter of the given number
function quarterOf(x) {
  var result = x/4;
  return result;
}

//Get result of array.map with the function and console.log
var r1 = numbers.map(quarterOf);
console.log("One quarter of all the numbers: " + r1);

//Create anonymous function to map onto the array and log
var r2 = numbers.map(function(x){
  var result = (x+1)*3;
  return result;
})
console.log("Add one to every number, then triple it: " + r2);
