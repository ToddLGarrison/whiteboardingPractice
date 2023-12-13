// Given an array of integers, create a function that returns true 
// if all numbers found in the array are even, otherwise return false

const arrayEven = [2, 4, 6, 8]
const arrayBoth = [1, 3, 6, 8]

const areEven = (array) => {
    return array.every((number) => {
        return number % 2 === 0
    })
}

areEven(arrayEven)
areEven(arrayBoth)