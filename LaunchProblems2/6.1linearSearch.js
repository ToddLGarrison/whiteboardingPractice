//linearSearch input is an array you want to search and the target of the search

const linearSearch = (input, target) => {
    for (let i = 0; i < input.length; i++) {
        if (input[i] === target) {
            return true;
        }
    }

    return false;
};


console.log('test1:', linearSearch([1,2,3,4,5,6], 4))