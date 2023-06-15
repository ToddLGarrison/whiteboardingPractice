//Given an array of integers, write a function to find the most frequent integer in the array

//Solution

const mostFrequent = (array) => {
    let maxCount = 0
    let elementWithMaxFrequency

    for (let i = 0; i < array.length; i++) {
        let count = 0
        for(let j = 0; j < array.length; i++) {
            if (array[i] == array[j])
            count++
        }
        if(count > maxCount){
            maxCount = count
            elementWithMaxFrequency = array[i]
        }
    }
    return elementWithMaxFrequency
}


Given a string, write a function that removes duplicate characters in the string keeping only the first occurrences. For example, if the input is tree traversal, the output will be “tre avsl”
Write a function that takes two strings as arguments and returns a string containing only the characters found in both strings