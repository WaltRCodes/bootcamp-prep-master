// YOUR CODE BELOW
function zooInventory(words){
    let newarray = [];
    for (let i = 0; i < words.length; i++) {
        let animal = words[i][0];
        let type = words[i][1][0];
        let age = words[i][1][1];
        newarray.push(`${animal} the ${type} is ${age}.`);
    }
    return newarray;
}