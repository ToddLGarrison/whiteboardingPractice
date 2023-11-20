// function removes duplicate characters in a string, only keeping the first occurrence

let string = 'tree traversal'

const removeDups = (string) => {
    let singleCharString = ''

    // push letter into signleCharString
    // check next char against singleCharString
    //if already in singleCharString ignore it and move on

    for (let i = 0; i < string.length; i++) {
        if (!singleCharString.includes(string[i])) {
            singleCharString += string[i]
        }
    }

    return singleCharString
}

console.log('test1:', removeDups(string))