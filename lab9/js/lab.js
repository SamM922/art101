// Author: Samuel Maturo
// Created: May 4th, 2022

//Select the output div
var outputEl = document.getElementById("output");
//Create elements with p tag
var new1El = document.createElement("p");
new1El.innerHTML = "Here is some text written from JavaScript!";
var new2El = document.createElement("p");
new2El.innerHTML = "This text uses append functions to appear on the website.";
//Add elements to HTML with appendChild
outputEl.appendChild(new1El);
outputEl.appendChild(new2El);
