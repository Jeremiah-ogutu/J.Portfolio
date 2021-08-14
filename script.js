$(document).ready(function(){
  $("#design").click(function(){
    $("#picture").fadeToggle();
    $("#p-graph").toggle(function(click){
    });
});
});

$(document).ready(function(){
  $("#development").click(function(){
    $("#picture2").fadeToggle();
    $("#p1-graph").toggle(function(click){
    });
});
});

$(document).ready(function(){
  $("#product").click(function(){
    $("#picture3").fadeToggle();
    $("#p2-graph").toggle(function(click){
    });
});
});

$("#form").submit (function(event){
  event.preventDefault();
    alert("Thank you for your feedback ")
});
