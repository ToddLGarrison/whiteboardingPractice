// Given a string, return a new string where each character that was 
// lowercase is now uppercase, and each character that was uppercase is now lowercase

string = "TOMOrrow yOU WIll EAT LUNCH"

const changeCase = (string) => {
    let changedCharacters = ""
    let splitCharacters = string.split('')

    for (let i = 0; i < splitCharacters.length; i++) {
        if (splitCharacters[i] === splitCharacters[i].toUpperCase()) {
            splitCharacters[i] = splitCharacters[i].toLowerCase()
        } else {
            splitCharacters[i] = splitCharacters[i].toUpperCase()
        }
    }

    changedCharacters = splitCharacters.join('')

    return changedCharacters
}

console.log(changeCase(string))