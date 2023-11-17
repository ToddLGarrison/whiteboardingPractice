const readLineSync = require('readline-sync')

let word = 'monstera'
let splitWord = word.split('')

let incorrectGuessCount = 0
let guessedWord = Array(splitWord.length).fill('_')

function displayWord() {
    console.log('Word: ', guessedWord)
    console.log('Incorrect guess count: ', incorrectGuessCount)
    console.log('Remaining guesses: ', (6 - incorrectGuessCount))
}