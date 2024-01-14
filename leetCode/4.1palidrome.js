// Given an integer x, return true if x is a palindrome, and false otherwise.

const isPalindrome = (x) => {
    let string = x.toString();

    const reverseString = string.reverse();

    return string === reverseString
}

console.log('test 1:', isPalindrome(12321))
console.log('test 2:', isPalindrome(12321512512))