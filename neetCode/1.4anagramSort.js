var groupAnagrams = function(strs) {
    let anagramGroups = [];

    for (const word of strs) {
        const sortedWord = word.split('').sort().join('');
        if (!anagramGroups[sortedWord]) {
            anagramGroups[sortedWord] = [word];
        } else {
            anagramGroups[sortedWord].push(word)
        }
    }

    return Object.values(anagramGroups)
};

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))