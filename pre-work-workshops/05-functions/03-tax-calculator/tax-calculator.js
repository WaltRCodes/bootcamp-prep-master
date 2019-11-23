// YOUR CODE BELOW
 let tax = 1;
function taxCalculator(price,state){
    if (state == "NY") {
        tax = 1.04;
    } else  if (state == "NJ") {
        tax = 1.06625;
    }
    return price*tax;
}