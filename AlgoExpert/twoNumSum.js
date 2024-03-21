function twoNumSum(array, targetSum) {
    let nums = {}

    for (const num of array) {
        const potentialMatch = targetSum - num
        if (potentialMatch in nums){
            return [potentialMatch, num];
        } else {
            nums[num] = true;
        }
    }

    return []
}

let array = [3, 5, -4, 8, 11, 1, -1, 6]
let targetSum = 10

console.log(twoNumSum(array, targetSum))