// Complete the solution so that it splits the string into pairs of two characters. 
//If the string contains an odd number of characters then it should replace 
//the missing second character of the final pair with an underscore ('_').

// Examples:

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

const splitStringIntoPairs = (inputString) => {
    if (inputString.length % 2 === 1) {
        inputString += '_'
    }

    let pairs = []

    for (let i = 0; i < inputString.length; i += 2) {
        let pair = inputString.slice(i, i + 2)
        pairs.push(pair)
    }
    return pairs
}


//QUESTION 2

// Given an array (arr) as an argument complete the function countSmileys 
//that should return the total number of smiling faces.

// Rules for a smiling face:

// Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
// A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
// Every smiling face must have a smiling mouth that should be marked with either ) or D
// No additional characters are allowed except for those mentioned.

// Valid smiley face examples: :) :D ;-D :~)
// Invalid smiley faces: ;( :> :} :]

// Example

// function countSmileys(arr) {
//     return 0;
//   }

const countSmileys = (array) => {
    if(array.length === 0){
        return 0;  
    }
        

    let pattern = /[:;][-~]?[)D]/

    let count = 0;

    for (const face of array) {
        if (pattern.test(face)){
            count ++
        }
    }
    return count;
}