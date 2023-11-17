const readLineSync = require('readline-sync')

let word = 'monstera'
let splitWord = word.split('')

let guessedWord = Array(splitWord.length).fill('_')
let incorrectGuessCount = 0
let incorrectLetters = []

function displayWord() {
    console.log('Word: ', guessedWord.join(' '))
    console.log('Incorrect guess count: ', incorrectGuessCount)
    console.log('Remaining incorrect guesses: ', (6 - incorrectGuessCount))
}

function checkGuess() {
    let guess = readLineSync.keyIn('Please enter your guess as a single lowercase letter: ', { limit: 'abcdefghijklmnopqrstuvwxyz'}).toLowerCase()

        if (splitWord.includes(guess)){
            for (let i = 0; i < splitWord.length; i++) {
                if(splitWord[i] === guess) {
                    guessedWord[i] = guess
                }
            }
        } else {
            incorrectLetters.push(guess)
            console.log('Wrong. Word does not contain: ', guess)
            incorrectGuessCount++
        }

        if (guessedWord.join('') === word) {
            console.log('Congratulations, you guessed the word')
            return
        } else {
            displayWord()
        }

        if (incorrectGuessCount > 6){
            console.log('You lose. Too many incorrect guesses')
            return
        }

        checkGuess()
    }


displayWord()
checkGuess()