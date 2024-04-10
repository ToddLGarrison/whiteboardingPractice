function classPhotos(redShirtHeights, blueShirtHeights) {
    redShirtHeights.sort((a,b) => b - a)
    blueShirtHeights.sort((a,b) => b - a)

    const frontRow = redShirtHeights[0] > blueShirtHeights[0] ? 'BLUE' : 'RED';

    for (let i = 0; i < redShirtHeights.length; i++) {
        const redStudent = redShirtHeights[i]
        const blueStudent = blueShirtHeights[i]

        if (frontRow === 'BLUE') {
            if (blueStudent >= redStudent) return false
        } else if (redStudent >= blueStudent) return false
    }

    return true
}

let redShirtHeights = [5, 8, 1, 3, 4]
let blueShirtHeights = [6, 9, 2, 4, 5]

console.log(classPhotos(redShirtHeights, blueShirtHeights))