//Write a generator function that returns a generator object which yields the fibonacci sequence.

var fibGenerator = function*(a = 0, b=1) {
    yield a;
    yield* fibGenerator(b, a+b);
};


// Your goal in this kata is to implement a difference function, 
// which subtracts one list from another and returns the result.
// It should remove all values from list a, which are present in list b keeping their order.

function arrayDiff(a, b) {
    let remainingNumbers = []

    for(let i = 0; i < a.length; i++) {
        let currentNumber = a[i];

        if (!b.includes(currentNumber)){
            remainingNumbers.push(a[i])
        }
    }

    return remainingNumbers
}