// Given an array of arrays, create a function that puts all elements in a single array 
// (without using the JS Array method .flat())

const arrayOfArrays = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

const oneArray = (array) => {
    let oneTrueArray = []

    for(let i = 0; i < array.length; i++) {
        oneTrueArray = oneTrueArray.concat(array[i])
    }

    return oneTrueArray
}

console.log('test ', oneArray(arrayOfArrays))