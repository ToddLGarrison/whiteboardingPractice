// Given an array of arrays, create a function that puts all elements in a single array 
// (without using the JS Array method .flat())

const arrayOfArrays = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

function flattenArray(array) {
    let oneArray = []

    for (let i = 0; i < array.length; i++) {
        // for (let j = 0; j < array[i].length; j++) {
        //     oneArray.push(array[i][j])
        // }
        oneArray = oneArray.concat(array[i])
    }
    return oneArray
}

console.log(flattenArray(arrayOfArrays));   