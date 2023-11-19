// Given a word, create a function that returns the same word without any vowels

word = 'vegetable'

const removeVowels = (string) => {
    console.log(string.split('').filter(letter => !['a', 'e', 'i', 'o', 'u'].includes(letter)).join(''))
    return string.split('').filter(letter => !['a', 'e', 'i', 'o', 'u'].includes(letter)).join('');
}

removeVowels(word)