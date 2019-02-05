var inquire = require("inquirer");
var Word = require("./word");

var wordsArr = ["apple", "banana", "mango"];

// returns a random integer from 0 to wordsArr's length
// Randomly selects a word and uses the Word constructor to store it
var remainingGuess = 10;
var randomNum = Math.floor(Math.random() * wordsArr.length); 
var word = new Word();
word.addArr(wordsArr[randomNum]);





// Prompts the user for each guess and keeps track of the user's remaining guesses


var wordGuess = function(){
    if(remainingGuess>0){
        console.log("==========================================")
        console.log("Remaining Guess : "+remainingGuess)+"\n";
        inquire.prompt([
            {
                name: "guess",
                message: "Guess a Letter!"
            }
        ])
        .then(answers => {
            word.guessWord(answers.guess);
            word.displayWord();
            remainingGuess--;
            wordGuess();
        });
        
    } else {
        console.log("You lose, New word game will be started");
        
    }
}

wordGuess();