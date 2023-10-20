// Given an array of integers, where all elements but one occur twice, find the unique element.

function lonelyinteger(a) {
    let soloNumber = 0

    for (let i = 0; i < a.length; i++) {
        soloNumber ^= a[i]
    }
    return soloNumber
}

//Given a square matrix, calculate the absolute difference between the sums of its diagonals.

function diagonalDifference(arr) {
    let leftDiagonal = 0
    let rightDiagonal = 0


    for (let i = 0; i < arr.length; i++) {
        leftDiagonal += arr[i][i]
        rightDiagonal += arr[i][arr.length - 1 - i]
    }

    let diagonalDifference = Math.abs(leftDiagonal - rightDiagonal)

    return (diagonalDifference)

}

// Given a list of integers, count and return the number of times each value appears as an array of integers.

function countingSort(arr) {
    const frequencyArray = new Array(100).fill(0);

    // Iterate through the input array
    for (let i = 0; i < arr.length; i++) {
        const currentNumber = arr[i];

        // For each number in the input array, iterate through the frequency array
        for (let j = 0; j < frequencyArray.length; j++) {
            if (j === currentNumber) {
                frequencyArray[j]++;
            }
        }
    }

    return frequencyArray;
}

//OF

function countingSort(arr) {
    const frequencyArray = new Array(100).fill(0)

    for (let i = 0; i < arr.length; i++) {
        frequencyArray[arr[i]]++
    }
    return frequencyArray
}