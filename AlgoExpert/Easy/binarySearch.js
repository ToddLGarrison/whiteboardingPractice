function binarySearch(array, target) {
    for(let i = 0; i < array.length; i++) {
        if(array[i] === target) {
            return i
        }
    }
    return -1
}

const array = [0, 1, 21, 33, 45, 45, 61, 71, 72, 73]

console.log(binarySearch(array, 33))