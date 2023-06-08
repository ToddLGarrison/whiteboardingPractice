//Given an array of numbers, write a function that will return whether the array is sorted (low-to-high) or unsorted

//SUDO

orderedArrayOfNumbers = [1,2,3,5,6,7,8]
unorderedArrayOfNumbers = [1,5,6,2,3,7]

const confirmSortedArray = (array) => {
    for(let i = 0;  i < array.length; i++){
        if(array[a] > array[b]){
            return "Unsorted"
        } else {
            return "Sorted"
        }
    }
}

//SOLUTION
const confirmSortedArray = (array) => {
    for(let i = 0; i < array.length; i++){
        if(array[i] > array[i + 1]){
            return "Unsorted"
        }
    }
    return "Sorted"
}


// Write a multiplication function without using the * operation. Determine what arguments you think this function will accept. 
//The return of the function should be the product of the function

//SUDO
const multiply = (a, b) => {
    let answer = 0

    for(let i = 0; i < b; i++) {
        if(b === 0){
            answer = 0
        } else if(a < 0 || b < 0){
            answer -= a
        } else {
            answer += a
        }
    }
    return answer
}

//SOLUTION = missing Math.abs() function
//This function returns the absolute value of a number. This will handle if 'a' or 'b' are negative

const multiply = (a, b) => {
    let answer = 0

    for(let i = 0; i < Math.abs(b); i++){
        if(a < 0 || b < 0 ){
            answer -= a
        } else {
            answer += a
        }
    }
    return answer
}


Given a string representing a paragraph, write a function to return the frequency of each word in the paragraph