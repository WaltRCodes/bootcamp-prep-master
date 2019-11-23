// YOUR CODE BELOW
function makeGrid(columns, rows){
    let gridarray = [];
    for (let i = 0; i < rows; i++){
        let buffer = []
        for(let x = 0; x < columns; x++){
            buffer.push(x+1);
        }
        gridarray.push(buffer);
    }
    return gridarray;
}