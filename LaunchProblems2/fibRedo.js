//write a function that will output the fibonacci sequence to an input 

function fibonacciSequence(x) {
    let sequence = [0, 1]

    for (let i = 2; i <= x; i++){
        let nextNumber = sequence[sequence.length - 2] + sequence[sequence.length - 1]
        sequence.push(nextNumber)
    }
    return sequence
}


console.log('Test: ', fibonacciSequence(20))