function sum() {
  var sum = 0;
  var bottom = document.getElementById("input1").value;
  var high = document.getElementById("input2").value;

  for (i = bottom; i <= high; i++) {
    sum = sum + Number(i);
  }

  if (bottom > high) {
    sum = 0;
  }
  document.getElementById("output").innerHTML = "The sum of the numbers in the range is: <span class='answer'>" + sum + "</span>";
}
