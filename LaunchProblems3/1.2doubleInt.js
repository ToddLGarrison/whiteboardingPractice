// Given an array of integers, return a new list that doubles each value

let array = [1, 2, 3, 4, 5, 6, 7];

function doubleInt(array) {
    let doubledArray = [];

    for(let i = 0; i < array.length; i++) {
        doubledArray.push(array[i] * 2)
    }

    return doubledArray
}

console.log(doubleInt(array));