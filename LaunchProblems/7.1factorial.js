//write a function that creates a factorial for an input

const factorial = (number) => {
    let product = 1

    for (let i = 1; i <= number; i++) {
        product *= i
    }

    return product
}

console.log('test: ', factorial(3))