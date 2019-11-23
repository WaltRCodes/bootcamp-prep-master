// YOUR CODE BELOW
function dogBreeder(caller, representative){
    if (typeof caller === 'number') {
        representative = caller;
        caller = null;
    }
    if (caller==null){
        caller = 'Steve';
    }
    if (representative == null){
        representative = 0;
    }
    let dog = {name: caller , age: representative};
    return dog;
}