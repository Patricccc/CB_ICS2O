function password() {
  var letters = "abcdefghijklmnopqrstuvwxyz";
  var rand = Math.floor(Math.random() * 10 + 1);
  var word = ''

  for (i = 0; i <= rand; i++) {
    var randletter = Math.floor(Math.random() * 27 + 1);
    var letter = letters.charAt(randletter);
    word += letter;
  }
  console.log(word);
  return word;
}
function check() {
  var random = password();
  var guessed = false;
  while (!guessed) {
    var guess = document.getElementById("input").value;
    if (guess == random) {
      document.getElementById("output").innerHTML = 'Correct! The password was <span class="answer">' + random + " </span>!";
    }
    else {
      document.getElementById("output").innerHTML = 'Try again, the password was not <span class="answer">' + guess + "</span>";
    }
  }
}
