// YOUR CODE BELOW
function myIndexOf(source,searchValue,startIdx){
    if (source.includes(searchValue)){
        if (startIdx == null) {
            for(let i = 0; i < source.length; i++){
                check = source.slice(i,i + searchValue.length);
                if (check == searchValue){
                    return i;
                }
            }
        } else {
            for(let i = startIdx; i < source.length; i++){
                check = source.slice(i,i + searchValue.length);
                if (check == searchValue){
                    return i;
                }
            }
        }
    } 
    return -1;
}