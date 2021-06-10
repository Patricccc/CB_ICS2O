function piglatin() {
  const vowel = 'aeiou';
  const consonant = 'bcdfghjklmnpqrstvwxyz'
  const special = ".,/)(*&^%$#@!~+_-=}{;:><?|''"
  var sentences = document.getElementById('input').value.split(' ');
  var output = ''
  var i = 0;
  while (i < sentences.length) {
    var word = sentences[i];
    if (vowel.includes(word.charAt(0).toLowerCase())) {
      if (special.includes(word.charAt(word.length - 1))) {
        var letter = word.charAt(word.length - 1);
        word = word.substring(0, word.length - 1);
        word = word + 'ay' + letter;
      }
      else {
        word = word + 'ay';
      }
    }
    else if (consonant.includes(word.charAt(0).toLowerCase())) {
      if (special.includes(word.charAt(word.length - 1))) {
        var letter = word.charAt(word.length - 1);
        word = word.substring(0, word.length - 1);
        word = word + word.charAt(0).toLowerCase() + 'ay' + letter;
        word = word.substr(1);
        word = word.charAt(0) + word.substr(1);
      }
      else {
        word = word + word.charAt(0).toLowerCase() + 'ay';
        word = word.substr(1);
        word = word.charAt(0) + word.substr(1);
      }
    }
    output = output + word + ' ';
    i++;
  }
  document.getElementById("output").innerHTML = "Your sentence in Pig Latin is: <span class='answer'>" + output + "</span>";
}
