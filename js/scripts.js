$(document).ready(function() {

  $("form#calculator").submit(function() {
    event.preventDefault();
    const number1 = $("#input1").val();

    $("#output").text(number1);
  });
});
