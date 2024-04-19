function similarStrings(array) {
    let count = 0

    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if(areSimilar(array[i], array[j])) {
                count++
            }
        }
    }

    return count
}

function areSimilar(stringOne, stringTwo) {
    const setOne = new Set(stringOne)
    const setTwo = new Set(stringTwo)

    if (setOne.size !== setTwo.size) {
        return false
    }

    for (const character of setOne) {
        if(!setTwo.has(character)) {
            return false
        }
    }

return true
}

console.log(similarStrings(['abc', 'abaca', 'cbd']))
console.log(similarStrings(['xyz', 'foo', 'of']))