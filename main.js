// Use the techniques shown so far to write a program that calculates and shows the value of (2 to the 10th power)

/**
 * [exponentCalculator - Functions as an exponential calculator]
 * @param  {Number} num [The number to be multiplied]
 * @param  {Number} pow [The number of times to multiply the number by itself]
 * @return {Number}     [The solution from the multiplying]
 */
var exponentCalculator = function (num, pow){
  var number = num;
  for (var i = 1; i < pow; i++) {
    number *= num;
  }
  return parseFloat(number);
};

/**
 * [addRow - Returns a jQuery row]
 * @param {Number} count [The calculation number]
 * @param {Number} num   [The number to be multiplied]
 * @param {Number} pow   [The number of times to multiply the number by itself]
 * @param {Number} ans   [The Answer]
 */
var addRow = function(count, num, pow, ans) {
  var counter = ('<td>' + count + '</td>');
  var number = ('<td>' + num + '</td>');
  var power = ('<td>' + pow + '</td>');
  var answer = ('<td>' + ans + '</td>');

  return '<tr>' + counter + number + power + answer + '</tr>';
};

$(document).on('ready', function() {
var count = 0;
var total = 0;
var showTotal = false;
var showTable = false;

// Run calculation on form submit
$('.expCalc').on('submit', function(e){

  // Clear out previous number after first calculation has been made
  $('.answer').fadeOut('fast');
  e.preventDefault();

    // Pause for previous number to fadeOut
    setTimeout(function(){
    var num = $('#number').val();
    var pow = $('#power').val();
    var ans = exponentCalculator(num, pow);

    // Reset form
    $('.expCalc')[0].reset();

    // Check if inputs are numbers
    if( (parseFloat(num) && isFinite(num)) && (parseFloat(pow) && isFinite(pow)) ){
      // Increment counter on each submit
      count++;
      // Add answer to page
      $('.answer').text(ans).slideDown('fast');

      // Add table row of each calculation
      $('.answerTable tr').last().after(addRow(count, num, pow, ans));

      // Add each calculation to running total
      var runningTotal = total += ans;

      // Show running total after first calculation
      if(!showTotal){
        $('.runningTotal').fadeToggle();
        showTotal = true;
      }

      // Show table after first calculation
      if(!showTable){
        $('.answerTable').fadeToggle();
        showTable = true;
        }
      // Set running total to toggle title on hover
      $('.total').on('mouseenter', function(){
        $('.total').text('Sum of answers: '+ runningTotal);
      }).mouseleave(function(){
        $('.total').text('Exponent Calculator');
      });
    }
    else {
      $('.error').fadeToggle();
      setTimeout(function(){
        $('.error').fadeToggle();
      },1500);
    }

    },300);

});

});