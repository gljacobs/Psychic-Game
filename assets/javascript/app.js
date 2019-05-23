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
    if(alphabet.includes(guess)){
        if(guessesLeft >= 1 && !guesses.includes(guess)) {
            guessesLeft--;
            guesses.push(guess);
            if(guess === letter) {
                wins++;
                document.getElementById("games-won").textContent = "Wins: " + wins;
                
                guessesLeft = 9;
                document.getElementById("guesses-left").textContent = "Guesses Left: " + guessesLeft;
                
                letter = alphabet[Math.floor(alphabet.length * Math.random())];
                
                guesses = [];
                document.getElementById("guesses").textContent = "Your Guesses so far: ";
            }
            else{
                document.getElementById("guesses-left").textContent = "Guesses Left: " + guessesLeft;
                document.getElementById("guesses").textContent = document.getElementById("guesses").textContent + " " + guess;
            }
        }
        else (guessesLeft === 0){
            losses++;
            document.getElementById("games-lost").textContent = "Losses: " + losses;
        
            guessesLeft = 9;
            document.getElementById("guesses-left").textContent = "Guesses Left: " + guessesLeft;

            letter = alphabet[Math.floor(alphabet.length * Math.random())];

            guesses = [];
            document.getElementById("guesses").textContent = "Your Guesses so far: ";
        }
    }
}

