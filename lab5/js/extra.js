var userMake, userModel, userColor, userYear;
function createCar() {
  userMake = document.getElementById("userMake").value;
  userModel = document.getElementById("userModel").value;
  userColor = document.getElementById("userColor").value;
  userYear = document.getElementById("userYear").value;
  var userAge = 2022 - userYear;
  alert("Your car is a " + userYear + " " + userColor + " " + userMake + " " + userModel + " that is " + userAge + " years old!");
}
