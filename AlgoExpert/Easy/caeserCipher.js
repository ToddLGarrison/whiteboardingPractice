function caesarCipherEncryptor(string, key) {
    let newCode = []
    let newKey = key % 26

    for(const letter of string) {
        newCode.push(getNewLetter(letter, newKey))
    }

    return newCode.join('')
}

function getNewLetter(letter, key) {
    const newLetterCode = letter.charCodeAt() + key
    return newLetterCode <= 122 
    ? String.fromCharCode(newLetterCode) 
    : String.fromCharCode(96 + (newLetterCode % 122))
}

let string = 'xyz'
console.log(caesarCipherEncryptor(string, 2))