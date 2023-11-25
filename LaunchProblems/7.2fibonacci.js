//write a function that will output the fibonacci sequence to an input 

const fibonacci = (integer) => {
    let sequence = [0, 1]

    for (let i = 2; i <= integer; i++) {
        let nextNumber = sequence[sequence.length - 2] + sequence[sequence.length - 1]

        sequence.push(nextNumber)
    }

    return sequence
}

console.log('test: ', fibonacci(6))