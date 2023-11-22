// Given an array, write a function that returns the list of elements that occur more than once

const array = [1, 1, 1, 2, 2, 3, 4, 5, 6, 6]

const moreThanOnce = (array) => {
    let multiNumbers = []

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            if (i !== j && array[i] === array[j]) {
                multiNumbers.push(array[i])
                return
            }
        }
    }
    
    return multiNumbers
}

console.log('Test 1:', moreThanOnce(array))