







































// //letters to be guessed
// const letters = ["r", "u", "s"];

// // guessed letters will be pushed into this empty array
// let guessedLetters = [];

// //global variable that will take in the picked letter from randomizeLetters function
// let random = null;

// // max guesses counter
// let guessesLeftCounter = 9;

// //win and losses counter
// let wins = 0;
// let losses = 0;

// //function for displaying guess counter on DOM
// const updateGuessCounter = function() {
//   document.querySelector("#guessesleft").innerHTML = guessesLeftCounter;
// };

// //function for randomizing array of letters to be guessed
// const randomizeLetters = function() {
//   random = letters[Math.floor(Math.random() * letters.length)];
// };

// //function for taking in the users guesses and joining it in guessLetters array
// const updateGuessedLetters = function() {
//   document.querySelector("#usedguesses").innerHTML = guessedLetters.join(", ");
// };

// //runs functions to start game
// randomizeLetters();
// updateGuessCounter();

// const reset = function() {
//   guessesLeftCounter = 9;
//   guessedLetters = [];
//   updateGuessCounter();
//   randomizeLetters();
//   updateGuessedLetters();
// };

// document.onkeydown = function(event) {
//   console.log("I work");

//   guessesLeftCounter--;

//   let userGuess = event.key.toLowerCase();

//   guessedLetters.push(userGuess);
//   updateGuessCounter();
//   updateGuessedLetters();

//   if (userGuess === random) {
//     wins++;
//     document.querySelector("#wins").innerHTML = wins;
//     alert("Yay you win!");
//     reset();
//   } else if (userGuess !== random) {
//     document.querySelector("#dialogue").innerHTML = "Hahah, try again!";
//   } else {
//     document.querySelector("#dialogue").innerHTML =
//       "Why are you not picking a letter? :(";
//   }

//   if (guessesLeftCounter === 0) {
//     losses++;
//     document.querySelector("#losses").innerHTML = losses;
//     reset();
//   }
// };
