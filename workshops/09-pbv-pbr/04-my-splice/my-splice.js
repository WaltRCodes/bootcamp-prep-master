// YOUR CODE BELOW
function mySplice(array,position,numofSub,item) {
    let newArray = [];
    let remainderArray = []
    if (numofSub == 0) {
        for (let i = 0; i <array.length; i ++){
            if(i==position && item !== undefined){
                remainderArray.push(item);
                remainderArray.push(array[i]);
            } else {
                remainderArray.push(array[i]);
            }
        }

    } else { 
        numofSub-=1;
        for (let i = 0; i <array.length; i ++){
            if(i>=position && i <=numofSub+position){
                if(i==position && item !== undefined){
                    remainderArray.push(item);
                } else {
                    newArray.push(array[i]);
                }
            } else {
                remainderArray.push(array[i]);
            }
        }
        
    }
    while (array.length) {
        array.pop();
    }
    for (let i = 0; i < remainderArray.length; i ++){
        array.push(remainderArray[i]);
    }
    return newArray;
}