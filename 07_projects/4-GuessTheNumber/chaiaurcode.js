// random number generate karne ke liye.
// Decimal number ko integer me convert karne ke liye, "parseInt" ka use karege.
// console.log(parseInt(Math.random() * 100 + 1));

// Note:
//   Note:- " .value " ka use DOM me value lene ke liye hota hai. But se jo value aayegi vo "string" mai aayegi.

// Isliye hame "parseInt" ka use karege jisse value string se integer me convert hogi. And hum iska use decimal value ko integer me convert karne ke liye bhi karte hai.
// const userInput = document.querySelector("#guessField").value;
// ".value" lagake hum value le sakte hai, jo ki hamne BMICalculator wale project mai kiya tha.

const randomNumber = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");

let prevGuess = [];
let numGuess = 1;

let playGame = true;

/*
    function validateGuess(guess) {
    //
    }

    function checkGuess(guess) {
    //
    }

    function displayGuess(guess) {
    //
    }

    function displayMessage(guess) {
    //
    }

    function endGame() {
    //
    }

    function endGame() {
    //
    }

*/
if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

// Note:-  validateGuess(guess) -> isliye likha hai ki hum "guess" ko validate function mai pass karwa rahe hai.

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("PLease enter a valid number");
  } else if (guess < 1) {
    alert("PLease enter a number more than 1");
  } else if (guess > 100) {
    alert("PLease enter a  number less than 100");
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is TOOO low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is TOOO High`);
  }
}

// displayGuess mai value jo hold ki thi vo clean-up bhi ho rahi hai and , +1 bhi ho rahi hai.
// value khali ho rahi hai.
function displayGuess(guess) {
  userInput.value = "";
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess} `;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = ""; // value clean karne ke liye.
  userInput.setAttribute("disabled", ""); // key-value pair mai likhna hai.
  p.classList.add("button"); // p element mai button add karne ke liye use kiya.
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector("#newGame");
  newGameButton.addEventListener("click", function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = "";
    remaining.innerHTML = `${11 - numGuess} `;
    userInput.removeAttribute("disabled");
    startOver.removeChild(p);

    playGame = true;
  });
}

// Note:- playGame = true; playGame = false; -> is tarike ki value game devloped karte samay kafi kam aati hai, kiuki isi ki vajah se game play and stop hota hai.

// Jaruri nahi hai ki hum eventListener sirf button par bhi laga sakte hai, ese hum Element jese ki <h1>, <p> etc. par bhi laga sakte hai.
