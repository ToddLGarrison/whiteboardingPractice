//given a word check if it is a palindrome return true or false

const findPalindrome = (word) => {
    for (let i = 0, j = word.length -1; i < j; i++, j--) {
        if ( word[i] !== word[j]) {
            return false
        }
    }
    return true
}

console.log('test1:', findPalindrome('tort'))