//Write a function that will output the indices of the two consecutive elements that have the highest max sum 
//in an input array of integers (e.g., maxPair([0, 5, 5, 2]) will return (1, 2)). 
//In the case of a tie, the method should return the leftmost pair (e.g., maxPair([0, 4, 3, 1, 2, 3, 4, 0]) will return (1, 2)).

function maxPair(arr) {
    let maxSum = Number.NEGATIVE_INFINITY;
    let maxIndices = [];
    
    for (let i = 0; i < arr.length - 1; i++) {
        const sum = arr[i] + arr[i + 1];
        if (sum > maxSum) {
            maxSum = sum;
            maxIndices = [i, i + 1];
        }
    }

    return maxIndices;
}