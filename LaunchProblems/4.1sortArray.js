// Given an array of numbers, write a function that will return whether the array is sorted (low-to-high) or unsorted

arraySorted = [1, 2, 3, 4]
arrayUnsorted = [5, 2, 3, 12]

const sortCheck = (array) => {
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] > array[i + 1]) {
            return false
        }
    }             
    return true
}

console.log('test1:', sortCheck(arraySorted));
console.log('test2:', sortCheck(arrayUnsorted));