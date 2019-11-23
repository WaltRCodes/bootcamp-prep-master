// YOUR CODE BELOW
function myReverse(array){
    let newarray = [];
    for (let i = array.length-1; i > -1; i--){
        newarray.push(array[i]);
    }
    return newarray;
}