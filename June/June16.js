// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

//SUDO
const twoSum = (nums, target) => {
    
    let answer = []

    for (let i = 0; i < nums.length; i++){
        if (num[a] + num[b] = target){
            answer.push(num[a], num[b])
        } else if (num[a] + num[c] = target) {
            answer.push(num[a], num[b])
        }
    }

    return answer
};

//Solution

function twoSum(nums, target) {
    const map = new Map();

        for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
        }
    }



