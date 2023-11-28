// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

let nums = [2,7,11,15]
let target = 9

var twoSum = (nums, target) => {
    let numberMap = {}

    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i]
    
        if(numberMap.hasOwnProperty(complement)) {
            return [numberMap[complement, i]]
        }
        numberMap[nums[i]] = i
    }

    return []
}
console.log(twoSum(nums))