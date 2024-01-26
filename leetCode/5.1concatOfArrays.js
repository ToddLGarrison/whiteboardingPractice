var getConcatenation = function(nums) {
    // return nums.concat(nums)
    return [...nums, ...nums]
};

console.log(getConcatenation([1,2,1]))