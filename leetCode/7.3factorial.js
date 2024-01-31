// Have the function FirstFactorial(num) take the num parameter being passed and return the factorial of it.
//For example: if num = 4, then your program should return (4 * 3 * 2 * 1) = 24.

function factorial(num) {
    let sum = 1

    for (let i = 1; i <= num; i++) {
        sum *= i
    }

    return sum
}

console.log(factorial(4))
console.log(factorial(10))