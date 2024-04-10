function uniquePathsWithObstacles(obstacleGrid) {
    if (obstacleGrid[0][0] === 1) return 0
    if (obstacleGrid[obstacleGrid.length - 1][obstacleGrid[0].length - 1] === 1) return 0

    let m = obstacleGrid.length
    let n = obstacleGrid[0].length

    let table = Array.from(Array(m), () => Array(n).fill(0))

    for (let i = 0; i < m; i++) {
        if (obstacleGrid[i][0] === 1) {
            table[i][0] = 0
            break
        } else {
            table[i][0] = 1
        }
    }

    for (let j = 0; j < n; j++) {
        if (obstacleGrid[0][j] === 1) {
            table[0][j] = 0
            break
        } else {
            table[0][j] = 1
        }
    }
    
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if(obstacleGrid[i][j] === 1) {
                table[i][j] = 0
            } else {
                table[i][j] = table[i - 1][j] + table[i][j - 1]
            }
        }
    }

    return table[m-1][n-1]
}
