var computerGuess;
var userGuessLog = [];
var attempts = 0;
var maxGuesses = 10;

function easymode() {
    maxGuesses = 10;
}

function hardmode() {
    maxGuesses = 5;
}

function newGame() {
window.location.reload();
}

function init() {
computerGuess = Math.floor(Math.random() * 100 + 1);
// console.log(computerGuess);
document.getElementById('newGameButton').style.display = 'none';
}

function compareGuess() {
 var userGuess = document.getElementById('inputBox').value;
 console.log(userGuess);
 
  userGuessLog.push(userGuess);
// console.log(userGuessLog);
document.getElementById('guessLog').innerHTML = userGuessLog;

attempts++;
document.getElementById('attempts').innerHTML = attempts;

 
if(userGuessLog.length < maxGuesses) {
     if(userGuess > computerGuess) {


    document.getElementById('text0utput').innerHTML = 'liian iso!';
document.getElementById('inputBox').value = ""; 
} else if (userGuess < computerGuess) {
    document.getElementById('text0utput').innerHTML = 'liian vähän!';
document.getElementById('inputBox').value = "";
} else {
document.getElementById('text0utput').innerHTML = 'oikein!';
}  


} else {
 if(userGuess > computerGuess) {
    document.getElementById('text0utput').innerHTML = 'häviät!';
} else if (userGuess < computerGuess) {
    document.getElementById('text0utput').innerHTML = 'häviät!';
} else {
    document.getElementById('text0utput').innerHTML = 'oikein!';
}
}
}