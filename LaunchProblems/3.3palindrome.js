//given a word check if it is a palindrome return true or false

const findPalindrome = (word) => {
    for (let i = 0; j = word.length - 1; i < j; i++, j--) {
        if(word[i] === word[j]) {
            return true;
        } else {
            return false;
        }
    }
}


console.log('test 1:', findPalindrome(toot) === true)
console.log('test 2:', findPalindrome(fact) === false)