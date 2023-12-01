// Given a string representing a sentence, 
// write a method that returns the longest word. 
// If there’s a tie, output the longest word that’s found first

const inputString = "Todd once ate an entire turkey and it was the wildest thing I had ever seen";

const longestWord = (string) => {
    let longestWord = ''
    let splitWords = string.split(' ')

    for (let i = 0; i < splitWords.length; i++) {
        if(splitWords[i].length > longestWord.length) {
            longestWord = splitWords[i]
        }
    }

    return longestWord

}

console.log('test', longestWord(inputString))