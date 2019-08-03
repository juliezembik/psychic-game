//letters to be guessed
const letters = ["r", "u", "s"];

// guessed letters will be pushed into this empty array
let guessedLetters = [];

//global variable that will take in the picked letter from randomizeLetters function
let random = null;

// max guesses counter
let guessesLeftCounter = 9;

//win and losses counter
let wins = 0;
let losses = 0;

const updateGuessCounter = function() {
  document.querySelector("#guessesleft").innerHTML = guessesLeftCounter;
  //   console.log("guesscouter updated!");
};

const randomizeLetters = function() {
  random = letters[Math.floor(Math.random() * letters.length)];
  console.log("random", random);
};

const updateGuessedLetters = function() {
  document.querySelector("#usedguesses").innerHTML = guessedLetters.join(", ");
  console.log("updateGuessedLetters works!");
};

//runs functions to start game
randomizeLetters();
updateGuessCounter();

const reset = function() {
  guessesLeftCounter = 9;
  guessedLetters = [];
  updateGuessCounter();
  randomizeLetters();
  updateGuessedLetters();
};

document.onkeydown = function(event) {
  console.log("onkeydown works!", event);

  let userGuess = event.key.toLowerCase();

  guessedLetters.push(userGuess);
  console.log("push worked");
  updateGuessedLetters();
  guessesLeftCounter--;
  updateGuessCounter();

  if (userGuess === random) {
    wins++;
    document.querySelector("#wins").innerHTML = wins;
    alert("Yay you win!");
    reset();
  } else {
    document.querySelector("#dialogue").innerHTML = "Hahah, try again!";
  }

  if (guessesLeftCounter === 0) {
    losses++;
    console.log("Losses added");
    document.querySelector("#losses").innerHTML = losses;
    reset();
  }
};
