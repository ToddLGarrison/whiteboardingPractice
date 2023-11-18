// Given a string, return a new string where each character that was 
// lowercase is now uppercase, and each character that was uppercase is now lowercase

string = "TOMOrrow yOU WIll EAT LUNCH"

const changeCase = (string) => {
    let reverseCase = ''

    for (let i = 0; i < string.length; i++) {
        if (string[i] === string[i].toLowerCase()) {
            reverseCase += string[i].toUpperCase()
        } else {
            reverseCase += string[i].toLowerCase()
        }
    }

    return reverseCase
}

changeCase(string)