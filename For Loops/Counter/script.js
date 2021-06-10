function everynum() {
  var low = document.getElementById("exercise1a").value;
  var high = document.getElementById("exercise2a").value;

  var valuestr = "";

  for (i = low; i <= high; i++) {
    valuestr += i + ", ";
  }
  document.getElementById("outputa").innerHTML = "<span class='answer'><b>The Numbers are</b></span>: " + valuestr;
}

function evennum() {
  var low = document.getElementById("exercise1b").value;
  var high = document.getElementById("exercise2b").value;

  var valuestr = "";

  for (i = low; i <= high; i++) {
    if (i % 2 == 0) {//OK like this, but can be more efficent. You can just check if it is odd outside the loop once, then just add one to the starter and increment by 2. If you went from 1-1000 it would compare 1000 numbers.
      valuestr += i + ", ";
    }
  }
  document.getElementById("outputb").innerHTML = "<span class='answer'><b>The Numbers are</b></span>: " + valuestr;
}

function hightolow() {
  var low = document.getElementById("exercise1c").value;
  var high = document.getElementById("exercise2c").value;

  var valuestr = "";

  for (i = high; i >= low; i--) {
    valuestr += i + ", ";
  }
  document.getElementById("outputc").innerHTML = "<span class='answer'><b>The Numbers are</b></span>: " + valuestr;
}
