function string3() {
  var str = document.getElementById("word1").value;
  var substr = document.getElementById("word2").value;

  var len = str.length;

  if (str.includes(substr)) {
    var start = str.indexOf(substr);
    var end = start + substr.length - 1;
    document.getElementById("output").innerHTML = "The substring is in the word from index " + start + " to index " + end + "<br>The length of the string is: " + len;
  }
  else {
    document.getElementById("output").innerHTML = "The substring is not in the word." + "<br>The length of the string is: " + len;
  }
}
