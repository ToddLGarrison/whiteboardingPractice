// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

function twoSums(nums, target) {
    let output = {};

    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];

        if (output.hasOwnProperty(complement)) {
            return [output[complement], i];
        }
        output[nums[i]] = i;
    }

    return []
}


// Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with  places after the decimal.

// Note: This challenge introduces precision problems. 

function plusMinus(arr) {
    let positiveCount = 0
    let negativeCount = 0
    let zeroCount = 0

    for (let i = 0; i < arr.length; i++){
        if (arr[i] > 0) {
            positiveCount += 1
        } else if (arr[i] < 0) {
            negativeCount += 1
        } else {
            zeroCount += 1
        }
    }


    const total = arr.length
    const positiveRatio = positiveCount/total
    const negativeRatio = negativeCount/total
    const zeroRatio = zeroCount/total

    console.log(positiveRatio.toFixed(6))
    console.log(negativeRatio.toFixed(6))
    console.log(zeroRatio.toFixed(6))
}

// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

function miniMaxSum(arr) {
    // Write your code here
    let topFour = arr.sort((a, b) => b - a).slice(0,4)
    let bottomFour = arr.sort((a, b) => a - b).slice(0,4)

    let topSum = topFour.reduce((acc, i) => acc + i, 0)
    let bottomSum = bottomFour.reduce((acc, i) => acc + i, 0)

    console.log(bottomSum, topSum)
}

//Given a time in -hour AM/PM format, convert it to military (24-hour) time.

// Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
// - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

function timeConversion(s) {
    let period = s.slice(-2)

    let [hours, minutes, seconds] = s.slice(0, -2).split(':')

    if (period === 'AM' && hours === '12'){
        hours = '00'
    } else if (period === 'PM' & hours !== '12') {
        hours = (parseInt(hours, 10) + 12).toString()
    }

    return `${hours}:${minutes}:${seconds}`
}

// Given an integer x, return true if x is a palindrome, and false otherwise.

const isPalindrome = (x) => {
    const string = x.toString()

    const reverseString = string.split('').reverse().join('')

    return string === reverseString
}