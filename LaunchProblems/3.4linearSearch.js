//linearSearch input is the array you want to search and the target of the search

function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] === target) {
            return i
        }
        return -1
    }
}