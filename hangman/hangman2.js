const readLineSync = require('readLine-sync');

let word = 'mighty'
let splitWord = word.split('')
let incorrectGuessCount = 0
let maxIncorrectGuess = 6

//create blank guessedWord 

let guessedWord = Array(splitWord.length).fill('_')

//create display for after each guess

function displayResults () {
    console.log(guessedWord)
    console.log("Number of incorrect guesses", incorrectGuessCount)
    console.log('Number of incorrect guesses remaining', maxIncorrectGuess - incorrectGuessCount)
}

//create the game

function hangman() {
    let guess = readLineSync.

}

hangman()

displayResults()
