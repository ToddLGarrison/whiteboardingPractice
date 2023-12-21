// Given an array of arrays, create a function that puts all elements in a single array 
// (without using the JS Array method .flat())

const arrayOfArrays = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

function flattenArray(array) {
    let combinedArray = []

    for (let i = 0; i < array.length; i++) {
        combinedArray = combinedArray.concat(array[i])
    }

    return combinedArray
}

console.log('test: ', flattenArray(arrayOfArrays));