// Author: Samuel Maturo
// Created: May 25th, 2022

function whichMon() {
  var num = $("#numInput").val();
  console.log(num);
  var endpoint = "https://pokeapi.co/api/v2/pokemon/" + num;
  $.ajax({
    url: endpoint,
    type: "GET"
  })
  .done(function(data){
    $("#output").html("<p>" + data.name + "</p>");
  })
  .fail(function(request, error){
    $("#output").html("<p>Uh oh</p>");
  });
}

$("#activate").click(whichMon);
