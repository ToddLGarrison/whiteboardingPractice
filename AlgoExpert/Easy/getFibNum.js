// function getNthFib(n) {
//     let lastTwo = [0, 1]
//     let counter = 3

//     while (counter <= n) {
//         console.log(lastTwo)
//         const nextFib = lastTwo[0] + lastTwo[1]
//         lastTwo[0] = lastTwo[1]
//         lastTwo[1] = nextFib
//         counter++
//     }
//     return n > 1 ? lastTwo[1] : lastTwo[0]
// }

// simple attempt but slower

// function getNthFib(n) {
//     if (n === 2) {
//         return 1
//     } else if (n === 1) {
//         return 0
//     } else {
//         return getNthFib(n - 1) + getNthFib(n - 2)
//     }
// }

//memoize solution

function getNthFib(n) {
    let  memoize = {
        1: 0,
        2: 1
    }

    if (n in memoize) {
        return memoize[n]
    } else {
        memoize[n] = getNthFib(n -1, memoize) + getNthFib(n - 2, memoize)
        return memoize[n]
    }
}

console.log(getNthFib(6))