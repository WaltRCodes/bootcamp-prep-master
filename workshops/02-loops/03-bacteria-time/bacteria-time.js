// YOUR CODE BELOW
function bacteriaTime(currentNum,targetNum){
    if(targetNum < currentNum) {
        return 'targetNum must be larger than currentNum'
    } else {
    let result = 0;
    for(let i = currentNum; i < targetNum; i*=2){
        result +=20;
    }
    return result;
    }
}