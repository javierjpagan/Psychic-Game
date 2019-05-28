//VARIABLES
//Options to select.
var letters = ["a", "e", "i", "o", "u"];
//Countdown of Guesses left
var guessesLeft = 3;
// Win & Losses counter
var win = 0;
var loss = 0;
//What user guesses
var lettersGuessed = [];
//Random letter from computer
var computerGuess = null;

//FUNCTIONS
//Random selection function
var updatecomputerGuess = function () {
    computerGuess = letters[Math.floor(Math.random() * letters.length)];
};

//Updates Guesses left
var updateguessesLeft = function () {
    document.querySelector("#guessLeft").innerHTML = guessesLeft;
};

//Updates Guesses so far
var updateGuessesSoFar = function () {
    document.querySelector("#GuessesSoFar").innerHTML = lettersGuessed.join(", ");
};

//Reset
var reset = function () {
    guessesLeft = 3;
    lettersGuessed = [];
    updatecomputerGuess();
    updateguessesLeft();
    updateGuessesSoFar();
};


updateguessesLeft();
updatecomputerGuess();


document.onkeydown = function (event) {

    if (event.keyCode === 65 || event.keyCode === 69 || event.keyCode === 73 || event.keyCode === 79 || event.keyCode === 85) {


        //Turns letter input into lower case, then it adds to an array of letters already used and reduces number of guesses left
        //Update Guesses left and Guesses so far on the page
        var letters = event.key.toLowerCase();
        lettersGuessed.push(letters);
        guessesLeft--;
        updateguessesLeft();
        updateGuessesSoFar();

        //If statement if the user guesses the correct letter, the user wins the game
        if (letters === computerGuess) {
            win++;
            document.querySelector("#wins").innerHTML = win;
            reset();
        }

        //If statement if the user reaches 0 tries out of 9, the user loses the game
        if (guessesLeft === 0) {
            loss++;
            document.querySelector("#losses").innerHTML = loss;
            reset();
        }
    }
};