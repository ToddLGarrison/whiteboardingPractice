//write a function that creates a factorial for an input

function factorial(x){
    let product = 1

    for (let i = 1; i < x; i++){
        product *= i
    }
    
    return product
}

console.log('test: ',  factorial(10))