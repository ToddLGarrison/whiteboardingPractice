function bubbleSort(array) {
    let isSorted = false;
    let counter = 0;
    while(!isSorted) {
        for (let i = 0; i < array.length - 1 - counter; i++) {
            isSorted = true;
            if (array[i] > array[i + 1]) {
                swap(i, i + 1, array)
                isSorted = false
            }
        }
        counter++
    }

    return array;
}

function swap(i, j, array) {
    const temp = array[j]
    array[j] = array[i]
    array[i] = temp
}


//recursive solution

// function bubbleSort(array) {
//     let swaps = 0

//     for (let i = 0; i < array.length - 1; i++) {}
// }

let array = [8, 5, 2, 9, 5, 6, 3]

console.log(bubbleSort(array))