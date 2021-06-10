function calculate() {
  var string = document.getElementById("string").value;
  var mean = document.getElementById("mean").value;
  var median = document.getElementById("median").value;
  var mode = document.getElementById("mode").value;
  string = string.toUpperCase();
  var avg = 0;
  var count[4] = {0, 0, 0, 0};
  for (let i = 0; i < string.length; i++) {
    if (string.charAt(i) == 'A') {
      count[0]++;
      avg += 90;
    }
    else if (string.charAt(i) == 'B') {
      count[1]++;
      avg += 80;
    }
    else if (string.charAt(i) == 'C') {
      count[2]++;
      avg += 70;
    }
    else {
      count[3]++;
      avg += 50;
    }
  }
  avg /= string.length;
  var mode = '';
  for(let i=1;i<4;i++){
    if(count[i]>count[i-1]){
      mode += count[i];
    }
    else if(count[i]<count[i-1]){
      mode += count[i-1];
    }
    else{
      mode += count[i-1] + count[i];
    }
  }
  
}
