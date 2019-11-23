// YOUR CODE BELOW
function evenAndOdd(array){
    oddarray = [];
    evenarray = [];
    for (let i = 0; i < array.length; i++){
        if (array[i] % 2 != 0) {
            oddarray.push(array[i]);
        } else {
            evenarray.push(array[i]);
        }
    }
    return [evenarray,oddarray];
}