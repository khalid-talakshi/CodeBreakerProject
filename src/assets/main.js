let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');
    if (answer || attempt == '') {
      setHiddenFields();
    }
    if (!validateInput(input.value)) {
      return;
    } else {
      attempt += 1;
    }

    if (getResults) {
      setMessage("You Win! :)");
      showAnswer(true);
      showReplay();
    } elseif (!getResults && attempt >= 10) {
      setMessage("You Lose! :(")
      showAnswer(true);
      showReplay();
    } else {
      setMessage("Incorrect, Try Again");
    }
}

function setHiddenFields() {
  answer =  Math.floor(Math.random())*1000;
  answer.toString();
  while (answer.length < 4) {
    answer = "0" + answer;
  }
  attempt = 0;
}

function setMessage(message) {
  document.getElementById('message').innerHTML = text;
}

function validateInput(guess) {
  if (guess.length == 4) {
    return true;
  } else {
    setMessage("Guesses must be exactly 4 characters long");
    return false;
  }
}

function getResults (input) {
  var icon = "";
  var numCorrect = 0;
  document.getElementById('results').innerHTML = '<div class="row"><span class="col-md-6">' + input + '</span><div class="col-md-6">' + icon + '</div></div>'
  for (var i = 0; i < 4; i++) {
      for (var m = 0; m < 4; m++) {
        if (input.charAt(m) == answer.charAt(i) && m == i) {
          icon += '<span class="glyphicon glyphicon-ok"></span>';
          numCorrect += 1;
        } elseif (input.charAt(m) == answer.charAt(i) && m != i) {
          icon += '<span class="glyphicon glyphicon-transfer"></span>';
        } else {
          icon += '<span class="glyphicon glyphicon-remove"></span>';
        }
      }
  }

  if (numCorrect == 4) {
    return true;
  } else {
    return false;
  }

}

function showAnswer(answer) {
  document.getElementById('code').innerHTML = answer.value;
  if (answer) {
    document.getElementById('code').className += " success";
  } else {
    document.getElementById('code').className += " failure";
  }
}

function showReplay() {
  document.getElementById('guessing-div').style.display = none;
  document.getElementById('replay-div').style.display =  block;
}
