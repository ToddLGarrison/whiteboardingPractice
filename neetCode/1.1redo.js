var containsDuplicate = function(nums) {
    const newSet = new Set(nums);
    console.log('New set: ', newSet);
    console.log('New set size: ', newSet.size);
    console.log('New set length: ', newSet.length);
    return newSet.size !== nums.length
}


console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2]))
console.log(containsDuplicate([1,2,3,4,5]))