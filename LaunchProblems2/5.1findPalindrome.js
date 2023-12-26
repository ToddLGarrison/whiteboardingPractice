//given a word check if it is a palindrome return true or false

function findPalindrome(word) {
    const length = word.length

    for(let i = 0; i < length / 2; i++) {
        if(word[i] !== word[length - 1 - i]) {
            return false
        }
    }
    return true
}


console.log('test 1:', findPalindrome('toot'))
console.log('test 2:', findPalindrome('fact'))
console.log('test 3:', findPalindrome('racecar'))
console.log('test 4:', findPalindrome('tort'))