// YOUR CODE BELOW
function myJoin(array,seperator){
    let sentance = '';
    if (seperator==null){
        seperator=",";
    } 
    for (let i = 0; i < array.length; i++){
        if (array[i]==null){
            sentance+='';
        } else {
            sentance+=array[i];
        }
        
        if(i!=array.length-1){
            sentance+=seperator;
        }
    }
    return sentance;
}