$(document).ready(function() {
  $('#saying').keyup(function() {
    $('#saying').val($(this).val().toUpperCase());
  });

  $('html').click(function() {
    $('.webpage').text($('#saying').val().toUpperCase());
  });


});
