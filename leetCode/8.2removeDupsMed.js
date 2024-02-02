var removeDuplicates = function(nums) {
    console.log(nums)
    let i = 0
    let count = 1
    
    for (let j = 1; j < nums.length; j++) {
        if(nums[i] !== nums[j]) {
            nums[++i] = nums[j]
            count = 1
        } else {
            if (count < 2) {
                nums[++i] = nums[j]
                count++
            }
        }

    }
    console.log(nums)
    return ++i
};

console.log('test: ', removeDuplicates([1,1,1,2,2,3]))