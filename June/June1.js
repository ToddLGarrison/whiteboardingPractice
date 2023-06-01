// Given an array of integers, return a list of all odd numbers found in the list

//sudo code
const returnOdd = function(array) {
    let oddNums = []

    for ( let i = 0; i < array; i++) {
        if (x % 2 !== 0) {
            return oddNums.push(arrayNumber)
        } else {
            return nothing
        }
    }

    return oddNums
}

//SOLUTION

function getOddNumbers(array) {
    return array.filter(number => number % 2 !== 0)
}

//OR

function getOddNumbers(arr) {
    const oddNumbers = [];
    
        for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            oddNumbers.push(arr[i]);
        }
        }
    
        return oddNumbers;
    }

// Given an array of integers, return a new list that doubles each value

//Sudo code

function doubleNumbers(array) {
    let numbersdoubled = []
    for(let i = 0; i < array.length; i++){
        let number = array[i]*2
        numbersdoubled.push(number)
    }
    return numbersdoubled
}
// Given a string representing a sentence, write a method that returns 
    // the longest word. If there’s a tie, output the longest word that’s found first

//Sudo code

function findLongestWord(stringArray) {
    let longestWord = []

    for(let i = 0; i < string.length; i++){
        if(stringArray[a].length > stringArray[b].length){
            longestWord.push(stringArray[a])
        }
    }
    return longestWord
}

//SOLUTION

function findLongestWord(sentence) {
    const words = sentence.split(" ");
    let longestWord = "";
    
        for (let i = 0; i < words.length; i++) {
        const currentWord = words[i];
        if (currentWord.length > longestWord.length) {
            longestWord = currentWord;
        }
        }
    
        return longestWord;
    }