function getNthFib(n) {
    let lastTwo = [0, 1]
    let counter = 3

    while (counter <= n) {
        console.log(lastTwo)
        const nextFib = lastTwo[0] + lastTwo[1]
        lastTwo[0] = lastTwo[1]
        lastTwo[1] = nextFib
        counter++
    }
    return n > 1 ? lastTwo[1] : lastTwo[0]
}

console.log(getNthFib(4))