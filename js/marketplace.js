$(document).ready(function(){
  $("form#order").submit(function(event) {
    event.preventDefault();
    var name = $("#name").val();
    var address = $("#address").val();
    var purchase = $("#purchase").val();

    $("#rec-name").text(name);
    $("#rec-address").text(address);
    $("#rec-purchase").text(purchase);



    $("#reciept").show();

  });


});
