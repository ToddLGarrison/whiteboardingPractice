// Given 2 strings, a and b, return a string of the form short+long+short, 
// with the shorter string on the outside and the longer string on the inside. 
// The strings will not be the same length. 
// For example if "hi" and "hello" are given, it should return "hihellohi"

const string1 = 'hi'
const string2 = 'hello'

const shortLongshort = (a, b) => {

    if(a.length > b.length) {
        return (b+a+b)
    } else {
        return (a+b+a)
    } 
}

console.log('Test: ', shortLongshort(string1, string2))