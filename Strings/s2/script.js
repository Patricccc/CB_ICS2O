function string2() {
  var input = document.getElementById("input").value;
  var up = input.toUpperCase()
  if (up.startsWith("A") || up.startsWith("E") || up.startsWith("I") || up.startsWith("O") || up.startsWith("U")) {
    var charbegin = input.charAt(0);
    var substr = input.substr(1);
    substr += charbegin;
  }
  else {
    var substr = input + "ly"
  }
  document.getElementById("input").value = substr;
}
