// YOUR CODE BELOW
function deeperCopy(myArray){
    let copy = [[],[]];
    for(let i = 0; i < myArray.length; i++){
        if(Array.isArray(myArray[i])){
            for(let x = 0; x < myArray[i].length; x++){
                copy[i].push(myArray[i][x]);
            }
        } else {
            copy.push(myArray[i]);
        }
    }
    
    return copy;
}