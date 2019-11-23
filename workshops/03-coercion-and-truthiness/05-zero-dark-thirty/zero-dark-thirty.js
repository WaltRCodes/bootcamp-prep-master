// YOUR CODE BELOW
function zeroDarkThirty (num){
    if(num == 0){
        return NaN;
    }
    num = String(num);
    let result = '';
    for (let i = 0; i < num.length; i++) {
        char = num[i];
        if (char != '0') {
             result += char;
        }
    }
  return Number(result);
}