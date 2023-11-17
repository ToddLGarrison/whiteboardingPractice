const readLineSync = require('readline-sync')

let word = 'monstera'
let splitWord = word.split('')

let incorrectGuessCount = 0
let guessedWord = Array(splitWord.length).fill('_')