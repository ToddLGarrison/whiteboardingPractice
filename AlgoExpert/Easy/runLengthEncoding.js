function runLengthEncoding(string) {
    let encodedChars = []
    let currentRunLength = 1

    for (let i = 1; i < string.length; i++) {
        const currentChar = string[i]
        const prevChar = string[i - 1]

        if (currentChar !== prevChar || currentRunLength === 9) {
            encodedChars.push(currentRunLength.toString())
            encodedChars.push(prevChar)
            currentRunLength = 0
        }

        currentRunLength++
    }

    encodedChars.push(currentRunLength.toString())
    encodedChars.push(string[string.length - 1])

    return encodedChars.join('')
}

console.log(runLengthEncoding('AAAAAAAAAAAAABBCCCCDD'))