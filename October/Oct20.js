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
