// Given a word, create a function that returns the same word without any vowels

word = 'vegetable'

const removeVowels = (string) => {
    console.log(string.replace(/[aeiou]/gi,''))
    return string.replace(/[aeiou]/gi,'')
}

removeVowels(word)