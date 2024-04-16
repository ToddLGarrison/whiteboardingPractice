function timeToTraverseKeypad(code, keypad) {
    let totalTime = 0

    const grid = []

    for (let i = 0; i < 3; i++) {
        const row = []
        for (let j = 0; j < 3; j++) {
            row.push(keypad[i * 3 + j])
        }
        grid.push(row)
    }

    console.log(grid)

    const indexDict = {}

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) { 
            indexDict[grid[i][j]] = [i, j]
        }
    }

    console.log(indexDict)

    return totalTime
}

let code = 4232451
let keypad = 957823641

console.log(timeToTraverseKeypad(string, keypad))