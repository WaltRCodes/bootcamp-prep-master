// YOUR CODE BELOW
function everyWhichWay(num1,num2,num3){
    if (num1 + num2 ==num3) {
        return 'sum';
    }
    if (num1 - num2 ==num3) {
        return 'difference';
    }
    if (num1 * num2 ==num3) {
        return 'product';
    }
    if (num1 / num2 ==num3) {
        return 'fraction';
    }
    return null;
}