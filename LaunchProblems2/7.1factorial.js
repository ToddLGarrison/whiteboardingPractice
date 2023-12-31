//write a function that creates a factorial for an input

function createFactorial(x) {
    let total = 1

    for(let i = 1; i <= x; i++) {
    
            total *= i
        
    }

    return total
}

console.log('test: ', createFactorial(3))