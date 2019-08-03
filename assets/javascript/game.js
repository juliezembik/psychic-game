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

//updates guessesLeftCounter global variable on the DOM
const updateGuessCounter = function() {
  document.querySelector("#guessesleft").innerHTML = guessesLeftCounter;
  console.log("guesscounter updated!");
};

//randomizes global variable random after every onkeydown
const randomizeLetters = function() {
  random = letters[Math.floor(Math.random() * letters.length)];
  console.log("random", random);
};

//receives onkeydown event key and pushes it into guessedLetters array with the ', ' join
//join() helps separate the letters with a comma and spaceing after
const updateGuessedLetters = function() {
  document.querySelector("#usedguesses").innerHTML = guessedLetters.join(", ");
  console.log("updateGuessedLetters works!");
};

//load everytime the page refreshes;
updateGuessCounter();
randomizeLetters();

//reset function resets everything back to its base setup,
function reset() {

  //guessedLetters become an empty array
  guessedLetters = [];
  
  //guessesLeftCounter returns to being 9
  guessesLeftCounter = 9;
  
  //updateGuessCounter will run and change to 9 on the DOM side
  //this needs to be after guessesLeftCounter or else it will not display properly
  updateGuessCounter();
  
  //randomizeLetters will run to update the global variable random for the next round
  randomizeLetters();
  
  //updateGuessedLetters will run to showcase the empty guessedLetters array.
  //this must be ran after guessedLetters is emptied or else it will display the previous key stroke from the last round.
  updateGuessedLetters();
}


//this is where the game starts during the onkeydown
//I chose onkeydown over onkeyup as I prefer the key that is pressed down so that it registered every pressed key
//definitely read up on onkeydown/onkeyup/onkeyrelease to know the difference

document.onkeydown = function(event) {
  
  //log here to make sure key works and displays the event
  console.log("onkeydown works!", event);

  //user guess takes in the event key and makes it a lowercase to prevent any capslock key presses from disrupting the game
  let userGuess = event.key.toLowerCase();

  //this takes userGuess input and pushes it into the array guessedLetters
  guessedLetters.push(userGuess);

  //updateGuessedLetters runs after the push to display the new input within the guessedLetters array
  //if this is not placed after the push, it will not display the user input properly and will be delayed until the next key press
  updateGuessedLetters();

  //this subtracts 1 from the guessesLeftCounter
  guessesLeftCounter--;

  //this runs after subtracting guessesLeftCounter is subtracted by 1, if placed before the subtraction
  //this will not update the DOM correctly until the next key input
  updateGuessCounter();


  //if else statement where if the userGuess does correctly match the random letter
  if (userGuess === random) {
    
    //this adds 1 to the global variable to log the win
    wins++;

    //this querySelector pushes the new win counter
    document.querySelector("#wins").innerHTML = wins;

    //alert shows up to let you know you won
    alert("Yay you win!");

    //this runs the reset function after you click on on the alert prompt
    reset();
  } else {

    //this displays a dialogue saying you did not click on the correct letter
    document.querySelector("#dialogue").innerHTML = "Hahah, try again!";
  }

  //if statement if guessLeftCounter reaches 0
  if (guessesLeftCounter === 0) {

    //updates the losses counter by 1
    losses++;
    console.log("Losses added");

    //updates the losses on the DOM side to be displayed correctly, if placed before losses++ it will not display properly until the next loss
    document.querySelector("#losses").innerHTML = losses;

    //this runs the reset function after loss
    reset();
  }
};
