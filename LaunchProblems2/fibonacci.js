//write a function that will output the fibonacci sequence to an input 

function fibonacciFunction(x){
    let sequence = [0, 1]

    for (let i = 2; i <= x; i++) {
        let nextNumber = sequence[sequence - 2] + sequence[sequence - 1]
        
    }

    return sequence
}

console.log('Test: ', fibonacciFunction(5))