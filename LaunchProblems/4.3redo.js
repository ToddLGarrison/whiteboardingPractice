// Given a string representing a paragraph, write a function to return the frequency of each word in the paragraph

const string = 'One time I went to this one place and then that time I met that one guy'

const wordFrequency = (string) => {
    let wordFrequency = {}

    let lowercaseWords = string.toLowerCase().split(' ')

    for (let i = 0; i < lowercaseWords.length; i++) {
        wordFrequency[lowercaseWords[i]] = (wordFrequency[lowercaseWords[i]] || 0) + 1
    }

    return wordFrequency
}

console.log('test1:', wordFrequency(string))