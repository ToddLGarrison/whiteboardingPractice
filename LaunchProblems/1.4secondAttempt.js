// Given an array of unsorted integers, 
// return a sorted array with the integers list from lowest to highest. 
// No .sort

const unsortedArray = [4, 9, 10, 3, 9, 2, 1,8,7]

const sortedInts = (array) => {
    let sortedNumbers = [...array]

    for(let i = 0; i < sortedNumbers.length; i++){
        for(let j = 0; j < sortedNumbers.length - 1 - i; j++){
            if (sortedNumbers[j] > sortedNumbers[j + 1]) {
                let tempNum = sortedNumbers[j]
                sortedNumbers[j] = sortedNumbers[j + 1]
                sortedNumbers[j + 1] = tempNum
            }
        }
    }

    return sortedNumbers
}