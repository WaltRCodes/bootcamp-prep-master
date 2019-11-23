// YOUR CODE BELOW
function frequencyAnalysis(string){
    let array = string.split("");
    let hashmap ={};
    let count = 0;
    for (let i = 0; i < array.length; i++){
        for (let x = 0; x < array.length; x++){
            if (array[i]===array[x]){
                count +=1;
            }
        }
        hashmap[array[i]]=count;
        count=0;
    }
    return hashmap;
}