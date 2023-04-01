/// named function the named function which has named at the  time of definition that is called named Function
function sum(a,b){
    return a+b       /// function declaration
}
console.log(sum(2,3))

// unnamed function   /// anonymus function
var sum=function(a,b){
    return a+b
}
console.log(sum(4,5))


// function expression and annonymous fumction

var sum= function(){
    console.log('hello')
}
sum()
