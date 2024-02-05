var lengthOfLastWord = (string) => {
    let splitString = string.trim().split(' ');
    let lastWordLength = splitString[splitString.length - 1].length;

    return lastWordLength
}

console.log(lengthOfLastWord("Hello World"))