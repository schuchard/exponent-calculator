// Use the techniques shown so far to write a program that calculates and shows the value of (2 to the 10th power)

var exponentCalculator = function (num, pow){
  var number = num;
  for (var i = 1; i < pow; i++) {
    number *= num;
  }
  return number;
};


$(document).on('ready', function() {
$('.expCalc').on('submit', function(e){
  $('.answer').fadeOut('fast');
  e.preventDefault();
    setTimeout(function(){
    var num = $('#number').val();
    var pow = $('#power').val();
    $('.answer').text(exponentCalculator(num, pow)).slideDown('fast');
    $('.expCalc')[0].reset();
    },300);
});

});