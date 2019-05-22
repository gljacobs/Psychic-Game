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
    
    if(guessesLeft > 0) {
        guesses.push(guess);
        document.getElementById("guesses").textContent = document.getElementById("guesses").textContent + " " + guess;
        if(guess === letter) {
            wins++;
            document.getElementById("games-won").textContent = "Wins: " + wins;
        }
    }
    else {
        losses++;
        document.getElementById("games-lost").textContent = "Losses: " + losses;
    }
    guessesLeft--;
    document.getElementById("guesses-left").textContent = "Guesses Left: " + guessesLeft;
}

