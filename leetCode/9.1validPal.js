var isPalindrome = function(s) {
    if (s.length <= 1) {
        return true;
    }

    return s.toLowerCase().replace(/[^a-z]/g, '') === s.toLowerCase().replace(/[^a-z]/g, '').split('').reverse().join('')
};

console.log(isPalindrome("A man, a plan, a canal: Panama"))