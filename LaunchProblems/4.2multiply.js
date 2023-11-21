// Write a multiplication function without using the * operation. 
// Determine what arguments you think this function will accept. 
// The return of the function should be the product of the function

const number1 = 9
const number2 = 8

const multiplication = (number1, number2) => {
    let total = 0

    for (let i = 0; i < number2; i++) {
        total += number1
    }

    return total
}

console.log('test1', multiplication(number1, number2))