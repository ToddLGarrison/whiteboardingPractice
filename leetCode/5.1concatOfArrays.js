var getConcatenation = function(nums) {
    let arrayOne = new Array(nums, nums);
    let arrayTwo = new Array(nums);
    let concatArray = arrayOne.concat(arrayTwo);

    return concatArray
};

console.log(getConcatenation([1,2,1]))