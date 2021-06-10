function validate() {
  var sin1 = document.getElementById("sin1").value;
  var province1 = document.getElementById("province").value;
  //check province length
  if (province1.length != 2) {
    alert("Invalid Province Length");
  }
  else {
    alert("Valid Province Length");
  }
  //validate that SIN matches province
  if (province1 == 'ON') {
    if (Number.parseInt(sin1.charAt(0)) != 4) {
      if (Number.parseInt(sin1.charAt(0)) != 5) {
        alert("Invalid SIN");
      }
      else {
        alert("Valid SIN");
      }
    }
    else {
      alert("Valid SIN");
    }
  }
  else if (province1 == 'QC') {
    if (Number.parseInt(sin1.charAt(0)) != 2) {
      alert("Invalid SIN");
    }
    else {
      alert("Valid SIN")
    }
  }
}
function create() {
  var sin1 = document.getElementById("sin1").value;
  console.log(sin1);
  var province = document.getElementById("province").value;
  //calculate check digit
  var check = Number.parseInt(sin1.charAt(0)) + Number.parseInt(sin1.charAt(2)) + (2 * Number.parseInt(sin1.charAt(1))) + (2 * Number.parseInt(sin1.charAt(3)));
  check %= 10;
  if(check!=0){
    check = 10 - check;
  }
  alert("SIN: " + sin1 + check);
  console.log(check);
}
//defining counters
var validatecount = 0;
var validchecks = 0;
var invalidchecks = 0;
function validate2() {
  var sin2 = document.getElementById("sin2").value;
  var province = document.getElementById("province").value;
  //checking for foreign characters
  var sinreplace = sin2.replace(/[^123456789\s]/g, '');
  if (sinreplace != sin2) {
    alert("Invalid SIN (foreign characters)");
    var validsin = false;
  }
  //checking SIN length
  if (sin2.length != 11) {
    alert("Invalid SIN length");
    var validsinlen = false;
  }
  else {
    alert("Valid SIN length");
    var validsinlen = true;
  }
  //checking province length
  if (province.length != 2) {
    alert("Invalid Province length");
    var validprovlen = false;
  }
  else {
    alert("Valid Province Length");
    var validprovlen = true;
  }
  prov = PE, NB, .... ON, ON , SK
  nums = 1,1,1,...4,5,6
  //validating that province matches SIN
  if (province == 'NB' || province == 'NL' || province == 'NS' || province == 'PE') {
    if (Number.parseInt(sin2.charAt(0)) != 1) {
      alert("Invalid SIN");
      var validprovsin = false;
    }
    else {
      alert("Valid SIN");
      var validprovsin = true;
    }
  }
  else if (province == 'QC') {
    if (Number.parseInt(sin2.charAt(0)) != 2) {
      alert("Invalid SIN");
      var validprovsin = false;
    }
    else {
      alert("Valid SIN");
      var validprovsin = true;
    }
  }
  else if (province == 'ON') {
    if (Number.parseInt(sin2.charAt(0)) != 4) {
      if (Number.parseInt(sin2.charAt(0)) != 5) {
        alert("Invalid SIN");
        var validprovsin = false;
      }
      else {
        alert("Valid SIN");
        var validprovsin = true;
      }
    }
    else {
      alert("Valid SIN");
      var validprovsin = true;
    }
  }
  else if (province == 'MB' || province == 'SK' || province == 'AB') {
    if (Number.parseInt(sin2.charAt(0)) != 6) {
      alert("Invalid SIN");
      var validprovsin = false;
    }
    else {
      alert("Valid SIN");
      var validprovsin = true;
    }
  }
  else if (province == 'NU' || province == 'NT' || province == 'BC' || province == 'YT') {
    if (Number.parseInt(sin2.charAt(0)) != 7) {
      alert("Invalid SIN");
      var validprovsin = false;
    }
    else {
      alert("Valid SIN");
      var validprovsin = true;
    }
  }
  else {
    alert("Invalid Province");
  }
  //calculating check digit
  var check = Number.parseInt(sin2.charAt(0)) + Number.parseInt(sin2.charAt(2)) + Number.parseInt(sin2.charAt(5)) + Number.parseInt(sin2.charAt(8));
  if (2 * Number.parseInt(sin2.charAt(1)) >= 10) {
    check += (2 * Number.parseInt(sin2.charAt(1))) % 10;
    check += Math.floor((2 * Number.parseInt(sin2.charAt(1))) / 10);
  }
  else {
    check += Number.parseInt(sin2.charAt(1));
  }
  if (2 * Number.parseInt(sin2.charAt(4)) >= 10) {
    check += (2 * Number.parseInt(sin2.charAt(4))) % 10;
    check += Math.floor((2 * Number.parseInt(sin2.charAt(4))) / 10);
  }
  else {
    check += Number.parseInt(sin2.charAt(4));
  }
  if (2 * Number.parseInt(sin2.charAt(6)) >= 10) {
    check += (2 * Number.parseInt(sin2.charAt(6))) % 10;
    check += Math.floor((2 * Number.parseInt(sin2.charAt(6))) / 10);
  }
  else {
    check += Number.parseInt(sin2.charAt(6));
  }
  if (2 * Number.parseInt(sin2.charAt(9)) >= 10) {
    check += (2 * Number.parseInt(sin2.charAt(9))) % 10;
    check += Math.floor((2 * Number.parseInt(sin2.charAt(9))) / 10);
  }
  else {
    check += Number.parseInt(sin2.charAt(9));
  }
  check %= 10;
  check = 10 - check;
  console.log(check);
  if (check == Number.parseInt(sin2.charAt(10))) {
    var validcheck = true;
    alert("Valid Check Digit");
  }
  else {
    var validcheck = false;
    alert("Invalid Check Digit");
  }
  //checking if input is invalid
  validatecount++;
  if (validsin == true && validsinlen == true && validprovlen == true && validprovsin == true && validchceck == true) {
    validchecks++;
  } 
  else {
    invalidchecks++;
  }
  //output warning message
  if ((invalidchecks / validatecount) > 0.11) {
    alert("Warning, too many invalid checks!");
  }
}
