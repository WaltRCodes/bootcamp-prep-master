// YOUR CODE BELOW
function exponentiate(base,power){
    if(power === 0){
        return 1;
    }
    let result = base;
    for(let i = 1; i < power; i++){
        result *= base;
    }
    return result;



}