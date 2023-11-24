// Write a function that takes two strings as arguments and 
// returns a string containing only the characters found in both strings

stringShort = 'far out man'
stringLong = 'whats is love friend'

const inBothStrings = (string1, string2) => {
    let lettersInBoth = ''

    for(let i = 0; i < string1.length; i++) {
        for (let j = 0; j < string2.length; j++) {
            if (string1[i] === string2[j] && !lettersInBoth.includes(string1[i])) {
                lettersInBoth += string1[i]
            }
        }
    }
    return lettersInBoth
}

console.log(inBothStrings(stringShort, stringLong))