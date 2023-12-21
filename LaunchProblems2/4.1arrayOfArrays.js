// Given an array of arrays, create a function that puts all elements in a single array 
// (without using the JS Array method .flat())

const arrayOfArrays = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

const flattenArray = (array) => {
    let theFlattenedArray = []

    for (let i = 0; i < array.length; i++) {
        theFlattenedArray = theFlattenedArray.concat(array[i])
    }

    return theFlattenedArray
}

console.log('test: ', flattenArray(arrayOfArrays));