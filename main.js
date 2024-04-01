const pronouns = ['I', 'You', 'He', 'She', 'We', 'They']
const verbs = ['ran', 'walked', 'jogged', 'biked', 'swam', 'skated', 'drove', 'rode']
const prepPhrase = ['to the mall', "from my grandma's", 'back to school', 'from the bank', 'by the lake', 'past the store']

const randWord = listOfWords => {
    const randomNum = Math.floor(Math.random()* listOfWords.length);
    return listOfWords[randomNum];
}

const stitchWords = () => {
    return `${randWord(pronouns)} ${randWord(verbs)} ${randWord(prepPhrase)}`
}

//console.log(randWord(pronouns));
//console.log(randWord(verbs));
//console.log(randWord(prepPhrase));

console.log(stitchWords())