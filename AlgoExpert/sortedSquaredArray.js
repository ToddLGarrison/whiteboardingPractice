function sortedSquaredArray(array) {
    let squaredArray = new Array(array.length).fill(0);

    for (let i = 0; i < array.length; i++) {
        let value = array[i]
        squaredArray[i] = value * value 
    }
    
    squaredArray.sort((a, b) => a - b)

    return squaredArray
}

// let array = [1, 2, 3, 5, 6, 8, 9]
let array = [1, 4, 9, 16, 25]
console.log(sortedSquaredArray(array))