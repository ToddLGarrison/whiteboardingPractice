// Given an integer n, return a counter function. This counter function initially 
// returns n and then returns 1 more than the previous value every subsequent time 
// it is called (n, n + 1, n + 2, etc).

var createCounter = function(n) {
    let count = n

    return function () {
        return count++
    }
};


//QUESTION 2

// Given a positive integer millis, write an asynchronous function that sleeps for 
// millis milliseconds. It can resolve any value.

async function sleep(millis) {
    return new Promise (resolve => {
        setTimeout(resolve, millis)
    })
}
