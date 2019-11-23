// YOUR CODE BELOW
function rotateArray(array,rotate){
    if (rotate<0){
        rotate+=array.length;
    }
    for(let i = 0; i<rotate;i++){
        let x = array.pop();
        array.unshift(x);
    }
    return array;
}