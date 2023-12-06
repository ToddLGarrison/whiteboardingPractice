// Given an array of unsorted integers, 
// return a sorted array with the integers list from lowest to highest. 
// No .sort

const unsortedArray = [4, 9, 10, 3, 9, 2, 1,8,7]

const sortThisArray = (array) => {
    let sortedArray = array

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1; j++) {
            if (array[j] > array[j + 1]) {
                let placeHolder = array[j]
                array[j] = array[j + 1]
                array[j + 1] = placeHolder
            }
        }
    }

    return sortedArray
}

console.log('test:', sortThisArray(unsortedArray) )