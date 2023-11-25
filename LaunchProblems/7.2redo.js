//write a function that will output the fibonacci sequence to an input 

const fibonacci = (integer) => {
    let sequence = [0, 1]

    for (let i = 2; i <= integer; i++) {
        sequence[i] = sequence[i - 2] + sequence[i - 1]
    }

    return sequence
}

console.log('test:', fibonacci(10))