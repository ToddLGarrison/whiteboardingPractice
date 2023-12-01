// Given an array of integers, return a new list that doubles each value

let array = [1, 2, 3, 4, 5, 6, 7];

const doubleNumbers = (array) => {
    let doubledNumbers = []

    for(let i = 0; i < array.length; i++) {
        doubledNumbers.push(array[i] * 2);
    }

    return doubledNumbers
}

console.log('Test ', doubleNumbers(array))