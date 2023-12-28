// function removes duplicate characters in a string, only keeping the first occurrence

let string = 'tree traversal'

const removeDuplicate = (string) => {
    let singleCharString = ''

    for (let i = 0; i < string.length; i++) {
        if (!singleCharString.includes(string[i])) {
            singleCharString += string[i]
        } 
    }

    return singleCharString
}

console.log('test1:', removeDuplicate(string))