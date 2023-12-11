const readLineSync = require('readLine-sync');

//create word
let word = 'avocado'

//split word
let splitWord = word.split('')

//create blank line word to fill in
let guessWord = Array(splitWord.length).fill('_')

//create trackers
let guessCounter = 0
let incorrectCounter = 0
let maxIncorrectGuess = 6
let incorrectLetters = []


//display results

const displayResults = () => {
    console.log('Word ', guessWord.join(' '))
    console.log('Number of incorrect guesses: ', incorrectCounter)
    console.log('Number of guesses remaining:', maxIncorrectGuess - incorrectCounter)
}

//create game

const hangmanGame = () => {
    //create prompt
    let guess = readLineSync.keyIn('Please guess a letter, enter as a lowercase letter', { limit: 'abcdefghijklmnopqrstuvwxyz'}).toLowerCase()

    // check guess against letters
    if(splitWord.includes(guess)) {
        for(let i = 0; i < splitWord.length; i++) {
            if(splitWord[i] === guess) {
                guessWord[i].push(guess)
            }
        }
    } else {
        console.log('Incorrect guess chump! Word does not include: ', guess)
        incorrectLetters.push(guess)
        incorrectCounter++
    }

    //handle incorrect guesses

    //handle winning

    //handle losing


    //call for continuous guess
    hangmanGame()
}



displayResults()
hangmanGame()
