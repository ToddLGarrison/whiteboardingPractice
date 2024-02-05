var isPalindrome = function(s) {
    if (s.length <= 1) {
        return true;
    }
    //make lowercase - done
    //split s - done
    //remove all non characters - done
    //reverse
    //join and compare

    let charactersOnly = s.toLowerCase().replace(/[^a-z]/g, '');

    if (charactersOnly === charactersOnly.split('').reverse().join('')){
        return true;
    }

    return charactersOnly
};

console.log(isPalindrome("A man, a plan, a canal: Panama"))