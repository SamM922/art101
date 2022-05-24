// Author: Samuel Maturo
// Created: May 24th, 2022

console.log("Hello! You should be able to see the output of workingFunction. You can call a different function by typing 'callableFunction()' to see its output, you don't see it now because it has not been called. The issue of a working function not being called is one common debugging problem in code.")

function workingFunction(){
  console.log("This function works!");
}
workingFunction();

function callableFunction(){
  console.log("This function must be called to see this. Nice job!");
}
