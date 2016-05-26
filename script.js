$(document).ready(function(){
  $("#blanks form").submit(function(event){
    var foodInput = $("input#food").val();
    var musicInput = $("input#music").val();
    $(".food").append(foodInput);
    $(".music").append(musicInput);



var flavor = $("input:radio[name=flavor]:checked").val();
$(".flavor").append(flavor);
var favoriteColor = $("input#color").val();
$(".color").append(favoriteColor);


// $("#story").show();
event.preventDefault();

});
});
