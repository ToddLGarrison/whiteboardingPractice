// Given a string, write a function to return a hash/object that, for each letter, 
// stores an array of indices where that letter can be found. 
// For example, in the word "bee", "b" can be found at index 0, and "e" can be found at index 1 & 2

const string = 'carrot'

const letterLocation = (string) => {
    let letterHash = {}

    for (let i = 0; i < string.length; i++) {
        let letter = string[i]

        if(letterHash[letter]) {
            letterHash[letter].push(i)
        } else {
            letterHash[letter] = [i]
        }
    }

    return letterHash
}

console.log(letterLocation(string))