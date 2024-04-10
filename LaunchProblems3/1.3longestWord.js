// Given a string representing a sentence, 
// write a method that returns the longest word. 
// If there’s a tie, output the longest word that’s found first

const inputString = "Todd once ate an entire turkey and it was the wildest thing I had ever seen";

function longestWord(string) {
    let longestWord = ''
    let splitArray = string.split(" ");

    for (let i = 0; i < splitArray.length; i++) {
        if (splitArray[i].length > longestWord.length) {
            longestWord = splitArray[i];
        }
    }

    return longestWord;
}

console.log(longestWord(inputString));