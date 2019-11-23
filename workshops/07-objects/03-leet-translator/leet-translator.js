let letters = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ];
let leetChars = ['@', '8', '(', '|)', '3', 'ph', 'g', '#','l', '_|', '|<', '1', "|'|'|", '/\/', '0', '|D', '(,)', '|2', '5', '+', '|_|', '|/', "|/|/'",'><', 'j', '2'];

// YOUR CODE BELOW
function leetTranslator(word) {
    let leetDict = {};

    for (let i = 0; i < letters.length; i++) {
        leetDict[letters[i]] = leetChars[i];
    }

    let translation = "";
    for (let i = 0; i < word.length; i++) {
        translation += leetDict[word[i].toLowerCase()];
    }

    return translation;
}