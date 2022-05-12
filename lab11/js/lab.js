// Author: Samuel Maturo
// Created: May 11th, 2022

//Add buttons to each section
$("#challenge").append("<button id='chalButton'>Swap</button>");
$("#problems").append("<button id='probButton'>Swap</button>");
$("#results").append("<button id='resButton'>Swap</button>");

//Create click handlers with functions to add extra CSS for each button
$("#chalButton").click(function(){
  $("#challenge").toggleClass("special");
});

$("#probButton").click(function(){
  $("#problems").toggleClass("special2");
});

$("#resButton").click(function(){
  $("#results").toggleClass("special3");
});
