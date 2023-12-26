// Given a word, create a function that returns the same word without any vowels

word = 'vegetable are great for your digestion'

let removeVowels = (string) => {
    return string.replace(/[aeiou]/gi, "")
}

console.log('test: ', removeVowels(word))