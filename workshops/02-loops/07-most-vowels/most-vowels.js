// YOUR CODE BELOW
function mostVowels(word){
 let array = word.split(" ");
 topWord='';
 topCount=0;
 for(let i = 0; i < array.length; i++){
     let count =0;
    for(let x = 0; x < array[i].length; x++){
        if(array[i].charAt(x) == 'a' || array[i].charAt(x) == 'e'|| array[i].charAt(x) == 'o' || array[i].charAt(x) == 'u' || array[i].charAt(x) == 'i'){
            count+=1;
        }
        if (count > topCount){
            topCount = count;
            topWord = array[i];
        }
    }
 }
 return topWord.replace(/[^a-zA-Z ]/g, "");
}