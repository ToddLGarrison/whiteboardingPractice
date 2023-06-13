//Given an array, write a function that returns the list of elements that occur more than once


//sudo
const duplicateFinder = (array) => {
    let singleList = []
    let duplicateList = []

    for(let i = 0; i < array.length; i++) {
        if(singleList.) {
            singleList.push(array[i])
        } else {
            duplicateList.push([array[i]])
        }
    }

    return duplicateList
}

//SOLUTION 

const findDuplicates = (arr) => {
    const duplicates = [];
    const counts = new Map();
    
        arr.forEach((element) => {
        counts.set(element, (counts.get(element) || 0) + 1);
        });
    
        counts.forEach((count, key) => {
        if (count > 1) {
            duplicates.push(Number(key));
        }
        });
    
        return duplicates;
    };

//Given a word, write a function that returns whether it is a palindrome

//SUDO
const palindromeFinder = (string) =>{
    let splitString = string.toLowerCase().split("")
    for(let i = 0; i < splitString.length; i++) {
        if(splitString[i] === splitString[]){
            return true
        } else {
            return false
        }
    } 
}

//SOLUTION

const palindromeFinder = (string) => {
    let word = string.toLowerCase().replace(/[^a-z0-9]/g, '')
    let reverseWord = word.split('').reverse().join('')

    return word === reverseWord
}


// Given a string, write a function to return a hash/object that, for each letter, 
// stores an array of indices where that letter can be found. For example, in the word "bee", 
// "b" can be found at index 0, and "e" can be found at index 1 & 2

const letterIndices = (str) => {
    const indices = {};
    
        [...str].forEach((letter, index) => {
        if (indices.hasOwnProperty(letter)) {
            indices[letter].push(index);
        } else {
            indices[letter] = [index];
        }
        });
    
        return indices;
    };  