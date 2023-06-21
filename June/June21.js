// Given a string s consisting of words and spaces, return the length of the last word in the string.
// A word is a maximal substring consisting of non-space characters only

//sudo

const phrase = "Hello World"

const lastWordLength = (string) => {
    let splitPhrase = string.trim().split(" ")
    let lastWord = splitPhrase[splitPhrase.length - 1]

    let lastWordLetterCount = lastWord.length

    return lastWordLetterCount
}