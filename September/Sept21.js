// // Question 1
// Given an integer array nums, a reducer function fn, and an initial value init, return a reduced array.
// A reduced array is created by applying the following operation: val = fn(init, nums[0]), 
// val = fn(val, nums[1]), val = fn(val, nums[2]), ... until every element in the array has been processed. 
// The final value of val is returned.
// If the length of the array is 0, it should return init.
// Please solve it without using the built-in Array.reduce method.

var reduce = function(nums, fn, init) {
    let val = init;
    for (let i = 0; i < nums.length; i++) {
        val = fn(val, nums[i]);
    }
    return val;
};

// Question 2

// Given an array of functions [f1, f2, f3, ..., fn], 
//return a new function fn that is the function composition of the array of functions.
// The function composition of [f(x), g(x), h(x)] is fn(x) = f(g(h(x))).
// The function composition of an empty list of functions is the identity function f(x) = x.
// You may assume each function in the array accepts one integer as input and returns one integer as output.

var compose = function(functions) {
    if (functions.length === 0) {
        return function(x) {
        return x;
        };
    } else {
        return function(x) {
        
        let result = x;
        
        for (let i = functions.length - 1; i >= 0; i--) {
            result = functions[i](result);
        }
        
        return result;
        };
    }
};