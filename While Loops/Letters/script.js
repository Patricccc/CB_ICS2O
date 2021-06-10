function count() {
  var letters = "abcdefghijklmnopqrstuvwxyz";
  var i = 0;
  var total = 0;
  var sentence = document.getElementById("input").value;
  while (true) { //why not check condition here instead of break while(i<sentence.length)
    if (i == sentence.length) {
      break;
    }
    if (letters.includes(sentence.charAt(i).toLowerCase())) {
      total++;
    }
    i++;
  }

  document.getElementById("output").innerHTML = "The number of letters in your sentence is: <span class='answer'>" + total + '</span>'
}
