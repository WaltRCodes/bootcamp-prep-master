// YOUR CODE BELOW
function myMnemonic(string1,string2,string3,string4){
    let word = '';
    if (string1 != null){
        word += string1.charAt(0);
    } 
    if (string2 != null){
        word += string2.charAt(0);
    }
    if (string3 != null){
        word += string3.charAt(0);
    }
    if (string4 != null){
        word += string4.charAt(0);
    }
    return word;
}
