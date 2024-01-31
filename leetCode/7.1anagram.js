function anagramCount (string) {
    let count = 0

    const words = string.split(' ')

    const sortedWord = (word) => word.split('').sort().join('')

    const uniqueWords = new Set()

    for (const word of words) {
        if(word.length > 1) {
            const sorted = sortedWord(word)

            if(!uniqueWords.has(sorted)) {
                uniqueWords.add(sorted)
                count += 1
            }
        }
    }

    return count
}

console.log(anagramCount("aa aa odg dog gdo"));
console.log(anagramCount("a c b c run urn urn"));