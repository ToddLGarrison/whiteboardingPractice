// Given an array of integers, return a list of all odd numbers found in the list

let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14]

const oddNumbers = (array) => {
    let oddNumbers = []

    for (let i = 0; i < array.length; i++) {
        if(array[i] % 2 !== 0) {
            oddNumbers.push(array[i])
        }
    }

    return oddNumbers
}

console.log("Test 1", oddNumbers(numbers))