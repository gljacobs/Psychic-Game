//Gabriel Jacobs
//Psychic App - Javascript 

var guess;
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var letter = alphabet[Math.floor(alphabet.length * Math.random())];


var wins = 0; 
var losses = 0;
var guessesLeft = 9;
var guesses = [];

document.onkeyup = function(event) {
    guess = event.key;
    console.log(letter);
    
    if(guessesLeft >= 1) {
        guesses.push(guess);
        if(guess === letter) {
            wins++;
            guessesLeft = 10;
            document.getElementById("games-won").textContent = "Wins: " + wins;
            document.getElementById("guesses-left").textContent = "Guesses Left: " + guessesLeft;
            letter = alphabet[Math.floor(alphabet.length * Math.random())];
        }
    }
    else {
        losses++;
        guessesLeft = 10;
        document.getElementById("games-lost").textContent = "Losses: " + losses;
        document.getElementById("guesses-left").textContent = "Guesses Left: " + guessesLeft;
        letter = alphabet[Math.floor(alphabet.length * Math.random())];
    }
    guessesLeft--;
    document.getElementById("guesses-left").textContent = "Guesses Left: " + guessesLeft;
    document.getElementById("guesses").textContent = document.getElementById("guesses").textContent + " " + guess;
}

