function calculate() {
  var string = document.getElementById("string").value;
  var weight = document.getElementById("weight").value;
  var max = document.getElementById("max").value;
  var pcount = 0;
  var scount = 0;
  var lcount = 0;
  string = string.toUpperCase();
  string = string.replace(/[^PLS]/g, '');
  for (let i = 0; i < string.length; i++) {
    if (string.charAt(i) == 'P') {
      pcount++;
    }
    else if (string.charAt(i) == 'S') {
      scount++;
    }
    else {
      lcount++;
    }
  }
  console.log(string);
  console.log(pcount);
  console.log(scount);
  console.log(lcount);
  var vehicles = scount + lcount;
  console.log(vehicles)
  var pweight = pcount * 80;
  var sweight = scount * 2000;
  var lweight = lcount * 36000;
  var totalweight = pweight + sweight + lweight;
  console.log(totalweight);
  var avgweight = totalweight / (vehicles + pcount);
  console.log(avgweight);
  var pass = false;
  if (totalweight < weight && vehicles < max) {
    pass = true;
  }
  console.log(pass);
  var flex = false;
  if (totalweight < weight && lcount < (0.1 * vehicles)) {
    flex = true;
  }
  console.log(flex);
}
