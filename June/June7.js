// Given an array of integers, create a function that returns true if all numbers found in the array are even, 
// otherwise return false

const evenOnly = (array) => {
    let evenNumbers = []

    for(let i = 0; i < array.length; i++) {
        if (array[i] % 2 !==  0){
            return false
        }
    }
    return true
}


//Given an array of arrays, create a function that puts all elements in a single array 
//(without using the JS Array method .flat())

//SUDO CODE
const combineArrays = (array1, array2) => {
    let allElementsArray = []

    for(let i = 0; i < (array1.length + array2.length); i++){
        allElementsArray.push(array1[i])
        allElementsArray.push(array2[i])
    }

    return allElementsArray
}

//SOLUTION

const combineArrays = (arrays) => {
    let flattenedArray = []

    for (let i = 0; i < arrays.length; i++) {
        flattenedArray = flattenedArray.concat([...arrays[i]])
    }
    return flattenedArray
}

//Given a word, create a function that returns the same word without any vowels

//SUDO CODE
const removeVowels = (string) => {
    let lowercaseString = string.toLowerCase()
    let splitWord = lowercaseString.split("")
    let stringWithoutVowels = ""


    for (let i = 0; i < string.length; i++){
        if(splitWord[i] !== "a" || "o" || "i" || "e" || "u")
        stringWithoutVowels.push(splitWord[i])
    }
    return stringWithoutVowels
}

//SOLUTION
const removeVowels = (string) => {
    let lowercaseString = string.toLowerCase()
    let splitWord = lowercaseString.split("")
    let stringWithoutVowels = ""


    for (let i = 0; i < string.length; i++){
        if(
            splitWord[i] !== "a" &&
            splitWord[i] !== "o" &&
            splitWord[i] !== "i" &&
            splitWord[i] !== "e" &&
            splitWord[i] !==  "u"
            ){
                stringWithoutVowels += splitWord[i]
            }
    }
    return stringWithoutVowels
}
