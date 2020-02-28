let numberToGuess = Math.floor(Math.random() * 101);
const formResponse = document.querySelector(".form-response"); 
const input = document.querySelector(".form-input");
const form = document.querySelector(".form");
const responseList = document.querySelector(".form-response-list");
let guessArr = [];


form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(numberToGuess);
    let guess = input.value;
    if (guess > numberToGuess) {
        let tooHigh = `<div class="form-response high">Your guess was too high! Try again.</div>`
        formResponse.innerHTML = tooHigh;
        guessArr.push(guess);
    } else if (guess < numberToGuess) {
        let tooLow = `<div class="form-response low">Your guess was too low! Try again.</div>`
        formResponse.innerHTML = tooLow;
        guessArr.push(guess);
    
    } else if (guess = numberToGuess) {
        let tooLow = `<div class="form-response correct">You got it!</div>`
        formResponse.innerHTML = tooLow;
        guessArr.push(guess);
    }

    if (guessArr.length >= 1) {
        let guessList = guessArr.map(guess => {
            return `<li>You guessed ${guess}</li>`
        });
        responseList.innerHTML = guessList.join(' ');
    }
})

