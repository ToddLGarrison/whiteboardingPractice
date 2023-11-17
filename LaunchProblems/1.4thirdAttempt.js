// Given an array of unsorted integers, 
// return a sorted array with the integers list from lowest to highest. 
// No .sort

const unsortedArray = [4, 9, 10, 3, 9, 2, 1,8,7]

const sortInts = (array) => {
    let sortedArray = [...array]

    for (let i = 0; i < sortedArray.length; i++) {
        for (let j = 0; j < sortedArray.length - i - 1; j++) {
            if(sortedArray[j] > sortedArray[j + 1]) {
                let temp = sortedArray[j]
                sortedArray[j] = sortedArray[j + 1]
                sortedArray[j + 1] = temp
            }
        }
    }

    return sortedArray
}