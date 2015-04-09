// Use the techniques shown so far to write a program that calculates and shows the value of (2 to the 10th power)

/**
 * [exponentCalculator description]
 * @param  {Number} num [number to be multiplied]
 * @param  {Number} pow [number of times to multiply number by itself]
 * @return {Number}     [the solution from the multiplying]
 */
var exponentCalculator = function (num, pow){
  var number = num;
  for (var i = 1; i < pow; i++) {
    number *= num;
  }
  return number;
};

var addRow = function(count, num, pow, ans) {
  var counter = ('<td>' + count + '</td>');
  var number = ('<td>' + num + '</td>');
  var power = ('<td>' + pow + '</td>');
  var answer = ('<td>' + ans + '</td>');

  return $('.answerTable tr').last().after('<tr>' + counter + number + power + answer + '</tr>');
};

$(document).on('ready', function() {
var count = 0;
// Run calculation on form submit
$('.expCalc').on('submit', function(e){
  $('.answer').fadeOut('fast');
  e.preventDefault();
    // Pause for previous number to fadeOut
    setTimeout(function(){
    var num = $('#number').val();
    var pow = $('#power').val();
    var ans = exponentCalculator(num, pow);
    $('.answer').text(ans).slideDown('fast');
    $('.expCalc')[0].reset();
    count++;
    addRow(count, num, pow, ans);
    },300);

});

});