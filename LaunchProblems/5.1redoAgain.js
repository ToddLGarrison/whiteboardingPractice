// Given an array, write a function that returns the list of elements that occur more than once

const array = [1, 1, 1, 2, 2, 3, 4, 5, 6, 6]

const moreThanOnce = (array) => {
    let frequencyMap = {}
    let frequencyArray = []

    for (const number of array) {
        frequencyMap[number] = (frequencyMap[number] || 0) + 1
    }

    for (const number in frequencyMap) {
        if (frequencyMap[number] > 1) {
            frequencyArray.push(number)
        }
    }

    return frequencyArray
}

console.log('test:', moreThanOnce(array))