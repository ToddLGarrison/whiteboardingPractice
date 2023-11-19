// Given an array of arrays, create a function that puts all elements in a single array 
// (without using the JS Array method .flat())

const arrayOfArrays = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

const createOneArray = (arrayOfArrays) => {
    let theOneTrueArray = []

    for (let i = 0; i < arrayOfArrays.length; i++) {
        theOneTrueArray = theOneTrueArray.concat(arrayOfArrays[i])
    }

    console.log(theOneTrueArray)
    return theOneTrueArray
}

createOneArray(arrayOfArrays)