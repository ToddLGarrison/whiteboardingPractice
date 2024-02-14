var twoSum = function(nums, target) {
    let output = []

    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i]

        if (output.hasOwnProperty(complement)) {
            return [output[complement], i] 
        }

        output[nums[i]] = i
    } 

    return output
}

console.log(twoSum([3,2,4], 6))
console.log(twoSum([3, 4, 2, 7, 11, 15], 9))