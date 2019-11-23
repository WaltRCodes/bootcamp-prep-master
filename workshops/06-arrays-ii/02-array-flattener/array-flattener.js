// YOUR CODE BELOW
function arrayFlattener(array){
    let newarray = [];
    for (let i = 0; i < array.length; i++) {
        if (Array.isArray(array[i])) {
            for (let x = 0; x < array[i].length; x++){
                newarray.push(array[i][x]);
            }
        } else {
            newarray.push(array[i]);
        }
    }
    return newarray;
}