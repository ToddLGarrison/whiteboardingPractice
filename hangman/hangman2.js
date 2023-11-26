const readLineSync = require('readLine-sync');

let word = 'mighty'
let splitWord = word.split('')
let incorrectGuessCount = 0
let maxIncorrectGuess = 6
let incorrectLetters = []

//create blank guessedWord 

let guessedWord = Array(splitWord.length).fill('_')

//create display for after each guess

function displayResults () {
    console.log('Word: ', guessedWord.join(' '))
    console.log("Number of incorrect guesses ", incorrectGuessCount)
    console.log('Number of incorrect guesses remaining', (maxIncorrectGuess - incorrectGuessCount))
    console.log('Incorrect letters: ', incorrectLetters)
}

//create the game

function hangman() {
    //set up guess for node
    let guess = readLineSync.keyIn('Please guess a letter, enter as a lowercase letter: ', { limit: 'abcdefghijklmnopqrstuvwxyz'}).toLowerCase()

    //check guess against letters
    if (splitWord.includes(guess)) {
        //loop to push guess letter into correct index
        for (let i = 0; i < splitWord.length; i++) {
            if(splitWord[i] === guess) {
                guessedWord[i] = guess
            }
        } 
        //set handle incorrect guess
    } else {
        console.log('Incorrect, word does not contain: ', guess)
        incorrectLetters.push(guess)
        incorrectGuessCount++
    }

    //handle winning
    if(guessedWord.join('') === word) {
        console.log('Congratulations you have guessed the word: ', word)
        return
    } else {
        displayResults()
    }

    //handle losing
    if(incorrectGuessCount >= maxIncorrectGuess) {
        console.log('You lose')
        return
    }

    //call for continuous play
    hangman()
}

displayResults()
hangman()