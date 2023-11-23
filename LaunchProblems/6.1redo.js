// Given an array of integers, write a function to find the most frequent integer in the array

const integerArray = [1, 1, 1, 2, 2, 3, 4, 5, 5, 6, 6, 7, 7, 7, 7, 8, 9, 9]

const mostFrequentInteger = (array) => {
    let frequencyHash = {}
    let mostFrequentInteger = null
    let maxFrequency = 0

    for (let i = 0; i < array.length; i++) {
        let number = array[i]

        if(frequencyHash[number]) {
            frequencyHash[number] ++
        } else {
            frequencyHash[number] = 1
        }

        if(frequencyHash[number] > maxFrequency) {
            mostFrequentInteger = number
            maxFrequency = frequencyHash[number]
        }
    }

    return mostFrequentInteger
}

console.log(mostFrequentInteger(integerArray))