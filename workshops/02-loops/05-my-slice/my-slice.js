// YOUR CODE BELOW
function mySlice(originalString,startIdx,endIdx) {
    if (startIdx == null && endIdx == null){
        return originalString;
    }
    let newstring ='';
    if (endIdx == null){
        for(let i = startIdx; i < originalString.length; i++){
            newstring += originalString.charAt(i);
        }
    } else {
        for(let i = startIdx; i < endIdx; i++){
            newstring += originalString.charAt(i);
        }
    }
    return newstring;

}