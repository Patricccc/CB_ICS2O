function generate(){
  var part = ["eyes", "legs", "face", "strength", "iq"];
  var adj = ["gorgeous", "fierce", "sculpted", "distinguished", "brilliant"];
  var compliment = ["model", "genius", "warrior", "queen", "demigod"];
  var x = Math.floor(4 * Math.random() + 1);
  var out = 'You have the <span class="answer">' + part[x] + '</span> of a ';
  x = Math.floor(5 * Math.random() + 1);
  out += '<span class="answer"> ' + adj[x] + '</span>';
  x = Math.floor(5 * Math.random() + 1);
  out += '<span class="answer"> ' + compliment[x] + '</span>';
  document.getElementById("output").innerHTML = out;
}
