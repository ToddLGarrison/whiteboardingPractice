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


// You live in the city of Cartesia where all roads are laid out in a perfect grid. 
// You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. 
// The city provides its citizens with a Walk Generating App on their phones -- 
// everytime you press the button it sends you an array of 
// one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). 
// You always walk only a single block for each letter (direction) and you know it takes you one minute to 
// traverse one city block, so create a function that will return true if the walk the app gives you 
// will take you exactly ten minutes (you don't want to be early or late!) and will, of course, 
// return you to your starting point. Return false otherwise.

// Note: you will always receive a valid array containing a random assortment of direction letters 
// ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).

const isValidWalk =(walk) => {
    if(walk.length !== 10){
        return false
    }
    
    let x = 0
    let y = 0
        
    for (let direction of walk) {
        switch(direction) {
            case 'n':
            y += 1;
            break;
            case 's':
            y -= 1;
            break;
            case 'e':
            x += 1;
            break;
            case 'w':
            x -= 1;
            break;
            default:
            return false
        }
    }
        return x === 0 && y === 0
}