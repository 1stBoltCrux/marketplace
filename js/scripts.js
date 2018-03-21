$(document).ready(function() {

  $("form#form1").submit(function(event) {
    var nameInput = $("input#name").val();
    var addressInput = $("input#address").val();
    var ducksInput = $("input#ducks").val();

    $(".name").text(nameInput);
    $(".address").text(addressInput);
    $(".ducks").text(ducksInput);

    $(".output").show();

    event.preventDefault();
  });
});
