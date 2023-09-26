// // Write a function that accepts a string, and returns the same string with all even indexed 
// characters in each word upper cased, and all odd indexed characters in each word lower cased. 
// The indexing just explained is zero based, so the zero-ith index is even, therefore that character 
// should be upper cased and you need to start over for each word.

// // The passed in string will only consist of alphabetical characters and spaces(' '). 
// Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').

//SUDO Attempt
function toWeirdCase(string){
    let weirdCase = ""

    let splitString = string.split(" ")

    for (let i = 0; i < splitString.length; i++){

        if (splitString[i] % 2 === 0){
            weirdCase.push(splitString[i].toUpperCase())
        } else {
            weirdCase.push(splitString[i])
        }

    }

    return weirdCase
}

//Solution
function toWeirdCase(string){
    let words = string.split(' ')

    function toggleCase(word) {
        let result = ''

        for (let i = 0; i < word.length; i++){
            if (i % 2 ===0){
                result += word[i].toUpperCase()
            } else {
                result += word[i].toLowerCase()
            }
        }
        return result
    }
    weirdString = words.map(toggleCase)

    return weirdString.join(' ')
}


// Write a program that will calculate the number of trailing zeros in a factorial of a given number.

function zeros (n) {
    let count = 0
    let dividend = n

    while (dividend > 0){
        dividend = Math.floor(dividend / 5)
        count += dividend
    }

    return count
}

// Given a string with the weights of FFC members in normal order can you give this string ordered 
//by "weights" of these numbers?

// Example:
// "56 65 74 100 99 68 86 180 90" ordered by numbers weights becomes: 

// "100 180 90 56 65 74 68 86 99"

//Solution

function orderWeight(string) {
    const weightArray = string.split(' ')

    function customSort(a, b) {
        const sumA = a.split('').reduce((acc, digit) => acc + parseInt(digit), 0)
        const sumB = b.split('').reduce((acc, digit) => acc + parseInt(digit), 0)

        if (sumA === sumB){
            return a.localeCompare(b)
        }
        return sumA - sumB
    }

    sortedWeights = weightArray.sort(customSort)
    return sortedWeights.join(' ')
}