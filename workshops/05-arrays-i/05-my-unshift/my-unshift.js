// YOUR CODE BELOW
function myUnshift(array,newEntry) {
    let newarray = [];
    newarray[0] = newEntry;
    for (let i = 0; i < array.length; i++) {
        newarray[i+1] = array[i]
    }
    return newarray;
}