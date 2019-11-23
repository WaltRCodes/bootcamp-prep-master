// YOUR CODE BELOW
function removeColumns(array, columns){
    for (let i = 0; i < array.length; i++){
        for (let x = 0; x<columns;x++){
            array[i].pop();
        }

    }
    return array;
}