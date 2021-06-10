function wordcount() {
  var count = 0;
  var sentence = document.getElementById("input").value;
  var arr = sentence.split(" ");

  for (i = 0; i <= arr.length; i++) {
    count++;
  }
  count--;

  document.getElementById("output").innerHTML = "The number of words in your sentence is: <span class='answer'>" + count + "</span>";
}
