// YOUR CODE BELOW
function lastCharacter(string1,string2){
    if (string1.charAt(string1.length-1) == string2.charAt(string2.length-1)) {
        return true;
    } else {
        return false;
    }
}