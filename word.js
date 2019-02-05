var Letter = require("./letter");


var Word = function(){
    this.letterArr = [];
    this.displayWord = function(){
        var displayArr = [];
        for(var i=0; i<this.letterArr.length; i++){
            displayArr.push(this.letterArr[i].returnsLetter());
        }
        console.log(displayArr.join(" "));
    }
    this.guessWord = function(str){
        //var guessCheck = false;
        for(var i=0; i<this.letterArr.length; i++){
            if(this.letterArr[i].check(str)){
                var guessCheck = true;
            };
        }
        if(guessCheck){
            console.log("CORRECT !!!")
        }else {
            console.log("INCORRECT !!!")
        }
    }
    this.addArr = function(wordFromIndexJS){
        for(var i=0; i<wordFromIndexJS.length; i++){
            this.letterArr.push(new Letter(wordFromIndexJS[i]));
        }
    }
}

// An array of new Letter objects representing the letters of the underlying word
// A function that returns a string representing the word. This should call the function on each letter object (the first function defined in Letter.js) 
//that displays the character or an underscore and concatenate those together.
// A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in Letter.js) v


module.exports = Word;

// var test = new Word();
// test.addArr("banana");
// console.log(test.letterArr);
// console.log(test.displayWord());