// Given an array of integers, where all elements but one occur twice, find the unique element.

function lonelyinteger(a) {
    let soloNumber = 0

    for (let i = 0; i < a.length; i++) {
        soloNumber ^= a[i]
    }
    return soloNumber
}