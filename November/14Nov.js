//hangman
//get correct spaces in the terminal
let correctWord = 'testing'

let blanks = correctWord.length
let blankLetters = []
let guessesRemaining = 7
let guessedLetters = []


for (let i = 0; i < blanks; i++) {
    blankLetters.push('_')
}

