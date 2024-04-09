// function binarySearch(array, target) {
//     for(let i = 0; i < array.length; i++) {
//         if(array[i] === target) {
//             return i
//         }
//     }
//     return -1
// }

//recursive attempt 1
function binarySearch(array, target) {
    return binarySearchHelper(array, target, 0, array.length - 1)
}

//helper function 1
function binarySearchHelper(array, target, left, right) {
    if (left > right) return -1

    const middle = Math.floor((left + right) / 2)
    const potentialMatch = array[middle]

    if(target === potentialMatch) {
        return middle
    } else if (target < potentialMatch) {
        return binarySearchHelper(array, target, left, middle - 1)
    } else {
        return binarySearchHelper(array, target, middle + 1, right)
    }
}


const array = [0, 1, 21, 33, 45, 45, 61, 71, 72, 73]

console.log(binarySearch(array, 33))