// Given an array of integers, write a function to find the most frequent integer in the array

const integerArray = [1, 1, 1, 2, 2, 3, 4, 5, 5, 6, 6, 1, 3, 4, 5, 4, 4, 4, 9, 9, 2, 3, 3]

const mostFrequentInteger = (array) => {
    let frequencyHash = {}
    let maxFrequency = 0
    let mostFrequent = null

    for (let i = 0; i < array.length; i++) {
        let number = array[i]

        if (frequencyHash[number]) {
            frequencyHash[number]++
        } else {
            frequencyHash[number] = 1
        }

        if (frequencyHash[number] > maxFrequency) {
            mostFrequent = number
            maxFrequency = frequencyHash[number]
        }
    }
    return mostFrequent
}

console.log('test:', mostFrequentInteger(integerArray))