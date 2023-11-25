//check if input number is a prime number

const primeNumber = (inputNumber) => {
    for (let i = 2; i < inputNumber / 2; i++) {
        if (inputNumber % 2 === 0) {
            return false
        }
    }
    return true
}

console.log('test: ', primeNumber(21))