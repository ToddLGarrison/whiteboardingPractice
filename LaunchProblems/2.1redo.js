// Given a string, return a new string where each character that was 
// lowercase is now uppercase, and each character that was uppercase is now lowercase

string = "TOMOrrow yOU WIll EAT LUNCH"

const changeCase = (string) => {
    let changedCase = ''

    for (let i = 0; i < string.length; i++) {
        if (string[i] === string[i].toLowerCase()) {
            changedCase += string[i].toUpperCase()
        } else {
            changedCase += string[i].toLowerCase()
        }
    }

    console.log(changedCase)
    return changedCase
}

changeCase(string)