// Given a string representing a sentence, 
// write a method that returns the longest word. 
// If there’s a tie, output the longest word that’s found first

const inputString = "David once ate an entire turkey and it was the wildest thing I had ever seen";

const longestWord = (inputString) => {
    let longestWord = ''

    let arrayOfWords = inputString.split(' ');

    for(let i = 0; i < arrayOfWords.length; i++) {
        if (arrayOfWords[i].length > longestWord.length) {
            longestWord = arrayOfWords[i];
        }
    }

    return longestWord
}