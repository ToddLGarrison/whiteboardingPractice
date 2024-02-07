var containsDuplicate = function(nums) {
    let numsHash = {}

    for (let i = 0; i < nums.length; i++) {
        if (numsHash[nums[i]]) {
            console.log('numsHash if: ', numsHash);
            return true
        } else {
            numsHash[nums[i]] = true
            console.log('numsHash else: ', numsHash);
        }
    }

    return false
}


console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2]))
console.log(containsDuplicate([1,2,3,4]))