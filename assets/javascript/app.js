//Gabriel Jacobs
//Psychic App - Javascript 

var guess;

var letter;

var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0; 
var losses = 0;
var guessesLeft = 9;
var guesses = [];

document.onkeyup = function(event) {
    guess = event.key;
    letter = alphabet[Math.floor(alphabet.length * Math.random())];
    console.log(letter);
    
    guesses.push(guess);
    document.getElementById("guesses").textContent = document.getElementById("guesses").textContent + " " + guess;
}

