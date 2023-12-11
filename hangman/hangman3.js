const readLineSync = require('readLine-sync');

//create word
let word = 'avocado'

//split word
let splitWord = word.split('')

//create blank line word to fill in
let guessWord = Array(splitWord.length).fill('_')

//create trackers
let incorrectCounter = 0
let maxIncorrectGuess = 6
let incorrectLetters = []


//display results

const displayResults = () => {
    console.log('Word ', guessWord.join(' '))
    console.log('Number of incorrect guesses: ', incorrectCounter)
    console.log('Number of guesses remaining:', maxIncorrectGuess - incorrectCounter)
    console.log('Incorrect letters: ', incorrectLetters)
}

//create game

const hangmanGame = () => {
    //create prompt
    let guess = readLineSync.keyIn('Please guess a letter, enter as a lowercase letter: ', { limit: 'abcdefghijklmnopqrstuvwxyz'}).toLowerCase()

    // check guess against letters
    if(splitWord.includes(guess)) {
        for(let i = 0; i < splitWord.length; i++) {
            if(splitWord[i] === guess) {
                guessWord[i] = guess
            }
        }
        //handle incorrect guesses
    } else {
        console.log('Incorrect guess chump! Word does not include: ', guess)
        incorrectLetters.push(guess)
        incorrectCounter++
    }

    //handle winning
    if(guessWord.join('') === word) {
        console.log('You sexy animal! You won!', word)
        return
    } else {
        displayResults()
    }

    //handle losing
    if(incorrectCounter >= maxIncorrectGuess){
        console.log('You blew it! You lose, you get nothing! Good day sir. I SAID GOOD DAY!', word)
        return
    }


    //call for continuous guess
    hangmanGame()
}



displayResults()
hangmanGame()
