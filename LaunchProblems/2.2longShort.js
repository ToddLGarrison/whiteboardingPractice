// Given 2 strings, a and b, return a string of the form short+long+short, 
// with the shorter string on the outside and the longer string on the inside. 
// The strings will not be the same length. 
// For example if "hi" and "hello" are given, it should return "hihellohi"

const string1 = 'hi'
const string2 = 'hello'

const shortLongshort = (string1, string2) => {
    let camelString = ''

    if(string1.length > string2.length) {
        camelString = string2 + string1 + string2
    } else {
        camelString = string1 + string2 + string1
    }

    console.log(camelString)
    return camelString
}

shortLongshort(string1, string2)