// YOUR CODE BELOW
function crazyCaps(thisString){
    newString ='';
    for(let i = 0; i < thisString.length; i++){
        if (i % 2 != 0){
            holder = thisString.charAt(i);
            newString += holder.toUpperCase();
        } else {
            newString += thisString.charAt(i);
        }
    }
    return newString;
}
