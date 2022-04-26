// Author: Samuel Maturo
// Created: April 25th, 2022

var myTransport = ["bus", " walking", " car"];
let myMainRide = {
  make: "Toyota",
  model: "Prius Prime",
  color: "Silver",
  year: 2018,
};

document.writeln("How I get around: " + myTransport + "<br>");
document.writeln("My parents' car: <pre>",
  JSON.stringify(myMainRide, null, '\t'), "</pre>");
document.writeln("Most popular method: " + myTransport[1] + "<br>");
var carAge = 2022 - myMainRide.year;
document.writeln("Car's age: " + carAge + "<br>");
