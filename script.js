let numberToGuess = Math.floor(Math.random() * 101);
const formResponse = document.querySelector(".form-response"); 
const input = document.querySelector(".form-input");
const form = document.querySelector(".form");
const resetButton = document.querySelector(".form-button__reset");
const responseList = document.querySelector(".form-response-list");
let guessArr = [];

const checkGuess = (e) => {
    e.preventDefault();
    let guess = input.value;
    if (guess > numberToGuess) {
        let tooHigh = `<div class="form-response high">Your guess was too high! Try again.</div>`
        formResponse.innerHTML = tooHigh;
        guessArr.unshift(guess);
    } else if (guess < numberToGuess) {
        let tooLow = `<div class="form-response low">Your guess was too low! Try again.</div>`
        formResponse.innerHTML = tooLow;
        guessArr.unshift(guess);
    
    } else if (guess == numberToGuess) {
        let correct = `<div class="form-response correct">You got it! I have another number make a guess to keep playing.</div>`
        formResponse.innerHTML = correct;
        guessArr = [];
        numberToGuess = Math.floor(Math.random() * 101);
    } else {
        let notaNumber = `<div class="form-response not-a-number">Your guess must be a number. Please try again.</div>`
        formResponse.innerHTML = notaNumber;
    }
    if (guessArr.length >= 1) {
        let guessList = guessArr.map(guess => {
            return `<li>You guessed ${guess}</li>`
        });
        responseList.innerHTML = guessList.join(' ');
    } else {
        responseList.innerHTML = "";
    }
}

const resetGame = () => {
    const reset = `<div class="form-response">Make a guess</div>`
    guessArr = [];
    numberToGuess = Math.floor(Math.random() * 101);
    formResponse.innerHTML = reset;
    responseList.innerHTML = "";
}


form.addEventListener("submit", checkGuess);
resetButton.addEventListener("click", resetGame);

