//Given an array of unsorted integers, return a sorted array with the integers list from lowest to highest. No .sort


//SUDO Code
const sortIntegers = (array) => {
    let sortedList = []

    for(let i = 0; i < array.length; i++){
        if(array[a] > array[b]){
            sortedList.unshift(array[a])
            sortedList.push(array[b])
        } else {
            sortedList.push(array[a])
            sortedList.unshift(array[b])
        }
    }
    return sortedList
}

//solution


new_list = []

while data_list:
    minimum = data_list[0]
    for x in data_list: 
        if x < minimum:
            minimum = x
    new_list.append(minimum)
    data_list.remove(minimum)    

print (new_list)

// Given a string, return a new string where each character that was lowercase is now uppercase, 
// and each character that was uppercase is now lowercase

//SUDO

const changeCharacterCase = (string) => {
    let newCharacterString = ""

    let individualCharacters =  string.splice("")
    
    for (let i = 0; i < individualCharacters.length, i++){
        if individualCharacters[a] = ("a" || "b" || ..) {
            newCharacterString.push.toUpperCase(individualCharacters[a])
        } else if(individualCharacters[a] = ("A" || "B" || ..)) {
            newCharacterString.push.toLowerCase(individualCharacters[a])
        }
    }
    return newCharacterString
}

//SOLUTION
function swapCase(str) {
    let result = '';
    
        for (let i = 0; i < str.length; i++) {
        const char = str.charAt(i);
        const isLowerCase = char === char.toLowerCase();
    
        if (isLowerCase) {
            result += char.toUpperCase();
        } else {
            result += char.toLowerCase();
        }
        }
    
        return result;
    }  

// Given 2 strings, a and b, return a string of the form short+long+short, 
// with the shorter string on the outside and the longer string on the inside. 
// The strings will not be the same length. For example if "hi" and "hello" are given, 
// it should return "hihellohi"

//SUDO

stringA = hi
stringB = hello

const shortLongShort = (a, b) => {
    if(A.length > B.length){
        let short = a
        let long = b    
    } else {
        let short = b
        let long = a
    }
    return short + long + short
}

//SOLUTION

stringA = hi
stringB = hello

const shortLongShort = (a, b) => {
    if(A.length > B.length){
        return a+b+a
    } else {
        return b+a+b
    }
}