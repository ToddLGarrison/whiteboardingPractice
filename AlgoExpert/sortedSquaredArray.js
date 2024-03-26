// function sortedSquaredArray(array) {
//     let squaredArray = new Array(array.length).fill(0);

//     for (let i = 0; i < array.length; i++) {
//         let value = array[i]
//         squaredArray[i] = value * value 
//     }
    
//     squaredArray.sort((a, b) => a - b)

//     return squaredArray
// }


function sortedSquaredArray(array) {
    let squaredArray = new Array(array.length).fill(0);
    let smallerValueIndex = 0;
    let largerValueIndex = array.length - 1;

    for (let i = array.length - 1; i >= 0; i--) {
        const smallerValue = array[smallerValueIndex]
        const largerValue = array[largerValueIndex]

        if (Math.abs(smallerValue) > Math.abs(largerValue)) {
            squaredArray[i] = smallerValue * smallerValue
            smallerValueIndex++
        } else {
            squaredArray[i] = largerValue * largerValue
            largerValueIndex--
        }
    }

    return squaredArray;
}


// let array = [1, 2, 3, 5, 6, 8, 9]
let array = [1, 4, 9, 16, 25]
console.log(sortedSquaredArray(array))