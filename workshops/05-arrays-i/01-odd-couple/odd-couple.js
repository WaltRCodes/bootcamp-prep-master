// YOUR CODE BELOW
function oddCouple(entries) {
    let newEntries = [];
    let count=0;
    for (let i = 0; i < entries.length; i++){
        if (entries[i] % 2 != 0) {
            newEntries.push(entries[i])
            count++;
        }
        if (count==2){
            return newEntries;
        }
        
    }
    return newEntries;

}