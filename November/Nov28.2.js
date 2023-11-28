//Longest Substring Without Repeating Characters
// Given a string s, find the length of the longest substring without repeating characters.

var lengthOfLongestSubstring = function(s) {
    let lastIndexMap = {}

    let start = 0
    let maxLength = 0

    for (let i = 0; i < s.length; i++) {
        const currentCharacter = s[i]

        if(currentCharacter in lastIndexMap && lastIndexMap[currentCharacter] >= start) {
            start = lastIndexMap[currentCharacter] + 1
        }

        lastIndexMap[currentCharacter] = i

        maxLength = Math.max(maxLength, i - start + 1)
    }

    return maxLength
};