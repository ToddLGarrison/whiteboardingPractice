// function isPalindrome(string) {
//     let reverse = string.split("").reverse().join("")
//     return string === reverse
// }

function isPalindrome(string) {
    let left = 0
    let right = string.length - 1

    while (left < right) {
        if(string[left] !== string[right]) return false
        left++
        right--
    }
    return true
}

let string = 'abcdcba'

console.log(isPalindrome(string))