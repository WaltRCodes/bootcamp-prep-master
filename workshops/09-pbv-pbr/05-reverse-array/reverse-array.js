// YOUR CODE BELOW
function reverseArray(myArray){
    let buffer = [];
    for(let i = myArray.length-1; i >= 0; i--){
        buffer.push(myArray[i]);
    }
    while (myArray.length) {
        myArray.pop();
    }
    for (let i = 0; i < buffer.length; i ++){
        myArray.push(buffer[i]);
    }
    return myArray;
}