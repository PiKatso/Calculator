
//User interface (front-end) logic:
$(document).ready(function(){
  $("form#survey").submit(function(event){
    event.preventDefault();

    // Name
    var name = $("#name").val()
    console.log(name);
    // DOB
    var dob = $("#dob").val()
    console.log(dob);
    // Color
    var color = $("#fav-color").val();
    console.log(color);
    // Season
    var season = $("input:radio[name=season]:checked").val();
    console.log(season);
    //Transit
    var transit = $("#transport").val();
    console.log(transit);
    //spit out response
    $("#results").show();
  });
});
