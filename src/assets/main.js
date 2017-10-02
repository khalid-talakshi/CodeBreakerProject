let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');
    if (answer || attempt == '') {
      setHiddenFields();
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

function setMessage(text) {
  document.getElementById('message').innerHTML(text);
}
