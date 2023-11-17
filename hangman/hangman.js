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

    const playerGuess = readLineSync.keyIn('Please guess a single lowercase letter: ', { limit: 'abcdefghijklmnopqrstuvwxyz' }).toLocaleLowerCase()

    if (splitWord.includes(playerGuess)) {
        for (let i = 0; i < splitWord.length; i++) {
            if (splitWord[i] === playerGuess) {
                guessedWord[i] = playerGuess
            }
        }
    } else {
        incorrectGuess++;
    }

    if (guessedWord.join('') === word) {
        console.log('Congratulations! You guessed the correct word', word)
        return
    } else {
        displayWord()
    }

    if (incorrectGuess >= 6) {
        console.log('Too many incorrect guesses, you lose. The correct word was: ', word)
        return
    }

    checkGuess()
}

displayWord()
checkGuess()
