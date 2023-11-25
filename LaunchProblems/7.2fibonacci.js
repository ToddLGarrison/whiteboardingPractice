//write a function that will output the fibonacci sequence to an input 

const fibonacci = (integer) => {
    let sequence = [0, 1]

    for (let i = 2; i <= integer; i++) {
        sequence.push((sequence[0] + sequence[1]))
    }

    return sequence
}

console.log('test: ', fibonacci(6))