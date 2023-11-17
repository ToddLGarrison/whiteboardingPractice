const readLineSync = require('readline-sync')

let word = 'arise'
let splitWord = word.split('')

let guessedWord = Array(splitWord.length).fill('_')
let incorrectGuess = 0

function displayWord() {
    console.log('Word: ', guessedWord)
    console.log('Incorrect guesses: ', incorrectGuess)
}

function checkGuess() {

    const guessPrompt = readLineSync.keyIn('Please guess a single lowercase letter: ', { limit: 'abcdefghijklmnopqrstuvwxyz' }).toLocaleLowerCase()

    

    checkGuess()
}

displayWord()
checkGuess()
