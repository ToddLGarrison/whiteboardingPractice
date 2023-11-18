// Given a string, return a new string where each character that was 
// lowercase is now uppercase, and each character that was uppercase is now lowercase

string = "TOMOrrow yOU WIll EAT LUNCH"

const reverseCase = (s) => {
    let changedCase = ''

    for (let i = 0; i < s.length; i++) {
        if (s[i] === s[i].toUpperCase()) {
            changedCase += s[i].toLowerCase()
        } else {
            changedCase += s[i].toUpperCase()
        }
    }

    console.log(changedCase)
    return changedCase
}

reverseCase(string)