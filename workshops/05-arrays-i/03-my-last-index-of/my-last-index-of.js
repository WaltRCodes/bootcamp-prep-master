// YOUR CODE BELOW
function myLastIndexOf(array,searchValue,startIdx) {
    let index = -1;
    if (startIdx != null){
        for (let i = startIdx; i > -1; i--){
            if(array[i] === searchValue){
                index = i;
            }
        }
    } else {
        for (let i = 0; i < array.length; i++){
            if(array[i] === searchValue){
                index = i;
            }
        }
    }
    return index;
}