var isAnagram = function(s, t) {
    if(s.length !== t.length) return false;

    let sHash = {}
    let tHash = {}

    for (let char of s) {
        sHash[char] = (sHash[char] || 0) + 1
    }

    for (let char of t) {
        tHash[char] = (tHash[char] || 0) + 1
    }

    for (let key in sHash) {
        if (sHash[key] !== tHash[key]) {
            return false;
        }
    }
    return true;
}

console.log(isAnagram('rat', 'car'))
console.log(isAnagram('anagram', 'nagaram'))