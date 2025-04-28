
let num1=parseFloat(prompt("Enter 1st Number"));
let num2=parseFloat(prompt("Enter 2nd Number"));
let operation=prompt("Choose Operation:+ - * /");
let result;
if (operation=='+'){
    result=num1+num2;
}
else if(operation=='-') {
    result=num1-num2;
}
else if(operation=='*') {
    result=num1*num2;
}  
else if(operation=='/') {
    result=num1/num2;
} 
else{
    console.log("Invalid Operation");
}   
console.log(`Result of ${operation} of ${num1} and ${num2} is  ${result}`);
