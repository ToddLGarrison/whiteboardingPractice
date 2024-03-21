// function twoNumSum(array, targetSum) {
//     let nums = {}

//     for (const num of array) {
//         const potentialMatch = targetSum - num
//         if (potentialMatch in nums){
//             return [potentialMatch, num];
//         } else {
//             nums[num] = true;
//         }
//     }

//     return []


function twoNumSum(array, targetSum) {
    array.sort((a,b) => {a - b});
    let left = 0;
    let right = array.length - 1;

    while (left < right) {
        const currentSum = array[left] + array [right]; 

        if (currentSum === targetSum) {
            return [array[left], array[right]];
        } else if (currentSum < targetSum) {
            left++
        } else if (currentSum > targetSum) {
            right--
        }
    }

    return []
}

let array = [3, 5, -4, 8, 11, 1, -1, 6]
let targetSum = 10

console.log(twoNumSum(array, targetSum))

