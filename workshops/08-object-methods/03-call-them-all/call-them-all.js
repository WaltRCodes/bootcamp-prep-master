// YOUR CODE BELOW
function callThemAll(obj,arg){
    let array = [];
    for (let key in obj){
        let value = obj[key];
        if (typeof value === 'function'){
            functionResult = value(arg);
            array.push(functionResult);
        }
    }
    return array;
}