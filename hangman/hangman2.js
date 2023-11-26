let readLineSync = require('readLineSync');

let word = 'Mighty'
let splitWord = word.split('')
let incorrectGuessCount = 0



//create blank guessedWord 

let guessedWord = Array(splitWord.length).fill('_')

