
let validInput = false;
let input, maxGuess;
let correctGuess;
let previousGuesses = [];

while(!validInput) {
    input = window.prompt("Enter a maximum guess");
    maxGuess = Number(input);

    if(!isNaN(maxGuess) && maxGuess > 0.0) {
        maxGuess = Math.round(maxGuess);
        if (maxGuess != 0.0) {
            validInput = true;
        }
    }
}

let instructionsParagraph = document.getElementById("instructions");
instructionsParagraph.innerHTML = "Guess a number between 1 and " + maxGuess;

correctGuess = Math.floor(maxGuess * Math.random()) + 1;





function guessButtonPressed() {

    let message = document.getElementById("responseMessage");
    let guess = Number(document.getElementById("yourGuess").value);
    if (isNaN(guess)) {
        message.innerHTML = "That is not a number!";
        return;
    }
    if (guess < 1 || guess > maxGuess) {
        message.innerHTML = "That number is not in range, try again.";
        return;
    }


    if (!previousGuesses.includes(guess)) {
        // New, Unique Guess
        previousGuesses.push(guess);

        if (guess == correctGuess) {

            let stringListOfGuesses = "";

            let t;
            for (t = 0; t < previousGuesses.length; t++) {
                stringListOfGuesses += previousGuesses[t];
                if (t != previousGuesses.length - 1) {
                    stringListOfGuesses += ", ";
                }
            }
            message.innerHTML = "You got it! It took you " + previousGuesses.length + " tries and your guesses were " + stringListOfGuesses;            
        }
        else if (guess > correctGuess) {
            message.innerHTML = "No, try a lower number.";
        }
        else if (guess < correctGuess) {
            message.innerHTML = "No, try a higher number.";
        }

    }
    else {
        // Guess Already Tried
        message.innerHTML = "This number was already guessed!";
    }
}