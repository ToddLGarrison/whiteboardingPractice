// Two players are playing a game of Tower Breakers! Player  always moves first, and both players always play optimally.The rules of the game are as follows

function towerBreakers(n, m) {
    if(m ==1 || n%2 == 0){
        return 2
    } else {
        return 1
    }
}

// Julius Caesar protected his confidential information by encrypting it using a cipher. Caesar's cipher shifts each letter by a number of letters. If the shift takes you past the end of the alphabet, just rotate back to the front of the alphabet.

function caesarCipher(s, k) {
    let codedString = ''
    let splitString = s.split('')
    
    for(let i = 0; i < splitString.length; i++){
        if (splitString[i].match(/[a-zA-z]/)){
            let isUpperCase = splitString[i] === splitString[i].toUpperCase()
            let characterCode = splitString[i].charCodeAt(0)
            let shift = isUpperCase ? 'A'.charCodeAt(0) : 'a'.charCodeAt(0);
            
            let shiftedCharacterCode = 
                (characterCode - shift + k) % 26 + shift
            let shiftedCharacter = String.fromCharCode(shiftedCharacterCode)
            
            codedString += shiftedCharacter
        } else if (splitString[i] === ' ') {
            codedString += '-'
        } else {
            codedString += splitString[i]
        }
    }
    
    return codedString
}