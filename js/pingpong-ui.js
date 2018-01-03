var Calculator = require('../js/pingpong.js').calculatorModule;

$(document).ready(function() {
  $('#ping-pong-form').submit(function(event) {
    event.preventDefault();
    var goal = $('#goal').val();
    var skinSelect = new Calculator("Hot Pink");
    var output = skinSelect.pingPong(goal);
    $('#solution').text('');
    output.forEach(function(element) {
      $('#solution').append("<li>" + element + "</li>");
    });
  });
});
