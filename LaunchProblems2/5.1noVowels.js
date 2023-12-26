// Given a word, create a function that returns the same word without any vowels

word = 'vegetable'

let removeVowels = (string) => {
    return string.replace(/[aeiou]/g, "")
}

console.log('test: ', removeVowels(word))