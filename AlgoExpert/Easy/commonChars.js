function commonChars(strings) {
    const stringSet = new Set(strings[0])
    for (let i = 1; i < stringSet.length; i++) {
        const compareSet = new Set(strings[i])
        for (let char of stringSet) {
            if (!compareSet.has(char)) {
                stringSet.delete(char)
            }
        }
    }
    return Array.from(stringSet)
}

console.log(commonChars(["abc", "bcd", "cbad"])); 