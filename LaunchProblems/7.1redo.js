//create a factorial function

const factorial = (integer) => {
    let result = 1

    for (let i = 1; i <= integer; i++) {
        result *= i
    }
    return result
}

console.log('test: ', factorial(8))