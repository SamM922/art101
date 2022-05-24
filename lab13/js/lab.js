// Author: Samuel Maturo
// Created: May 18th, 2022

//Create a funcion to sort Fizz Buzz and Boom
function fizzBuzzBoom(max) {
  //Loop through all the numbers from 1 to the specified max
  for (var i = 1; i <= max; i++) {
    //Catch the cases that match the contidion for Fizz Buzz and Boom and append the results
    if (i%3 == 0 && i%5 == 0 && i%7 == 0) {
      $("#output").append("<p>" + i + " FizzBuzzBoom!</p>");
    } else if (i%5 == 0 && i%7 == 0) {
      $("#output").append("<p>" + i + " BuzzBoom!</p>");
    } else if (i%3 == 0 && i%7 == 0) {
      $("#output").append("<p>" + i + " FizzBoom!</p>");
    } else if (i%3 == 0 && i%5 == 0) {
      $("#output").append("<p>" + i + " FizzBuzz!</p>");
    } else if (i%3 == 0) {
      $("#output").append("<p>" + i + " Fizz!</p>");
    } else if (i%5 == 0) {
      $("#output").append("<p>" + i + " Buzz!</p>");
    } else if (i%7 == 0) {
      $("#output").append("<p>" + i + " Boom!</p>");
    } else {
      $("#output").append("<p>" + i + "</p>");
    }
  }
}
//Call the funciton with 200 as the max
fizzBuzzBoom(200);
