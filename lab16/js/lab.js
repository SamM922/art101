// Author: Samuel Maturo
// Created: June 2nd, 2022

$.ajax({
  url: "https://xkcd.com/info.0.json",
  type: "GET",
  dataType: "json",
  success: function(data){
    var comicObj = data;
    $("#output").html("<h2>" + comicObj.title + "</h2><br><img src='" + comicObj.img + "'><br><p>Alt: " + comicObj.alt);
  },
  error: function(request, error){
    $("#output").html("<p>Something went wrong :(</p>");
  }
});
