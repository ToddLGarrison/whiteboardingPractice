// Given a string representing a paragraph, write a function to return the frequency of each word in the paragraph

const string = 'One time I went to this one place and then that time I met that one guy'

const wordFrequency = (string) => {
    let wordCount = {}

    let splitString = string.toLowerCase().split(' ')

    for (let i = 0; i < splitString.length; i++) {
        //push word and count to wordCount object to create key value pairs
        if(!wordCount.hasOwnProperty(splitString[i])) {
            wordCount[splitString[i]] = 1            
        } else {
            wordCount[splitString[i]]++
        }
    }

    return wordCount
}

console.log('test1', wordFrequency(string))