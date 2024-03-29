function majorityElement (nums) {
    let countMap = {}
    
    for (const num of nums){
        if(countMap[num] !== undefined) {
            countMap[num]++
        } else {
            countMap[num] = 1
        }
    }

    let majorityElement = null
    let maxCount = 0

    for (const num in countMap) {
        if(countMap[num] > maxCount) {
            majorityElement = num
            maxCount = countMap[num]
        }
    }

    return majorityElement
}

let array = [2,2,1,1,1,2,2]
console.log('test: ', majorityElement(array))