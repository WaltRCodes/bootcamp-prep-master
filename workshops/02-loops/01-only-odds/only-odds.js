// YOUR CODE BELOW
function onlyOdds(num) {
    let sum = 0;
        for(let i = num; i >= 1; i--){
            if (i % 2 != 0){
                sum += i;
            }
        }
    return sum;
}