function majorityElement(array) {
    let countMap = {}
    let majorityElement = null
    let maxCount = 0

    for(const num of array) {
        if (countMap[num]) {
            countMap[num]++
        } else {
            countMap[num] = 1
        }
    }

    for (const num in countMap) {
        if(countMap[num] > maxCount) {
            majorityElement = num
            maxCount = countMap[num]
        }
    }

    console.log(countMap)
    return majorityElement
}


let array = [1,2,4,1,4,5,6,7,1,3,2,2,3,3,3,4,5,7]
console.log('test: ', majorityElement(array))