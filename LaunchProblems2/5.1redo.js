// Given a word, create a function that returns the same word without any vowels

string = 'vegetable are great for your digestion'

function removeVowels(word) {
    return word.replace(/[aeuio]/g, "")
}

console.log('test: ', removeVowels(string));