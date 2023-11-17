const readLineSync = require('readline-sync')

let word = 'monstera'
let splitWord = word.split('')

let incorrectGuessCount = 0
let guessedWord = Array(splitWord.length).fill('_')
let incorrectLetters = []

function displayWord() {
    console.log('Word: ', guessedWord)
    console.log('Incorrect guess count: ', incorrectGuessCount)
    console.log('Remaining guesses: ', (6 - incorrectGuessCount))
}

function checkGuess() {
    let guess = readLineSync.keyIn('Please enter your guess as a single lowercase letter', { limit: 'abcdefghijklmnopqrstuvwxyz'}).toLocaleLowerCaseString()

        if (splitWord.includes(guess)){
            for (let i = 0; i < splitWord.length; i++) {
                if(splitWord[i] === guess) {
                    guessedWord[i] = guess
                }
            }
        } else {
            console.log('Wrong. Word does not contain: ', guess)
            incorrectGuessCount++
        }

        

        checkGuess()
    }


displayWord()
checkGuess()