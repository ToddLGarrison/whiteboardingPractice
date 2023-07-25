//Write a function that will output the indices of the two consecutive elements that have the highest max sum 
//in an input array of integers (e.g., maxPair([0, 5, 5, 2]) will return (1, 2)). 
//In the case of a tie, the method should return the leftmost pair (e.g., maxPair([0, 4, 3, 1, 2, 3, 4, 0]) will return (1, 2)).

function maxPair(arr) {
    let maxSum = Number.NEGATIVE_INFINITY;
    let maxIndices = [];
    
    for (let i = 0; i < arr.length - 1; i++) {
        const sum = arr[i] + arr[i + 1];
        if (sum > maxSum) {
            maxSum = sum;
            maxIndices = [i, i + 1];
        }
    }

    return maxIndices;
}


// Your task is to write a function maskify, which changes all but the last four characters into '#'.

// Examples
// maskify("4556364607935616") == "############5616"
// maskify(     "64607935616") ==      "#######5616"
// maskify(               "1") ==                "1"
// maskify(                "") ==                 ""

// // "What was the name of your first pet?"
// maskify("Skippy")                                   == "##ippy"
// maskify("Nananananananananananananananana Batman!") == "####################################man!"


const maskify = (cc) => {
    if (cc.length > 4){
        const lastFourNums = cc.slice(-4);
        const maskedNumber = '#'.repeat(cc.length - 4) + lastFourNums
        return maskedNumber
    } else {
        return cc
    }
}