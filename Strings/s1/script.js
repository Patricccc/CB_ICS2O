var oper = "nada";
//selecting function
function string1() {
  oper = document.getElementById("functionselect").value;

  document.getElementById("selectdiv").style.display = "none";
  document.getElementById("inputdiv").style.visibility = "visible";

  if (oper == "substring") {
    document.getElementById("inputfield").innerHTML = 'String: <input type="text" id="subword"><br><br>1st index: <input type="number" id="sub1st"><br><br>2nd index: <input type="number" id="sub2nd">';
  }

  else if (oper == "indexof") {
    document.getElementById("inputfield").innerHTML = 'String: <input type="text" id="fullword"><br><br>String to Find: <input type="text" id="find">';
  }

  else if (oper == "lastindexof") {
    document.getElementById("inputfield").innerHTML = 'String: <input type="text" id="fullword"><br><br>String to Find: <input type="text" id="find">';
  }

  else if (oper == "replace") {
    document.getElementById("inputfield").innerHTML = 'String: <input type="text" id="wordoriginal"><br><br>Replacement Index: <input type="text" id="wherereplace"><br><br>Replacement String: <input type="text" id="replaceword">';
  }

  else if (oper == "touppercase") {
    document.getElementById("inputfield").innerHTML = 'String: <input type="text" id="originalword">';
  }

  else if (oper == "length") {
    document.getElementById("inputfield").innerHTML = 'String: <input type="text" id="originalword">';
  }

  else if (oper == "includes") {
    document.getElementById("inputfield").innerHTML = 'String: <input type="text" id="word1"><br><br>String to Search for: <input type="text" id="word2">';
  }

  else if (oper == "startswith") {
    document.getElementById("inputfield").innerHTML = 'String: <input type="text" id="word1"><br><br>Does the String Start with: <input type="text" id="word2">';
  }

  else if (oper == "charat") {
    document.getElementById("inputfield").innerHTML = 'String: <input type="text" id="word1"><br><br>Index: <input type="number" id="index2">';
  }

  else if (oper == "charcodeat") {
    document.getElementById("inputfield").innerHTML = 'String: <input type="text" id="word1"><br><br>Index: <input type="number" id="index2">';
  }

  else if (oper == "fromcharcode") {
    document.getElementById("inputfield").innerHTML = 'ASCII Number (0-255): <input type="number" id="originalnumber">';
  }

  else if (oper == "same") {
    document.getElementById("inputfield").innerHTML = '1st String: <input type="text" id="word1"><br><br>2nd String: <input type="text" id="word2">';
  }
}
//output
function answer() {
  if (oper == "substring") {
    var word = document.getElementById("subword").value;
    var firstindex = document.getElementById("sub1st").value;
    var secondindex = document.getElementById("sub2nd").value;
    var substring = word.substring(firstindex, secondindex);
    document.getElementById("output").innerHTML = "Substring is: " + substring;
  }
  else if (oper == "indexof") {
    var word = document.getElementById("fullword").value;
    var finding = document.getElementById("find").value;
    var indexofanswer = word.indexOf(finding);
    document.getElementById("output").innerHTML = "Word Found at Index: " + indexofanswer;
  }
  else if (oper == "lastindexof") {
    var word = document.getElementById("fullword").value;
    var finding = document.getElementById("find").value;
    var indexofanswer = word.lastIndexOf(finding);
    document.getElementById("output").innerHTML = "Word Found in Last Position with Index: " + indexofanswer;
  }
  else if (oper == "replace") {
    var word = document.getElementById("wordoriginal").value;
    var where = document.getElementById("wherereplace").value;
    var replacement = document.getElementById("replaceword").value;
    var stringanswer = word.replace(where, replacement);
    document.getElementById("output").innerHTML = "New String: " + stringanswer;
  }
  else if (oper == "touppercase") {
    var word = document.getElementById("originalword").value;
    var stringanswer = word.toUpperCase();
    document.getElementById("output").innerHTML = "New String: " + stringanswer;
  }
  else if (oper == "length") {
    var word = document.getElementById("originalword").value;
    var stringanswer = word.length;
    document.getElementById("output").innerHTML = "Length of String: " + stringanswer;
  }
  else if (oper == "includes") {
    var word = document.getElementById("word1").value;
    var word2 = document.getElementById("word2").value;
    var stringanswer = word.includes(word2);
    document.getElementById("output").innerHTML = "Is the second string in the first string?: " + stringanswer;
  }
  else if (oper == "startswith") {
    var word = document.getElementById("word1").value;
    var word2 = document.getElementById("word2").value;
    var stringanswer = word.startsWith(word2);
    document.getElementById("output").innerHTML = "Does the first string start with the second string?: " + stringanswer;
  }
  else if (oper == "charat") {
    var word = document.getElementById("word1").value;
    var index2 = document.getElementById("index2").value;
    var stringanswer = word.charAt(index2);
    document.getElementById("output").innerHTML = "The char at your index position is: " + stringanswer;
  }
  else if (oper == "charcodeat") {
    var word = document.getElementById("word1").value;
    var index2 = document.getElementById("index2").value;
    var stringanswer = word.charCodeAt(index2);
    document.getElementById("output").innerHTML = "The ASCII code at your index position is: " + stringanswer;
  }
  else if (oper == "fromcharcode") {
    var word = document.getElementById("originalnumber").value;
    var stringanswer = String.fromCharCode(word);
    document.getElementById("output").innerHTML = "The character of your ASCII Number is: " + stringanswer;
  }

  else if (oper == "same") {
    var word = document.getElementById("word1").value;
    var word2 = document.getElementById("word2").value;
    var same = false;
    if (word == word2) {
      same = true;
    }
    document.getElementById("output").innerHTML = "Are the Two Strings Equal?: " + same;
  }
}
//reset
function reset() {
  document.getElementById("selectdiv").style.display = "block";
  document.getElementById("inputdiv").style.visibility = "hidden";
  oper = "nada";
}
