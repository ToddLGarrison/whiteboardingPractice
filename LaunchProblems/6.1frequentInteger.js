// Given an array of integers, write a function to find the most frequent integer in the array

const integerArray = [1, 1, 1, 2, 2, 3, 4, 5, 5]

const mostFrequentInteger = (array) => {
    let frequencyHash = {}
    let maxFrequency = 0
    let mostFrequentInteger = null

    for (let i = 0; i < array.length; i++) {
        let number = array[i]

        if (frequencyHash[number]){
            frequencyHash[number]++ 
        } else {
            frequencyHash[number] = 1
        }
    
        if(frequencyHash[number] > maxFrequency){
            mostFrequentInteger = number
            maxFrequency = frequencyHash[number]
        }
    }

    return mostFrequentInteger
}

console.log('test 1:', mostFrequentInteger(integerArray));