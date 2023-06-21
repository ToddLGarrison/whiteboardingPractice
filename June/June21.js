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


// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".

