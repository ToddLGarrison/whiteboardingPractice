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