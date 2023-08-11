//Move the first letter of each word to the end of it, 
//then add "ay" to the end of the word. Leave punctuation marks untouched.

    //spilt on " "
    //for loop 
    //pop 
    //shift to the end of the word
    //add 'ay' to the end of the word
    //add to empty const

function pigIt(str){
    const splitWords = str.split(" ")
    const pigLatinPhrase = []


    for(const word of splitWords){
        const firstLetter = word[0]
        const restOfWord = word.slice(1)

        if (/[a-zA-Z]/.test(firstLetter)){
            const pigLatinWord = restOfWord + firstLetter + "ay"
            pigLatinPhrase.push(pigLatinWord)
        } else {
            pigLatinPhrase.push(word)
        }
    }
    return pigLatinPhrase.join(" ")
}