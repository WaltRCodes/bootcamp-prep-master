// YOUR CODE BELOW
function maxOfThree(num1,num2,num3){
    let max = num1;
    if(max < num2){
        max = num2;
    }
    if(max < num3){
        max = num3;
    }
    return max;
}