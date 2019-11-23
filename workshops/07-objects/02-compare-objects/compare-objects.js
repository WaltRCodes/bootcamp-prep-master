// YOUR CODE BELOW
function compareObjects(ob1,ob2){
    for (value in ob1){
        if(ob1[value] !== ob2[value]){
            return false;
        }
    }
    for (value in ob2){
        if(ob1[value] !== ob2[value]){
            return false;
        }
    }
    return true;
}