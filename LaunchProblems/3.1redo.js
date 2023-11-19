// Given an array of arrays, create a function that puts all elements in a single array 
// (without using the JS Array method .flat())

const arrayOfArrays = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

const oneTrueArray = (array) => {
    console.log([].concat(...array))
    return [].concat(...array)
}

oneTrueArray(arrayOfArrays)