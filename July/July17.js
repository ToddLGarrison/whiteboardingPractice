// Complete the method/function so that it converts dash/underscore 
// delimited words into camel casing.
// The first word within the output should be capitalized only if 
// the original word was capitalized (known as Upper Camel Case, 
// also often referred to as Pascal case). 
// The next words should be always capitalized.

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"

// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

// "The_Stealth-Warrior" gets converted to "TheStealthWarrior"

const toCamelCase = (str) => {
    return str.replace(/[-_](.)/g, (_, letter) => letter.toUpperCase())
    }

// A pangram is a sentence that contains every single letter of the alphabet 
// at least once. For example, the sentence 
// "The quick brown fox jumps over the lazy dog" 
// is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. 
// Return True if it is, False if not. Ignore numbers and punctuation.

const isPangram = (string) => {
    let alphabetSet = new Set('abcdefghijklmnopqrstuvwxyz')
    let lowerCaseString = string.toLowerCase().replace(/[^a-z]/g, '')

    for (const character of lowerCaseString) {
        alphabetSet.delete(character);
        if(alphabetSet.size === 0 ){
            return true
        }
    }
    return false
}