// 2619. Array Prototype Last - https://leetcode.com/problems/array-prototype-last/solutions/
// Easy
// 250
// 8
// Companies
// Write code that enhances all arrays such that you can call the array.last() method on any array and it will return the last element. If there are no elements in the array, it should return -1.
 

// Example 1:

// Input: nums = [1,2,3]
// Output: 3
// Explanation: Calling nums.last() should return the last element: 3.
// Example 2:

// Input: nums = []
// Output: -1
// Explanation: Because there are no elements, return -1.
 

// Constraints:

// 0 <= arr.length <= 1000
// 0 <= arr[i] <= 1000

SOLUTION

Array.prototype.last = function() {
    if (this.length === 0) {
        return -1;
        } else {
        return this[this.length - 1];
        }
    };

//'this' is used to call on the specific object



// 2620. Counter
// Easy
// 460
// 23
// Companies
// Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).

 

// Example 1:

// Input: 
// n = 10 
// ["call","call","call"]
// Output: [10,11,12]
// Explanation: 
// counter() = 10 // The first time counter() is called, it returns n.
// counter() = 11 // Returns 1 more than the previous time.
// counter() = 12 // Returns 1 more than the previous time.
// Example 2:

// Input: 
// n = -2
// ["call","call","call","call","call"]
// Output: [-2,-1,0,1,2]
// Explanation: counter() initially returns -2. Then increases after each sebsequent call.
 

// Constraints:

// -1000 <= n <= 1000
// At most 1000 calls to counter() will be made

SOLUTION

//What is Closure ?
// A closure is created when a function is defined inside another function, 
// and the inner function references variables in the outer function's scope. 
// When the inner function is returned from the outer function, 
// it retains a reference to the outer function's scope, 
// and can continue to access those variables even after the outer 
// function has finished executing. Vice-Versa is not true!!
// In simple terms a closure can "remember" values from its outer function's scope 
// and use them later, even if the outer function has returned and 
// those values would normally be out of scope.

var createCounter = function(n) {
    return ()=> n++
};
