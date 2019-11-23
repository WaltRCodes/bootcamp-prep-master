// YOUR CODE BELOW
function mySlice (array,startIndex,EndIndex){
    if (startIndex == null){
        startIndex=0;
    } else if(startIndex < 0) {
        startIndex += array.length;
    }
    if (EndIndex == null){
        EndIndex=array.length;
    }if(EndIndex < 0) {
        EndIndex += array.length;
    }
    let newarray = []
    for (let i = startIndex; i < EndIndex; i++){
        newarray.push(array[i]);
    }
    return newarray;
}