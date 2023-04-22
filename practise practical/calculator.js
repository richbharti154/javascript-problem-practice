let num1=3
let num2=5
let operator='+'
let operator1='-'
 let operator3='*'
 
let result=0
if(  operator=='+'){
    result=(num1+num2)
}
else if( operator1=='-'){
    result=(num1-num2)
}
else if(operator3=='*'){
    result=(num1*num2)
}
else{
    result=(num1/num2)
}
console.log(result)