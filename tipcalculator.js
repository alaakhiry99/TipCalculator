//Tip-Calculator
function calculation() {
  var bill = document.getElementById("bill").value;
  var service = document.getElementById("service").value;
  var peopleNum = document.getElementById("peopleNum").value;

  //if bill or service or number of people input doesn't enter value, alert it. 
  if (bill === "" || service == 0 || peopleNum=="") {
    alert("Please enter value");
    return;
  } 
  //all Calculation
  var total = (bill * service) / peopleNum;
  //round to 2 decimal
  total = Math.round(total * 100) / 100;
  //two digits after decimal point
  total = total.toFixed(2);

  //Print final calculation
  document.getElementById("tips").innerHTML = total;
}
//calling function to run
document.getElementById("button").onclick = function() {
  calculation();
};