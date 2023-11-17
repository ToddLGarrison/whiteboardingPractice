// Given an array of integers, return a list of all odd numbers found in the list

numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14]

const oddNumbers = (numbers) => {
    oddArray = []

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 != 0) {
            oddArray.push(numbers[i])
        }
    }
    return oddArray
}

const oddInts = (numbers) => {
    return numbers.filter(number => number % 2 !== 0)
    
}