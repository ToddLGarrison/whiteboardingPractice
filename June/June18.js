// Given an integer array nums, a reducer function fn, and an initial value init, return a reduced array.
// A reduced array is created by applying the following operation: val = fn(init, nums[0]), val = fn(val, nums[1]), val = fn(val, nums[2]), ... until every element in the array has been processed. The final value of val is returned.
// If the length of the array is 0, it should return init.
// Please solve it without using the built-in Array.reduce method.


//SUDO Code
const reducer = (numbers, func, initialValue) => {

    if (numbers.length === 0 ) {
        return initialValue
    } 

    let totalValue = initialValue

    for (let i = 0; i < numbers.length; i++) {
        let totalValue = totalValue += numbers[a]        
    }
    return totalValue
}

//SOLUTION

const reduce = (nums, fn, init) => {
    let value = init
    for(let i = 0; i < nums.length; i++){
        value = fn(value, nums[i])
    }
    return val
}


// Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.

// The returned array should be created such that returnedArray[i] = fn(arr[i], i).

// Please solve it without the built-in Array.map method.

const map = (array, fn) => {
    let mappedArray = []

    for(let i =0; i< array.length; i++){
        let mappedArray = fun(array[i] + i)
    }

    return mappedArray
}

//SOLUTION

const map1 = (array, fn) => {
    let mappedArray = []
    for(let i = 0; i < array.length; i++) {
        mappedArray.push(fn(array[i], i))
    }
    return mappedArray
}

// Given a function fn, an array of arguments args, and an interval time t, 
// return a cancel function cancelFn. The function fn should be called with 
// args immediately and then called again every t milliseconds until cancelFn is called.

//SOLUTION - Had to look at solution to understand question

const cancellable = function(fn, args, t) {
    fn(...args);
    let timer = setInterval(() => fn(...args), t);

    let cancelFn = () => clearInterval(timer);
    return cancelFn;
};