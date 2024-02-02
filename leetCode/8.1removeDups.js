var removeDuplicates = function(nums) {
    if (nums.length < 1) {
        return nums.length
    }

    let i = 0

    for (let j = 0; j < nums.length; j++) {
        if(nums[i]!== nums[j]){
            i++
            nums[i] = nums[j]
        }
    }

    return i + 1
}

console.log('test: ', removeDuplicates([1,1,2]))