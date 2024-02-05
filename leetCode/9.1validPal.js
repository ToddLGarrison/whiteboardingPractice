var isPalindrome = function(s) {
    if (s.length <= 1) {
        return true;
    }

    let cleanString = s.toLowerCase().replace(/[^a-z0-9]/g, '')

    return cleanString === cleanString.split('').reverse().join('')
};

console.log(isPalindrome("A man, a plan, a canal: Panama"))