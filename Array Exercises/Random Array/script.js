function generate() {
  var arr = new Array(10);
  var max = 0;
  var min = 101;
  var avg = 0;
  for (let i = 0; i < 10; i++) {
    arr[i] = Math.floor(100 * Math.random() + 1);
    avg += arr[i];
    if (arr[i] > max) {
      max = arr[i];
    }
    else if (arr[i] < min) {
      min = arr[i];
    }
  }
  avg /= 10;
  document.getElementById("output").innerHTML = 'Array: <span class="answer">' + arr[0] + '</span>';
  for (let i = 1; i < 9; i++) {
    document.getElementById("output").innerHTML += ', <span class="answer">' + arr[i] + '</span>';
  }
  document.getElementById("output").innerHTML += ', ' + '<span class="answer">' + arr[9] + '</span><br>Average: <span class="answer">' + avg + '</span><br>' + 'Maximum: <span class="answer">' + max + '</span><br>Minimum: <span class="answer">' + min + "</span><br>";
}
