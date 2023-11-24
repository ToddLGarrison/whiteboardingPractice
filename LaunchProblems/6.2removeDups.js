// Given a string, write a function that removes duplicate characters in the string keeping only the first occurrences. 
// For example, if the input is tree traversal, the output will be “tre avsl”

string = 'tree traversal'

const removeDuplicates = (string) =>{
    let noDuplicates = ''

    for(let i=0; i < string.length; i++) {
        let letter = string[i]
        if(!noDuplicates.includes(letter)){
            noDuplicates += letter
        }
    }

    return noDuplicates
}

console.log('test :', removeDuplicates(string))