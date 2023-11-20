//linearSearch input is an array you want to search and the target of the search

function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] === target) {
            return i
        }
    }
    return -1
}

console.log('test1:', linearSearch([1,2,3,4,5,6], 4))