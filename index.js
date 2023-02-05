var num1 = "";
var num2 = "";
var number = "";
var operator = "";
$("#result").val("0");

// event that occur when a number button is clicked
$(".number").click(function () {
   number = $(this).val();
if (operator === "") {
    num1 += number;
    $("#result").val(num1);
}

else if (operator !== "") {
  num2 += number;
  $("#result").val(num1 += number);   
}
});

// event that occur when an operator button is clicked 
$(".operator").click(function () {
    operator = $(this).val();
    $("#result").val(num1 += operator);
});

// event that occur when the equal button is clicked
$(".equal").click(function(){
try {
  var result = eval(num1);
} catch (error) {
  var result = "NaN"
}
$("#result").val(result);
});

// event that occur when the clear button is clicked
$(".clear").click(function(){
    num1 = "";
    num2 = "";
    operator = "";
    $("#result").val("0");
  });

// event that occur when the clear button is clicked
$(".delete").click(function() {
  num1 = num1.substring(0, num1.length-1);
  num2 = num2.substring(0, num2.length-1);
  
    var displayValue = $("#result").val();
    $("#result").val(displayValue.substring(0, displayValue.length-1));
  
  });

