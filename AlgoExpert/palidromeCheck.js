function isPalindrome(string) {
    let reverse = string.split("").reverse().join("")
    return string === reverse
}

let string = 'abcdcba'

console.log(isPalindrome(string))