    var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    var wins = 0;
    var losses = 0;
    var guessesLeft = 9;
    var letterUser = [];
    var eachofLetters = null;


    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    document.onkeyup = function(event) {
